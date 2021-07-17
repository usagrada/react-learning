import styled from "@emotion/styled";

const CustomHeader = styled.header`
  width: 100%;
  height: 100px;
  padding: 10px 40px;
  background-color: aliceblue;
  color: ${props => props.theme.colors.primary.main};
`;

const Title = styled.h1`
  color: darkcyan;
`;

const Header = () => {
  return (
    <CustomHeader>
      <nav>
        <Title>My Learning Site</Title>
      </nav>
	  text
    </CustomHeader>
  );
};

export default Header;
