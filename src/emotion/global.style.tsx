import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 3rem auto;
`;

export const Section = styled.div`
  margin: 0 4rem;
  position: relative;
  ${() => css`
    @media (max-width: 960px) {
      margin: 0 2rem;
    }
    @media (max-width: 540px) {
      margin: 0 1rem;
    }
  `}
`;
