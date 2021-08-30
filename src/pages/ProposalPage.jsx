import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { Button, Form, Input } from "antd";
import 'firebase/firestore'
import { getFirebaseInstance } from "../services/firebase/firebase";

function ProposalPage(props) {

const firebase = getFirebaseInstance()
const firestore = firebase.firestore()

// set isLoading to true bcos when we want to load this page we need to have some time to load data
const [proposalDoc, setProposalDoc] = useState(null);
const [isLoading, setIsLoading] = useState(true);

// useEffect (()=> {
//       firestore.collection('proposal').where()
// })

  return (
            <div className="page-proposal container">
            { isLoading && proposalDoc ? (
                  <div style={{width:'100px', maxWidth:'500px', margin:'30px auto 0 auto'}}>
                        Proposal page
                  </div>                
            ):(
                  <Redirect to='/submit-proposal' />
            )}

            </div>
      ) 
}

export default ProposalPage;
