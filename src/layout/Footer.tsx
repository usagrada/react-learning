import styled from "@emotion/styled";

const CustomFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 10px 40px;
  background-color: aliceblue;
  color: ${props => props.theme.colors.primary.main};
`;

const Footer = () => {
  return (
    <CustomFooter>
	  &copy; usagrada 2021
    </CustomFooter>
  );
};

export default Footer;
