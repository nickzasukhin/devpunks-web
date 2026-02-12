# DevPunks – простое React SPA + Docker

Небольшое одностраничное React‑приложение с тремя разделами (Главная, Обо мне, Контакты), упакованное в Docker‑контейнер и развёрнутое на DigitalOcean Droplet за Nginx (HTTPS через Let’s Encrypt).

## Стек

- **Frontend**: React 18 (через CDN), JSX через Babel (standalone)
- **Стили**: чистый CSS (`styles/global.css`)
- **Сервер**: Nginx (внутри Docker‑контейнера)
- **Инфраструктура**: Docker, DigitalOcean Droplet, Nginx reverse proxy + HTTPS
- **Код**: GitHub репозиторий

## Структура проекта

personalweb/
├─ index.html          # Входная точка, подключение React, Babel и бандла приложения
├─ src/
│  └─ app.jsx          # React-приложение: App, навигация и три страницы
├─ styles/
│  └─ global.css       # Все стили и анимации
└─ dockerfile          # Docker-образ на базе nginx:alpine

Основные компоненты
App – корневой компонент, хранит текущую выбранную страницу в state.
Навигация (Nav) – кнопки: Главная, Обо мне, Контакты.
HomePage – главная страница с анимированным Hello Worlds.
AboutPage – раздел “Обо мне” с заглушками под стек/описание.
ContactPage – раздел “Контакты” с заглушками под email / Telegram / GitHub.

Продакшен‑деплой на DigitalOcean
Проект развёрнут на Droplet и обслуживается связкой Nginx (хост) → Docker‑контейнер:
Nginx на хосте слушает 80/443 и:
отдаёт HTTPS (сертификат Let’s Encrypt);
проксирует запросы на контейнер devpunks-web по http://127.0.0.1:8080.
Внутри контейнера Nginx отдаёт статику (наш SPA).

На дроплете – подтянуть изменения и пересобрать контейнер:
ssh root@YOUR_DROPLET_IP
cd /root/personalweb
git pull
docker stop devpunks-web || true
docker rm devpunks-web || true
docker build -t devpunks-web:latest -f dockerfile .
docker run -d --name devpunks-web -p 127.0.0.1:8080:80 devpunks-web:latest
Nginx на хосте уже настроен и продолжает проксировать на 127.0.0.1:8080, поэтому после пересборки контейнера сайт обновится по https://devpunks.io.
