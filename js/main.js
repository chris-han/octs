// 初始化AOS动画库
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });
});

// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const html = document.documentElement;

// 检查本地存储或系统偏好
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// 切换主题函数
function toggleTheme() {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}

// 桌面主题切换
themeToggle.addEventListener('click', toggleTheme);

// 移动端主题切换
mobileThemeToggle.addEventListener('click', toggleTheme);

// 移动导航抽屉
const menuToggle = document.getElementById('menu-toggle');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const closeDrawer = document.getElementById('close-drawer');

if (menuToggle && drawer && drawerOverlay && closeDrawer) {
    menuToggle.addEventListener('click', function() {
        drawer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    function closeDrawerFunc() {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeDrawer.addEventListener('click', closeDrawerFunc);
    drawerOverlay.addEventListener('click', closeDrawerFunc);

    // Close drawer when clicking navigation links
    drawer.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', closeDrawerFunc);
    });
}

// 滚动进度条
window.onscroll = function() {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    }
};

    // Back to top button click handler
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// 预加载动画
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden-preloader');
        }
    }, 500);
});