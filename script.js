var hero_arr = [];
var villain_arr = [];
var h_index = 0;
var v_index = 0;
var arr = [];



function init(){
	console.log("hello");
	make_list();
}

function results(){
	var A = [['Heroes','Villains']];

	for(var j=0; j <= Math.max(h_index, v_index); ++j){ 
		A.push([hero_arr[j],villain_arr[j]]);
	}

	var csvRows = [];

	for(var i=0, l=A.length; i<l; ++i){
	    csvRows.push(A[i].join(','));
	}

	var csvString = csvRows.join("\n");
	var a         = document.createElement('a');
	a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
	a.target      = '_blank';
	a.download    = 'myFile.csv';

	document.body.appendChild(a);
	a.click();
}

function make_list(){

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
