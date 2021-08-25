import { useContext } from "react";
import { Menu, Button } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { AuthContext } from "./AuthProvider";

function SiteHeader() {
  const auth = useContext(AuthContext);

  return (
    <header className="site0header">
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
      {auth.token ? (
            <Menu.Item key="logout">
          <Button type="danger" onClick={auth.logout}>
            Logout
          </Button>
        </Menu.Item>
      ):
      <>
            <Menu.Item key="login">
            <Button type="primary" onClick={auth.login}>
                  Login
            </Button>
            </Menu.Item>

            <Menu.Item key="register">
            <Button type="secondary" onClick={auth.register}>
                  Register
            </Button>
            </Menu.Item>
      </>
      }


      </Menu>
    </header>
  );
}

export default SiteHeader;
