import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { routes } from "../../../../routersConfig";

import { routes } from "@/routersConfig";
import s from "./s.module.css";
import {
    MenuIconButton,
    CloseIconButton,
} from "@/components/elements/buttons/IconButtons";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = routes.filter((route) => route.showInMenu);
    return (
        <nav className={s.nav}>
            <div className={s.burgerWrapper}>
                {isOpen ? (
                    <CloseIconButton onClick={() => setIsOpen(false)} />
                ) : (
                    <MenuIconButton onClick={() => setIsOpen(true)} />
                )}
            </div>

            <ul className={`${s.menuList} ${isOpen ? s.menuOpen : ""}`}>
                {menuItems.map((item) => (
                    <li key={item.path} className={s.menuItem}>
                        <Link
                            to={item.path}
                            className={s.link}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>


            {isOpen && <div className={s.overlay} onClick={() => setIsOpen(false)} />}
        </nav>
    );
}

/*
import {
  MenuIconButton,
  CloseIconButton,
} from "../../components/base/buttons/IconButtons";
import s from "./sdn.module.css";

export function DinNav() {


  return (
    <nav className={s.nav}>
      <div className={s.burgerWrapper}>
        {isOpen ? (
          <CloseIconButton onClick={() => setIsOpen(false)} />
        ) : (
          <MenuIconButton onClick={() => setIsOpen(true)} />
        )}
      </div>

      <ul className={`${s.menuList} ${isOpen ? s.menuOpen : ""}`}>
        {menuItems.map((item) => (
          <li key={item.path} className={s.menuItem}>
            <Link
              to={item.path}
              className={s.link}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

     
      {isOpen && <div className={s.overlay} onClick={() => setIsOpen(false)} />}
    </nav>
  );
}


*/