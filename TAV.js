document.addEventListener('DOMContentLoaded', () => {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        audio.addEventListener('play', () => {
            audio.classList.add('playing');
        });

        audio.addEventListener('pause', () => {
            audio.classList.remove('playing');
        });

        audio.addEventListener('ended', () => {
            audio.classList.remove('playing');
        });
    });
});
