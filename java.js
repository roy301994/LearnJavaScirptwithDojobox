// var namapengunjung=prompt('silahkan masukan nama anda:','andhika')

// if (namapengunjung=='andhika' )
// {document.write ('nama anda sudah sesuai')}
// else {document.write ('nama anda tidak sesuai')}


// var nilai=prompt('masukan nilai anda :')
// if (nilai% 2 == 0 ) {
//     document.write(nilai + 'nilai yang anda masukan merupakan bilangan genap')
// }else if (nilai %2 > 0 ){
//     document.write(nilai + 'nilai yang anda masukan merupakan bilangan ganjil')
// } else {
//     document.write(nilai + 'nilai yang anda masukan bukan merupakan bilangan')}


// var grade=parseInt(prompt('contoh2 nilai mahasiswa','0-100'))
// switch (true){
//     case grade >=90 :
//         document.write('selamat anda mendapat A')
//         break
//     case grade >=80 :
//         document.write('selamat anda mendapat B')
//         break
//     case grade >=70 :
//         document.write('selamat anda mendapat C')
//         break
//     case grade >=60 :
//         document.write('selamat anda mendapat D')
//         break
//     default:
//         document.write('anda useless')

// }

// var ulang = 0

// while (ulang <= 7 ){
//     document.write ('berulang sampe 8 kali'+ '<br>')
//     ulang =ulang +3
// }



// var random2=(Math.ceil()*10)
// var guest=prompt('masukan tebakan anda','0-100')
// for (y=1; y<=3 && guest!=random2;y++){
// var hasil=''

// if (guest >random2) {
//     console.log ('nilai anda ketinggian')
// }else if (guest < random2){
//     console.log ('nilai anda kerendahan')
// }else if (guest===random2){
//     console.log ('anda benar')
// }
// alert ('hasilnya adalah   ' + hasil)
// }


// var ulang=1
// for (ulang;ulang<=10;ulang++){
//     document.write ('dsa')
// }


// var siswa =1;

// for (siswa;siswa<=10;siswa++){
//     if (siswa <= 5) {
//         document.write ('siswa dengan nomor induk'+' '+ siswa +' '+'member TA vista','<br>')
//     }else { 
//         document.write ('siswa dengan nomor induk'+' '+ siswa +'  '+'member TA intan','<br>')
//     }
// }

// var myfunction= function(){
//     alert ('test')
// }
// var myArr= [12343,'roy',myfunction,[1,2,3,2,6]]
// document.write ( myArr[2])



// var buah= ['apel','pisang','mangga','anggur']
// // document.write(buah.join('-'))
// // buah.push('durent') //menambah array di akhir
// // document.write(buah.join('-'))
// // buah.pop()//menhilangkan array terakhir
// // document.write(buah.join('-'))
// // buah.unshift('jambu') // menambah new array diawal
// // document.write(buah.join('<br>'))
// // buah.shift() //menghilangkan array diawal
// // document.write(buah.join('<br>'))

// //splice menyisipkan array ditengah2

// // buah.splice(2,0,'anggur2','anggur 3') //disisipkan di array ke berapa dan ada ga yg mau dihapus 
// // document.write(buah.join('<br>'))


// // buah.splice(2,1,'anggur2','anggur 3') //disisipkan di array ke berapa dan buah yg dihapus adalah array setelah indeks 2 dan yang dihapus 1 saja kalau pengen 2 berarti indeks setelah 2 akan dihapus sebanyak 2
// // document.write(buah.join('<br>'))

// buah.push('mangga','lemon','jeruk')
// document.write(buah.join('<br>'))



//perulangan pada array
//for each tidak mengembalikan arrya kalau map mengembalikan array
// var tes =prompt('input your number',2)

// // let x = myFunction(4, 3,2);   

// function myFunction(a, b,c) {
//   return tes * tes*tes;            
// }

// alert ('welcome its time to use vsc to learn how to use function properly')
// var a=parseInt(prompt('nilai pertama'))
// var b=parseInt(prompt('nilai kedua'))
// var c=parseInt(prompt('nilai ketiga'))
// var volumeA
// var volumeB
// var volumeC


// function nilaitambah (a,b,c){
//     var volumeA
//     var volumeB
//     var volumeC  
//     volumeA=a*a*a
//     volumeB=b*b*b
//     volumeC=c*c*c
//     total = volumeA+volumeB+volumeC
//     return total
// }

// document.write ('berikut adalah nilai yang anda cari berdasar nilai input yang diberikan '+ nilaitambah(a,b,c))






//penumpang naik =>tambah penumpang
//parameter : nama penumpang,array penumpang
//penumpang turun => hapus penumpang


//rule
//1.duduk berurut 2.duduk di kursi yg baru kosonmg

// var penumpang =[]
// var tambahpenumpang = function (namapenumpang,penumpang) {
    
//     return penumpang.push()
// }



// var tambahpenumpang = function (namapenumpang,penumpang){
//     if (penumpang.length == 0) {
//         penumpang.push(namapenumpang)
//         return penumpang
//     } else {
//         for (i=0;i<penumpang.length;i++){
//             if (penumpang[i]==undefined){
//                 penumpang[i]=namapenumpang
//                 return penumpang
//             }else if (penumpang[i]==namapenumpang){
//                 console.log ('namapenumpang tesebut sudah ada')
//                 return penumpang
//             }
            
//             else if (i==penumpang.length-1){
//             penumpang.push (namapenumpang)
//             return penumpang
//             }
//         }
//     }
// }
// var penumpang =['roy','edgar','aldi']
// var hapuspenumpang =function(namapenumpang,penumpang){
//     if ( penumpang.length==0) {///jika angkot kosong tampilkan pesan
//         console.log ('angkot kondisi kosong')    
//         return penumpang
//     } else {  ///jika angkot ada isinya maka perlu ditelusuri
//         for (i=0;i<penumpang.length;i++){
//             if (penumpang[i]==namapenumpang){ //jika nama penumpang ada setelah ditelusuri  
//                 penumpang[i]=undefined
//                 return penumpang
//             }else if (i==penumpang.length-1) {  //jika nama penumpang tidak ada setelah ditelusuri sampai akhir maka kasih pesan
//             console.log(namapenumpang+'nama penumpang diatas tidak naik angkot')
//             return penumpang
//             }    
//         }
//     }   


// var namamhs='roy'
// var umurmhs =31
// var lulus = true
// var ipsemester=[2.9,3.10,3.25,2.88,3.04]

// var mahasiswa=['roy',true,[2.9,3.10,3.25,2.88,3.04]]

// var ipkkumulatif= function (ipsemseter){
//     var total=0
//     for (i=0;i<ipsemester.length;i++) {
//         total+=ipsemester[i]
//     }
//     return total/ipsemester.length 
// }


// // document.write ('nilai ipk anda adalah' + '<br>'+ipkkumulatif())
// document.write('nilai ipk'+''+ ipkkumulatif(mahasiswa[2]))


//function declaration

// function halo (){
//  console.log ('abc')

// }

// halo()

//obj declaration



// function Angkot (sopir,trayek,penumpang,kas ){
//     this.sopir=sopir
//     this.trayek=trayek
//     this.penumpang=penumpang
//     this.kas=kas    
//     this.penumpangnaik=function(namapenumpang){
//         this.penumpang.push(namapenumpang)
//         return this.penumpang
//     }  
//     this.penumpangturun=function(namapenumpang,bayar){
//         if (this.penumpang.length==0){
//             alert ('angkot masih kosong')
//             return false
//         }
//         for (i=0;i<this.penumpang.length;i++){
//             if (this.penumpang[i]==namapenumpang){
//                 this.penumpang [i]=undefined
//                 this.kas += bayar
//                 return this.penumpang
//             }

//         }


//     }

    

// }


// angkot1=new Angkot ('roy','bandung',[],0)
// angkot2=new Angkot ('dimas',['brebes','rengasdengklok'],0,200)



// var mhs={
//     nama:'roy',
//     nik:98123,
//     email:'roy@SpeechGrammarList.com',
//     getname : function (){

//         document.write ('nama saya adalah'+ this.nama)
//     },
//     getemail : function (){

//         document.write ('nama saya adalah'+ this.email)
//     }
// } 


//versi class
// class Mahasiswa {
//     constructor(nama,energi){
//         this.nama=nama 
//         this.energi=energi
//     }

//     makan (porsi){
//         this.energi+=porsi
//         return `Selamat makan ${this.nama}!`
//     }

//     main (jam){
//         this.energi-=jam
//         return `Selamat main ${this.nama}!`
//     }

//     tidur (jam){
//         this.energi+=jam
//         return `Selamat tidur ${this.nama}!`
//     }


// }

// let roy = new Mahasiswa ('roy',10)

// function init() {
//     let nama ='roy'
//     function tampilNama(){
//         console.log(nama)
//     }
//     console.log(tampilNama())

// }
// console.log (init())





//arrwow funtion

// let tampilNama=(nama)=>{
//     return `halo saya adalah ${nama}`

// }

// // console.log (tampilNama('roy'))
// tampilNama('roy')


// let tampilNama =nama=> `Halo saya adalah ${nama}`
// console.log (tampilNama('roy'))

// ===============================================


// function sebagai parameter (tidak boleh ada parameter di funtion call back)

//pemanggilan function diluar funtion parent

// function kuliah (materi,goodluck){
//     console.log (`selamat belajar ${materi} jangan lupa makan  `)
//     goodluck()
    
//     }
    
//     function goodluck (){
//        console.log (`percobaan pertama higher order  `)
//     }
    

// kuliah ('phyton',goodluck)



// / ===============================================


// parameter tidak sebagai function tapi dia ada didalam function
//pemanggilan funtion didalam funtion,tidak perlu memasukan kedalam paramter cukup menggunakan return


// function kuliah (materi){
//     return function (nama) {
//         console.log (`halo saya ${nama} saaat ini sedang belajar ${materi}`)
//     }
// }

// //wajib membuat variabel baru karena ada 2 paramter di 2 fungsi yang berbeda,paramter pertama ditunjukan untuk function parent
//  let belajar = kuliah ('javascript')
//  belajar ('roy')


// ====================================================



// let angka = [-1,8,9,1,4,-5,-4,3,2,9]
// let array2 =[]

// // //  rules filter angka diatas 3

// let filter = function (){
//     // let a =2
//     for (i=0 ;i<angka.length;i++) {
//         if ( angka [i] >= 3) {
//             array2.push(angka[i])
//         }
//     }
//     return array2

//  }

//  console.log (filter())






// ================================

// for ( i=0 ;i<angka.length;i++) {
//     if ( angka [i] >= 3) {
//         array2.push(angka[i])
//     }
// }
// console.log (array2)

// ============================


// let angka = [-1,8,9,1,4,-5,-4,3,2,9]
// //paramter a merupakan representasi tiap2 element yang ada di array angka

//  const array2 = angka.filter (function (a){
//      return a>=3
//  }) 

// console.log (array2)




//menambah buku
//meminjam buku
//mengembalikan buku
//mengganti buku

//1.buat pilihan menu
//2.membuat sebuah rak dengan array yg memuat 5 buku
//dengan funtion tambahkan 5 buku dengan judul bebas
//3.sebuah function bila terdapat buku dipinajm ,tempat yg ditinggalkan buku tersebut dibiarkan kosong
//4.membuat function mengembalikan buku sesuai dengan rak kosong sesuai nomor 3
//5.membuat funtion pustakawan  mengganti koleksi buku yg sudah ada



// var menu=parseInt(prompt('Selamat datang di Perpustakaan Dojobox Silahkan pilih aktivitas yang ingin anda lakukan \n 1. Menambah buku \n 2. Meminjam buku \n 3. Mengembalikan buku \n 4. Mengganti Buku' ,'1-4'))
// var namaBuku= prompt ('masukan nama buku')

// switch (menu){
//     case 1 :
//         document.write('Anda ingin menambah buku')
//         break
//     case 2 :
//         document.write('Anda ingin meminjam buku')
//         break
//     case 3 :
//         document.write('Anda ingin mengembalikan buku')
//         break
//     case 4 :
//         document.write('Anda ingin menggganti buku')
//         break
//     default:
//         document.write('menu utama')
//         console.log(rakBuku)

// }
// let rakBuku = []

// var tambahBuku= function (namaBuku,rakBuku){
//     if (rakBuku.length==0){
//         rakBuku.push(namaBuku)
//     return rakBuku
//     }
//     else {
//         for (var i=0;i<rakBuku.length;i++){
//             if (rakBuku[i]==undefined){
//                 rakBuku[i]=namaBuku
//                 return rakBuku
//             }
//         else if ( rakBuku[i]==namaBuku){
//             console.log (`Buku ${namaBuku} sudah ada di rak buku` )

//             return rakBuku
//         }
//         else if (i ==rakBuku.length -1){
//             rakBuku.push(namaBuku)
//             return rakBuku
//         }
//         }
    
//     }
// }


// var pinjambuku=function(namaBuku,rakBuku){
//     if (rakBuku.length==0){
//         console.log (`tidak ada buku yang bisa dipinjam`)
//         return rakBuku
//     } else {
//         for ( var i =0; i <rakBuku.length;i++){
//             if (rakBuku[i]==namaBuku){
//                 rakBuku[i]=undefined
//                 return rakBuku
//             } 
//             else if (i ==rakBuku.length -1){
//                 console.log(`nama Buku tidak ada di rak`)
//                 return rakBuku
//             }
//         }
//     }
// }



// document.write ('testing')


// var x = 5;
// var y = 8.5;

// //buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.


// tambah = function (x,y){
//     return x+y
// }


// pengurangan = function (x,y){
//     return x-y
// }

// pembagian = function (x,y){
//     return x/y
// }

// perkalian = function (x,y){
//     return x*y
// }


// console.log(tambah(x,y))
// console.log(pengurangan(x,y))
// console.log(pembagian(x,y))
// console.log(perkalian(x,y))


// function nilaiPeserta(nilai){
//     var result
//     if (x==20){
//         result= 'A'
       
//     } else if (60<=nilai<=80) {
//         result= 'B'
         
//     } else if (40<=nilai<=60) {
//         result= 'C'
         
//     } else if (20<=nilai<=40){
//         result= 'D'
         
//     } else {
//         result= 'E'   
//     } 
//     return result    
// }

// console.log(nilaiPeserta(50))


/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
  
//   console.log(testNum(5));

// var nilai=parseInt(prompt('contoh2 nilai mahasiswa','0-100'))

// nilaiPeserta = function(nilai) {
// var hasil

//     switch (true){
//     case nilai >=80 :
//         hasil = 'selamat anda mendapat A'
//         break
//     case nilai >=60 :
//         hasil ='selamat anda mendapat B'
//         break
//     case nilai >=40 :
//         hasil ='selamat anda mendapat C'
//         break
//     case nilai >=20 :
//         hasil ='selamat anda mendapat D'
//         break
//     case nilai <20 :
//         hasil ='selamat anda mendapat E'
//         break    
//     default:
//         hasil ='anda salah input'

// }
// return hasil 
// }

// document.write(nilaiPeserta(567))



// =====================================

// var dataSiswa = [
//     ["Jojo", 55.5],
//     ["Andika", 70.1],
//     ["Alif", 19],
//     ["Vista", 102]
// ];


// function nilaiPeserta (nilai) {
//     let hasil

//     switch (true){
//     case (nilai >=80 && nilai <=100) :
//         hasil = ' mendapat A'
//         break
//     case (nilai >=60 && nilai <=80) :
//         hasil ='  mendapat B'
//         break
//     case (nilai >=40 && nilai <=60) :
//         hasil =' mendapat C'
//         break
//     case (nilai >=20 && nilai <=40) :
//         hasil ='  mendapat D'
//         break
//     case nilai <20 :
//         hasil ='  mendapat E'
//         break    
//     default:
//         hasil =' salah input'

// }
// return hasil 
// }


// for (let i=0;i<dataSiswa.length;i++){
// var total
// document.write(`Siswa bernama ${dataSiswa[i][0]} dengan nilai ${dataSiswa[i][1]} berhasil ${nilaiPeserta(dataSiswa[i][1])}`,'<br>')

// }


// =================================================

// function nilaiPeserta (nilai) {
//     var result;

//     switch(true){
//         case (nilai >= 81 && nilai <= 100):
//             result = 'A';
//             break;
//         case (nilai >= 61 && nilai <= 80):
//             result = 'B';
//             break;
//         case (nilai >= 41 && nilai <= 60):
//             result = 'C';
//             break;
//         case (nilai >= 21 && nilai <= 40):
//             result = 'D';
//             break;
//         case (nilai <= 20):
//             result = 'E';
//             break;
//         default:
//             result = 'Maaf inputan anda salah';
//     }

//     return result;
// }

// var dataSiswa = [
// ["Jojo", 55.5, nilaiPeserta(55.5)],
// ["Andika", 70.1, nilaiPeserta(70.1)],
// ["Alif", 19, nilaiPeserta(19)],
// ["Vista", 102, nilaiPeserta(102)]
// ];

// var identitas = ["Nama","Nilai","Rank"];

// //Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
// for(var i = 0;i < dataSiswa.length; i++){
// for(var j = 0; j < dataSiswa[i].length; j++){
//     document.write(`${identitas[j]} : ${dataSiswa[i][j]} <br>`);
// }
// document.write('<br>');
// }

// ==============================================================================

// var menu = 
// `Pilihlah salah satu menu di bawah ini
//  1. Luas
//  2. Keliling`;

// var bidang_datar = 
// `Pilih salah satu bidang datar di bawah ini
//  1. Segi Empat
//  2. Segi Panjang
//  3. Segi Tiga
//  4. Lingkaran`;

// const phi = 3.14;

// var luasSegiEmpat = function(sisi){
//     return sisi * sisi;
// }

// var kelilingSegiEmpat = function(sisi){
//     return sisi * 4;
// }

// var luasSegiPanjang = function(panjang,lebar){
//     return panjang * lebar;
// }

// var kelilingSegiPanjang = function(panjang,lebar){
//     return ((2*panjang)+(2*lebar));
// }

// var luasSegiTiga = function(alas,tinggi){
//     return (alas*tinggi)/2;
// }

// var kelilingSegitiga = function(alas,tinggi,sisi_miring){
//     return alas + tinggi + sisi_miring;
// }

// var luasLingkaran = function(jari2){
//     return phi * jari2**2;
// }

// var kelilingLingkaran = function(jari2){
//     return 2 * phi * jari2;
// }



// var pilihan = parseInt(prompt(menu));
// if(pilihan === 1){
//     var luas = parseInt(prompt(bidang_datar));
//     switch(luas){
//         case 1:
//             var s = parseInt(prompt("Masukkan sisi"));
//             document.write(`Luas Segi Empat dengan sisi sebesar ${s} adalah ${luasSegiEmpat(s)}`);
//             break;
//         case 2:
//             var p = parseInt(prompt("Masukkan panjang"));
//             var l = parseInt(prompt("Masukkan lebar"));
//             document.write(`Luas Persegi Panjang dengan panjang sebesar ${p} dan lebar sebesar ${l} adalah ${luasSegiPanjang(p,l)}`);
//             break;
//         case 3:
//             var a = parseInt(prompt("Masukkan alas"));
//             var t = parseInt(prompt("Masukkan tinggi"));
//             document.write(`Luas Segitiga dengan alas sebesar ${a} dan tinggi sebesar ${t} adalah ${luasSegiTiga(a,t)}`);
//             break;
//         case 4:
//             var r = parseInt(prompt("Masukkan jari-jari"));
//             document.write(`Luas Lingkaran dengan jari-jari sebesar ${r} adalah ${luasLingkaran(r)}`);
//             break;
//         default:
//             document.write(`Inputan anda salah`);
//     }
// }else if(pilihan === 2){
//     var keliling = parseInt(prompt(bidang_datar));
//     switch(keliling){
//         case 1:
//             var s = parseInt(prompt("Masukkan sisi"));
//             document.write(`Keliling Segi Empat dengan sisi sebesar ${s} adalah ${kelilingSegiEmpat(s)}`);
//             break;
//         case 2:
//             var p = parseInt(prompt("Masukkan panjang"));
//             var l = parseInt(prompt("Masukkan lebar"));
//             document.write(`Keliling Persegi Panjang dengan panjang sebesar ${p} dan lebar sebesar ${l} adalah ${kelilingSegiPanjang(p,l)}`);
//             break;
//         case 3:
//             var a = parseInt(prompt("Masukkan alas"));
//             var t = parseInt(prompt("Masukkan tinggi"));
//             var sm = parseInt(prompt("Masukkan sisi miring"));
//             document.write(`Keliling Segitiga dengan alas sebesar ${a}, tinggi sebesar ${t}, dan sisi miring sebesar ${sm} adalah ${kelilingSegitiga(a,t,sm)}`);
//             break;
//         case 4:
//             var r = parseInt(prompt("Masukkan jari-jari"));
//             document.write(`Keliling Lingkaran dengan jari-jari sebesar ${r} adalah ${kelilingLingkaran(r)}`);
//             break;
//         default:
//             document.write(`Inputan anda salah`);
//     }
// }





// function testing (x){
//     var hasil
//     hasil = (x==2) ? 'penjumlahan' : 'pengurangan'
//     return hasil
// }

// // document.write (testing(2,3))
// console.log (`hasil dari penjumlahan tersebut adalah ${testing(2)}`)
// console.log (`percobaan string literal ${(4/2==0)? 'jawaban benar':'jawaban salah'} inil adalah hasilnya`)



// const mhs =[2,4,5]

// // mhs.forEach(e=>console.log(e))

// //for of (looping array)
// for (const x of mhs ){
//     console.log(x)
// }


// function jumlahkan(...angka){
//      let total=0

//      for (m of angka){
//          total+=m
//      }


//     return  total
//     }

// console.log(jumlahkan (1,2,3,4,5))

//cara reduce
// function jumlahkan(...angka){
//         //  let total=0
    
//         //  for (m of angka){
//         //      total+=m
//         //  }
    
//     //a=accumulator ,b current valuenya
//         return  angka.reduce ((a,b)=>a+b)
//         }
    
//     console.log(jumlahkan (1,2,3,4,5))

    //array destructuring (rest parameter fungsinya untuk)

    // var mahasiswa=['roy',true,[2.9,3.10,3.25,2.88,3.04]]
// // // Soal 2
// let name = prompt("Masukkan nama");

// let answer = (input) => {
//     switch(input){
//         case "Budi":
//         case "Adi":
//         case "Gunawan":
//         case "Joko":
//         case "Bambang":
//             document.write('Boleh masuk! <br>');
//             break;
//         default:
//             document.write('Tidak boleh masuk <br>');
//     }
// };

// answer(name);





// var mentor = ['akhmad','alif','andika','jojo']
// var ta=['adib','valen','vista']
// var admin=['aura','cahya']
// // document.write('roy')

// var b=prompt('masukan parameternya')
// function percobaan(x){
//  var hasil='' 

//  if (mentor==x) {
//      hasil= 'boleh masuk'
//  }else if (ta==x){
//     hasil= 'boleh masuk'
//  }else if (admin==x){
//     hasil= 'boleh masuk'
//  } else {
//      hasil='tidak boleh masuk'}
 
//  return document.write(hasil)
 
//  }

// percobaan(b)





/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/


//Menu
// var menu=prompt('silahkan pilih menu yang tersedia','1 - Luas , 2 - Keliling')

// if (menu==1){
//     // mengoperasikan menu luas
//     alert('Anda telah memilih menu luas bangun datar')
//     var menuLuas = prompt('masukkan bangun datar yang akan dihitung luasnya ','1 - Persegi ; 2-Persegi Panjang;3-Segitiga;4-Lingkaran')
//     if (menuLuas==1){
//         //Luas Persegi
//         luasPersegi()

//     }else if (menuLuas==2){
//         //Luas Persegi Panjan
//         luasPersegiPanjang()

//     }else if (menuLuas==3){
//         //Luas Segitiga
//         luasSegitiga()

//     }else if (menuLuas==4){
//         //Luas Lingkaran
//         luasLingkaran()
//     }
// }else if (menu==2){
//     // mengoperasikan menu keliling
//     alert('Anda telah memilih menu Keliling bangun datar')
//     var menuKeliling = prompt('masukkan bangun datar yang akan dihitung kelilingnya ','1 - Persegi ; 2-Persegi Panjang;3-Segitiga;4-Lingkaran')
//     if (menuKeliling==1){
//         //Luas Persegi
//         kelilingPersegi()
//     }else if (menuKeliling==2){
//         //Luas Persegi Panjang
//         kelilingPersegiPanjang()
//     }else if (menuKeliling==3){
//         //Luas Segitiga
//         kelilingSegitiga
//     }else if (menuKeliling==4){
//         //Luas Lingkaran
//         hitungKelilingLingkaran
//     }

// } else { document.write ('menu yang anda pilih tidak valid')} 


// //Operation


// //luas

// function hitungLuasSegiEmpat(sisi){
//     var luas=sisi*sisi
//     return luas
// }

// function hitungLuasPersegiPanjang(panjang,lebar){
//     var luas=panjang*lebar
//     return luas
// }

// function hitungLuasSegitiga(alas,tinggi){
//     var luas= 0.5 *alas* tinggi
//     return luas
// }

// function hitungLuasLingkaran(jariJari){
//     var luas=3.14*jariJari
//     return luas
// }
// //keliling

// function hitungKelilingSegiEmpat(sisi){
//     var keliling=4*(sisi)
//     return keliling
// }

// function hitungKelilingPersegiPanjang(panjang,lebar){
//     var keliling=panjang*lebar*2
//     return keliling
// }

// function hitungKelilingSegitiga(panjangSisi){
//     var keliling= 3 * panjangSisi
//     return keliling
// }

// function hitungKelilingLingkaran(jariJari){
//     var keliling=2*3.14*jariJari
//     return keliling
// }

// //input outputnya

// //1.luas

// //persegi (1variable)
// function luasPersegi(){
//     var s = parseInt(prompt('masukkan nilai sisinya :'))
//     var luas = hitungLuasSegiEmpat(s)

//     document.write ('Luas Persegi adalah: ' +luas)

// }
// //persegi panjang (2 variable)
// function luasPersegiPanjang(){
//     var p = parseInt(prompt('masukkan nilai panjang :'))
//     var l = parseInt(prompt('masukkan nilai lebar :'))
//     var luas = hitungLuasPersegiPanjang(p,l)

//     document.write ('Luas Persegi Panjang adalah: ' +luas)

// }
// //segitiga (2variable)
// function luasSegitiga(){
//     var a = parseInt(prompt('masukkan nilai alas :'))
//     var t = parseInt(prompt('masukkan nilai tinggi :'))
//     var luas = hitungLuasSegitiga(a,t)

//     document.write ('Luas Segitiga adalah: ' +luas)

// }

// //lingkaran (1variable)
// function luasLingkaran(){
//     var r = parseInt(prompt('masukkan nilai alas :'))
//     var luas = hitungLuasLingkaran(r)

//     document.write ('Luas Lingkaran adalah: ' +luas)

// }

// //2.keliling

// function kelilingPersegi(){
//     var s = parseInt(prompt('masukkan nilai sisinya :'))
//     var keliling = hitungLuasSegiEmpat(s)

//     document.write ('Keliling Persegi adalah: ' +keliling)

// }

// function kelilingPersegiPanjang(){
//     var p = parseInt(prompt('masukkan nilai panjang :'))
//     var l = parseInt(prompt('masukkan nilai lebar :'))
//     var keliling = hitungKelilingPersegiPanjang(p,l)

//     document.write ('Keliling Persegi Panjang adalah: ' +keliling)

// }

// function kelilingSegitiga(){
//     var s = parseInt(prompt('masukkan nilai sisinya :'))
//     var keliling = hitungKelilingSegitiga(s)

//     document.write ('Luas Segitiga adalah: ' +keliling)

// }

// function kelilingLingkaran(){
//     var r = parseInt(prompt('masukkan nilai alas :'))
//     var keliling = hitungKelilingLingkaran(r)

//     document.write ('Keliling Lingkaran adalah: ' +keliling)

// }


//MENTOR andika

// function nilaiPeserta (nilai) {
//     /* 
//         Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
//         A = 80 - 100
//         B = 60 - 80
//         C = 40 - 60
//         D = 20 - 40
//         E = >20
//     */

//         if (nilai > 80 && nilai <= 100) {
//             return "A";
//         } else if (nilai > 60 && nilai <= 80) {
//             return "B";
//         } else if (nilai > 40 && nilai <= 60) {
//             return "C";
//         } else if (nilai > 20 && nilai <= 40) {
//             return "D";
//         } else if (nilai >= 0 && nilai <= 20) {
//             return "E";
//         } else {
//             return "Nilai tidak valid";
//         }
// }

// var dataSiswa = [
//     ["Jojo", 55.5, nilaiPeserta(55.5)],
//     ["Andika", 70.1, nilaiPeserta(70.1)],
//     ["Alif", 19, nilaiPeserta(19)],
//     ["Vista", 102, nilaiPeserta(102)]
// ]; //datasiswa[1][0] => andika

// //Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.

// for (var i = 0, l1 = dataSiswa.length; i < l1; i++) {
//     for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++) {
//         if(j==0){
//             document.write('Nama : ' + dataSiswa[i][j], '<br>')
//         }
//         if(j==1){
//             document.write('Nilai angka : ' + dataSiswa[i][j], '<br>')
//         }
//         if(j==2){
//             document.write('Nilai huruf : ' + dataSiswa[i][j], '<br>')
//         }
//     }
// }





// let a=prompt('pilih menu ','1. luas permukaan 2. volume')
// if (a=='luas permukaan'){
//     let t=parseInt(prompt('masukan nilai tinggi balok'))
//     let p=parseInt(prompt('masukan nilai panjang balok'))
//     let l=parseInt(prompt('masukan nilai lebar balok'))
//     luaspermukaan=hitungLuasPermukaan(t,p,l)
//     document.write (`nilai luas permukaan adalah ${luaspermukaan}`)
// }else if (a=='volume'){
//     let t=parseInt(prompt('masukan nilai tinggi kubus'))
//     let p=parseInt(prompt('masukan nilai panjang kubus'))
//     let l=parseInt(prompt('masukan nilai lebar kubus'))
//     volume=hitungVolume(t,p,l)
//     document.write (`nilai volume adalah ${volume}`)
// }else {document.write ('nilai yang anda masukan tidak sesuai')}


// function hitungLuasPermukaan (tinggi,panjang,lebar){
//     return (2*(panjang*lebar))+(2*(tinggi*lebar))+(2*(tinggi*panjang))
// }

// function hitungVolume (tinggi,panjang,lebar){
//     return tinggi*panjang*lebar
// }


//masukaan nama

// var dataNama=['Budi','Adi','Gunawan','Joko','Bambang']
// var a=prompt('masukan nama')

// for (i=0;i<dataNama.length;i++){
//     if (dataNama[i]==a){
//         document.write (`${dataNama[i]} boleh masuk`)
//     }
//     else {document.write (`${a} tidak boleh masuk`)} 
// }


// // Soal 1
// let hitung = (keterangan) => {
//     let result = 0;
//     let panjang = parseInt(prompt('Masukkan panjang'));
//     let lebar = parseInt(prompt('Masukkan lebar'));
//     let tinggi = parseInt(prompt('Masukkan tinggi'));

//     if(keterangan == "luas permukaan"){
//         result = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
//     }else if(keterangan == "volume"){
//         result = panjang * lebar * tinggi;
//     }
//     return result;
// };

// let jawab = prompt('Masukkan menu pilihan anda','1. luas permukaan balok, 2. volume balok');
// let keterangan = '';
// if(jawab == 1){
//     keterangan = 'luas permukaan';
//     document.write(`${keterangan} balok adalah ${hitung(keterangan)}`);
// }else if(jawab == 2){
//     keterangan = 'volume';
//     document.write(`${keterangan} balok adalah ${hitung(keterangan)}`);
// }else{
//     document.write('Maaf pilihan yang anda masukkan salah');
// }

// // Soal 2
// let name = prompt("Masukkan nama");

// let answer = (input) => {
//     switch(input){
//         case "Budi":
//         case "Adi":
//         case "Gunawan":
//         case "Joko":
//         case "Bambang":
//             document.write('Boleh masuk! <br>');
//             break;
//         default:
//             document.write('Tidak boleh masuk <br>');
//     }
// };

// answer(name);


//contoh 1
// let ditepati =true 
// const janji1=new Promise((resolve,reject)=>{
//     if (ditepati){
//         resolve('janji ditepati')
//     }else {
//         reject('janji tidak ditepati')
//     }
// })
// // menjalankan secara langsung
// // console.log(janji1)
// //menangkap resolve dan reject ,buat console.log didalamn method then dan catch

// janji1
//     .then((hasil)=>console.log(`ok ${hasil}`))
//     .catch((hasil)=>console.log(`not ok ${hasil}`))



//contoh 2 (ada waktu tunggu)

// let ditepati = true
// const janji1=new Promise((resolve,reject)=>{
//     if (ditepati){
//         setTimeout(()=>{
//             resolve ('janji ditepati setelah menunggu')
//         },2000)
//                 setTimeout (()=>{resolve('janji ditepati')},2000)
                
//                 then ((parameter)=> console.log(parameter))
//     } else {
//         setTimeout(()=>{reject('janji tidak ditepati setelah menunggu')},2000)
//     }
// }
// )
// //knp then bentuknya tidak seperti then pada soal 1?
// console.log('mulai')
// console.log(janji1.then(hasil=>console.log(hasil)))
// console.log('selesai')


// // console.log('mulai')
// // console.log(janji1.then(()=>console.log(janji1)))
// // console.log('selesai')



// console.log('mulai')
// janji1
//     .finally(()=>console.log('selesai menunggu'))
//     .then(hasil=>console.log(`ok ${hasil}`))
//     .catch(hasil=>console.log(`not ok ${hasil}`))
// console.log('selesai')





// function coba( a,dua ){
//     console.log(a)
//     dua()
// }

// var dua = function (){
//     return alert ('bilangan')
// }

 var bilangan=[1,4,5]
 var bilangan2 = bilangan.filter (m=> m>1)
 console.log(bilangan2)