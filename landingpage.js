// Global Tab Switching Function
function switchTab(targetId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active state from nav buttons
    const navButtons = document.querySelectorAll('.nav-tab');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Activate target tab
    const targetTab = document.getElementById(targetId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Activate corresponding nav button
    const targetBtn = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const printBtn = document.getElementById('printBtn');
    const body = document.body;

    // Attach click events to navigation tabs
    const navButtons = document.querySelectorAll('.nav-tab');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Theme Switcher (Dark / Light Mode)
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Print / PDF Save Button Trigger
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
    
});