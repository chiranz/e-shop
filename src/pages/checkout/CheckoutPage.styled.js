import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  width: 23%;
  text-transform: uppercase;
  &:last-child {
    width: auto;
  }
`;

export const CheckoutTotal = styled.div`
  text-transform: uppercase;
  font-size: 36px;
  margin-top: 30px;
  margin-left: auto;
`;

export const TestWarningContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: red;
  font-size: 1.5rem;
`;
