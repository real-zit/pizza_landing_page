import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizza</SidebarLink>
        <SidebarLink to="/">Desert</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  align-items: center;
  top: 0;
  right: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2rem;
  padding: 1rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;
