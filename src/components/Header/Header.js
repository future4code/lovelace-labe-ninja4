import { HeaderContainer } from "./styled";

const Header = ({ changePage }) => {
  return (
    <HeaderContainer>
      <h2>LabeNinjas</h2>
      <div>
        <button onClick={() => changePage("home")}>Home</button>
        <button onClick={() => changePage("cart")}>Carrinho</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
