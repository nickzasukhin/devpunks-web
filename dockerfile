FROM nginx:alpine

# Install git to clone the repository
RUN apk add --no-cache git

# Create a build argument to bust the cache (pass current timestamp or similar)
ARG CACHEBUST=1

# Clone the repository into a temporary directory
WORKDIR /app
RUN git clone https://github.com/nickzasukhin/devpunks-web.git .

# Move files to nginx directory
RUN rm -rf /usr/share/nginx/html/* && \
    cp -r index.html src styles /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]