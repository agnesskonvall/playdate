import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Eat from '../EatCard/Eat';

const LegendContent = styled.div`
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
  }
  ul > li {
    display: inline-block;
    padding: 0px;
    margin: 1rem;
    font-size: 22px;
  }
  li a {
    color: black;
    text-decoration: none;
  }
`;

const Legend = () => {
  return (
    <LegendContent>
      <ul>
        <li>
          <Link to="/ata">Äta</Link>
        </li>
        <li>
          <Link to="/sova">Sova</Link>
        </li>
        <li>
          <Link to="/programmera">Programmera</Link>
        </li>
        <li>
          <Link to="/aw">AW</Link>
        </li>
        <li>
          <Link to="/benstrackare">Bensträckare</Link>
        </li>
        <li>
          <Link to="/stackoverflow">StackOverflow</Link>
        </li>
        <li>
          <Link to="/placeholder">Placeholder</Link>
        </li>
        <li>
          <Link to="/stas">Stats</Link>
        </li>
      </ul>
    </LegendContent>
  );
};

export default Legend;
