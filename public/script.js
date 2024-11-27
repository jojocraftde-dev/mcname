const socket = io();
const resultDiv = document.getElementById('result');

async function checkUsername() {
  const usernameInput = document.getElementById('usernameInput');
  const username = usernameInput.value.trim();

  if (!username) {
    resultDiv.innerHTML = 'Please enter a username';
    return;
  }

  try {
    const response = await fetch('/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username })
    });
    const data = await response.json();
    
    resultDiv.innerHTML = `
      Username: ${data.username}<br>
      Status: <span class="${data.isAvailable ? 'available' : 'taken'}">
        ${data.isAvailable ? 'AVAILABLE' : 'TAKEN'}
      </span>
    `;
  } catch (error) {
    resultDiv.innerHTML = 'Error checking username';
  }
}

socket.on('usernameStatus', (data) => {
  console.log('Username status update:', data);
});
