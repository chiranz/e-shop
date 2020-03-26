import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000000;
  background-color: #ffffff;
  top: 80px;
  right: 0;
  z-index: 5;
  button {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
