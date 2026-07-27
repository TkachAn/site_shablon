// leftBar.jsx

import React, { useEffect, useState } from "react";
import s from "./s.module.css";

export function SmartMenu() {
    const [anchors, setAnchors] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 1. Определение типа экрана
        const handleResize = () => setIsMobile(window.innerWidth < 1038);
        handleResize(); // Инициализация при монтировании

        window.addEventListener("resize", handleResize);

        // 2. Функция сбора анкоров
        const updateAnchors = () => {
            const elements = document.querySelectorAll("section[id], article[id]");
            const foundAnchors = Array.from(elements).map((el) => ({
                id: el.id,
                type: el.tagName.toLowerCase(),
                title:
                    el.querySelector("h1, h2, h3")?.innerText ||
                    el.getAttribute("title") ||
                    el.id,
            }));
            setAnchors(foundAnchors);
        };

        // Первоначальный сбор
        updateAnchors();

        // Слушаем обновление контента из каталога
        window.addEventListener('content-updated', updateAnchors);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('content-updated', updateAnchors);
        };
    }, []);

    // Если анкоров нет, ничего не рендерим
    if (anchors.length === 0) return null;

    const NavList = (
        <ul className={s.list}>
            {anchors.map((anchor) => (
                <li key={anchor.id} className={s.item}>
                    <a
                        href={`#${anchor.id}`}
                        className={
                            anchor.type === "section" ? s.link_section : s.link_article
                        }
                    >
                        {anchor.title}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <nav className={s.anchorNav}>
            {isMobile ? (
                <details className={s.mobileDetails}>
                    <summary className={s.summary}>Меню раздела!</summary>
                    {NavList}
                </details>
            ) : (
                NavList
            )}
        </nav>
    );
}


/*
import React, { useEffect, useState } from "react";
import s from "./s.module.css";

export function SmartMenu() {
    const [anchors, setAnchors] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 1. Определение типа экрана
        const handleResize = () => setIsMobile(window.innerWidth < 1038);
        handleResize(); // Инициализация при монтировании

        window.addEventListener("resize", handleResize);

        // 2. Сбор анкоров: ищем все секции и статьи с ID
        const elements = document.querySelectorAll("section[id], article[id]");
        const foundAnchors = Array.from(elements).map((el) => ({
            id: el.id,
            type: el.tagName.toLowerCase(),
            title:
                el.querySelector("h1, h2, h3")?.innerText ||
                el.getAttribute("title") ||
                el.id,
        }));
        setAnchors(foundAnchors);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Если анкоров нет, ничего не рендерим
    if (anchors.length === 0) return null;

    const NavList = (
        <ul className={s.list}>
            {anchors.map((anchor) => (
                <li key={anchor.id} className={s.item}>
                    <a
                        href={`#${anchor.id}`}
                        className={
                            anchor.type === "section" ? s.link_section : s.link_article
                        }
                    >
                        {anchor.title}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <nav className={s.anchorNav}>
            {isMobile ? (
                <details className={s.mobileDetails}>
                    <summary className={s.summary}>Меню раздела!</summary>
                    {NavList}
                </details>
            ) : (
                NavList
            )}
        </nav>
    );
}
*/