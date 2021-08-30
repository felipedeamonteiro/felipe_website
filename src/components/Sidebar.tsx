import React from 'react';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarMenuItem, SidebarMenuLink } from '../styles/components/Sidebar';

interface SidebarProps {
  isOpen: boolean;
  toogle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toogle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuLink href="#section-experiencia">EXPERIÊNCIA</SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuLink href="#section-projetos">PROJETOS</SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuLink href="#section-sobreMim">SOBRE MIM</SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuLink href="#section-contato">CONTATO</SidebarMenuLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;