import styled from "styled-components";

export const AuthenticationPageContainer = styled.div`
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 2rem;
  margin: 30px auto;
  @media (max-width: 850px) {
    width: 80%;
  }
`;
