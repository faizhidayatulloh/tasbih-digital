let angka = 0;
function mulai() {
    angka+=1;
    document.getElementById('satu').innerHTML = angka;
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