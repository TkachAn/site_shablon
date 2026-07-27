// src/components/structure/containers.jsx
//import { Container } from "./container";
import s from "./s.module.css";


export function Container({ children, className }) {
  return <div className={`${s.container} ${className || ""}`}>{children}</div>;
}

export function Header({ children, id }) {
  return (
    <header id={id}>
      <Container className={s.header}>{children}</Container>
    </header>
  );
}

export function Grid({ children, id, className }) {
  return (
    <Container>
      <div id={id} className={`${s.grid} ${className || ""}`}>
        {children}
      </div>
    </Container>
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

export function Main({ children, title, sw }) {
  return (
    <main className={s.main}>
      {!sw && <h1 className={s.sw_h1}>{title}</h1>}
      
      {children}
    </main>
  );
}

export function Hero({ children, id, style }) {
  return (
    <section id={id} className={s.hero} title="HERO" style={style}>
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

export function AsideLeft({ title, children, id, className }) {
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

export function AsideRight({ title, children, id, className }) {
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
