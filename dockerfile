FROM nginx:alpine

# Удалим дефолтную страницу nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем статику нашего приложения внутрь контейнера
COPY index.html /usr/share/nginx/html/index.html
COPY styles /usr/share/nginx/html/styles
COPY src /usr/share/nginx/html/src

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]