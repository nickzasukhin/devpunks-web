const { useState } = React;

const PAGES = {
  HOME: "home",
  ABOUT: "about",
  CONTACT: "contact",
};

const Nav = ({ currentPage, onChange }) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        DEV<span>PUNKS</span>
      </div>
      <div className="nav-links">
        <button
          className={
            "nav-link" +
            (currentPage === PAGES.HOME ? " nav-link--active" : "")
          }
          onClick={() => onChange(PAGES.HOME)}
        >
          Главная
        </button>
        <button
          className={
            "nav-link" +
            (currentPage === PAGES.ABOUT ? " nav-link--active" : "")
          }
          onClick={() => onChange(PAGES.ABOUT)}
        >
          Обо мне
        </button>
        <button
          className={
            "nav-link" +
            (currentPage === PAGES.CONTACT ? " nav-link--active" : "")
          }
          onClick={() => onChange(PAGES.CONTACT)}
        >
          Контакты
        </button>
      </div>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="card">
      <div className="card-glow" />
      <div className="card-inner">
        <div className="pill">
          <span className="pill-dot" />
          Online
        </div>
        <h1 className="page-title">
          <span className="hello-word">Hello Worlds</span>
          <span className="hello-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </h1>
        <p className="page-subtitle">Creative dev space</p>
        <p className="page-text">
          Небольшой уголок сети, где можно экспериментировать с идеями, анимацией
          и интерфейсами. Здесь будет расти личный сайт, проекты и вся магия
          вокруг devpunks.io.
        </p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="card">
      <div className="card-glow" />
      <div className="card-inner">
        <h1 className="page-title">Обо мне</h1>
        <p className="page-subtitle">Кто стоит за devpunks</p>
        <p className="page-text">
          Здесь будет история о тебе: чем занимаешься, чем увлекаешься, какие
          технологии любишь и что хочешь строить дальше. Сейчас это просто
          заглушка, которую можно будет заменить на реальный текст.
        </p>
        <div className="stack">
          <span className="chip">React</span>
          <span className="chip">TypeScript</span>
          <span className="chip">Node.js</span>
          <span className="chip">Docker</span>
          <span className="chip">DevOps vibes</span>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="card">
      <div className="card-glow" />
      <div className="card-inner">
        <h1 className="page-title">Контакты</h1>
        <p className="page-subtitle">Как связаться</p>
        <p className="page-text">
          Здесь можно будет указать реальные контакты: почту, Telegram, ссылки
          на GitHub и другие платформы. Пока это просто заготовка под будущий
          раздел.
        </p>
        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">
              <a href="mailto:you@devpunks.io">you@devpunks.io</a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Telegram</span>
            <span className="contact-value">
              <a href="https://t.me/your_handle" target="_blank">
                @your_handle
              </a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">
              <a href="https://github.com/your-github" target="_blank">
                github.com/your-github
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState(PAGES.HOME);

  let content = null;
  if (page === PAGES.HOME) content = <HomePage />;
  else if (page === PAGES.ABOUT) content = <AboutPage />;
  else if (page === PAGES.CONTACT) content = <ContactPage />;

  return (
    <div className="app">
      <div className="shell">
        <Nav currentPage={page} onChange={setPage} />
        <main className="content">{content}</main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

