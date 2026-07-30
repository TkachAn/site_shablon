import s from "./s.module.css";

export function Content({
    id,
    className,
    title,
    href,
}) {
    return (
        <div id={id} className={className} href={href}>
            <h2>{title}</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a, laborum eum tempore quod possimus adipisci veniam, fugiat dignissimos quae labore illum accusamus fugit quia consequatur facere eaque, unde veritatis!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a, laborum eum tempore quod possimus adipisci veniam, fugiat dignissimos quae labore illum accusamus fugit quia consequatur facere eaque, unde veritatis!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a, laborum eum tempore quod possimus adipisci veniam, fugiat dignissimos quae labore illum accusamus fugit quia consequatur facere eaque, unde veritatis!</p>
            </div>

            {href}
        </div>
    );
}  