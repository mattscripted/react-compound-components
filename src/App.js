import Menu from "./components/Menu";

const App = () => (
  <Menu>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Separator />
    <Menu.SubMenu title="Account Settings">
      <Menu.Item>Change Email</Menu.Item>
      <Menu.Item>Change Password</Menu.Item>
    </Menu.SubMenu>
    <Menu.Separator />
    <Menu.Item>Log out</Menu.Item>
  </Menu>
);

export default App;
