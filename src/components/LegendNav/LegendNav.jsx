import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ForkAndKnife from '/resources/sprites/fork_and_knife.png';
import BeerMug from '/resources/sprites/beer_mug.png';
import Moon from '/resources/sprites/moon.png';
import Computer from '/resources/sprites/computer_white.png';
import Legstretch from '/resources/sprites/legstretch.png';
import StackOverflow from '/resources/sprites/stack_overflow.png';
import Stats from '/resources/sprites/stats.png';
import Github from '/resources/sprites/github.png';

const EatIcon = styled.img.attrs({
  src: `${ForkAndKnife}`,
})``;

const SleepIcon = styled.img.attrs({
  src: `${Moon}`,
})``;

const ComputerIcon = styled.img.attrs({
  src: `${Computer}`,
})``;

const BeerIcon = styled.img.attrs({
  src: `${BeerMug}`,
})``;

const StretchIcon = styled.img.attrs({
  src: `${Legstretch}`,
})``;

const StackOverflowIcon = styled.img.attrs({
  src: `${StackOverflow}`,
})``;

const StatsIcon = styled.img.attrs({
  src: `${Stats}`,
})``;

const GithubIcon = styled.img.attrs({
  src: `${Github}`,
})``;

const LegendContent = styled.div`
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
          <Link to="/ata">
            <EatIcon />
          </Link>
        </li>
        <li>
          <Link to="/sova">
            <SleepIcon />
          </Link>
        </li>
        <li>
          <Link to="/programmera">
            <ComputerIcon />
          </Link>
        </li>
        <li>
          <Link to="/aw">
            <BeerIcon />
          </Link>
        </li>
        <li>
          <Link to="/benstrackare">
            <StretchIcon />
          </Link>
        </li>
        <li>
          <Link to="/stackoverflow">
            <StackOverflowIcon />
          </Link>
        </li>
        <li>
          <Link to="/placeholder">
            <GithubIcon />
          </Link>
        </li>
        <li>
          <Link to="/stats">
            <StatsIcon />
          </Link>
        </li>
      </ul>
    </LegendContent>
  );
};

export default Legend;
