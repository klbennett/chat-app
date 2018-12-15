let socket = io.connect('http://localhost:4000');

// get DOM elements
let message = document.getElementById('message'),
    username = document.getElementById('username'),
    btn = document.getElementById('send'),
    chatbox = document.getElementById('chatbox'),
    feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function () {
    
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
    message.value = "";
});

message.addEventListener('keypress', function () {
    socket.emit('typing', username.value);
})

// Chat events
socket.on('chat', function (data) {
    feedback.textContent = '';
    let li = document.createElement("LI");
    li.textContent += `${data.username}: ${data.message}`;
    chatbox.appendChild(li)
});

socket.on('typing', function (username) {
    let p = document.createElement("P");
    li.textContent += `${username} is typing...`;
    feedback.appendChild(p)
});