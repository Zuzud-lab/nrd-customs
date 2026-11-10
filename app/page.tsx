import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRD Customs — мастерская техники",
  description:
    "Ремонт, обслуживание и подготовка водной, снежной и внедорожной техники.",
};

const services = [
  {
    number: "01",
    title: "Водная техника",
    text: "Катера, гидроциклы и подготовка техники к сезону.",
    accent: "water",
  },
  {
    number: "02",
    title: "Снежная техника",
    text: "Снегоходы: диагностика, обслуживание и сезонная подготовка.",
    accent: "snow",
  },
  {
    number: "03",
    title: "Квадроциклы и багги",
    text: "Ремонт, доработка и решение нестандартных задач.",
    accent: "ground",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="brand" href="#top" aria-label="NRD Customs — наверх">
            <img src="/nrd-logo.svg" alt="" />
            <span>NRD CUSTOMS</span>
          </a>
          <div className="navLinks">
            <a href="#services">Услуги</a>
            <a href="#contacts">Контакты</a>
            <a className="navCta" href="#contacts">Связаться</a>
          </div>
        </nav>

        <div className="heroGrid shell">
          <div className="heroCopy">
            <p className="eyebrow"><span /> МАСТЕРСКАЯ NRD CUSTOMS</p>
            <h1>Ремонт и подготовка техники — по-человечески</h1>
            <p className="lead">
              Водная, снежная и внедорожная техника. Обслуживаем,
              восстанавливаем и берёмся за нестандартные задачи.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="tel:+79109151520">Позвонить</a>
              <a className="button buttonSecondary" href="#services">Что делаем</a>
            </div>
            <p className="appointment">Приём техники — по предварительной договорённости</p>
          </div>

          <div className="logoStage" aria-label="Логотип мастерской NRD Customs">
            <div className="logoGlow" />
            <img className="heroLogo" src="/nrd-logo.svg" alt="Мастерская «Не ради денег», NRD Customs" />
          </div>
        </div>
        <div className="heroBottom" />
      </section>

      <section className="services section shell" id="services">
        <div className="sectionHeading">
          <p className="eyebrow dark"><span /> НАПРАВЛЕНИЯ</p>
          <h2>Техника, которой мы занимаемся</h2>
          <p>Без конвейера: сначала разбираемся в задаче, потом предлагаем решение.</p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className={`serviceCard ${service.accent}`} key={service.number}>
              <div className="serviceTop">
                <span>{service.number}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSection section" id="contacts">
        <div className="contactCard shell">
          <div className="contactCopy">
            <p className="eyebrow"><span /> КОНТАКТЫ</p>
            <h2>Обсудим вашу технику</h2>
            <p>
              Расскажите, какая техника и что с ней происходит. Договоримся,
              когда её удобно привезти, и начнём с понятной диагностики задачи.
            </p>
            <div className="contactDetails">
              <div>
                <small>Телефон</small>
                <a href="tel:+79109151520">+7 (910) 915-15-20</a>
              </div>
              <div>
                <small>Где мы находимся</small>
                <strong>г. Обнинск</strong>
              </div>
              <div>
                <small>Приём техники</small>
                <strong>По предварительной договорённости</strong>
              </div>
            </div>
            <a className="button buttonPrimary contactButton" href="tel:+79109151520">Позвонить в мастерскую</a>
          </div>

          <div className="qrModule" aria-label="Место для будущего QR-кода">
            <div className="qrPlaceholder">
              <span>QR</span>
            </div>
            <p>QR добавим после закрепления постоянного публичного адреса страницы.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <div className="footerBrand">
            <img src="/nrd-logo.svg" alt="" />
            <span>NRD CUSTOMS</span>
          </div>
          <p>Мастерская водной, снежной и внедорожной техники</p>
        </div>
      </footer>
    </main>
  );
}
