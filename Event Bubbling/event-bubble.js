// Event Bubbling and Propagation
//  element.addEventListener( type, func, useCapture);

let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');
let log = console.log;

let highlight = (ev) => {
    //add CSS class "gold" to the clicked element
    ev.stopPropagation();
    let target = ev.currentTarget;
    target.className = 'gold';
    reset(target);
}

let reset = (_element) => {
    setTimeout(() => {
        _element.className = '';
    }, 2000);
}

d.addEventListener('click', (ev) => {
    ev.stopImmediatePropagation();
    log('Hi I\'m a DIV');
});

[m, d, p, s].forEach((element) => {
    element.addEventListener('click', highlight);
})