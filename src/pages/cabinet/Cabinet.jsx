//cabinet.jsx

import { Article, Section } from "../../components/structure/structure.jsx";
import { Layout } from "../layout/layout.jsx";
import { users } from "./data.jsx";
import s from "./s.module.css";

export const Cabinet = () => {
  return (
    <Layout sw_h1={true} title="Личный кабинет">
      <Section id="cabinet" title="Личный кабинет" className={s.cabinet}>
        <Article>
          <h2>Добро пожаловать в ваш личный кабинет</h2>
          <p>Это страница личного кабинета пользователя.</p>
        </Article>
      </Section>
    </Layout>
  );
};