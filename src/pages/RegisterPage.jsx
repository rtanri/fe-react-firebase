import { Row, Col, Input, Button } from "antd";
import { useState } from "react";

function RegisterPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    console.log(e);
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

            <Button type={"primary"}>Register</Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterPage;
