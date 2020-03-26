import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(186, 186, 189);
  height: 70px;
`;
export const HeaderContainer = styled.div`
  height: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
`;
