const MENU = document.getElementById('menu');
let show = document.getElementById('screenShow1');
let hidden = document.getElementById('screenBlack1');
let show2 = document.getElementById('screenShow2');
let hidden2 = document.getElementById('screenBlack2');

MENU.addEventListener('click',(event) => {
    MENU.querySelectorAll("a").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
document.getElementById('left').onclick = function() {
    document.getElementById('slide').classList.toggle('slide2_show');
};
document.getElementById('right').onclick = function() {
    document.getElementById('slide').classList.toggle('slide2_show');
};

hidden.onclick = function () {
    show.style.display = "block";
};
show.onclick = function () {
    show.style.display = "none";
};

hidden2.onclick = function () {
    show2.style.display = "block";
};
show2.onclick = function () {
    show2.style.display = "none";
};
