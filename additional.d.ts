import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      navbarBackground: string;
      navbarHomeTitle: string;
      mobileIcon: string;
      navLinks: string;
      navLinksHover: string;

      aboutMeBackground: string;
      aboutMeRoundedBorders: string;
      aboutMeDescriptionP: string;
      aboutMePageLinkHighlight: string;
      aboutMeSkillsBarsBackground: string;
      aboutMeSkillsBarsTags: string;
      aboutMeSkillsBarsText: string;
      aboutMeSkillsBarsFill1: string;
      aboutMeSkillsBarsFill2: string;
      aboutMeSkillsBarsFillSpan: string;

      buttonText: string;
      buttonBackground1: string;
      buttonBackground2: string;
      buttonHover: string;

      cardBackground1: string;
      cardBackground2: string;
      cardBackH2: string;
      cardBackP: string;

      contactMeH3: string;

      experienceContainerBackground: string;
      experienceContainerTextMuted: string;
      experienceContainerTimelineBefore: string;
      experienceContainerTimelineImageBack: string;
      experienceContainerTimelineCircleActive: string;
      experienceContainerTimelineLastChild: string;
      experienceContainerTimelineBodyUlP: string;
      experienceContainerTimelineBodyUlPActiveText: string;

      footerBackground: string;

      inputBorderError: string;
      inputBorderDisabled: string;
      inputBorderPlaceholder: string;
      inputBorderFocus: string;
      inputBorderLabelFocus: string;

      introContainerH1: string;

      projectsContainerH3: string;

      sidebarContainerBackground: string;
      sidebarContainerCloseIcon: string;
      sidebarContainerWrapper: string;
      sidebarMenuLinkText: string;
      sidebarMenuLinkTextHover: string;

      textAreaText: string;
      textAreaPlaceholder: string;
      textAreaBorder: string;
      textAreaBorderFocus: string;
      textAreaLabelFocus: string;
    };
  }
};