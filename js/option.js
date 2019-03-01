$(function () {
    const insertText = function (url, alphabet) {
        if (url) {
            const text = "#" + alphabet + "-link";
            $(text).val(url);
        }
    };

    chrome.storage.local.get(function (items) {
        insertText(items[65], "A");
        insertText(items[66], "B");
        insertText(items[67], "C");
        insertText(items[68], "D");
        insertText(items[69], "E");
        insertText(items[72], "H");
        insertText(items[75], "K");
        insertText(items[77], "M");
        insertText(items[84], "T");
    });

    $(document).on('click', '#save', function () {
        const entity = {
            65: $("#A-link").val(),
            66: $("#B-link").val(),
            67: $("#C-link").val(),
            68: $("#D-link").val(),
            69: $("#E-link").val(),
            72: $("#H-link").val(),
            75: $("#K-link").val(),
            77: $("#M-link").val(),
            84: $("#T-link").val()
        };

        chrome.storage.local.set(entity, function () {
            console.log('saved')
        });
    });
})