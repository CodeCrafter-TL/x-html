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
            appName.style.left = `${iconRect.left + iconRect.width / 2.5}px`;
            appName.style.display = "block";
        });

        icon.addEventListener("mouseout", function () {
            appName.style.display = "none";
        });
    });
});

let dockStatus
let dockActive

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
            } else if (document.body.scrollHeight - e.pageY <= 10) {
                dock.style.animation = `none`;
                dock.style.animation = `DockBegin 0.375s forwards ease-out`
            } else {
                dock.style.animation = `none`;
                dock.style.animation = `DockBack 0.375s forwards ease-out`;
                dockActive = false;
                // alert(dockStatus && dockActive);
            }
        });
        // alert(dockStatus && dockActive);
    } else if (mode == 'normal') {
        if (dockActive) {
            dock.style.animation = `none`;
            dockStatus = mode;
        } else {
            dock.style.animation = `none`;
            dock.style.animation = `DockBack 0.5s forwards ease-out`;
            dockStatus = mode;
        }
    } else if (mode == 'show') {
        dock.style.animation = 'DockBegin 0.5s forwards ease-out';
        dock.style.animation = 'none';
        dockStatus = mode;
    }

    if (!dockActive) {
        dock.style.animation = `none`;
        dock.style.animation = `DockBack 0.5s forwards ease-out`;
        // alert(dockStatus && dockActive);
    }
}

function setDockZoom(bool) {
    if (bool == true) {
        dk_Link = loadStyleSheet("dock_zoom.css");
    } else {
        removeStyleSheet(dk_Link);
    }
}
