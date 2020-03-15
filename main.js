const menu = document.getElementById('menu');
const sliderBox = document.getElementsByClassName('slider-box');
const left = document.getElementById('left');
const right = document.getElementById('right');
const imageActive = document.getElementById('imageBlock');
const button = document.getElementById('btn');
const closeBtn= document.getElementById('close-btn');
const buttonBlock = document.getElementById('button-block');
const image = document.getElementsByClassName('image');
let show = document.getElementById('screenShow1');
let hidden = document.getElementById('screenBlack1');
let show2 = document.getElementById('screenShow2');
let hidden2 = document.getElementById('screenBlack2');


menu.addEventListener('click',(event) => {
    menu.querySelectorAll("a").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
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
imageActive.addEventListener('click',(event) => {
    imageActive.querySelectorAll("div").forEach(el => el.classList.remove('active_image'));
    event.target.classList.add('active_image');
});
left.addEventListener("click", (event) => {
    for (let i = 0; i < sliderBox.length; i++) {
        if (sliderBox[i].classList.contains('show')) {
            if (i !== sliderBox.length - 1) {
                sliderBox[i].classList.remove('show');
                sliderBox[i + 1].classList.add('show');
                return;
            } else {
                sliderBox[i].classList.remove('show');
                sliderBox[0].classList.add('show');
                return;
            }
        }
    }
});

right.addEventListener("click", (event) => {
    for (let i = 0; i < sliderBox.length; i++) {
        if (sliderBox[i].classList.contains('show')) {
            if (i !== sliderBox.length - 1) {
                sliderBox[i].classList.remove('show');
                sliderBox[i + 1].classList.add('show');
                return;
            } else {
                sliderBox[i].classList.remove('show');
                sliderBox[0].classList.add('show');
                return;
            }
        }
    }
});


button.addEventListener('click',() => {

    let describe = document.getElementById('describe').value.toString();


    if (describe !== '') {
        document.getElementById('description').innerText = describe
    } else {
        document.getElementById('description').innerText = 'Без описания'
    }


    let subject = document.getElementById('subject').value.toString();

    if (subject !== '') {
        document.getElementById('result').innerText = subject
    } else {
        document.getElementById('result').innerText = 'Без темы'
    }

    document.getElementById('message-block').classList.remove('hidden');
});
closeBtn.addEventListener('click',() => {
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});

buttonBlock.addEventListener("click", (event) => {
    if (event.target.classList.contains('portfolio-tab')) {
        buttonBlock.querySelectorAll('.portfolio-tab').forEach(el => el.classList.remove('active'));

        event.target.classList.add('active');

        setDefaultState();

        let activeSortTab = event.target.innerHTML;

        if (activeSortTab === 'All') {
            allTabActive();
        } else {
            if (activeSortTab === 'Web Design') {
                webDesignTabActive();
            } else {
                if (activeSortTab === 'Graphic Design') {
                    graphicDesignTabActive();
                } else {
                    artworkTabActive();
                }
            }
        }
    }
});

const setDefaultState = () => {
    console.log('default');
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image.length; j++) {
            let classCurrent = `image-${j + 1}`;
            image[i].classList.remove(classCurrent);
        }
    }
};

const allTabActive = () => {
    for (let i = 0; i < image.length; i++) {
        let classCurrent = `image-${i + 1}`;
        image[i].classList.add(classCurrent);
    }
};

const webDesignTabActive = () => {
    for (let i = 0; i < image.length; i++) {
        let classCurrent = `image-${i + 2}`;
        if (i < image.length - 1) {
            image[i].classList.add(classCurrent);
        } else {
            classCurrent = 'image-1';
            image[i].classList.add(classCurrent);
        }
    }
};

const graphicDesignTabActive = () => {
    for (let i = 0; i < image.length; i++) {
        let classCurrent = `image-${i}`;
        if (i === 0) {
            image[i].classList.add('image-12')
        } else {
            image[i].classList.add(classCurrent);
        }
    }
};

const artworkTabActive = () => {
    for (let i = 0; i < image.length; i++) {
        let arrTab = [  'image-5', 'image-6', 'image-7', 'image-8',
            'image-9', 'image-10', 'image-11', 'image-12',
            'image-1', 'image-2', 'image-3', 'image-4'];
        image[i].classList.add(arrTab[i]);
    }
};