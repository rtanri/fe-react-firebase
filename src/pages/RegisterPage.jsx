import { Row, Col, Input, Button, notification } from "antd";
import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

function RegisterPage(props) {
  // useContext hook will accept AuthProvider, and extract all values inside AuthContext to be used
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); //to prevent double click on submit btn

  const handleSubmit = async e => {
    setIsRegistering(true);

    let registerSuccess = await auth.register(email, password);

    if (registerSuccess) {
      notification.open({
        message: "Registration Success",
        placement: "bottomRight",
      });
    } else {
      notification.open({
        message: "Registration Failed",
        placement: "bottomRight",
      });
    }
    setIsRegistering(false);
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

            <Button
              type={"primary"}
              onClick={handleSubmit}
              loading={isRegistering} // submit btn clicked,
              disabled={isRegistering} // it will be loading + disabled
            >
              Register
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterPage;
