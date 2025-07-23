document.addEventListener('copy', (e) => {
    e.preventDefault(); // actual copy रोक दो
    navigator.clipboard.writeText("Don't try to copy that");
});

// Image pe right click disable karo
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
        navigator.clipboard.writeText("You theft just go to hell! 😂");
    }
});

// Text select disable karo (optional)
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("You're doing something wrong! ��");
});