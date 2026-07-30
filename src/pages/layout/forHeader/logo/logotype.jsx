import { Link } from "react-router-dom";
import s from "./s.module.css";

export function Logotype() {
    return (
        <Link to="/">
            <div className={s.logotype}>
                <h3>Logotype</h3>
            </div>
        </Link>
    );
}