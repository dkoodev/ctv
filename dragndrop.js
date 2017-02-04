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
    console.log("drop" );
    if(ev.target.tagName == "DIV") {
        ev.target.appendChild(document.getElementById(data));
        if (ev.target.id == "div1") {
        	for(var i = 0; i < v_index; i++){
        		if (arr[ Number(data)-1] == villain_arr[i]) {
        			villain_arr[i] = "";
        			v_index--;
        			break;
        		}
        	}
        	hero_arr[h_index] = arr[ Number(data)-1];
        	h_index++;
        	
        };
		if (ev.target.id == "div2") {
			for(var i = 0; i < h_index; i++){
				if (arr[ Number(data)-1] == hero_arr[i]) {
					hero_arr[i] = "";
					h_index--;
					break;
				}
			}
			villain_arr[v_index] = arr[Number(data)-1];
			v_index++;
		};
    }
    document.getElementById(data).style.opacity= "1";

}
