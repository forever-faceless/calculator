let val = document.getElementById('mainDisp');
let val2 = document.getElementById('secondaryDisp');
const appendElement = (ele) => {
    val.value = val.value + ele;
}
const clrScr = () => {
    val.value = "";
    val2.value = "";
}

const del = () => {
    val.value = val.value.slice(0, -1);
}

const res = () => {
    val2.value = val.value;
    try {
        val.value = eval(val.value);
      } catch (error) {
        val.value = 'Error';
    }
}

document.addEventListener("mousemove", parallax)

function parallax(e) {
    const x = (e.clientX / window.innerWidth) * 5;
    const y = (e.clientY / window.innerHeight) * 5;
    document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
}