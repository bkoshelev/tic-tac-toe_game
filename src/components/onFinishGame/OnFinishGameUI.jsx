import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'linaria';
import { styled } from 'linaria/react';

import {
  GithubIcon,
  FacebookIcon,
  TelegramIcon,
  GmailIcon,
  StorybookIcon,
} from '../svgComponents';

const mailToLink =
  'mailto:brskoshelev@gmail.com?subject=Приглашение на собеседование';

const pageInStyle = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 1s;
`;

const textStyle = css`
  font-family: Montserrat, sans-serif;
  color: white;
  @media only screen and (orientation: portrait) {
    font-size: 3vw;
  }
  @media only screen and (orientation: landscape) {
    font-size: 4vh;
  }

  opacity: 0;

  @keyframes textfadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: textfadeIn 1s;
  animation-fill-mode: forwards;
`;

const text2style = css`
  animation-delay: 2s;
`;

const text3style = css`
  animation-delay: 4s;
`;

const text4style = css`
  animation-delay: 6s;
`;

const text5style = css`
  animation-delay: 8s;
`;

const screenStyle = css`
  text-align: center;
`;

const Header = styled.h2`
  margin: 0;
`;

const svgStyle = css`
  &:hover,
  &:focus {
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #4444dd);
  }
  & path:first-child {
    fill: transparent;
  }
`;

const listItemStyle = css`
  display: inline-block;
  margin-right: 5vw;
`;

const storybookIconStyle = css`
  @media only screen and (orientation: portrait) {
    height: 10vw;
    width: 60vw;
  }
  @media only screen and (orientation: landscape) {
    height: 10vh;
    width: 60vh;
  }

  & > path:first-of-type {
    fill: white;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #4444dd);
  }
`;
const OnFinishGameUI = ({ text }) => {
  return (
    <main className={cx(screenStyle, pageInStyle)}>
      <section className={cx(textStyle)}>
        <Header>{text}</Header>
      </section>
      <section className={cx(textStyle, text2style)}>
        <Header>Данная игра - отражение моих навыков</Header>
      </section>

      <section className={cx(textStyle, text3style)}>
        <Header>Если вы хотите увидеть код игры</Header>
        <article>
          <a href="https://github.com/grom194/tic-tac-toe_game">
            <GithubIcon className={svgStyle}></GithubIcon>
          </a>
        </article>
      </section>

      <section className={cx(textStyle, text4style)}>
        <Header>Если вы хотите увидеть документацию к игре</Header>
        <article>
          <a href="http://storybook.js.org">
            <StorybookIcon
              className={storybookIconStyle}
              viewBox={'250 0 50 100'}
              preserveAspectRatio={'XMidYMid slice'}></StorybookIcon>
          </a>
        </article>
      </section>
      <section className={cx(textStyle, text5style)}>
        <Header>
          Если вы хотите связаться со мной и пригласить на собеседование
        </Header>
        <article>
          <ul style={{ display: 'inline' }}>
            <li className={listItemStyle}>
              <a href="https://www.facebook.com/grom194">
                <FacebookIcon className={svgStyle}></FacebookIcon>
              </a>
            </li>
            <li className={listItemStyle}>
              <a href="https://t.me/bkoshelev">
                <TelegramIcon className={svgStyle}></TelegramIcon>
              </a>
            </li>
            <li className={listItemStyle}>
              <a href={mailToLink}>
                <GmailIcon className={svgStyle}></GmailIcon>
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

OnFinishGameUI.propTypes = {
  text: PropTypes.string,
};
export default OnFinishGameUI;
