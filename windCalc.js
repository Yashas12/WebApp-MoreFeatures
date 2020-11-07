const windSp = document.querySelector('.enter-ip');
const windVal = document.querySelector('.enter-ip input');
const knotBody = document.querySelector('.knots')

function convertSpeed(metersec){
    const kspeed = 1.9438445 * metersec;
    return kspeed;
}

function updateSpeed(mss){
    console.log(mss);
    const ks = convertSpeed(mss)
    rks = ks.toFixed(2);
    knotBody.innerHTML = `
    <div class="text-center knots">Speed in knots: ${rks}kts</div>`
}

windSp.addEventListener('submit', e=>{
    e.preventDefault();

    const msSpeed = windVal.value.trim();
    console.log(msSpeed);
    windSp.reset();

    updateSpeed(msSpeed);
})