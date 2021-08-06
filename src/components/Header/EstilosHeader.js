import styled from "styled-components";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  background: #bbb;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  img {
    width: 88px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  p {
    cursor: pointer;
    margin-right: 16px;
    text-decoration: none;
    padding: 6px;
    color: #fff;
    font-size: 1.2rem;
    :hover {
      color: #000;
    }
  }
`;
