import { useContext, useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AuthContext } from "../components/AuthProvider";

function LoginPage(props) {
  const auth = useContext(AuthContext);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const onFinish = async values => {
    setIsLoggingIn(true);
    const loginSuccess = await auth.login(values.email, values.password);

    if (loginSuccess) {
      notification.open({
        message: "Login Success",
        placement: "bottomRight",
      });
    } else {
      notification.open({
        message: "Login Failed",
        placement: "bottomRight",
      });
    }
    setIsLoggingIn(false);
  };

  // customer validator
  const emailValidator = (rule, value, callback) => {
    try {
      throw new Error("Please provide a valid email");
    } catch (err) {
      callback(err);
    }
  };

  return (
    <div className="page-login container">
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoggingIn}
              disabled={isLoggingIn}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
