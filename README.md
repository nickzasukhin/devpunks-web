# DevPunks Animation

A high-performance, lightweight landing page featuring dynamic Lottie animations with a macOS-inspired theme switcher.

## � Key Features

- **Theme Switching**: Seamlessly toggle between Light and Dark modes.
- **Dynamic Lottie Animations**: Automatic switching between optimized logo animations based on the active theme.
- **Zero-Build Architecture**: Uses React 18, Babel, and DotLottie via CDN for instant browser-side execution.
- **Dockerized Deployment**: Served via Nginx on Alpine Linux for maximum efficiency.

## 📂 Project Structure

```text
.
├── index.html            # Main entry point (Styles, React Logic, UI)
├── dockerfile            # Nginx production configuration
├── README.md             # Documentation
└── src
    └── assets
        ├── dark_dev_punk_logo.json    # Animation for Light theme
        └── white_dev_punks_logo.json   # Animation for Dark theme
```

## 🛠 Tech Stack

- **Frontend**: React 18 (via unpkg CDN)
- **Compiler**: Babel Standalone (In-browser JSX compilation)
- **Animation**: [DotLottie Player](https://dotlottie.io/)
- **Server**: Nginx (Alpine)

## 📦 Local Development

To run the project locally using Docker:

1. **Build the image**:
   ```bash
   docker build -t devpunks-web .
   ```

2. **Run the container**:
   ```bash
   docker run -d -p 8080:80 --name devpunks-web devpunks-web
   ```

3. **Access**: Open [http://localhost:8080](http://localhost:8080)

## 🌐 Deployment (DigitalOcean)

The application is deployed on a DigitalOcean Droplet.

- **URL**: [http://64.226.102.14:8080](http://64.226.102.14:8080)
- **Host**: `64.226.102.14`

### � Updating the Production Server

To sync the latest changes from the `main` branch to the production server:

1. **Connect via SSH**:
   ```bash
   ssh root@64.226.102.14
   ```

2. **Execute Update Pull**:
   ```bash
   cd ~/personalweb
   git pull origin main
   docker stop devpunks-web && docker rm devpunks-web
   docker build --build-arg CACHEBUST=$(date +%s) -t devpunks-web .
   docker run -d -p 8080:80 --name devpunks-web devpunks-web
   ```
