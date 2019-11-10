function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

let button1 = document.getElementById("animateLeft");
button1.addEventListener("click", () => {
    animateCSS('#Tabby', 'heartBeat');
});

let button2 = document.getElementById("animateMiddle");
button2.addEventListener("click", () => {
    animateCSS('#Tabby', 'shake');
});

let button3 = document.getElementById("animateRight");
button3.addEventListener("click", () => {
    animateCSS('#Tabby', 'wobble');
});