export function HTMLElementCreator(type, value, attributeKey, attributeValue) {
    let element = document.createElement(`${type}`);
    element.innerText = value;
    if (attributeKey && attributeValue) {
        element[attributeKey] = attributeValue;
    }
    return element;
}

export function HTMLiterator(array, type, wrapType, parent, headerType, headerValue) {
    let wrap = document.createElement(`${wrapType}`);
    if (headerType && headerValue) {
        wrap.appendChild(HTMLElementCreator(headerType, headerValue));
    }
    for (const el in array) {
        if (typeof array[el] !== "object") {
            wrap.appendChild(HTMLElementCreator(type, array[el]));
        }
    }
    parent.appendChild(wrap);
}