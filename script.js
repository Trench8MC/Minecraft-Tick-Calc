function convertToTicks() {
    const realTime = document.getElementById('realTime').value;
    const ticks = realTime * 20;
    document.getElementById('result').innerText = `${realTime} seconds is equal to ${ticks} ticks.`;
}

function convertToRealTime() {
    const minecraftTicks = document.getElementById('minecraftTicks').value;
    const realTime = minecraftTicks / 20;
    document.getElementById('result').innerText = `${minecraftTicks} ticks is equal to ${realTime} seconds.`;
}
