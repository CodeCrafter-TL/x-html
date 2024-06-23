document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#dock img");
    const appName = document.createElement("div");
    const Backdrop = document.querySelectorAll("#dock .icons #backdrop");
    appName.id = "app-name";
    document.body.appendChild(appName);

    icons.forEach(icon => {
        icon.addEventListener("mouseover", function (event) {
            const appNameText = event.target.alt;
            const iconRect = event.target.getBoundingClientRect();
            appName.textContent = appNameText;
            appName.style.top = `${iconRect.top - appName.offsetHeight}px`;
            appName.style.left = `${iconRect.left + iconRect.width / 2}px`;
            appName.style.display = "block";
        });

        icon.addEventListener("mouseout", function () {
            appName.style.display = "none";
        });
    });
});