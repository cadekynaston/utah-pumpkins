import styled from '@emotion/styled';
import { theme } from './theme'

export const Section = styled.section`
  width: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.dark };
`;
