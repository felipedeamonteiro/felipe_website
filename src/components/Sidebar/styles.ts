import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.sidebarContainerBackground};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
export const CloseIcon = styled(FaTimes)`
  color: ${(props) => props.theme.colors.sidebarContainerCloseIcon};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: ${(props) => props.theme.colors.sidebarContainerWrapper};
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
`;
export const SidebarMenuItem = styled.li``;

export const SidebarMenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${(props) => props.theme.colors.sidebarMenuLinkText};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.sidebarMenuLinkTextHover};
    transition: 0.2s ease-in-out;
  }
`;