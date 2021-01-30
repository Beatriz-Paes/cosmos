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
    <Quizlogo src="https://cdn.discordapp.com/attachments/805150073192316978/805152810923589642/Asset_1.png"/>
  );
}
