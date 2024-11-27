import fetch from 'node-fetch';

export async function checkMinecraftUsername(username) {
  try {
    const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
    return response.status === 404; // True if username is available
  } catch (error) {
    console.error('Error checking username:', error);
    return false;
  }
}