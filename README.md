# p5.play-boilerplate
Boiler plate for p5.play

ball class 
launcher class
also we need images 
form class
database 
game states
player count

in sketch.js

three if statements for gameStates.like multiplayer car racing game.

1. gameState===0
    display the form
    in form: input box, submit button.
    then in database we have to update players.
2. gameState===1
    game. play
    

images to be downloaded
basket
ball
player

//
- ground - a
 - attach ball to constraint
 - fly()
 - space- attach again
 - time - timer
 - score for 20 attempts

 function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}






