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



var mhs={
    nama:'roy',
    nik:98123,
    email:'roy@SpeechGrammarList.com',
    getname : function (){

        document.write ('nama saya adalah'+ this.nama)
    },
    getemail : function (){

        document.write ('nama saya adalah'+ this.email)
    }
} 











