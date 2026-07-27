//notF.jsx
import { Layout } from "../layout/layout.jsx";
import s from "./s.module.css";

export function NotFound() {
  //const location = useLocation();

  return (
    <Layout sw_h1={true}>
      <h1 className={s.errorCode}>404</h1>
      <p className={s.message}>Упс! Похоже, вы заблудились.</p>
      <p className={s.description}></p>
    </Layout>
  );
}


/*


  return (
    <div className={s.notFound}>
      <h1 className={s.errorCode}>404</h1>
      <p className={s.message}>Упс! Похоже, вы заблудились.</p>
      <p className={s.description}></p>
    </div>
    
  );
*/