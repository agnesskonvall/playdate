import React from 'react';
import styled from 'styled-components';

const LegendContent = styled.div`
  @font-face {
    font-family: 'VT323';
    src: url(/resources/fonts/VT323.woff2);
  }
  align-self: center;
  font-family: 'VT323';
  font-size: 24px;
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
  .instructionText {
    display: flex;
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

const LegendCard = (props) => {
  return (
    <LegendContent>
      <div className="instructionText">
        <p>{props.instructions}</p>
      </div>
    </LegendContent>
  );
};

export default LegendCard;
