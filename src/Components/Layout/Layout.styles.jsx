import styled from 'styled-components';
import { themeVariables } from '../Layout/Variables/Variables';

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainSection = styled.main`
  padding: calc(${themeVariables.smSpacing} * 10);
  width: 100%;
  h1 {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    margin-top: 90px;
    padding: 5px;
    width: 100%;
  }
`;
