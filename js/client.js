const socket = io('http://localhost:7000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = Document.querySelector(".container")

const name = prompt("enter your name to join");
socket.emit('new-user-joined', name)