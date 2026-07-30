import {
  Footer,
  Header,
  Hero_wrapper,
  Main_Section,
  Main_Wrapper,
  Article,
  SidebarLeft,
  SidebarRight,
} from "@/components/structure/structure";
import { Logotype } from "@/pages/layout/forHeader/logo/logotype";
import { Navigation } from "@/pages/layout/forHeader/navigation/nav";
import { Auth } from "@/pages/layout/forHeader/auth/auth_reg";
import { SmartMenu } from "@/pages/layout/forSideBar/leftBar";
import { Hero } from "./forHero/Hero";
import { Content } from "./content/content";

export function Home({
  title,
  id,
  className,
  sidebarLeft,
  sidebarRight }) {
  return (
    <>
      <Header id="header">
        <Logotype />
        <Navigation />
        <Auth />
      </Header>
      <Hero_wrapper><Hero id="hero" title="Привет!" className="Hero" /></Hero_wrapper>
      <Main_Wrapper>
        {/* Если передан sidebarLeft — используем его, иначе SmartMenu по умолчанию */}
        <SidebarLeft>{sidebarLeft ?? <SmartMenu />}</SidebarLeft>
        <Main_Section title={title} id={id} className={className}>
          <Article id="Content" title="Контент" className="Content">
            <Content />
          </Article>
          <Article id="Content2" title="Контент2" className="Content">
            <Content />
          </Article>
        </Main_Section>
        <SidebarRight>{sidebarRight}</SidebarRight>
      </Main_Wrapper>
      <Footer><h3>Footer</h3></Footer>
    </>
  );
}