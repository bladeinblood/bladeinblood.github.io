const massban_btn = document.getElementsByClassName('massban_button')[0];
const test1_btn = document.getElementsByClassName('test1_button')[0];
const test2_btn = document.getElementsByClassName('test2_button')[0];

let antievil_preview = document.getElementsByClassName('antievil-preview-img')[0];
let mode = 'massban';

massban_btn.onclick = () => {
    if (mode != 'massban') {
        mode = 'massban';
        antievil_preview.setAttribute('src', 'img/functions/massban.png');
    };
}

test1_btn.onclick = () => {
    if (mode != 'test1') {
        mode = 'test1';
        antievil_preview.setAttribute('src', 'img/functions/test1.png');
    };
}

test2_btn.onclick = () => {
    if (mode != 'test2') {
        mode = 'test2';
        antievil_preview.setAttribute('src', 'img/functions/test2.png');
    };
}