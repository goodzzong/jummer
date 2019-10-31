import React from 'react'
import styled from 'styled-components'

import Logo from '../elements/logo'

const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 15px;
  background-color: #f1c40f;

  > div {
    vertical-align: middle;
  }

  i:not(:last-child) {
    margin-right: 5px;
  }

  svg {
    display: inline-block;
    font-size: 20px;
    color: #5e5e5e;
  }
`;

export default ({ icons }) => {
  return(
    <Header>
      <Logo/>
      { icons }
    </Header>
  )
}