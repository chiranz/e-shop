import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  height: 80px;
  img {
    width: 30%;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
`;

export const ItemName = styled.span`
  font-size: 16px;
`;
