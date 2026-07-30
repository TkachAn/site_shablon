// catalog.jsx — страница каталога товаров

import { useState, useMemo } from 'react';
import { Layout } from '../layout/layout.jsx';
import { Section } from '../../components/structure/structure.jsx';
import { Card_blok } from '../../components/structure/structure.jsx';
import { Card } from './for_card/Card';
import { CatalogSidebar } from './CatalogSidebar.jsx';
import s from './catalog.module.css';

/* ─── Данные товаров ─── */
const ALL_PRODUCTS = [
    {
        id: 1,
        image: 'https://placehold.co/400x300/8ab5bf/ffffff?text=Наушники',
        category: 'Электроника',
        title: 'Беспроводные наушники Pro Max',
        description: 'Активное шумоподавление, 30 часов работы, быстрая зарядка.',
        price: 7990,
        oldPrice: 11990,
        rating: 4.5,
        reviews: 238,
        badge: 'Хит',
        inStock: true,
    },
    {
        id: 2,
        image: 'https://placehold.co/400x300/b9c4c9/333333?text=Чехол',
        category: 'Аксессуары',
        title: 'Кожаный чехол для ноутбука 15"',
        description: 'Натуральная кожа, водоотталкивающее покрытие, три кармана.',
        price: 3490,
        oldPrice: null,
        rating: 4,
        reviews: 57,
        badge: 'Новинка',
        inStock: true,
    },
    {
        id: 3,
        image: 'https://placehold.co/400x300/2c4c59/ffffff?text=Браслет',
        category: 'Смарт-часы',
        title: 'Смарт-браслет FitPro 7',
        description: 'Мониторинг сна, SpO₂, 14 дней без зарядки, IP68.',
        price: 4290,
        oldPrice: 5990,
        rating: 3,
        reviews: 14,
        badge: null,
        inStock: false,
    },
    {
        id: 4,
        image: 'https://placehold.co/400x300/8ab5bf/ffffff?text=Клавиатура',
        category: 'Электроника',
        title: 'Механическая клавиатура KeyMaster',
        description: 'Переключатели Cherry MX Red, RGB-подсветка, алюминиевый корпус.',
        price: 9490,
        oldPrice: 12000,
        rating: 5,
        reviews: 421,
        badge: 'Хит',
        inStock: true,
    },
    {
        id: 5,
        image: 'https://placehold.co/400x300/5c8a8a/ffffff?text=Мышь',
        category: 'Электроника',
        title: 'Игровая мышь GlideX Pro',
        description: 'Сенсор 25K DPI, 7 программируемых кнопок, зарядная подставка.',
        price: 5990,
        oldPrice: null,
        rating: 4.5,
        reviews: 189,
        badge: 'Новинка',
        inStock: true,
    },
    {
        id: 6,
        image: 'https://placehold.co/400x300/7fa9b0/ffffff?text=Рюкзак',
        category: 'Аксессуары',
        title: 'Городской рюкзак UrbanPack 30L',
        description: 'Водостойкая ткань, USB-порт, отдел для ноутбука 17".',
        price: 6490,
        oldPrice: 8900,
        rating: 4,
        reviews: 76,
        badge: null,
        inStock: true,
    },
    {
        id: 7,
        image: 'https://placehold.co/400x300/4d7a7a/ffffff?text=Колонка',
        category: 'Электроника',
        title: 'Портативная колонка BoomX 360',
        description: 'Звук 360°, IP67, 20 часов воспроизведения, Bluetooth 5.3.',
        price: 4890,
        oldPrice: 6500,
        rating: 3.5,
        reviews: 33,
        badge: 'Скидка',
        inStock: true,
    },
    {
        id: 8,
        image: 'https://placehold.co/400x300/6699a1/ffffff?text=Часы',
        category: 'Смарт-часы',
        title: 'SmartWatch TimeX Ultra',
        description: 'AMOLED-дисплей, ЭКГ, GPS, 5 дней автономии, aluminium case.',
        price: 18990,
        oldPrice: 24990,
        rating: 5,
        reviews: 312,
        badge: 'Хит',
        inStock: true,
    },

    {
        id: 9,
        image: 'https://placehold.co/400x300/6699a1/ffffff?text=Очки',
        category: 'Смарт-очки',
        title: 'Smart TimeX Ultra',
        description: 'AMOLED-дисплей, ЭКГ, GPS, 5 дней автономии, aluminium case.',
        price: 1990,
        oldPrice: 4990,
        rating: 5,
        reviews: 312,
        badge: 'Хит',
        inStock: true,
    },
];

/* Уникальные категории в порядке появления */
const ALL_CATEGORIES = [...new Set(ALL_PRODUCTS.map(p => p.category))];

/* slug для id секции 
const slugify = str => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
*/

/* ─── Исправленный slug для id секции (поддерживает кириллицу) ─── */
const slugify = str =>
    str.toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // заменяем пробелы на дефисы
        .replace(/[^a-z0-9а-яё-]/g, ''); // сохраняем латиницу, цифры, кириллицу и дефис


export function Catalog() {
    /* ─── State фильтров ─── */
    const maxPrice = Math.max(...ALL_PRODUCTS.map(p => p.price));
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);   // [] = все
    const [priceMax, setPriceMax] = useState(maxPrice);
    const [onlyInStock, setOnlyInStock] = useState(false);
    const [sort, setSort] = useState('default');

    /* ─── Фильтрация ─── */
    const filtered = useMemo(() => {
        return ALL_PRODUCTS.filter(p => {
            if (categories.length > 0 && !categories.includes(p.category)) return false;
            if (onlyInStock && !p.inStock) return false;
            if (p.price > priceMax) return false;
            if (search.trim() && !p.title.toLowerCase().includes(search.toLowerCase()) &&
                !p.description.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });
    }, [search, categories, priceMax, onlyInStock]);

    /* ─── Сортировка ─── */
    const sorted = useMemo(() => {
        const list = [...filtered];
        switch (sort) {
            case 'price_asc': return list.sort((a, b) => a.price - b.price);
            case 'price_desc': return list.sort((a, b) => b.price - a.price);
            case 'rating': return list.sort((a, b) => b.rating - a.rating);
            case 'reviews': return list.sort((a, b) => b.reviews - a.reviews);
            default: return list;
        }
    }, [filtered, sort]);

    /* ─── Группировка по категориям ─── */
    const grouped = useMemo(() => {
        return ALL_CATEGORIES
            .map(cat => ({
                cat,
                slug: slugify(cat),
                items: sorted.filter(p => p.category === cat),
            }))
            .filter(g => g.items.length > 0); // пустые секции не рендерим → SmartMenu их не увидит
    }, [sorted]);

    const totalCount = sorted.length;

    /* ─── Сайдбар с фильтрами ─── */
    const sidebar = (
        <CatalogSidebar
            filters={{ search, categories, priceMax, onlyInStock, sort }}
            onChange={{ setSearch, setCategories, setPriceMax, setOnlyInStock, setSort }}
            allProducts={ALL_PRODUCTS}
            allCategories={ALL_CATEGORIES}
        />
    );
    // sidebarLeft={sidebar}
    return (
        <Layout sidebarLeft={sidebar} sw_h1={true} title={
            <>
                Каталог  <span className={s.count}>{'найдено' + getNoun(totalCount, 'товар', 'товара', 'товаров')}</span>
            </>
        }>
            {/* ─── Секции по категориям — SmartMenu видит их автоматически ─── */}
            {grouped.length > 0 ? (
                grouped.map(({ cat, slug, items }) => (
                    /*
                     * Section из structure.jsx:
                     *  - id="электроника" → якорь для SmartMenu
                     *  - title="Электроника" → заголовок внутри + пункт меню
                     */
                    <Section key={slug} id={slug} title={cat}>
                        <Card_blok className={s.cardGrid}>
                            {items.map(product => (
                                <Card
                                    key={product.id}
                                    {...product}
                                    onAddToCart={() => alert(`«${product.title}» добавлен в корзину`)}
                                    onFavorite={() => alert(`«${product.title}» добавлен в избранное`)}
                                />
                            ))}
                        </Card_blok>
                    </Section>
                ))
            ) : (
                /* ─── Пустой стейт ─── */
                <div className={s.empty}>
                    <span className={s.emptyIcon}>🔎</span>
                    <p>Ничего не найдено</p>
                    <button
                        className={s.resetBtn}
                        onClick={() => {
                            setSearch('');
                            setCategories([]);
                            setPriceMax(maxPrice);
                            setOnlyInStock(false);
                            setSort('default');
                        }}
                    >
                        Сбросить фильтры
                    </button>
                </div>
            )}

        </Layout>
    );
}

/* Склонение */

//<span className={s.count}>{getNoun(totalCount, 'товар', 'товара', 'товаров')}</span>
function getNoun(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m100 >= 11 && m100 <= 14) return `${n} ${many}`;
    if (m10 === 1) return `${n} ${one}`;
    if (m10 >= 2 && m10 <= 4) return `${n} ${few}`;
    return `${n} ${many}`;
}
