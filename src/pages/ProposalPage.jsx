import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Skeleton, Button } from "antd";
import "firebase/firestore";
import { getFirebaseInstance } from "../services/firebase/firebase";
import { AuthContext } from "../components/AuthProvider";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

function ProposalPage(props) {
  const firebase = getFirebaseInstance();
  const firestore = firebase.firestore();
  const auth = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  // set isLoading to true bcos when we want to load this page we need to have some time to load data
  const [proposalDoc, setProposalDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetch proposal where UserID is CurrentUser-ID
  useEffect(() => {
    setIsLoading(true);
    firestore
      .collection("proposals")
      .where("user_id", "==", auth.authUserID)
      .get() // get is the promise to give 'doc' data
      .then(docResp => {
        if (!docResp.empty) {
          setProposalDoc(docResp.docs[0].data());
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [firestore, auth.authUserID]);

  // handle submit for stripe
  const handlePayment = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs frmo cardElement
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  }


  if (isLoading) {
    return (<Skeleton active={ true } /> )
  }

  if (!proposalDoc) {
    return (
      <Redirect to='/submit-proposal' />
    )
  }

// if user has register their proposal 1x, then can show this
  return (
    <div className="page-proposal container">
      <div style={{width:'100%', maxWidth:'500px', margin:'30px auto 0 auto'}}>
        <h1>My Proposal</h1>
        <p>Gallery Name : { proposalDoc.gallery_name } </p>
        <p>Gallery Address : { proposalDoc.gallery_address } </p>
        <p>Gallery Postal Code : {proposalDoc.gallery_postal_code} </p>
        <ul>
          {proposalDoc.artists.map(artist => {
            return (
              <li>{artist}</li>
            )
          })}
        </ul>
        <div>
          <form>
            <CardElement />
            <Button type="primary" disabled={!stripe} onClick={handlePayment}>
              Pay
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProposalPage;
