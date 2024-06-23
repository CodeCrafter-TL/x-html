function $$(id) {
    return document.getElementById(id);
}

function call_style(app, key, value) {
    app.style[key] = value;
}

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.position = 'absolute';
        element.style.zIndex = 2;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function OpenMenu(menu) {
    alert('您点击了菜单项目：' + menu.textContent.replace('...', ''))
}

function Reset() {
    setTimeout(function () { dock.style.animation = 'DockBack 0.75s forwards ease-in-out' }, 500)
    topbar.style.opacity = 0
    apple_menu.style.opacity = 0
    setTimeout(function () { body.style.backgroundColor = '#000' }, 1500)
    setTimeout(function () { window.location = './index.html' }, 3000)
}

function Shutdown() {
    setTimeout(function () { dock.style.animation = 'DockBack 0.75s forwards ease-in-out' }, 500)
    topbar.style.opacity = 0
    apple_menu.style.opacity = 0
    setTimeout(function () { window.location = 'about:blank' }, 2000)
}

function BackLogon() {
    setTimeout(function () { dock.style.animation = 'DockBack 0.75s forwards ease-in-out' }, 500)
    topbar.style.opacity = 0
    apple_menu.style.opacity = 0
    setTimeout(function () { window.location = './logon.html' }, 2000)
}

function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let timeString = hours + ':' + minutes;
    let dayOfWeek = now.getDay();
    let days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let dayName = days[dayOfWeek];
    const options = { month: 'numeric', day: 'numeric' };
    const date = now.toLocaleDateString('zh-CN', options);
    document.getElementById('Time').textContent = timeString;
    document.getElementById('Zhou').textContent = dayName;
    document.getElementById('Date').textContent = date.replace(/\//g, '月') + '日';
}

function Sleep() {
    body.children.style.opacity = 0;
    body.style.backgroundImage = 'none'
    body.style.backgroundColor = '#000'
    document.addEventListener('mousemove', function (e) {
        topbar.style.opacity = 1
        apple_menu.style.opacity = 1
        dock.style.opacity = 1
        body.style.backgroundImage = 'url(./images/macOS 13 Ventura White.jpg)'
    })
}

function Show_AppleMenu() {
    if (menu == false) {
        apple_menu.style.opacity = 1
        apple_menu.style.zIndex = 2
        h4div.style.opacity = 1
        menu = true
    } else {
        apple_menu.style.animation = `opacityBack 0.125s ease-in-out`;
        h4div.style.animation = `opacityBack 0.125s ease-in-out`;
        setTimeout(function () {
            apple_menu.style.zIndex = -0.5;
            apple_menu.style.opacity = 0;
            h4div.style.opacity = 0;
            h4div.style.animation = `none`;
            apple_menu.style.animation = `none`;
            menu = false;
        }, 125)
    }
}

function change_wall(wallpaper) {
    if (wallpaper == 'bigsur') {
        bg.style.backgroundImage = `url(./images/BigSur-Day.jpg)`;
    } else if (wallpaper == 'monterey') {
        bg.style.backgroundImage = `url(./images/Monterey-Day.jpg)`;
    } else if (wallpaper == 'ventura') {
        bg.style.backgroundImage = `url(./images/Ventura-Day.jpg)`;
    } else if (wallpaper == 'sonoma') {
        bg.style.backgroundImage = `url(./images/Sonoma-Day..png)`;
    } else if (wallpaper == 'sequoia') {
        bg.style.backgroundImage = `url(./images/Sequoia-Day.jpg)`;
    } else {
        alert(`unknown wallpaper name: ${wallpaper}`);
    }
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    bg.addEventListener("contextmenu", function (e) {
        right_menu.style.display = `inline-flex`;
        right_menu.style.opacity = 1;
        right_menu.style.top = `${e.clientY}px`;
        right_menu.style.left = `${e.clientX}px`;
    });
});