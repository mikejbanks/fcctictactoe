$(document).ready(function(){
	var playerTurn="X";
	var computerTurn="O";
	var boardTracking=["-","-","-","-","-","-","-","-","-"];
	var value;
	var gameCompleted=0;
	var turnsCompleted=0;
	
	function resetGameFunction(){
		for(var i=0;i<9;i++){
			$('#'+i).prop('value',"-");
		}
		for(var m=0;m<9;m++){
			boardTracking[m]="-";
		}
		gameCompleted=0;
		turnsCompleted=0;
	}
	function playerTurnFunction(clickedSpace){
		turnsCompleted+=1;
		boardTracking[clickedSpace]=playerTurn;
		$('#'+clickedSpace).prop('value',playerTurn);
		if(boardTracking[0]==playerTurn&&boardTracking[1]==playerTurn&&boardTracking[2]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 1,2,3 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[0]==playerTurn&&boardTracking[3]==playerTurn&&boardTracking[6]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 1,4,7 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[0]==playerTurn&&boardTracking[4]==playerTurn&&boardTracking[8]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 1,5,9 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[1]==playerTurn&&boardTracking[4]==playerTurn&&boardTracking[7]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 2,5,8 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[2]==playerTurn&&boardTracking[5]==playerTurn&&boardTracking[8]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 3,5,9 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[3]==playerTurn&&boardTracking[4]==playerTurn&&boardTracking[5]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 4,5,6 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[6]==playerTurn&&boardTracking[7]==playerTurn&&boardTracking[8]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 7,8,9 is "+playerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[2]==playerTurn&&boardTracking[4]==playerTurn&&boardTracking[6]==playerTurn){
			alert("Player "+playerTurn+" wins "+"Space 3,5,7 is "+playerTurn);
			gameCompleted=1;
		}
		
		if(gameCompleted==0){
		computerTurnFunction();	
		}
		else{
		setTimeout(resetGameFunction,500); //Allow user to see gameboard win before refresh	
		}
	
	}
	
	function computerTurnFunction(){
		if(turnsCompleted==9){
			alert("Draw");
			resetGameFunction();
		}
		else{
		
		var computerRandomLocation;
		var notValidLocations=[];
		for(var n=0;n<boardTracking.length;n++){
			if(boardTracking[n]=='X'||boardTracking[n]=='O'){
				notValidLocations.push(n);
			}
		}
		var randomLocation;
		do{
		randomLocation=Math.floor(Math.random() * (9 - 0));
		}while($.inArray(randomLocation,notValidLocations)>-0.1);
		$('#'+randomLocation).prop('value',computerTurn);
		boardTracking[randomLocation]=computerTurn;
		turnsCompleted+=1;
		
		if(boardTracking[0]==computerTurn&&boardTracking[1]==computerTurn&&boardTracking[2]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 1,2,3 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[0]==computerTurn&&boardTracking[3]==computerTurn&&boardTracking[6]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 1,4,7 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[0]==computerTurn&&boardTracking[4]==computerTurn&&boardTracking[8]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 1,5,9 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[1]==computerTurn&&boardTracking[4]==computerTurn&&boardTracking[7]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 2,5,8 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[2]==computerTurn&&boardTracking[5]==computerTurn&&boardTracking[8]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 3,5,9 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[3]==computerTurn&&boardTracking[4]==computerTurn&&boardTracking[5]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 4,5,6 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[6]==computerTurn&&boardTracking[7]==computerTurn&&boardTracking[8]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 7,8,9 is "+computerTurn);
			gameCompleted=1;
		}
		else if(boardTracking[2]==computerTurn&&boardTracking[4]==computerTurn&&boardTracking[6]==computerTurn){
			alert("Computer "+computerTurn+" wins "+"Space 3,5,7 is "+computerTurn);
			gameCompleted=1;
		}
		if(gameCompleted==1){
			setTimeout(resetGameFunction,500);
		}
		}
	}
	
	$(".boardSquare").on("click", function(){
	var clickedSpace=$(this).prop('id');
	value=$(this).prop('value');
	if(value!="X"&&value!="O"){
		playerTurnFunction(clickedSpace);
	}
	});
	
	$(".togglePlayer").on("click", function(){
	if($(this).prop('id')=="togglePlayerX"){
		playerTurn="X";
		computerTurn="0";
		resetGameFunction();
	}
	else if($(this).prop('id')=="togglePlayerO"){
		playerTurn="O";
		computerTurn="X";
		resetGameFunction();
	}
	});
	
});