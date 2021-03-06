import React, {useState} from 'react';
import {Menu} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function NavBar () {
    const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    console.log(name);
  };

     return (
      <Menu secondary>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        <Menu.Menu position="right">
          
          <Menu.Item
            name="Signup"
            active={activeItem === "signup"}
            onClick={handleItemClick}
            as={Link} to="/signup"
          />
          <Menu.Item
            name="Login"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link} to="/login"
          />
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
}