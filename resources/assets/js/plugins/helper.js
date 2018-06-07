export function countdown(ele, seconds, tips) {
    let timer;
    const originTxt = ele.innerHTML;
    addClass(ele, 'is-disabled');
    ele.disabled = true;
    timer = setInterval(function () {
        seconds--;
        if (seconds <= 0) {
            ele.innerHTML = originTxt;
            removeClass(ele, 'is-disabled');
            ele.disabled = false;
            clearInterval(timer);
        } else {
            ele.innerHTML = seconds.toString() + '秒' + tips;
        }
    }, 1000);
}

export function isMobile(mobile) {
    let reg = /^1[0-9]{10}$/;
    return reg.test(mobile);
}

export function addClass(obj, cls) {
    let obj_class = obj.className;
    let blank = (obj_class !== '') ? ' ' : '';
    obj.className = obj_class + blank + cls;
}

export function removeClass(obj, cls) {
    let obj_class = ' ' + obj.className + ' ';
    obj_class = obj_class.replace(/(\s+)/gi, ' ');
    let removed = obj_class.replace(' ' + cls + ' ', ' ');
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');
    obj.className = removed;
}