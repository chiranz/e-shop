import styled from "styled-components";
import { CustomButtonContainer } from "../CustomButton/CustomButton.styled";

export const AddButton = styled(CustomButtonContainer)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    button {
      opacity: 0.85;
      display: block;
    }
    .image {
      opacity: 0.8;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const CollectionFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const CollectionFooterPrice = styled.span`
  width: 10%;
`;
