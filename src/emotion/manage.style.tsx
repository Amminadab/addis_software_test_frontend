import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  ${() => css`
    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Img = styled.img`
  margin-left: 1rem;
`;
