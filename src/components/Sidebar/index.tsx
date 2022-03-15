import React from 'react';

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarMenuItem, SidebarMenuLink } from './styles';

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
            <SidebarMenuLink href="#section-experiencia" onClick={toogle}>EXPERIÊNCIA</SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuLink href="#section-projetos" onClick={toogle}>PROJETOS</SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuLink href="#section-sobreMim" onClick={toogle}>SOBRE MIM</SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuLink href="#section-contato" onClick={toogle}>CONTATO</SidebarMenuLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;