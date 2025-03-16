//countdown
const itungmundur = () => {
    const target = new Date("May 2, 2025 00:00:00").getTime();
    const sekarang = new Date().getTime();
    const selisih = target-sekarang;

    if(selisih>0){
        const hari = Math.floor((selisih/(1000 * 60 * 60 * 24)));
        const jam = Math.floor((selisih%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        const menit = Math.floor((selisih%(1000 * 60 * 60))/(1000 * 60));
        const detik = Math.floor((selisih%(1000 * 60))/(1000));

        document.getElementById('hari').innerHTML = `${hari}`;
        document.getElementById('jam').innerHTML = `${jam}`;
        document.getElementById('menit').innerHTML = `${menit}`;
        document.getElementById('detik').innerHTML = `${detik}`;
    }
    else{
        document.getElementById('countdown').innerHTML = "selamat menikmati hidangannya";
        clearInterval(timer);
    }
}
const timer = setInterval(itungmundur, 1000);
itungmundur();

//scroll
document.querySelector('.turun').addEventListener('click', ()=>{
    document.querySelector('.box').scrollIntoView({behavior: "smooth"});
});

document.querySelector('#ke-os').addEventListener('click', ()=>{
    document.querySelector('.os').scrollIntoView({behavior: "smooth"});
});

document.querySelector('#naik').addEventListener('click',()=>{
    document.querySelector('header').scrollIntoView({behavior: "smooth"});
})

//pindah halaman
document.querySelector('.ig').addEventListener('click', ()=>{
    window.location.href='https://www.instagram.com/reza3fahlvi/';
});

document.querySelector('.twt').addEventListener('click', ()=>{
    window.location.href='https://www.tiktok.com/@rezafahlv3?_t=ZS-8ujoEOZQWFE&_r=1';
});

document.querySelector('#alrumah').addEventListener('click', ()=>{
    window.location.href='https://maps.app.goo.gl/DbMhdHEyhYndumcEA';
});
//gmaps
document.querySelectorAll('.tmblmap').forEach(tombol =>{
    tombol.addEventListener("click",function (){            
        let mapcontainer = document.getElementById('mapcontainer');
        let maplink = document.getElementById('tampilmap');
        let url = this.getAttribute("data-gmaps");

        maplink.href = url;
        mapcontainer.classList.remove('sembunyi');
    });
});

//salin clipboard
document.querySelectorAll('.copas').forEach(button =>{
    button.addEventListener('click',function (){
        let copas = this.getAttribute('data-salin');
    
        navigator.clipboard.writeText(copas);
    });
});

let kehadiran ="";
document.querySelectorAll('.kehadiran').forEach((tombol) =>{
    tombol.addEventListener('click', function(){
        kehadiran =this.getAttribute('data-hadir');
    });
});
document.querySelector('#tsubmit').addEventListener('click', function(){
    let nama = document.getElementById('namap').value;
    let pesan = document.getElementById('pesanp').value;

    
    if (!nama || !pesan || !kehadiran) {
        alert("Silakan isi semua data!");
        return;
    }
    let outputdiv = document.querySelector('.output');
    let pesanoutput = document.createElement('div');
    pesanoutput.innerHTML = `
         <p><strong>Name:</strong> ${nama}</p>
                <p><strong>Message:</strong> ${pesan}</p>
                <p><strong>Attendance:</strong> ${kehadiran}</p>
                <hr>
    `;
    outputdiv.appendChild(pesanoutput);
    document.getElementById('namap').value="";
    document.getElementById('pesanp').value="";
    kehadiran = "";
});