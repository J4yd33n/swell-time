document.getElementById('showVideo').addEventListener('click', function() {
    var video = document.getElementById('videoContainer');
    if (video.style.display === 'none') {
        video.style.display = 'block';
        this.textContent = 'Hide Beginner Video';
    } else {
        video.style.display = 'none';
        this.textContent = 'Watch Beginner Video';
    }
});
