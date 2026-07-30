// components/forHero/Hero.jsx
// components/forHero/Hero.jsx
export function Hero({
    image = 'https://placehold.co/1200x400/8ab5bf/f0f0f0?text=...', // Убираем текст из заглушки, если выводим кодом
    id,
    className,
    title
}) {
    return (
        <article id={id} className={`hero_container ${className || ''}`}>
            <div className="hero_img_box">
                <img src={image} alt={title} className="hero_img" />
                {/* Огромный адаптивный заголовок ПОВЕРХ картинки баннера */}
                <h1 className="hero_overlay_text">Hero!</h1>
            </div>
            {/* Нижний заголовок на всю ширину контейнера */}
            {title && <h2 className="hero_title">{title}</h2>}
        </article>
    );
}



/*

export function Hero({
    image = 'https://placehold.co/1200x400/8ab5bf/f0f0f0?text=Hero!',
    id,
    className,
    title
}) {
    return (
        <article id={id} className={`hero_container ${className || ''}`}>
            <div className="hero_img_box">
                <img src={image} alt={title} className="hero_img" />
            </div>
            {title && <h2 className="hero_title">{title}</h2>}
        </article>
    );
}

/*
export function Hero({
    image = 'https://placehold.co/1200x400/8ab5bf/f0f0f0?text=Hero!',
    id,
    className,
    title,
}) {
    return (
        <article id={id} className={className}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </article>
    );
}   
*/