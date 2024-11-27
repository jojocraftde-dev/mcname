// server.js
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { checkMinecraftUsername } from './utils/usernameChecker.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const DISCORD_WEBHOOK_URL = 'im-not-leakin-my-webhook :)';
const CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes

app.use(express.static('public'));
app.use(express.json());

async function sendDiscordNotification(username, isAvailable) {
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `Minecraft Username Check for ${username}: ${isAvailable ? '🟢 AVAILABLE' : '🔴 TAKEN'}`
      })
    });
  } catch (error) {
    console.error('Discord webhook error:', error);
  }
}

async function monitorUsername(username) {
  const isAvailable = await checkMinecraftUsername(username);
  await sendDiscordNotification(username, isAvailable);
  io.emit('usernameStatus', { username, isAvailable });
  return isAvailable;
}

app.post('/check', async (req, res) => {
  const { username } = req.body;
  const isAvailable = await checkMinecraftUsername(username);
  res.json({ username, isAvailable });
});

io.on('connection', (socket) => {
  socket.on('checkUsername', async (username) => {
    const isAvailable = await checkMinecraftUsername(username);
    socket.emit('usernameStatus', { username, isAvailable });
  });
});

// Initial monitoring for a specific username
monitorUsername('mackenziepaw');

// Periodic check
setInterval(() => monitorUsername('mackenziepaw'), CHECK_INTERVAL);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});