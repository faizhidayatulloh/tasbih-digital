let angka = 0;
function mulai() {
    angka+=1;
    document.getElementById('satu').innerHTML = angka;
}
function sampai() {
    if ( angka ==33 ) {
        window.alert('Anda mencapai '+angka)
    }
    if ( angka%33==0) {
        window.alert('anda mencapai '+angka)
    }
}

function reset() {
    angka = 0;
    document.getElementById('satu').innerHTML = angka;
}

function mainkan() {
    const x = document.getElementById('suara');
    x.play();
}

document.getElementById('tombol').addEventListener('click',mainkan);