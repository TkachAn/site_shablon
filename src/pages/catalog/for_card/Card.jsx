// Card — шаблон карточки товара

import s from './s.module.css';

/**
 * Карточка товара
 *
 * Props:
 *  - image      {string}  — URL изображения
 *  - category   {string}  — категория товара
 *  - title      {string}  — название товара
 *  - description{string}  — короткое описание
 *  - price      {number}  — текущая цена
 *  - oldPrice   {number}  — старая цена (если есть скидка)
 *  - rating     {number}  — рейтинг 0–5
 *  - reviews    {number}  — количество отзывов
 *  - badge      {string}  — лейбл-бейдж ('Новинка', 'Хит', 'Скидка' …)
 *  - inStock    {boolean} — есть ли в наличии
 *  - onAddToCart{function}— колбэк «Добавить в корзину»
 *  - onFavorite {function}— колбэк «В избранное»
 */
export function Card({
    image = 'https://placehold.co/400x300/8ab5bf/ffffff?text=Товар',
    category = 'Категория',
    title = 'Название товара',
    description = 'Краткое описание товара. Здесь основные характеристики и особенности.',
    price = 1990,
    oldPrice = null,
    rating = 4,
    reviews = 12,
    badge = null,
    inStock = true,
    onAddToCart = () => {},
    onFavorite = () => {},
}) {
    const discount = oldPrice
        ? Math.round((1 - price / oldPrice) * 100)
        : null;

    /* Звёздочки рейтинга */
    const stars = Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(rating)) return 'full';
        if (i < rating) return 'half';
        return 'empty';
    });

    return (
        <article className={s.card}>

            {/* ─── Изображение ─── */}
            <div className={s.imageWrap}>
                <img src={image} alt={title} className={s.image} />

                {/* Бейдж */}
                {badge && <span className={s.badge}>{badge}</span>}

                {/* Кнопка «В избранное» */}
                <button
                    className={s.favoriteBtn}
                    onClick={onFavorite}
                    aria-label="Добавить в избранное"
                    title="В избранное"
                >
                    ♡
                </button>

                {/* Скидка */}
                {discount && (
                    <span className={s.discountBadge}>−{discount}%</span>
                )}
            </div>

            {/* ─── Контент ─── */}
            <div className={s.body}>
                <p className={s.category}>{category}</p>

                <h3 className={s.title}>{title}</h3>

                <p className={s.description}>{description}</p>

                {/* Рейтинг */}
                <div className={s.ratingRow}>
                    <span className={s.stars}>
                        {stars.map((type, i) => (
                            <span key={i} className={s[`star_${type}`]}>
                                {type === 'half' ? '½' : '★'}
                            </span>
                        ))}
                    </span>
                    <span className={s.reviews}>({reviews})</span>
                </div>

                {/* Цена */}
                <div className={s.priceRow}>
                    <span className={s.price}>{price.toLocaleString('ru-RU')} ₽</span>
                    {oldPrice && (
                        <span className={s.oldPrice}>
                            {oldPrice.toLocaleString('ru-RU')} ₽
                        </span>
                    )}
                </div>

                {/* Наличие */}
                <p className={inStock ? s.inStock : s.outOfStock}>
                    {inStock ? '● В наличии' : '○ Нет в наличии'}
                </p>
            </div>

            {/* ─── Кнопка ─── */}
            <div className={s.footer}>
                <button
                    className={`${s.addBtn} ${!inStock ? s.addBtnDisabled : ''}`}
                    onClick={inStock ? onAddToCart : undefined}
                    disabled={!inStock}
                    aria-label={`Добавить ${title} в корзину`}
                >
                    {inStock ? '🛒 В корзину' : 'Нет в наличии'}
                </button>
            </div>

        </article>
    );
}
