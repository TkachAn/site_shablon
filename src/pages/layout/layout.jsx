import {
  Footer,
  Header,
  Main_Section,
  Main_Wrapper,
  SidebarLeft,
  SidebarRight,
} from "../../components/structure/structure";
import { Logotype } from "./forHeader/logo/logotype";
import { Navigation } from "./forHeader/navigation/nav";
import { Auth } from "./forHeader/auth/auth_reg";
import { SmartMenu } from "./forSideBar/leftBar";

export function Layout({ children, title, id, className, sidebarLeft, sidebarRight }) {
  return (
    <>
      <Header>
        <Logotype />
        <Navigation />
        <Auth />
      </Header>
      <Main_Wrapper>
        {/* Если передан sidebarLeft — используем его, иначе SmartMenu по умолчанию */}
        <SidebarLeft>{sidebarLeft ?? <SmartMenu />}</SidebarLeft>
        <Main_Section title={title} id={id} className={className}>{children}</Main_Section>
        <SidebarRight>{sidebarRight}</SidebarRight>
      </Main_Wrapper>
      <Footer><h3>Footer</h3></Footer>
    </>
  );
}

