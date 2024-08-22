function onFunction(switchElement, func, param = undefined) {
    switchElement.classList.remove('on');
    switchElement.classList.add('off');
    if (param) {
        switchElement.onclick = `offFunction(this, ${func}, ${!param})`;
        func(param);
    } else {
        switchElement.onclick = `offFunction(this, ${func})`;
        func();
    }
}

function offFunction(switchElement, func, param = undefined) {
    switchElement.classList.remove('off');
    switchElement.classList.add('on');
    if (param) {
        switchElement.onclick = `onFunction(this, ${func}, ${!param})`;
        func(param);
    } else {
        switchElement.onclick = `onFunction(this, ${func})`;
        func();
    }
}