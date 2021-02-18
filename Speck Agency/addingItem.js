function addItem() {
    var dl = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var dt = document.createElement("dt");
    dt.setAttribute('id', candidate.value);
    dt.appendChild(document.createTextNode(candidate.value));
    dl.appendChild(dt);
}

function removeAllItems() {
    const item = document.querySelector('#dynamic-list')
    if (confirm("Are you sure that you want to remove all products?")) {
        while (item.firstChild) {
            item.removeChild(item.firstChild)
        }
        countElements();
    } else {
        return;
    }
}

function clearText() {
    var itemText = document.getElementById("candidate");
    itemText.value = "";
}

function countElements() {
    var list = document.getElementById('dynamic-list');
    var rows = list.getElementsByTagName("dt");
    var counterText = document.getElementById("counter");
    counterText.value = rows.length;
}