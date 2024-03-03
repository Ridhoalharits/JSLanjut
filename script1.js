// Object Literal

// let Mahasiswa = {
//     nama:"Ridho",
//     energi:10,
//     makan:function(porsi){
//         this.energi =  this.energi+porsi
//         console.log(`halo ${this.nama}, energi kamu saat ini adalah ${this.energi}`)
//     }

// }



// function Mahasiswa(nama, porsi){
//     let mahasiswa ={}
//     mahasiswa.nama = nama
//     mahasiswa.porsi = porsi
//     mahasiswa.makan = function(energi){
//         porsi += energi
//         console.log(`nama aku ${nama} dengan energi ${this.porsi}`)
//     }
//     return mahasiswa
// }

// let hasil = Mahasiswa("Ridho", 5)


// function Mahasiswa(nama, porsi){
//     this.nama = nama
//     this.porsi = porsi
//     this.makan = function(energi){
//         porsi += energi
//         console.log(`nama aku ${nama} dengan energi ${this.porsi}`)
//     }
// }

// let hasil =  new Mahasiswa("Ridho", 5)

// const methodMahasiwa = {
//     makan: function(porsi){
//         this.energi += porsi
//         console.log(`halo ${this.nama}, selamat makan`)
//     },
//     main:function(jam){
//         this.energi -= jam
//         console.log(`halo ${this.nama}, selamat main`)
//     },
//     tidur : function(jam){
//         this.energi+=jam*2
//         console.log(`halo ${this.nama}, selamat tidur`)
//     }

// }


// function Mahasiswa(nama, porsi){
//     let mahasiswa = Object.create(methodMahasiwa)
//     mahasiswa.nama = nama
//     mahasiswa.porsi = porsi
//     return mahasiswa
// }

// let hasil = Mahasiswa("Ridho", 5)


// function Mahasiswa(nama, porsi){
//     this.nama = nama
//     this.porsi = porsi
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi
//     return `halo ${this.nama}, selamat makan`

// }

// let hasil = new Mahasiswa("Ridho", 5)



// var nama = "Ridho"
// var umur = 22
// console.log(hello())

// function hello(){
//     return `halo ${nama}, umur ${umur}`

// }

// function init(){
//     return function(nama){
//         console.log(nama)
//     }
// }
// let callNama = init()
// callNama("Ridho")
// callNama("Al")
// callNama("Harits")

// function salam(waktu){
//     return function(nama){
//         console.log(`halo ${nama}, selamat ${waktu}`)
//     }
// }

//before
// let showNama = function(nama){
//     return `halo ${nama}`
// }

// console.log(showNama("dhior"))
//after

// let showNama = (nama)=>{
//     return `halo ${nama}`
// }
// console.log(showNama("ridho"))

// let nameList = ['ridho', 'al', 'harits']

// let jumlah = nameList.map(nama => ({
//     orang : nama,
//     jml: nama.length
// }))
// console.table(jumlah)





// const newNumber = data.filter(m => {
//     return m > 4
// })
// console.log(newNumber)



// const kali = data.map(k =>{
//     return k*2
// })
// console.log(kali)


// const data = [1,2,5,-3,1,8,2,-3,6]
// const jumlah = data.reduce((add,acc)=> add+acc)
// console.log(jumlah)


// const nama = "Ridho Al Harits"
// const umur = 22
// const kelas = 18
// console.log(`halo nama saya ${nama} dan umur ${umur} tahun`)
// console.log(`halo ${nama}
// kamu umur ${umur},
// nomor kamu adalah ${umur+kelas}
// `)

// const data = ['ridho', 'al','harits']
// //menggunakan forEach
// data.forEach(m=> console.log(m))

// //menggunakan For..in
// for(const m of data){
//     console.log(m)
// }

// const mahasiswa = {
//     nama: "dhior",
//     umur: 22,
//     kelas:12
// }
// const {nama, umur, kelas} =mahasiswa

// console.log(nama)
// const data = ['ridho', 'al','harits']
// const [depan, tengah, belakang] = data
// console.log(depan)


// const dataMhs = {
//     nama:"Ridho Al Harits",
//     kelas:"TT4404",
//     fakultas:"FTE"
// }
// function cetakMhs(mhs){
//     return `halo ${mhs.nama}, kelas ${mhs.kelas}, fakultas ${mhs.fakultas}`
// }
// const hasil = cetakMhs(dataMhs)
// console.log(hasil)

// const hitung = (a, b,...args)=>{
//     argsSum = args.reduce((curr,prev)=> curr+prev)
//     return a+b+argsSum
// }
// console.log(hitung(1,2,4,5,2,5))

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers)

let 
