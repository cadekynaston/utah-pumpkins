import styled from '@emotion/styled';
import { theme, media } from './';

export const Constraint = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidth};

  ${media.medium} {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  ${media.small} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
