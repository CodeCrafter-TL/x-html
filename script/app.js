function exit(app) {
    let a = document.querySelector(app);
    a.parentElement.removeChild(a);
}

function small(app) {
    let this_app = $$(app);
}

function big(app) {
    let a = $$(app);
    a.style.borderRadius = `none`;
    be_big = true;
}

function OpenApp(img) {
    let altText = img.alt
    if (altText == '访达') {
        if (fd_status == false) {
            fd.style.opacity = 1;
            fd.style.zIndex = 2;
            fd_status = true;
        } else {
            return
        }
    } else if (altText == '启动台') {
        if (lp_status == false) {
            lp_bg.style.opacity = 1
            lp_bg.animation = 'opacityBegin 0.3s ease-in-out forwards'
            lp_bg.style.zIndex = 4;
            topbar.style.animation = 'opacityBack 0.2s ease-in-out forwards'
            lp.style.animation = 'LaunchPadBegin 0.3s ease-in-out forwards'
            lp_status = true
        } else {
            lp.style.animation = 'LaunchPadBack 0.3s ease-in-out forwards'
            lp_bg.animation = 'opacityBack 0.3s ease-in-out forwards'
            topbar.style.animation = 'opacityBegin 0.2s ease-in-out forwards'
            setTimeout(function () {
                lp_bg.style.zIndex = 0;
            }, 300)
            lp_status = false;
        }
    } else if (altText == 'Safari浏览器') {
        if (lp_status == false) {
            safari.style.opacity = 1;
            safari.style.zIndex = 2;
        } else {
            lp.style.animation = 'LaunchPadBack 0.3s ease-in-out forwards'
            lp_bg.animation = 'opacityBack 0.3s ease-in-out forwards'
            topbar.style.animation = 'opacityBegin 0.2s ease-in-out forwards'
            setTimeout(function () {
                lp_bg.style.zIndex = 0;
            }, 300)
            safari.style.opacity = 1;
            safari.style.zIndex = 2;
            lp_status = false
        }
    } else if (altText == '系统设置') {
        if (lp_status == false) {
            settings.style.opacity = 1;
            settings.style.zIndex = 2;
        } else {
            lp.style.animation = 'LaunchPadBack 0.3s ease-in-out forwards'
            lp_bg.animation = 'opacityBack 0.3s ease-in-out forwards'
            topbar.style.animation = 'opacityBegin 0.2s ease-in-out forwards'
            setTimeout(function () {
                lp_bg.style.zIndex = 0;
            }, 300)
            settings.style.opacity = 1;
            settings.style.zIndex = 2;
            lp_status = false
        }
    } else {
        alert('您打开了应用程序：' + altText)
    }
}

function AboutHardWare() {
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
    hardware.style.opacity = 1;
    hardware.style.zIndex = 2;
}
