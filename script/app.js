function exit(app, state) {
    let a = document.querySelector(app);
    a.parentElement.removeChild(a);

    if (state == 'safari') {
        safari_state = false;
        topbarText("访达", "文件", "编辑", "显示", "前往", "窗口", "帮助", "", "", "");
    } else if (state == 'finder') {
        fd_status = false;
        topbarText("访达", "文件", "编辑", "显示", "前往", "窗口", "帮助", "", "", "");
    } else if (state == 'settings') {
        setting_state = false;
        topbarText("访达", "文件", "编辑", "显示", "前往", "窗口", "帮助", "", "", "");
    } else if (state == 'hardware') {
        hardware_state = false;
    }
}

function small(app) {
    let this_app = $$(app);
}

function big(app) {
    let a = $$(app);
    a.style.borderRadius = `none`;
    be_big = true;
}

function OpenApp(img, index) {
    let altText = img.alt
    window.index = index;
    if (index > window.index) {
        window.index = index;
    }
    if (altText == '访达') {
        if (fd_status != true) {
            window.finder_div = document.createElement('div');
            window.finder_div.id = `finder`;
            window.finder_div.classList.add('window', 'finder');
            window.finder_div.innerHTML = finder_code;
            window.finder_div.style.zIndex = index;
            desktop.appendChild(window.finder_div);
            makeDraggable(window.finder_div);
            fd_status = true;
            selectWindowInit();
        } else {
            window.finder_div.style.zIndex = window.index * 2;
        }
        topbarText("访达", "文件", "编辑", "显示", "前往", "窗口", "帮助", "", "", "");
    } else if (altText == '启动台') {
        if (lp_status == false) {
            lp_bg.style.opacity = 1;
            lp_bg.animation = 'opacityBegin 0.3s ease-in-out forwards';
            lp_bg.style.zIndex = window.index ** 2;
            topbar.style.animation = 'opacityBack 0.2s ease-in-out forwards';
            lp.style.animation = 'LaunchPadBegin 0.3s ease-in-out forwards';
            lp_status = true;
        } else {
            lp.style.animation = 'LaunchPadBack 0.3s ease-in-out forwards';
            lp_bg.animation = 'opacityBack 0.3s ease-in-out forwards';
            topbar.style.animation = 'opacityBegin 0.2s ease-in-out forwards';
            setTimeout(function () {
                lp_bg.style.zIndex = 0;
            }, 300)
            lp_status = false;
        }
    } else if (altText == 'Safari浏览器') {
        if (lp_status == false) {
            if (safari_state != true) {
                window.safari_div = document.createElement('div');
                window.safari_div.id = `safari-window`;
                window.safari_div.classList.add('window');
                window.safari_div.innerHTML = safari_code;
                window.safari_div.style.zIndex = index;
                desktop.appendChild(window.safari_div);
                makeDraggable(window.safari_div);
                safari_state = true;
                selectWindowInit();
            } else {
                window.safari_div.style.zIndex = window.index * 2;
            }
        } else {
            lp.style.animation = 'LaunchPadBack 0.3s ease-in-out forwards'
            lp_bg.animation = 'opacityBack 0.3s ease-in-out forwards'
            topbar.style.animation = 'opacityBegin 0.2s ease-in-out forwards'
            setTimeout(function () {
                lp_bg.style.zIndex = 0;
            }, 300)
            if (safari_state != true) {
                window.safari_div = document.createElement('div');
                window.safari_div.id = `safari-window`;
                window.safari_div.classList.add('window');
                window.safari_div.innerHTML = safari_code;
                window.safari_div.style.zIndex = index;
                desktop.appendChild(window.safari_div);
                makeDraggable(window.safari_div);
                safari_state = true;
                selectWindowInit();
            } else {
                window.safari_div.style.zIndex = window.index * 2;
            }
            lp_status = false;
        }
        topbarText("Safari浏览器", "文件", "编辑", "显示", "历史记录", "书签", "窗口", "帮助", "", "");
    } else if (altText == '系统设置') {
        if (lp_status == false) {
            if (setting_state != true) {
                window.setting_div = document.createElement('div');
                window.setting_div.id = `settings`;
                window.setting_div.classList.add('window');
                window.setting_div.innerHTML = settings_code;
                window.setting_div.style.zIndex = index;
                desktop.appendChild(window.setting_div);
                makeDraggable(window.setting_div);
                setting_state = true;
                selectWindowInit();
            } else {
                window.setting_div.style.zIndex = window.index * 2;
            }
        } else {
            lp.style.animation = 'LaunchPadBack 0.3s ease-in-out forwards'
            lp_bg.animation = 'opacityBack 0.3s ease-in-out forwards'
            topbar.style.animation = 'opacityBegin 0.2s ease-in-out forwards'
            setTimeout(function () {
                lp_bg.style.zIndex = 0;
            }, 300);
            if (setting_state != true) {
                window.setting_div = document.createElement('div');
                window.setting_div.id = `settings`;
                window.setting_div.classList.add('window');
                window.setting_div.innerHTML = settings_code;
                window.setting_div.style.zIndex = index;
                desktop.appendChild(window.setting_div);
                makeDraggable(window.setting_div);
                setting_state = true;
                selectWindowInit();
            } else {
                window.setting_div.style.zIndex = window.index * 2;
            }
            lp_status = false;
        }
        topbarText("系统设置", "文件", "编辑", "显示", "窗口", "帮助", "", "", "", "");
    } else {
        alert('您打开了应用程序：' + altText);
    }
    window.index **= 2;
}

function getWallpaper() {
    document.getElementById('upload-wallpaper').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
                
            reader.onload = function(e) {
                bg.style.backgroundImage = `url(${e.target.result})`;
                wallpaper_looking.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });
}

function AboutHardWare(index) {
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
    /*hardware.style.opacity = 1;
    hardware.style.zIndex = 2;*/
    if (hardware_state != true) {
        let hardware_div = document.createElement('div');
        hardware_div.id = `safari-window`;
        hardware_div.classList.add('window');
        hardware_div.innerHTML = hardware_code;
        hardware_div.id = `hardware`;
        hardware_div.classList.add('window');
        hardware_div.style.zIndex = index;
        desktop.appendChild(hardware_div);
        makeDraggableHardWare(hardware_div);
        hardware_state = true;
    } else {
        return;
    }
}
