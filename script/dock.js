document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#dock img");
    const appName = document.createElement("div");
    const Backdrop = document.querySelectorAll("#dock .icns #backdrop");
    appName.id = "app-name";
    document.body.appendChild(appName);

    icons.forEach(icon => {
        icon.addEventListener("mouseover", function (event) {
            const appNameText = event.target.alt;
            const iconRect = event.target.getBoundingClientRect();
            appName.textContent = appNameText;
            appName.style.top = `${iconRect.top - appName.offsetHeight - icon.clientWidth / 8}px`;
            appName.style.left = `${iconRect.left + iconRect.width / 2}px`;
            appName.style.display = "block";
        });

        icon.addEventListener("mouseout", function () {
            appName.style.display = "none";
        });

        icon.addEventListener("mousedown", function () {
            icon.style.filter = 'grayscale(200%) brightness(75%)';
        });

        icon.addEventListener("mouseup", function () {
            icon.style.filter = 'grayscale(0%) brightness(100%)';
        });
    });
});

let dockStatus;
let dockActive;

function setDock(mode) {
    if (mode == 'hidden') {
        dockStatus = mode;
        document.addEventListener('mousemove', function (e) {
            let mouseX = e.pageX - dock.offsetLeft;
            let mouseY = e.pageY - dock.offsetTop;
            let dockWidth = dock.offsetWidth;
            let dockHeight = dock.offsetHeight;
            if (mouseX >= 0 && mouseX <= dockWidth && mouseY >= 0 && mouseY <= dockHeight) {
                dockActive = true;
                return;
            } else if (document.body.scrollHeight - e.pageY <= 10) {
                dock.style.animation = `none`;
                dock.style.animation = `DockBegin 0.375s forwards ease-out`
                dockActive = true;
                return;
            } else {
                dock.style.animation = `none`;
                dock.style.animation = `DockBack 0.375s forwards ease-out`;
                dockActive = false;
                return;
            }
        });
        return;
    } else if (mode === 'show') {
        dockStatus = mode;
        dock.style.animation = 'none';

        dock.style.animation = 'DockBegin 0.5s forwards ease-out';
        return;
    }
    return;
}


function setDockZoom(bool) {
    if (bool == true) {
        dk_Link = loadStyleSheet("dock_zoom.css");
    } else {
        removeStyleSheet(dk_Link);
    }
}
