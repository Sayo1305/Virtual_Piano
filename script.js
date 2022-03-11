console.log("js is working ...")
const WHITE_KEYS = ['1','2','3','4','5','6','7','8','9','q', 'w', 'e', 'r', 't', 'y', 'u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',','];
const BLACK_KEYS = ['!','@','$','%','^','*','(','Q','W','E','T','Y','I','O','P','S','D','G','H','J','L','Z','C','V','B'];
let record = document.querySelector('[data-record]');
let save = document.querySelector('[data-save]');
let key_display = document.querySelector('[data-key-display]')
let input_ke = document.getElementById("input_key");
let dis = document.querySelector('.display_note');
let note = document.querySelectorAll('[data-note]');
const whiteKeys = document.querySelectorAll('.white_note');
const blackkeys = document.querySelectorAll('.black_note');
var check = false;


function playnote(key)
{
    dis.innerHTML = key.dataset.note;
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.playbackRate = 2;
    noteAudio.play();
    key.classList.add('active');
    setTimeout(function(){key.classList.remove('active');},100);
}

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    if (whiteKeyIndex > -1) playnote(whiteKeys[whiteKeyIndex])
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
    if (blackKeyIndex > -1) playnote(blackkeys[blackKeyIndex])
})

note.forEach(n  =>{
    //console.log(n.dataset.note);
    n.addEventListener('click',()=> playnote(n));
})

function change()
{
    let letter = document.querySelectorAll('[data-letter]');
    if(key_display.value == "OFF")
    {
        letter.forEach((l) => 
        {
            l.classList.remove("not_dis");
        });
        key_display.value = "ON";
    }
    else{
        letter.forEach((l) => 
        {
            l.classList.add("not_dis");
        });
        key_display.value = "OFF";
    }
}
key_display.addEventListener('click',change);

