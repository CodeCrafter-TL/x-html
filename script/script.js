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

function makeDraggableHardWare(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.zIndex = 2; // 设置 z-index 确保在拖动时在顶层

        // 阻止默认事件，避免在拖动时选中文字或其他元素
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = `${e.clientX - offsetX + element.offsetWidth / 2}px`;
            element.style.top = `${e.clientY - offsetY + element.offsetHeight / 2}px`;
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
        appleFrame.style.backgroundColor = `rgba(255, 255, 255, 0.5)`
        menu = true
    } else {
        apple_menu.style.animation = `opacityBack 0.125s ease-in-out`;
        h4div.style.animation = `opacityBack 0.125s ease-in-out`;
        appleFrame.style.backgroundColor = `rgba(255, 255, 255, 0)`
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

function setTopbar(color) {
    if (color == 'white') {
        topbar.style.color = '#fff';
    } else if (color == 'black') {
        topbar.style.color = '#000';
    } else {
        return
    }
}

let wallpaper_now = 'Sequoia-Day';

function change_wall(wallpaper) {
    if (wallpaper == 'bigsur') {
        bg.style.backgroundImage = `url(./images/BigSur-Day.jpg)`;
        wallpaper_now = 'BigSur-Day';
        wallpaperId.innerHTML = 'Big Sur';
        wallpaperLooking.src = `./images/BigSur-Day.jpg`;
        setTopbar('black');
    } else if (wallpaper == 'monterey') {
        bg.style.backgroundImage = `url(./images/Monterey-Day.jpg)`;
        wallpaper_now = 'Monterey-Day';
        wallpaperId.innerHTML = 'Monterey';
        wallpaperLooking.src = `./images/Monterey-Day.jpg`;
        setTopbar('black');
    } else if (wallpaper == 'ventura') {
        bg.style.backgroundImage = `url(./images/Ventura-Day.jpg)`;
        wallpaper_now = 'Ventura-Day';
        wallpaperId.innerHTML = 'Ventura';
        wallpaperLooking.src = `./images/Ventura-Day.jpg`;
        setTopbar('black');
    } else if (wallpaper == 'sonoma') {
        bg.style.backgroundImage = `url(./images/Sonoma-Day..jpg)`;
        wallpaper_now = 'Sonoma-Day.';
        wallpaperId.innerHTML = 'Sonoma';
        wallpaperLooking.src = `./images/Sonoma-Day..jpg`;
        setTopbar('white');
    } else if (wallpaper == 'sequoia') {
        bg.style.backgroundImage = `url(./images/Sequoia-Day.jpg)`;
        wallpaper_now = 'Sequoia-Day';
        wallpaperId.innerHTML = 'Sequoia';
        wallpaperLooking.src = `./images/Sequoia-Day.jpg`;
        setTopbar('black');
    } else if (wallpaper == 'auto') {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        if (hours >= 19) {
            wallpaper_now = wallpaper_now.replace("Day", "Night");
            bg.style.backgroundImage = `url(./images/${wallpaper_now}.jpg)`;
            wallpaperLooking.src = `./images/${wallpaper_now}.jpg`;
            setTopbar('white');
        } else if (hours < 5) {
            wallpaper_now = wallpaper_now.replace("Day", "Night");
            bg.style.backgroundImage = `url(./images/${wallpaper_now}.jpg)`;
            wallpaperLooking.src = `./images/${wallpaper_now}.jpg`;
            setTopbar('white');
        } else {
            wallpaper_now = wallpaper_now.replace("Night", "Day");
            bg.style.backgroundImage = `url(./images/${wallpaper_now}.jpg)`;
            wallpaperLooking.src = `./images/${wallpaper_now}.jpg`;
            if (wallpaper_now == 'Sonoma-Day.') {
                setTopbar('white');
            } else {
                setTopbar('black');
            }
        }
    } else if (wallpaper == 'day') {
        wallpaper_now = wallpaper_now.replace("Night", "Day");
        bg.style.backgroundImage = `url(./images/${wallpaper_now}.jpg)`;
        wallpaperLooking.src = `./images/${wallpaper_now}.jpg`;
        if (wallpaper_now == 'Sonoma-Day.') {
            setTopbar('white');
        } else {
            setTopbar('black');
        }
    } else if (wallpaper == 'night') {
        wallpaper_now = wallpaper_now.replace("Day", "Night");
        bg.style.backgroundImage = `url(./images/${wallpaper_now}.jpg)`;
        wallpaperLooking.src = `./images/${wallpaper_now}.jpg`;
        setTopbar('white');
    } else {
        alert(`unknown wallpaper name or status: ${wallpaper}`);
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
    bg.addEventListener('click', function (e) {
        let ClickedElement = e.target;
        if (!ClickedElement.matches('.contextmenu')) {
            right_menu.style.display = `none`;
            right_menu.style.opacity = 0;
            right_menu.style.top = `${e.clientY}px`;
            right_menu.style.left = `${e.clientX}px`;
        }
    });
});

function loadStyleSheet(filename) {
    filenameAll = `css/${filename}`;
    link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = filenameAll;
    document.head.appendChild(link);
    return link;
}

function removeStyleSheet(link) {
    document.head.removeChild(link);
}