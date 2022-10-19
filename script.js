// const buttonEl = document.querySelectorAll(`button`);
const drumEl = document.querySelectorAll(`.drum`);

for (let i = 0; i < drumEl.length; i++) {
    drumEl[i].addEventListener('click', function () {
        alert(`Clicked`);
    });
}

// const handleClick = function () {
//     alert(`Clicked`);
// };

// buttonEl.addEventListener(`click`, handleClick);
