function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	ev.target.style.opacity= "0";
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	document.getElementById(data).style.opacity= "100%";
}