# 🔍 Minecraft Name Checker

A powerful tool built with Node.js and TailwindCSS that automates Minecraft username availability checks through an elegant web interface. Monitor and secure your favorite Minecraft usernames as soon as they become available!

## ✨ Features

- **🔄 Real-time Monitoring** - Automated username availability checks at configurable intervals, ensuring you're the first to know when desired names become available
- **🖥️ Web Dashboard** - Clean, responsive interface built with TailwindCSS for manual username searches and status monitoring
- **🔔 Discord Integration** - Instant notifications via webhook when usernames become available, keeping you updated wherever you are
- **⚡ Low Resource Usage** - Efficiently checks username status with minimal API calls to avoid rate limiting
- **📊 Historical Data** - Track previous checks and maintain a watchlist of desired usernames

## 🔧 Requirements

- Node.js v17 or higher
- Internet connection for API requests
- Discord server (for webhook notifications)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/jojocraftde-dev/mcname.git

# Navigate to the project directory
cd minecraft-name-checker

# Install dependencies
npm install
```

### Configuration

Open the `server.js` file and configure your settings:

```javascript
// Discord webhook configuration
const DISCORD_WEBHOOK_URL = 'your-webhook-url';

// Check interval (default: 15 minutes)
const CHECK_INTERVAL = 15 * 60 * 1000;
```

### Launch

```bash
npm start
```

## 📚 Usage

### Automated Checks

The application will automatically check Minecraft username availability based on the configured interval. When a username on your watchlist becomes available:

- A notification is sent to your Discord channel via webhook
- The status is updated in the web interface
- Details are logged in the application console

### Web Interface

Access the user-friendly web interface to:

- Manually search for Minecraft usernames
- Add names to your watchlist for automated checking
- View availability history and status changes
- Configure check intervals and notification settings

The interface is fully responsive and works on both desktop and mobile devices.

## ⚙️ Advanced Configuration

```javascript
// Add these options to server.js for more customization

// Custom port (default: 3000)
const PORT = process.env.PORT || 3000;

// Maximum usernames to track
const MAX_USERNAMES = 100;

// Enable detailed logging
const VERBOSE_LOGGING = true;

// Custom check intervals for specific usernames
const PRIORITY_USERNAMES = {
  'diamond': 5 * 60 * 1000,  // Check every 5 minutes
  'emerald': 2 * 60 * 1000   // Check every 2 minutes
};

// Custom webhook messages
const WEBHOOK_MESSAGE_TEMPLATE = '✅ Username `{username}` is now available!';
```

## 🌐 Live Demo

Experience the application firsthand at our live demo: [https://mcnamechecker.onrender.com/](https://mcnamechecker.onrender.com/)

## 🔐 Security Considerations

- The application only checks username availability and does not attempt to register usernames
- No Minecraft account credentials are stored or required
- API requests follow Mojang's rate limiting guidelines to prevent account restrictions

## 📊 Performance

The checker is designed to be lightweight and efficient:
- Minimal CPU usage during idle periods
- Intelligent caching to reduce redundant API calls
- Graceful error handling for API outages

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Mojang for providing the Minecraft API
- The Node.js community for excellent documentation
- All contributors who have helped improve this project
