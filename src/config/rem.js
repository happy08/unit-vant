(function(doc, win) {
    // 防抖
    function debounce(func, wait) {
        let timeout = null
        return function() {
            let context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    };
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = debounce(function(item) {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        console.log('clientWidth',clientWidth);
        docEl.style.fontSize = (clientWidth / 11.685) + 'px';//23.37
    }, 250);
    
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);