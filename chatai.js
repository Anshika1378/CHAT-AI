document.addEventListener('DOMContentLoaded',function(){
    const botai = document.getElementById('botai');
    const userinput = document.getElementById('userinput');
    const sendBtn = document.getElementById('sendBtn');

    const responses = {
        hello :'hi, how can i assist you?',
        'how are you' : 'I am a robot but i am fine what about you?',
        'what is your name' : 'i am AI',
        'AI full form':'Yeah its great question full form is Artificial intelligence',
        'thanks':'Most Welcome',
        Bye : ' Bye ! have a great day',
        default: "I'm not sure about that. Can you ask something else?",
    };

    function appendMessage(text, className){
        const messagediv = document.createElement('div');
        messagediv.classList.add(className);
        messagediv.textContent = text;
        botai.appendChild(messagediv);
        botai.scrollTop = botai.scrollHeight;
    }

    function botreply(userText){
        const lowercaseText =  userText.toLowerCase();
        return responses[lowercaseText] || responses['default'];
    }   

    sendBtn.addEventListener('click',function(){
        const userText = userinput.value.trim();
        if(userText === '') return ;

        appendMessage(userText,'usermessage');
        setTimeout(()=>{
            const botresponse = botreply(userText);
            appendMessage(botresponse,'botmessage')
        },500)
        userinput.value = '';
    });

    userinput.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            sendBtn.click();
        }
    });

});

