import React from 'react';
// import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          {db.title}
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>O quanto você conhece sobre o Universo</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                nome="NomeDoUsuario"
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar como ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Envie sua pergunta para o banco de questões, basta preencher os campos abaixo:</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Cadê os campos</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner />
    </QuizBackground>

  );
}
