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

### Deployment (DigitalOcean)

The application is deployed on a DigitalOcean Droplet.

- **IP Address**: `64.226.102.14`
- **Port**: `8080`
- **URL**: [http://64.226.102.14:8080](http://64.226.102.14:8080)

### 🛠 Maintenance & Updates

To update the application on the Droplet with the latest code from the `main` branch:

1. **SSH into the Droplet**:
   ```bash
   ssh root@64.226.102.14
   ```

2. **Update the code and restart**:
   ```bash
   cd ~/personalweb
   git pull origin main
   docker stop devpunks-web && docker rm devpunks-web
   docker build --build-arg CACHEBUST=$(date +%s) -t devpunks-web .
   docker run -d -p 8080:80 --name devpunks-web devpunks-web
   ```

3. **Verify**:
   ```bash
   docker ps
   curl -I http://localhost:8080
   ```
