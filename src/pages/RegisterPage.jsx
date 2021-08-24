import { Row, Col, Input, Button } from "antd";
import { useState } from "react";
import "firebase/auth";
import { getFirebaseInstance } from "../services/firebase/firebase";

function RegisterPage(props) {
  const firebase = getFirebaseInstance();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        console.log(resp);
        // var user = resp.user;
      })
      .catch(err => {
        console.log(err);
        // var errorCode = err.code;
        // var errorMessage = err.message;
      });
  };

  const handleInputChange = e => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="page-login container">
      <h1>Registration</h1>
      <Row>
        <Col span={8} offset={7}>
          <form>
            <div>
              <label htmlFor={"email"}>Email: </label>
              <Input
                placeholder="Basic usage"
                id="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor={"password"}>Password: </label>
              <Input
                placeholder="Password"
                id="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <Button type={"primary"} onClick={handleSubmit}>
              Register
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterPage;
