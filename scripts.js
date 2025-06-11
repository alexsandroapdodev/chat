  const input = document.querySelector('.input-wrapper input');
  const sendButton = document.querySelector('.send-button');
  const chat = document.querySelector('.chat');

  function enviarMensagem() {
    const texto = input.value.trim();
    if (texto === '') return;

    const messageGroup = document.createElement('div');
    messageGroup.classList.add('message-group', 'you');

    const timestamp = document.createElement('p');
    timestamp.classList.add('timestamp');
    const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestamp.textContent = `Você - ${hora}`;

    const message = document.createElement('p');
    message.classList.add('message', 'message-green');
    message.textContent = texto;

    messageGroup.appendChild(timestamp);
    messageGroup.appendChild(message);

    chat.appendChild(messageGroup);

    chat.scrollTop = chat.scrollHeight;

    input.value = '';
  }

  sendButton.addEventListener('click', enviarMensagem);

  input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      enviarMensagem();
    }

      const closeButton = document.querySelector('.close-button');
  const chatWrapper = document.querySelector('.chat-wrapper');

  closeButton.addEventListener('click', () => {
    chatWrapper.style.display = 'none';
  });
  });
