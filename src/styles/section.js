import styled from '@emotion/styled';
import { theme, media } from './'

export const Section = styled.section`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.dark };

  ${media.medium} {
    padding-left: .8rem;
    padding-right: .8rem;
  }
`;
