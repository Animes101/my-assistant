var sms=document.querySelector('#what');
var send=document.querySelector('#answer');
var ans=document.querySelector('#text');

send.addEventListener('click',function(){
    let c=sms.value.toLowerCase();
    let reply='';

    if(c.match('hi')){
        reply="hello, I am Animesh Burman's assistant. Do you want to know something?";

    }else if(c.match('how is he')){
        reply='Yes there is good.'

    }else if(c.match('what does he do')){
        reply='She is learning web design and development'

    }else if(c.match('does he have a girlfriend')){
        reply=" No, he doesn't have a girlfriend. Because he has not found a person like love, when he finds it, he will fix it..";

    }else if(c.match('thanks')){
        reply='Thank you for asking.............I am always ready to answer questions........Welcome'

    }else{
        reply='You did not ask any questions!';

    }

    ans.innerHTML=reply;
    var mute=new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(mute);
   
})