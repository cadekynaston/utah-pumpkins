import React from 'react'
import { Global, css } from "@emotion/core";
import emotionNormalize from 'emotion-normalize';

import { theme, media } from '../styles'

export const GlobalStyles = () =>
  <Global
    styles={css`
      ${emotionNormalize}

      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: ${theme.fonts.lacquer};
      }

      h1 {
        font-size: 70px;
        line-height: 72px;

        margin-bottom: 30px;
        text-align: left;
        font-weight: 600;
        font-family: ${theme.fonts.lacquer};
        color: ${theme.colors.purple};


        ${media.medium} {
          font-size: 54px;
          line-height: 56px;
        }

        ${media.small} {
          font-size: 40px;
          line-height: 42px;
        }
      }

      h2 {
        font-size: 52px;
        line-height: 54px;
        margin-bottom: 15px;
        text-align: left;
        font-weight: 600;


        ${media.medium} {
          font-size: 42px;
          line-height: 44px;
          text-align: left;
        }

        ${media.small} {
          font-size: 32px;
          line-height: 34px;
        }

      }

      h3 {
        font-size: 36px;
        line-height: 38px;
        margin-bottom: 15px;
        font-weight: 400;

        ${media.medium} {
          font-size: 32px;
          line-height: 34px;
        }

        ${media.small} {
          font-size: 26px;
          line-height: 28px;
        }

        &.heavy {
          font-weight: 700;
        }

      }

      h4 {
        font-size: 24px;
        line-height: 28px;

        font-weight: 400;

        &.heavy {
          font-weight: 700;
        }
      }

      h5 {
        font-size: 18px;
        line-height: 24px;

        font-weight: 300;

        &.light {
          font-weight: 400;
        }
      }

      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
      }

      * {
        box-sizing: border-box;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      p {
        font-size: 16px;
        line-height: 24px;

        &.legal {
          font-size: 10px;
          line-height: 12px;
          /* color: ${theme.colors.legalGray}; */
        }
      }

      a {
        text-decoration: none;
      }

      .text-center { text-align: center; }
      .margin-bottom-45 { margin-bottom: 45px; }
      .margin-bottom-25 { margin-bottom: 25px; }

      ul {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
      }

      .text-center {
        text-align: center;
      }

      .no-margin-bottom {
        margin-bottom: 0;
      }

      .heavy {
        font-weight: 700;
      }
    `}
  />
