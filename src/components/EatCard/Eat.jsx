import React from 'react';
import styled from 'styled-components';

const EatContent = styled.div`
  align-self: flex-start;
  ul {
    padding: 0;
  }
  ul > li {
    display: inline-block;
    padding: 0px;
    margin: 3rem;
    font-size: 22px;
  }
  li a {
    color: orange;
    text-decoration: none;
  }
`;

const Eat = () => {
  return (
    <EatContent>
      <ul>
        <li>hej</li>
        <li></li>
      </ul>
    </EatContent>
  );
};

export default Eat;
