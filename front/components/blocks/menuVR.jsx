import React from 'react';
import {
  Link,
} from 'react-router-dom';

import Menu from './menu';
import Icon from '../elements/icons';

export default () => (
  <Menu>
    <Icon icon="chat" color="#5e5e5e" size="25px" />
    <Icon icon="userPlus" color="#5e5e5e" size="25px" />
    <Icon className="addListBtn" icon="listPlus" color="#5e5e5e" size="25px" />
    <Link to="/list">
      <Icon icon="home" color="#5e5e5e" size="25px" />
    </Link>
    <Icon icon="out" color="#5e5e5e" size="25px" />
  </Menu>
);
