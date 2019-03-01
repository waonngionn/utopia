$(function () {
    let list = {};
    chrome.storage.local.get(function (items) {
        list = items;
    });

    $('html').on('keydown', function (event) {
        const keycode = event.keyCode;
        const ctrl = event.ctrlKey;
        const shift = event.shiftKey;
        if (ctrl && shift) {
            if (list[keycode]) {
                location.href = list[keycode];
            }
        }
    });
});