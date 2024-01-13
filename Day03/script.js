function playSound(val){
    // const val = document.getElementsByTagName('button')
    let sound = new Audio(`./${val}.wav`)
    sound.play()
}

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'a' || key === 'b' || key === 'c') {
        playSound(key);
    }
});
