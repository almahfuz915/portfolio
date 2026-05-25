// Sticky Header Effect on Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // পেজ যখন 50px এর বেশি নিচে স্ক্রল হবে, তখন মেন্যুতে 'sticky' ক্লাস যুক্ত হবে
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});