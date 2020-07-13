import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;
export const RemoveButton = styled.div`
  width: auto;
  margin: auto;
  cursor: pointer;
`;
