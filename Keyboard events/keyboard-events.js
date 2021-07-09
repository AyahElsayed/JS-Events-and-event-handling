// Keyboard events in the Browser
//ev.char || ev.charCode || ev.which
// keydown keyup keypress

let log = console.log;

document.addEventListener('DOMContentLoaded', init);

function init() {
    let txt = document.getElementById('txt');
    txt.addEventListener('keydown', anyKey);
    document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev) {
    // log( ev.type, ev.target);
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    log(char, tag);
    let s = String.fromCharCode(char);
    // log(s);
    switch (char) {
        case 37:
            log('LEFT');
            break;
        case 40:
            log('DOWN');
            break;
    }
}
