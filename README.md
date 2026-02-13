# DevPunks Animation

Simple React application serving a full-screen Lottie animation. Built with Docker and Nginx.

## 🛠 Features

- **Frontend**: React 18 (via CDN), Babel Standalone (in-browser compilation).
- **Animation**: Uses `dotlottie-player` Web Component to render JSON animations.
- **Styling**: Inline CSS for layout and responsiveness.
- **Infrastructure**: Lightweight Docker container based on Nginx Alpine.

## 📂 Project Structure

- `index.html`: **Main entry point**. Contains the React application logic, styles, and imports dependencies via CDN.
- `src/assets/`: Contains `animation.json`, the source file for the Lottie animation.
- `dockerfile`: Configuration to serve the static site via Nginx.
- `styles/global.css`: (Unused in current version) Contains unused global styles.
- `src/app.jsx`: (Unused in current version) Contains alternate component implementation.

## 🚀 Running with Docker

The project is designed to be run as a container.

### Build the Image
```bash
docker build -t devpunks-web .
```

### Run the Container
Maps port **8080** on your host machine to port **80** in the container.

```bash
docker run -d -p 8080:80 --name devpunks-web devpunks-web
```

Open [http://localhost:8080](http://localhost:8080) to view the animation.

### Development inside Container

To update the running container with new code without rebuilding:

```bash
# Verify container is running
docker ps

# Update files on host, then rebuild or restart container as needed given it copies files at build time.
# For hot-reloading development, mounting volumes would be required, but current setup is static.
```
