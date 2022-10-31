const drumEl = document.querySelectorAll(`.drum`);
const buttonEl = document.getElementsByName(`button`);

document.addEventListener(`keydown`, function (event) {
    sound(event.key);
    // animation(event.key);
});

document.addEventListener(`click`, function () {
    for (let i = 0; i < buttonEl.length; i++) {
        let btns = buttonEl[i];
        sound(btns);
    }
});

// const animation = function () {
//     buttonEl.classList.add(`pressed`);

//     setTimeout(function () {
//         buttonEl.classList.remove(`pressed`);
//     }, 1000);
// };

const sound = function (key) {
    switch (key) {
        case `a`:
            const tomOne = new Audio(`sounds/tom-1.mp3`);
            tomOne.play();
            break;

        case `s`:
            const crash = new Audio(`sounds/crash.mp3`);
            crash.play();
            break;

        case `d`:
            const tomTwo = new Audio(`sounds/tom-2.mp3`);
            tomTwo.play();
            break;

        case `f`:
            const kickBass = new Audio(`sounds/kick-bass.mp3`);
            kickBass.play();
            break;

        case `g`:
            const tomThree = new Audio(`sounds/tom-3.mp3`);
            tomThree.play();
            break;

        case `h`:
            const snare = new Audio(`sounds/snare.mp3`);
            snare.play();
            break;

        case `j`:
            const tomFour = new Audio(`sounds/tom-4.mp3`);
            tomFour.play();
            break;

        default:
            return key;
    }
};
