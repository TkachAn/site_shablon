// CatalogSidebar.jsx — фильтры каталога в левом сайдбаре

import { useEffect, useState } from 'react';
import s from './CatalogSidebar.module.css';

/**
 * Props:
 *  filters  — { search, categories, priceMax, onlyInStock, sort }
 *  onChange — { setSearch, setCategories, setPriceMax, setOnlyInStock, setSort }
 *  allProducts — исходный массив (нужен для диапазона цен и подсчётов)
 *  allCategories — ['Электроника', 'Аксессуары', ...]
 */
export function CatalogSidebar({ filters, onChange, allProducts, allCategories }) {
    const { search, categories, priceMax, onlyInStock, sort } = filters;
    const { setSearch, setCategories, setPriceMax, setOnlyInStock, setSort } = onChange;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1038);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    /* Максимальная цена в каталоге */
    const maxPrice = Math.max(...allProducts.map(p => p.price));

    /* Переключение чекбокса категории */
    function toggleCategory(cat) {
        setCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    }

    /* Счётчик товаров в категории (с учётом наличия и поиска) */
    function countInCategory(cat) {
        return allProducts.filter(p =>
            p.category === cat &&
            (!onlyInStock || p.inStock) &&
            (!search.trim() || p.title.toLowerCase().includes(search.toLowerCase()))
        ).length;
    }

    const hasActiveFilters =
        search.trim() !== '' ||
        categories.length > 0 ||
        priceMax < maxPrice ||
        onlyInStock ||
        sort !== 'default';

    function resetAll() {
        setSearch('');
        setCategories([]);
        setPriceMax(maxPrice);
        setOnlyInStock(false);
        setSort('default');
    }

    const content = (
        <div className={s.sidebar}>

            {/* ─── Поиск ─── */}
            <div className={s.block}>
                <p className={s.label}>Поиск</p>
                <div className={s.searchWrap}>
                    <span className={s.searchIcon}>🔍</span>
                    <input
                        id="sidebar-search"
                        className={s.searchInput}
                        type="text"
                        placeholder="Найти товар..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {search && (
                        <button
                            className={s.clearBtn}
                            onClick={() => setSearch('')}
                            aria-label="Очистить поиск"
                        >✕</button>
                    )}
                </div>
            </div>

            {/* ─── Категории ─── */}
            <div className={s.block}>
                <p className={s.label}>Категории</p>
                <ul className={s.catList}>
                    {allCategories.map(cat => {
                        const count = countInCategory(cat);
                        const active = categories.includes(cat);
                        return (
                            <li key={cat}>
                                <label className={`${s.catItem} ${active ? s.catItemActive : ''} ${count === 0 ? s.catItemEmpty : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={active}
                                        onChange={() => toggleCategory(cat)}
                                        disabled={count === 0}
                                    />
                                    <span className={s.catName}>{cat}</span>
                                    <span className={s.catCount}>{count}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* ─── Цена ─── */}
            <div className={s.block}>
                <p className={s.label}>
                    Цена до: <strong>{priceMax.toLocaleString('ru-RU')} ₽</strong>
                </p>
                <input
                    id="sidebar-price"
                    type="range"
                    className={s.rangeInput}
                    min={0}
                    max={maxPrice}
                    step={100}
                    value={priceMax}
                    onChange={e => setPriceMax(Number(e.target.value))}
                />
                <div className={s.priceHints}>
                    <span>0 ₽</span>
                    <span>{maxPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
            </div>

            {/* ─── Наличие ─── */}
            <div className={s.block}>
                <label className={s.stockToggle}>
                    <input
                        id="sidebar-in-stock"
                        type="checkbox"
                        checked={onlyInStock}
                        onChange={e => setOnlyInStock(e.target.checked)}
                    />
                    <span>Только в наличии</span>
                </label>
            </div>

            {/* ─── Сортировка ─── */}
            <div className={s.block}>
                <p className={s.label}>Сортировка</p>
                <div className={s.sortList}>
                    {[
                        { value: 'default',    label: 'По умолчанию' },
                        { value: 'price_asc',  label: '↑ Сначала дешевле' },
                        { value: 'price_desc', label: '↓ Сначала дороже' },
                        { value: 'rating',     label: '★ По рейтингу' },
                        { value: 'reviews',    label: '💬 По отзывам' },
                    ].map(opt => (
                        <button
                            key={opt.value}
                            className={`${s.sortBtn} ${sort === opt.value ? s.sortBtnActive : ''}`}
                            onClick={() => setSort(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ─── Сброс фильтров ─── */}
            {hasActiveFilters && (
                <div className={s.block}>
                    <button className={s.resetBtn} onClick={resetAll}>
                        ✕ Сбросить фильтры
                    </button>
                </div>
            )}

        </div>
    );

    /* Mobile First: на мобиле — внутри <details>, на десктопе — всегда раскрыт */
    if (isMobile) {
        return (
            <details className={s.mobileDetails}>
                <summary className={s.mobileSummary}>
                    Фильтры {hasActiveFilters && <span className={s.activeDot} />}
                </summary>
                {content}
            </details>
        );
    }

    return content;
}
