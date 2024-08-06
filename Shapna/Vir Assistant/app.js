const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Morning");
    } else if (hr == 12) {
        speak("Good Noon");
    } else if (hr > 12 && hr < 18) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}

window.addEventListener('load', () => {
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    content.textContent = transcript;
    handleQuery(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function handleQuery(message) {
    const speech = new SpeechSynthesisUtterance();

    if (message.includes('time')) {
        const time = new Date().toLocaleTimeString();
        speech.text =document.getElementById('userInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        function sendMessage() {
            const userInput = document.getElementById('userInput').value.trim();
            if (userInput) {
                addMessage(userInput, 'user');
                respondToUser(userInput);
                document.getElementById('userInput').value = '';
            }
        }
        
        function addMessage(text, sender) {
            const chatbox = document.getElementById('chatbox');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender);
        
            const textDiv = document.createElement('div');
            textDiv.classList.add('text');
            textDiv.textContent = text;
        
            messageDiv.appendChild(textDiv);
            chatbox.appendChild(messageDiv);
            chatbox.scrollTop = chatbox.scrollHeight;
        }
        
        function respondToUser(userInput) {
            let response = "I'm sorry, I didn't understand that.";
            if (userInput.toLowerCase().includes('hello')) {
                response = "Hi there! How can I help you today?";
            } else if (userInput.toLowerCase().includes('weather')) {
                response = "I'm unable to fetch real-time weather updates at the moment.";
            } else if (userInput.toLowerCase().includes('time')) {
                response = `The current time is ${new Date().toLocaleTimeString()}.`;
            }
        
            setTimeout(() => {
                addMessage(response, 'assistant');
            }, 1000);
        }
         `The time is ${time}`;
    } else if (message.includes('date')) {
        const date = new Date().toLocaleDateString();
        speech.text = `Today's date is ${date}`;
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speech.text = `Searching for ${message} on Google.`;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

// Optional: To handle speech recognition errors
recognition.onerror = (event) => {
    speak('Sorry, I did not catch that. Could you please repeat?');
};
