export default {
    // event(事件)工具集
    // 页面加载完成后
    // 主要是原生JS，页面只能加载一次window.onload；这里使用该方法可以绑定多个方法。
    readyEvent (fn) {
        if (fn == null) {
            fn = document;
        }
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = fn;
        } else {
            window.onload = function () {
                oldonload();
                fn();
            };
        }
    },
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 下面的顺序：标准dom2，IE dom2， dom
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent (element, type, handler) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function () {
                handler.call(element);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    // 移除事件
    removeEvent (element, type, handler) {
        if (element.removeEnentListener) {
            element.removeEnentListener(type, handler, false);
        } else if (element.datachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
    stopPropagation (ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();// 标准w3c
        } else {
            ev.cancelBubble = true;// IE
        }
    },
    // 取消事件的默认行为
    preventDefault (event) {
        if (event.preventDefault) {
            event.preventDefault();// 标准w3c
        } else {
            event.returnValue = false;// IE
        }
    },
    // 获取事件目标
    getTarget (event) {
        // 标准W3C 和 IE
        return event.target || event.srcElement;
    },
    // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
    getEvent (e) {
        var ev = e || window.event;
        if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                ev = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return ev;
    },
     stopEvent (e) { //阻止事件行为
      window.event ? window.event.cancelBubble = true : e.stopPropagation(); //兼容ie阻止冒了-cancelBubble
      e.preventDefault ? e.preventDefault() : window.event.returnValue == false; //兼容ie阻止默认事件
  }

}
