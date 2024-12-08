document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    if (window.location.pathname === '/chat.html') {
        const username = localStorage.getItem('username');
        const messageContainer = document.querySelector('.message-container');
        const messageInput = document.getElementById('message-input');
        const sendMessageButton = document.getElementById('send-message');
        const exitChatButton = document.getElementById('exit-chat');

        if (!username) {
            window.location.href = 'index.html';
        } else {
            socket.emit('newuser', username); 
        }

        sendMessageButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                socket.emit('chat', { user: username, text: message });  
                displayMessage({ user: 'You', text: message }, true);
                messageInput.value = '';
            }
        });

        exitChatButton.addEventListener('click', () => {
            socket.emit('exituser', username); 
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });

        socket.on('chat', (message) => { 
            displayMessage(message);
        });

        socket.on('update', (updateMessage) => {
            displayUpdate(updateMessage);
        });

        function displayMessage(message, isOwnMessage = false) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', isOwnMessage ? 'my-message' : 'other-message');
            messageElement.innerHTML = `<div>
                <div class="name">${message.user}</div>
                <div class="text">${message.text}</div>
            </div>`;
            messageContainer.appendChild(messageElement);
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }

        function displayUpdate(updateMessage) {
            const updateElement = document.createElement('div');
            updateElement.classList.add('update');
            updateElement.innerText = updateMessage;
            messageContainer.appendChild(updateElement);
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    } else {
        const joinUserButton = document.getElementById('join-user');
        const usernameInput = document.getElementById('username');

        joinUserButton.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            if (username) {
                localStorage.setItem('username', username);
                window.location.href = 'chat.html';
            }
        });
    }
});
