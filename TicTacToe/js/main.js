//jquery
$(document).ready(function(){
	$("#but").click(function(){
		$("#mess").css("top","-44%");
		location.reload();
	});
});	


function FullGame(){
 location.reload();
}

function messVisible(winnername){
	document.getElementById("mess").style.top = "44%";
	document.getElementById("messp").innerHTML = winnername;
	if(winnername[14] == "X"){
		document.getElementById("messp").style.color = "blue";
	}else{
		document.getElementById("messp").style.color = "red";
	}
} 

   //Sounds

function AudioO(){
	document.getElementById("a1").play();
}
function AudioX(){
	document.getElementById("a2").play();
}
function AudioE(){
	document.getElementById("a3").play();
}
function AudioW(){
	document.getElementById("a4").play();
}
	// disabled buttons
function FullDis(){
	for (var i = 0; i < 3; ++i){
		 		for (var j = 0; j < 3; ++j){
		 			document.getElementById("c" + i + j).disabled = true;
		 	    }
		 	}
}
function Error(){
  	if (win == false && p == 9){
		 	AudioE();
		 	for (var i = 0; i < 3; ++i){
		 		for (var j = 0; j < 3; ++j){
		 		   document.getElementById("c" + i + j).setAttribute("style","background-color:red;color:black");
		 	    }
		 	}
	 }	
  } 
  var visited = [ ["","",""],
  				  ["","",""],
  				  ["","",""] ];
  var x = 0;
  var y = 0;

 function inputStyle(id,val,inner,valcolor,innercolor){
 	var i = id[1];
 	var j = id[2];
 	document.getElementById(id).style.color = valcolor;
	document.getElementById("gamer").style.color = innercolor;
	document.getElementById(id).disabled = "1";
	document.getElementById(id).value = val;
	document.getElementById("gamer").innerHTML = inner;
	if (val == "O"){
		AudioO();
		visited[i][j] = true;
	}else{
		AudioX();
		visited[i][j] = false;
	}

 }
 var win = false;
 function winnerTest(){
 	//horizontal
 	for (var i = 0; i < 3; ++i){
 		if (visited[i][0] == true && visited[i][1] == true && visited[i][2] == true){
 		 	for(var k = 0; k < 3;k++){
 				document.getElementById("c" + i + k).setAttribute("style","background-color:green;color:white");
 			}
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(O)");
 			win = true;
 			break;
 		}else if(visited[i][0] === false && visited[i][1] === false && visited[i][2] === false){
 			for(var k = 0; k < 3;k++){
 				document.getElementById("c" + i + k).setAttribute("style","background-color:green;color:white");
 			}
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(X)");
 			win = true;
 			break;
 		}
 	//vertical
 		if(visited[0][i] == true && visited[1][i] == true && visited[2][i] == true){
 			for(var k = 0; k < 3;k++){
 				document.getElementById("c" + k + i).setAttribute("style","background-color:green;color:white");
 			}
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(O)");
 			win = true;
 			break;
 		}else if(visited[0][i] === false && visited[1][i] === false && visited[2][i] === false){
			for(var k = 0; k < 3;k++){
			   document.getElementById("c" + k + i).setAttribute("style","background-color:green;color:white");
			}
			 FullDis();
 			 AudioW();
 			 messVisible("Winner Player(X)");
 			 win = true;
 			 break;
 		}
 	//001122
 		if(visited[0][0] == true && visited[1][1] == true && visited[2][2] == true){
 			for(var k = 0; k < 3;k++){
			   document.getElementById("c" + i + i).setAttribute("style","background-color:green;color:white");
			}
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(O)");
 			win = true;
 		}else if(visited[0][0] === false && visited[1][1] === false && visited[2][2] === false){
			for(var k = 0; k < 3;k++){
			   document.getElementById("c" + i + i).setAttribute("style","background-color:green;color:white");
			}
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(X)");
 			win = true;
 		}
 		//021120
 		if(visited[0][2] == true && visited[1][1] == true && visited[2][0] == true){
	 		 for(var h = 0; h < 3; ++h){
	 		 	for(var k = 0; k < 3; ++k){
	 		 		if(h + k == 2){
	 		 			document.getElementById("c" + h + k).setAttribute("style","background-color:green;color:white"); 		 		
	 		 		}
				}
			 }
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(O)");
 			win = true;
 		}else if(visited[0][2] === false && visited[1][1] === false && visited[2][0] === false){
 			 for(var h = 0; h < 3; ++h){
	 		 	for(var k = 0; k < 3; ++k){
	 		 		if(h + k == 2){
	 		 			document.getElementById("c" + h + k).setAttribute("style","background-color:green;color:white"); 		 		
	 		 		}
				}
			 }
 			FullDis();
 			AudioW();
 			messVisible("Winner Player(X)");
 			win = true;
 		}
 	}
 }	


var f = 0;
var p = 0;
function B00(){
	p += 1;
	    switch(f){
		  case 0: 
			 f += 1;
			 inputStyle("c00","O","Player(X)","red","blue");
			 winnerTest();
		   break;
		
		  case 1:
			 inputStyle("c00","X","Player(O)","blue","red");
			 f -= 1;
			 winnerTest();
		   break;
	   }
	Error();
}	
		

function B01(){
	p += 1;
	switch(f){
		case 0: 
		inputStyle("c01","O","Player(X)","red","blue");
	    f += 1;
	  	winnerTest();
	 break;
		case 1:
		inputStyle("c01","X","Player(O)","blue","red");
	    f -= 1;
		winnerTest();
	break;
	}
	Error();
}

function B02(){
	p += 1;
	 switch(f){
		case 0: 
	    inputStyle("c02","O","Player(X)","red","blue");
	    f += 1;
	  	winnerTest();
	  break;
		case 1:
	    inputStyle("c02","X","Player(O)","blue","red");
	    f -= 1;
	    winnerTest();
	  break;
	}
	Error();
}

function B10(){
	p += 1;
	switch(f){
		case 0: 
	    f += 1;
		inputStyle("c10","O","Player(X)","red","blue");
		winnerTest();

	break;
		case 1:
	    f -= 1;
		inputStyle("c10","X","Player(O)","blue","red");
		winnerTest();
	break;
    }
	Error();
}
	
function B11(){
	p += 1;
	switch(f){
		case 0: 
	  	f += 1;
		inputStyle("c11","O","Player(X)","red","blue");
	  	winnerTest();

	break;
		case 1:
		f -= 1;
		inputStyle("c11","X","Player(O)","blue","red");
		winnerTest();

	break;
	}
	Error();
}
	
function B12(){
	p += 1;
	switch(f){
			case 0: 
			f += 1;
			inputStyle("c12","O","Player(X)","red","blue");;
			winnerTest();

		break;
			case 1:
			f -= 1;
			inputStyle("c12","X","Player(O)","blue","red");
			winnerTest();

		break;
		}
		Error();
	}

function B20(){
	p += 1;
	switch(f){
		case 0: 
	  	f += 1;
		inputStyle("c20","O","Player(X)","red","blue");
		winnerTest();
	break;
		case 1:
		f -= 1;
		inputStyle("c20","X","Player(O)","blue","red");
		winnerTest();
	break;
	}
	Error();
}
	
function B21(){
	p += 1;
	switch(f){
		case 0: 
	  	f += 1;
		inputStyle("c21","O","Player(X)","red","blue");
		winnerTest();
	break;
		case 1:
		f -= 1;
		inputStyle("c21","X","Player(O)","blue","red");
		winnerTest();
	break;
	}
	Error();
}

function B22(){
	p += 1;
	switch(f){
			case 0: 
		  	f += 1;
			inputStyle("c22","O","Player(X)","red","blue");
			winnerTest();

		break;
			case 1:
			f -= 1;
			inputStyle("c22","X","Player(O)","blue","red");
			winnerTest();
		break;
		}
	Error();	
}
