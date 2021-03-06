import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
    border-radius: 50%;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.linkedin.com/in/beatriz-paes/">
        <img src="https://ca.slack-edge.com/TPZ0YSCNM-UQS63RVR7-2f9813afebea-512" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a Imersão React da Alura.
        {' '}
        Por
        <a href="https://www.linkedin.com/in/beatriz-paes/">
          <span> Beatriz Paes.</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
