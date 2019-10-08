import React from "react"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

import { theme, media } from "../styles"

export const GlobalStyles = () => (
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

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      h1 {
        font-size: 62px;
        line-height: 64px;
        margin-bottom: 20px;
        text-align: left;
        font-weight: 600;
        font-family: ${theme.fonts.lacquer};
        color: ${theme.colors.light};

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
        font-family: ${theme.fonts.lacquer};
        color: ${theme.colors.gray};

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
        color: ${theme.colors.gray};

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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: ${theme.colors.dark};
        color: ${theme.colors.gray};
      }

      main {
        flex: 1 0 auto;
      }

      * {
        box-sizing: border-box;
      }

      p {
        font-size: 16px;
        line-height: 24px;
      }

      a {
        text-decoration: none;
        color: ${theme.colors.orange};

        &:visited {
          color: ${theme.colors.orange};
        }
      }

      button {
        background-color: ${theme.colors.purple};
        color: ${theme.colors.light};
        border: 0;
        font-size: 22px;
        padding: 14px 20px;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
        }
      }

      .text-center {
        text-align: center;
      }

      .margin-right-15 {
        margin-right: 15px;
      }

      .margin-top-15 {
        margin-top: 15px;
      }
      .margin-top-30 {
        margin-top: 30px;
      }
      .margin-top-45 {
        margin-top: 45px;
      }

      .margin-bottom-15 {
        margin-bottom: 15px;
      }
      .margin-bottom-30 {
        margin-bottom: 30px;
      }
      .margin-bottom-45 {
        margin-bottom: 45px;
      }

      ul {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
      }

      .pumpkin-select {
        width: 100%;
        max-width: 700px;

        .pumpkin-select__value-container {
          padding: 5px 10px;
          font-size: 20px;
        }

        .pumpkin-select-menu {
        }

        .pumpkin-select__option {
          color: ${theme.colors.dark};
          padding: 12px;
        }
      }

      .main-logo {
        enable-background:new 0 0 1224 288;
        height: 90px;

        .st0 {
          display: none;
        }
        .st1 {
          display: inline;
        }
        .st2 {
          display: inline;
          fill: #be1e2d;
        }
        .st3 {
          fill: #ffffff;
        }
        .st4 {
          fill: #09512c;
        }
        .st5 {
          fill: #f15a29;
        }
        .font1 {
          fill: ${theme.colors.light};
        }
      }
    `}
  />
)
