# Use compound components in React

In React, we can group related components into a compound component.

> When multiple components work together to have a shared state and handle logic together, they are called compound components.
>
> \- [Aayush Jaiswal](https://blog.bitsrc.io/understanding-compound-components-in-react-23c4b84535b5)

## First, create the root component

```js
const Menu = props => /* render component */;
```

## Second, create sub-components

```js
const Item = props => /* render component */;
const SubMenu = props => /* render component */;
const Separator = props => /* render component */;
```

## Third, add the sub-components to the root component

```js
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.Separator = Separator;
```

## Fourth, use the compound component

```js
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
```

## Finally, build out your components even further

Now's the time to add styles, context, and whatever else you need!

[See example on CodeSandbox](https://codesandbox.io/s/react-compound-components-hr6n1)
