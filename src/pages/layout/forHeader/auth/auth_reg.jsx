import { Link } from "react-router-dom";
import s from "./s.module.css";

export function Auth() {
    return (
        <Link to="/cabinet">
            <div className={s.auth}>
                <h3>Auth</h3>
            </div>
        </Link>
    );
}

export function Reg() {
    return (
        <div className={s.reg}>
            <h3>Reg</h3>
        </div>
    );
}