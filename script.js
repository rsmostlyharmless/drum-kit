// const buttonEl = document.querySelectorAll(`button`);
const drumEl = document.querySelectorAll(`.drum`);

for (let i = 0; i < drumEl.length; i++) {
    drumEl[i].addEventListener('click', function () {
        let buttons = this.innerHTML;

        switch (buttons) {
            case `a`:
                let tomOne = new Audio(`sounds/tom-1.mp3`);
                tomOne.play();
                break;

            case `s`:
                let crash = new Audio(`sounds/crash.mp3`);
                crash.play();
                break;

            case `d`:
                let tomTwo = new Audio(`sounds/tom-2.mp3`);
                tomTwo.play();
                break;

            case `f`:
                let kickBass = new Audio(`sounds/kick-bass.mp3`);
                kickBass.play();
                break;

            case `g`:
                let tomThree = new Audio(`sounds/tom-3.mp3`);
                tomThree.play();
                break;

            case `h`:
                let snare = new Audio(`sounds/snare.mp3`);
                snare.play();
                break;

            case `j`:
                let tomFour = new Audio(`sounds/tom-4.mp3`);
                tomFour.play();
                break;

            default:
                console.log(buttons);
        }
    });
}

// let tom = new Audio(`sounds/tom-1.mp3`);
// tom.play();
// this.style.color = `white`;
