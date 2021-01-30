import React from 'react';
import styled from 'styled-components';

const Quizlogo = styled.img`
  width: 225px;
  height: 110px;
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default function QuizLogo() {
  return (
    <Quizlogo src="https://files.slack.com/files-pri/TPZ0YSCNM-F01LD0D2G3V/asset_1.png" alt="Quiz Logo" />

  );
}
