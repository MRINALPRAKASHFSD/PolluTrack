document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;

    // Safety check: If button doesn't exist, stop to prevent error
    if (!themeBtn) return;

    // Check LocalStorage
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    themeBtn.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            localStorage.setItem('theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        // Dispatch event so charts can update
        window.dispatchEvent(new Event('themeChanged'));
    });
});