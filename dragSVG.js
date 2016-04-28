var rect = document.querySelector("rect"),
    svg = document.querySelector("svg"),
    cross = document.querySelector("#cross"),
    ns = svg.namespaceURI,
    key, ox, oy, sx, sy, cx, cy,
    ATTRS = {
        x: null,
        y: null,
        width: null,
        height: null
    };

first = getAttr(rect, ATTRS);

document.onkeydown = function(e) {
    key = e.keyCode;
};
document.onkeyup = function(e) {
    key = 0;
};

document.ondblclick = function(e) {
    console.log("dblclick", first);
    setAttr(rect, {
        x: first.x,
        y: first.y,
        width: first.width,
        height: first.height
    });
};

document.onmousedown = function(e) {
    sx = e.clientX;
    sy = e.clientY;
    ox = sx - parseInt(rect.getAttribute('x'));
    oy = sy - parseInt(rect.getAttribute('y'));
};

svg.onmousemove = function(e) {
    cx = e.clientX;
    cy = e.clientY;
    cross.setAttribute('x', cx - 32);
    cross.setAttribute('y', cy - 32);
    var current = getAttr(rect, ATTRS);
    if (e.which === 1) {
        switch (key) {
            case 87: // W
                setAttr(rect, {
                    width: cx - sx + parseInt(current.width)
                });
                break;
            case 72: // H
                setAttr(rect, {
                    height: cy - sy + parseInt(current.height)
                });
                break;
            default:
                setAttr(rect, {
                    x: e.clientX - ox,
                    y: e.clientY - oy
                });
        }

    }
};

function setAttr(ele, attrs) {
    for (var att in attrs) {
        console.log(att, attrs[att]);
        ele.setAttribute(att, attrs[att]);
    }
}

function getAttr(ele, attrs) {
    for (var att in attrs) {
        if (attrs.hasOwnProperty(att)) {
            attrs[att] = ele.getAttribute(att);
        }
    }
    return attrs;
}
