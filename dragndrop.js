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
    console.log("lol" );
    if(ev.target.tagName == "DIV") {
        ev.target.appendChild(document.getElementById(data));
        if (ev.target.id == "div1") {
        	for(var i = 0; i < h_index; i++){
        		
        	}
        	hero_arr[h_index] = arr[ Number(data)-1];
        	h_index++;
        };
		if (ev.target.id == "div2") {
			villain_arr[v_index] = arr[Number(data)-1];
			v_index++;
		};
    }
    document.getElementById(data).style.opacity= "1";

}
