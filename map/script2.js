let data = Array.from(document.querySelectorAll('[data-duration]'))
console.log(data)

let jslanjut = data.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration)
    .map(toSec =>{
        const parts = toSec.split(':')
        .map(part => parseFloat(part))
        return parts[0]*60+parts[1]
        
    })
    .reduce((total, detik)=>total+detik )
console.log(jslanjut)

const jam = Math.floor(jslanjut/3600)
jslanjut = jslanjut-jam*3600
const menit = Math.floor(jslanjut/60)
const detik = jslanjut-menit*60

const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent=`jumlah durasi ${jam} jam, ${menit} menit, ${detik} detik`
let totalVideo = data.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length

const pJumlahVideo = document.querySelector('.jumlah-video')
pJumlahVideo.textContent=`jumlah video ada ${totalVideo}`
