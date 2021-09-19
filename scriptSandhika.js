

//DOM Selection

//No 1. getElementById
//nodeRoot.DOMSelection
//document.getElementById

// const Objectjudul=document.getElementById('judul')
// Objectjudul.style.color='grey'
// Objectjudul.style.backgroundColor='orange'
// Objectjudul.innerHTML='Roy Sihotang'

//No 2. getElementByTagName

// const ObjectP=document.getElementsByTagName('p')
// ObjectP[2].style.backgroundColor='yellow'
//krn dia element collection harus pake array 

// for (i=0;i<ObjectP.length;i++){
//     ObjectP[i].style.backgroundColor='lightblue'
// }

//No 3. getElementsbyClassName

// const ObjectP1=document.getElementsByClassName('p1')
// ObjectP1[0].innerHTML='berhasil dirubah'

//No 4.querySelector
//tag name cek ada,class name tidak ada,id tidak ada

//Cara 1
// const ObjectP4=document.querySelector('#b p')
// ObjectP4.style.backgroundColor='white'
// ObjectP4.style.fontSize='10px'

//Cara 2
// const ObjectP4=document.querySelectorAll('#b p')[0]
// ObjectP4.style.color='blue'


// const p2=document.querySelector('.p2')

//ubah item (lebih spesifik)
// const ObjectItem2=document.querySelector('section#b ul li:nth-child(2)')
// ObjectItem2.style.fontSize='25px'

// const ObjectP1=document.querySelector('p')
// ObjectP1.innerHTML='merubah elemen pertama saja'

//query selector harus dibuat root nya di parameter ,kalau tidak maka dia akan merubah element pertama yang dia temukan


//No 5 Query Selector All
// const ObjectX=document.querySelectorAll('p')// ===> hasil nodelist
// // ObjectX.style.color='yellow'//diketik ga akan keluar hasil krn nodelist harus pake indeks
// ObjectX[0].style.color='pink'
// const ObjectY=document.getElementsByTagName('p')// ===> hasil html collection
// //keduanya sama2 menghasilkan array
// ObjectY[2].style.color='pink'


//#cara 1 ambil object judul
// const ObjectJudul=document.getElementById('judul')
// ObjectJudul.innerHTML='<em>roy cool</em>'

// const ObjectSectionA=document.querySelector('section#a ')
// ObjectSectionA.innerHTML='ETH to the moon'

//#cara 2 ambil object judul
// const ObjectJudul=document.querySelector('#judul')
// ObjectJudul.style.backgroundColor='salmon'

//Cara 3 ambil object judul
// const objectJudul=document.getElementsByTagName('h1')[0]
// objectJudul.setAttribute('nama','roy')

//cara ambil href
// const a=document.querySelector('section#a a')
// a.setAttribute('name','roy')


//class-list (toggle) :seperti saklar
// document.body.classList.toggle('biru-muda')
//kelas biru muda didalam css//


//5.DOM Manipulasi node



//create elemen dan text baru
// const pBaru =document.createElement('p')
// const textBaru=document.createTextNode('new paragraf')
// // //simpan text kedalam paragraf
// pBaru.appendChild(textBaru)

// // //simpan p baru diakhir section a
// const sectionA=document.getElementById('a')
// sectionA.appendChild(pBaru)



// 1 buat element dan textnya
// const liBaru=document.createElement('li')
// const textLiBaru=document.createTextNode('element Baru')
// liBaru.appendChild(textLiBaru)
// //Menempatkan elemen ke document
// //2.cari tau parent dari li:ul
// //3.cari tau element sebelum element yg pengen kita insert :item 2

// //cara 2
// const ul=document.querySelector('section#b ul')
// //cara 3.a
// // const li2=document.querySelector('section#b ul li:nth-child(2)')
// //cara 3.b
// const li2=ul.querySelector('li:nth-child(2)')
// //cara 4
// ul.insertBefore(liBaru,li2)


// remove link
// 1.cari tau parentnya siapa =>section a
// 2.cari tau elemen yg diremove
// cara 1.1 :const sectionA=document.getElementById('a')
// cara 1.2 :
// const sectionA=document.querySelector('section#a')
// // cara 2.1 :
// const parameterA=document.querySelector('section#a a')
//cara 2.2 :
// const parameterA=document.getElementsByTagName('a')[0]

// sectionA.removeChild(parameterA)


// //replace child

// //1. tangkap element2 yg dibutuh kan yaitu parrent dan element yg ingin diganti
// const sectionB=document.querySelector('section#b')
// const p4=sectionB.querySelector('p')//pertama kali dia temukan adalah p
// // //kalau buatnya document.querySelector('p')bakal salah krn pertama kali p ditemukan di section a paragraf1
// // //tapi kalau kita batasi scopenya bukan dari document tapi dari section b

// // //2. Bikin elemen baru
// const h2Baru=document.createElement('h2')
// const texth2Baru=document.createTextNode('s baru')
// h2Baru.appendChild(texth2Baru)

// // //3.lakukan replace

// sectionB.replaceChild(h2Baru,p4)

// h2Baru.style.color='green'


// const p2=document.querySelector('.p2')


// function ubahwarna() {
//     p2.style.backgroundColor='red'
// }
// p2.onclick=ubahwarna


//add event listerner
//1.tangkap paragraf yang akan kita klik
// const p4=document.querySelector('section#b p')
// p4.addEventListener('click',function(){
//     alert('ok')
// })

// const p4=document.getElementsByTagName('p')[3]

// p4.addEventListener('dblclick',function(){
//     p4.style.color='red'
// })


// const p3=document.getElementsByTagName('p')[2]


// p3.addEventListener('click',function(){
//     if(p3.style.backgroundColor == 'orange'){
//         p3.style.backgroundColor = 'white';
//     }else{
//         p3.style.backgroundColor = 'orange'
//     }
// });








//>>setiap klik akan buat element baru<<
//0 tangkap paragraph yg ingin dilkilk
//01 buat template function addevenlisterner
//1 .tangkap dulu parentnya yaitu ul
//2.lalu buat element dan text barunya
//3.kita rangkai
//4.simpan di dalam ul


// const p4=document.querySelector('section#b p')
// p4.addEventListener('click',function(){
//     const ul=document.querySelector('section#b ul')
//     const newItem=document.createElement('li')
//     const TextnewItem=document.createTextNode('Item yg baru')
//     newItem.appendChild(TextnewItem)
//     ul.appendChild(newItem)

// })

const button=document.querySelector('section#c button')
const body=document.getElementsByTagName('body')[0]


button.addEventListener('click',function(){
       body.style.backgroundColor='grey'
       
    
    })



    // button.addEventListener('click',function(){
    //     doc.style.backgroundColor='yellow'
        
     
    //  })


    

