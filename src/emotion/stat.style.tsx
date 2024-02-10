import styled from "@emotion/styled";

export const StatWrapper = styled.div`
  max-width: 1300px;
  margin: 3rem auto;
`;

export const StatBox = styled.div`
  background-color: #05525f;
  padding: 2rem;
  color: white;
  border: none;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const StatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

export const StatItem = styled.p`
  border: 1px white solid;
  padding: 1.4rem 2rem;
  border-radius: 0.4rem;
  font-size: 18px;
`;

export const StatHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 2rem;
`;
