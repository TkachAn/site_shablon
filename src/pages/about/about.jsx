import { Layout } from "../layout/layout.jsx";
import { Article, Section } from "../../components/structure/structure.jsx";


export function About() {
    return (
        <Layout sw_h1={true} title="О нас">
            <Section id="about" title="Наша специализация">
                <Article>
                    <p>Мы - компания, которая занимается разработкой программного обеспечения. Мы работаем на рынке уже более 10 лет и за это время успели завоевать доверие множества клиентов.</p>
                </Article>
            </Section>
            <Section id="address" title="Адреса">
                <Article id="kiev" title="Киев">
                    <p>123456, г. Киев, ул. Примерная, д. 1, стр. 1</p>
                </Article>
                <Article id="lvov" title="Львов">
                    <p>123456, г. Львов, ул. Примерная, д. 1, стр. 1</p>
                </Article>
            </Section>
            <Section id="contacts" title="Контакты">
                <Article id="zakaz" title="Отдел заказов">
                    <p>тел.: +380 (44) 123-45-67</p>
                    <p>email: [EMAIL_ADDRESS]</p>
                </Article>
                <Article id="kadry" title="Отдел кадров">
                    <p>тел.: +380 (44) 123-45-67</p>
                    <p>тел.: +380 (44) 123-45-68</p>
                    <p>email: [EMAIL_ADDRESS]</p>
                </Article>
                <Article id="admin" title="Администрация">
                    <p>тел.: +380 (44) 123-45-67</p>
                    <p>email: [EMAIL_ADDRESS]</p>
                </Article>
            </Section>
        </Layout>
    );
}