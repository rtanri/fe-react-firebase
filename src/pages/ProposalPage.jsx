import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Skeleton } from "antd";
import "firebase/firestore";
import { getFirebaseInstance } from "../services/firebase/firebase";
import { AuthContext } from "../components/AuthProvider";


function ProposalPage(props) {
  const firebase = getFirebaseInstance();
  const firestore = firebase.firestore();
  const auth = useContext(AuthContext);

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
      </div>
    </div>
  )
}

export default ProposalPage;
