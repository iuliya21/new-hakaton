const box = document.querySelectorAll('.square');
const cover = document.querySelector('.cover');
let stack = [];

function deleteColor (arr) {
    let time = 500;
    cover.classList.add('cover-on');
    arr.forEach((item) => {
        setTimeout(() => {
            item.classList.remove('color-active');
        }, time);
        time += 500;
    });
}

box.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.target.classList.add('color-active');
        if (!stack.includes(evt.target)) {
            stack.push(evt.target);
        }
    })
})

document.addEventListener('click', () => {
    if (stack.length === 7) {
        deleteColor(stack);
        stack = [];
        setTimeout(() => {
            cover.classList.remove('cover-on');
        }, 3500);
    }
})