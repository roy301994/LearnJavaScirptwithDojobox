//dom selection
//getElementbyId=>node
const nodeH1=document.getElementById('judul')

nodeH1.style.color='blue'
nodeH1.style.background='black'
nodeH1.innerHTML='roy naldo belajar dom '


//getElementbyTagName=>html collection di treat sebagai array
const  paragraph=document.getElementsByTagName('p')
paragraph[1].style.background='yellow'

const  h1=document.getElementsByTagName('h1')
h1[0].style.fontSize='50px'


const p4=document.querySelector('#b p')

//style.color  style.background style.fontSize
p4.style.fontFamily='calibri'


//ubah root untuk mencari element yg spesifik,pertama define rootnya dulu


//query selector ALL

const Aa=document.querySelectorAll('p')
Aa[2].innerHTML='mengganti iterasi array p ke 2'

const p2=getElementById('p2')
p2.style.color='red'


// irfan
// const nodeH1 = document.getElementById('judul');
// nodeH1.style.color='white'
// nodeH1.style.background='green'
// nodeH1.innerHTML='Bootcamp Dojobox'

// const ig = document.querySelector('#a a');
// ig.style.background='white'

// const paragraph = document.getElementsByTagName('p')

// for (let i = 0; i < (paragraph.length)-1; i++) {
//     paragraph[i].style.background='yellow';
// }

// const h1 = document.getElementsByTagName('h1')
// h1[0].style.fontSize='50px'

// const p4 = document.querySelector('#b p')
// p4.style.color='red'
// p4.style.fontSize='25px'
// p4.style.background='white'

// const Pp =  document.querySelectorAll('p')
// Pp[2].innerText='Ubah text dari js'

// const p2 = document.getElementsByClassName('p2')
// p2[0].style.color='red'

// const listul = document.querySelector('#b ul')
// const listli = document.getElementsByTagName('li')
// for (let i = 0; i < (listli.length); i++) {
//     listli[i].style.background='cyan';
//     listli[i].style.color='black'   
// }

// const div = document.getElementById('container')
// div.style.background='lime'


//jody maulana
// const judulH1 = document.getElementById ('judul');
// judulH1.style.color='white'
// judulH1.style.backgroundColor='red'
// judulH1.innerHTML='Bootcamp Dojobox brooo'

// const paragraph = document.getElementsByTagName('p')

// for (let i 0; i < (paragraph.length)-1; i++){
//     paragraph[i].style.backgroundColor='red'
// }
// const h1 = document.getElementsByTagName('h1')
// h1[0].style.fontSize='70px'

// const Pp = document.querySelectorAll('p')
// Pp[2].innerText='Di udah dari JS'

// const jojo =document.querySelector('#b ul li:nth-child(1)');
// jojo.setAttribute('id','mentor1');
// const alif =document.querySelector('#b ul li:nth-child(2)');
// jojo.setAttribute('id','mentor2');
// const shohib =document.querySelector('#b ul li:nth-child(3)');
// jojo.setAttribute('id','mentor3');
// const mentor = document.querySelector('#b p');
// mentor.style.color = 'Purple'
// mentor.style.background = 'White'
// mentor.style.fontFamily = 'Calibri'
// jojo.style.color = 'Fuchsia'
// jojo.style.background = 'White'
// jojo.style.fontFamily = 'Arial Black'
// alif.style.color = 'Orange'
// alif.style.background = 'Black'
// alif.style.fontFamily = 'Arial Black'
// shohib.style.color = 'DarkGreen'
// shohib.style.background = 'White'
// shohib.style.fontFamily = 'Arial Black'
