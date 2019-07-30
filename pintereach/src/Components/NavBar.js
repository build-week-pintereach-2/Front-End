import React from 'react';
import {Menu } from "semantic-ui-react";

export default function NavBar () {
  let state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log(name);
  };

     return (
      <Menu secondary>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        <Menu.Menu position="right">
          
          <Menu.Item
            name="Signup"
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
}