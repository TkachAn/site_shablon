import { content } from './config/content';
import { Header, Main, Section, Article, Hero, Footer, Container, Grid, Flex } from './components/structure/containers';
import { Zap, BarChart, ShieldCheck, ClipboardCheck, PhoneCall, CreditCard, Truck } from 'lucide-react';

const IconMap = {
  Zap,
  BarChart,
  ShieldCheck,
  ClipboardCheck,
  PhoneCall,
  CreditCard,
  Truck
};

function App() {
  const { header, hero, features, gallery, steps, products, footer: footerData } = content;

  return (
    <>
      <Header id="header">
        <div className="logo">{header.logo}</div>
        <button className="btn-accent">{header.ctaText}</button>
      </Header>

      <Main title={hero.title} sw={true}>
        <Section id="hero" className="hero-section">
          <Hero id="hero-banner" style={{ backgroundImage: `url(${hero.backgroundImage})` }}>
            <div className="hero-content">
              <h1>{hero.title}</h1>
              <p>{hero.description}</p>
              <button className="btn-primary">{hero.ctaText}</button>
            </div>
          </Hero>
        </Section>

        <Section title="Наши преимущества" id="features">
          <Container className="features-container">
            <Flex className="features-flex">
              {features.map((feature) => {
                const Icon = IconMap[feature.icon] || Zap;
                return (
                  <Article key={feature.id} title={feature.title}>
                    <div className="feature-icon">
                      <Icon size={24} />
                    </div>
                    <p>{feature.description}</p>
                  </Article>
                );
              })}
            </Flex>
          </Container>
        </Section>

        <Section title="Галерея" id="gallery">
          <Grid className="gallery-grid">
            {gallery.map((item, index) => (
              <Article key={index} className="gallery-item">
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.alt} style={{ width: '100%', borderRadius: '8px' }} />
                ) : (
                  <div className="video-placeholder">
                    <iframe
                      width="100%"
                      height="200"
                      src={item.url}
                      title={item.alt}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </Article>
            ))}
          </Grid>
        </Section>

        <Section title="Как мы работаем" id="steps">
          <Flex className="steps-flex">
            {steps.map((step) => {
              const Icon = IconMap[step.icon] || ClipboardCheck;
              return (
                <Article key={step.id} title={`${step.id}. ${step.title}`}>
                  <Icon size={32} />
                  <p>{step.description}</p>
                </Article>
              );
            })}
          </Flex>
        </Section>

        <Section title="Наши тарифы" id="pricing">
          <Flex>
            <Article title={products.main.name}>
              <img src={products.main.image} alt={products.main.name} />
              <div className="price">{products.main.price} ₽</div>
              <button className="btn-primary">Выбрать</button>
            </Article>
            <Article title={products.upsell.name}>
              <img src={products.upsell.image} alt={products.upsell.name} />
              <div className="price">
                <span className="old-price">{products.upsell.price} ₽</span>
                <span className="discount">-{products.upsell.discount}%</span>
              </div>
              <button className="btn-accent">Добавить</button>
            </Article>
          </Flex>
        </Section>
      </Main>

      <Footer>
        <div className="footer-content">
          <p>{footerData.copyright}</p>
          <div className="socials">
            {footerData.socials.map((social, index) => (
              <a key={index} href={social.url}>{social.name}</a>
            ))}
          </div>
        </div>
      </Footer>
    </>
  );
}

export default App;
