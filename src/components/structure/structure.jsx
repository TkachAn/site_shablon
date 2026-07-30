//import { Container } from "./container";
import s from "./s.module.css";


export function Container({ children, className }) {
  return <div className={`${s.container} ${className || ""}`}>{children}</div>;
}
/*Header*/

export function Header({ children, id }) {
  return (
    <header id={id} className={s.header_wrapper}>
      <Container className={s.header}>{children}</Container>
    </header>
  );
}

export function Logo({ children, id }) {
  return (
    <div id={id} className={s.logo_wrapper}>
      {children}
    </div>
  );
}

export function Navig({ children, id }) {
  return (
    <nav id={id} className={s.navig_wrapper}>
      {children}
    </nav>
  );
}

export function Auth({ children, id }) {
  return (
    <div id={id} className={s.auth_wrapper}>
      {children}
    </div>
  );
}

/*Main*/

export function Main_Wrapper({ children }) {
  return (
    <main className={s.main_Wrapper}>
      <Container className={s.main}>{children}</Container>
    </main>
  );
}

export function Main_Section({ children, title, sw }) {
  return (
    <section className={s.main_Section}>
      {!sw && <h1 className={s.sw_h1}>{title}</h1>}
      {children}
    </section>
  );
}

export function Hero_wrapper({ children, id, tittle }) {
  return (
    <section id={id} className={s.hero_wrapper} title={tittle}>
      {children}
    </section>
  );
}

export function Section({ children, title, id, className }) {
  return (
    <section
      id={id}
      className={`${s.section} ${className || ""}`}
      title={title}
    >
      {title && <h2 className={s.section_title}>{title}</h2>}
      {children}
    </section>
  );
}

export function Article({ children, title, id, className }) {
  return (
    <article
      id={id}
      className={`${s.article} ${className || ""}`}
      title={title}
    >
      {title && <h3 className={s.article_title}>{title}</h3>}
      {children}
    </article>
  );
}

export function SidebarLeft({ title, children, id, className }) {
  return (
    <aside
      id={id}
      className={`${s.asideLeft} ${className || ""}`}
      title={title}
    >
      {title && <h3 className={s.article_title}>{title}</h3>}
      {children}
    </aside>
  );
}

export function SidebarRight({ title, children, id, className }) {
  return (
    <aside
      id={id}
      className={`${s.asideRight} ${className || ""}`}
      title={title}
    >
      {title && <h3 className={s.article_title}>{title}</h3>}
      {children}
    </aside>
  );
}

/*Footer*/

export function Footer({ children }) {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.flexbox}>{children}</div>
        <p className={s.copyright}>
          &copy; 2026 ARCH.ENGINE. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}

/*Grid, Wrapper, Flex*/

export function Grid({ children, id, className }) {
  return (

    <div id={id} className={`${s.grid} ${className || ""}`}>
      {children}
    </div>

  );
}

export function Wrapper({ children, id, className }) {
  return (
    <Container>
      <div id={id} className={`${s.wrapper} ${className || ""}`}>
        {children}
      </div>
    </Container>
  );
}

export function Flex({ children, id, className }) {
  return (
    <div id={id} className={`${s.flex} ${className || ""}`}>
      {children}
    </div>
  );
}

export function Card_blok({ children, id, className }) {
  return (
    <div id={id} className={`${s.card_blok} ${className || ""}`}>
      {children}
    </div>
  );
}



/**
 * 
 export function Sidebar({ children, id, className}) {//className = s.sidebar-left or s.sidebar_right
  return (
    <aside className={`${s.sidebar} ${className || ""}`}>        
        {children}  
    </aside>
    );
}
 * 
 */