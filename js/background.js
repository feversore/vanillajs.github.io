const bg = {
  color : [
    '#CDD5C1',
    '#123352',
    '#1d5372',
    '#3885a2',
    '#8dcdba',
    '#eee07a',
    '#f0eebc',
    '#e6756f',
    '#ee8049',
    '#facf62',
    '#291c6b',
    '#4a257d',
    '#884186',
    '#111642',
    '#011548'
  ],
  image : [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg'
  ]
};

const container = document.querySelector('.container');
const watch = document.querySelector('.watch-face-inner');
const thumb = document.querySelector('.user-thumb');
const image = document.createElement('img');

const cIdxStart = Math.floor(Math.random() * bg.color.length);
const cIdxmid = Math.floor(Math.random() * bg.color.length);
const cIdxEnd = Math.floor(Math.random() * bg.color.length);
const bIdx = Math.floor(Math.random() * bg.image.length);

// console.log(cIdxStart);
// console.log(cIdxEnd);
// console.log(bIdx);

const bgColor1 = bg.color[cIdxStart];
const bgColor2 = bg.color[cIdxmid];
const bgColor3 = bg.color[cIdxEnd];
const thumbImg = bg.image[bIdx];

image.src = `../vanillajs.github.io/images/${thumbImg}`;
thumb.appendChild(image);


console.log(thumbImg);

container.style.backgroundImage = `linear-gradient(to bottom, ${bgColor1} 0%, ${bgColor2} 50%, ${bgColor3} 100%)`;

watch.style.backgroundImage = `url(../vanillajs.github.io/images/${thumbImg})`;

// thumb.style.backgroundImage = `linear-gradient(#fff, #fff), linear-gradient(to right, ${bgColor1} 0%, ${bgColor2} 80%, ${bgColor3} 100%)`;