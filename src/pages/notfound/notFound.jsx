import { Section } from "@/components/structure/structure";
import s from "./s.module.css";
import { Layout } from "@/pages/layout/layout";
import { Link } from "react-router-dom"; // если используешь React Router
import { useLocation } from "react-router-dom";

export function NotFound({ statusCode = 404 }) {
  const messages = {
    400: "Сервер не смог разобрать ваш запрос. Возможно, ошибка в адресе или параметрах.",
    401: "Требуется авторизация. Пожалуйста, войдите в аккаунт.",
    403: "У вас нет прав для просмотра этой страницы.",
    404: "Страница не найдена. Возможно, ссылка устарела или была удалена.",
    429: "Слишком много запросов. Попробуйте немного позже.",
  };
const location = useLocation();
const reportUrl = `mailto:support@ваш-сайт.com?subject=Ошибка 404&body=Страница не
        найдена: ${window.location.href}`;
  const title = messages[statusCode] || "Что-то пошло не так";
  return (
    <Layout>
      <Section title={title}>
        {/* s.notFound для центрирования и базового оформления */}
        <div className={s.notFound}>
          {/* Код ошибки крупным планом <div className={s.errorCode}>{statusCode}</div>*/}

          <h1 className={s.errorCode}>{statusCode}</h1>

          {/* Основное сообщение */}
          <p className={s.message}>Упс! Похоже, вы заблудились.</p>

          {/* Подробное описание */}
          <p className={s.description}>
            Запрашиваемая страница не найдена. Возможно, она была удалена или вы
            неправильно ввели адрес.
          </p>

          {/* Ссылка на главную (используйте компонент Link, если есть React Router) */}
          <a href="/" className={s.homeLink}>
            Вернуться на Главную страницу
          </a>

        
        </div>
        
        <p>
          Это ошибка на стороне клиента (4xx). Сервер в порядке, проблема в
          запросе.
        </p>
        {statusCode === 404 && (
          <p>
            Наиболее вероятные причины:
            <br />• опечатка в адресе
            <br />• удалённая / перемещённая страница
            <br />• битая ссылка с другого сайта
          </p>
        )}
        
        
        
      </Section>
    </Layout>
  );
}
