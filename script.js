function init(){
	console.log("hello");
	make_list();
}

function make_list(){
	var arr = [];
	for (var i = 0; i < 9; i++) {
		var x = shuffle_num();
		if (i == 0) {
			arr[i] = x;
			console.log(x);
		}else{
			while(is_exist(arr,x)){
				x = shuffle_num();
			}
			arr[i] = x;
			console.log(x);

		}
	}
	for (var i = 0; i < 9; i++) {
		document.getElementById(i+1).src = "img/"+ arr[i] + ".png";
	}
}

function shuffle_num(){
	return 1+ parseInt((Math.random() * 10) % 9);
}

function is_exist(arr, x){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == x) {
			return true;
		}
	}
	return false;
}
