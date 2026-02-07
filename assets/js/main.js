jQuery(function ($) {
    // 電話番号をPC無効化
    (function () {
        var ua = navigator.userAgent.toLowerCase();
        var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

        if (!isMobile) {
            $('a[href^="tel:"]').on('click', function (e) {
                e.preventDefault();
            });
        }
    })();

    // svgをインラインで読み込む
    deSVG('.svg', true);

});
