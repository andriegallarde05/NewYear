document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    const modal = document.getElementById('modal');
    if (this.classList.contains('open')) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
});

document.getElementById('close').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('open');
    document.getElementById('modal').style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        const envelope = document.getElementById('envelope');
        envelope.classList.remove('open');
        modal.style.display = 'none';
    }
};