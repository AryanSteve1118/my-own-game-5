class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          background(bgImg)
          form = new Form()
          form.display();

          // createSprites for players
          basket = createSprite(displayWidth/2,160,10,10)
          basket.addImage(basketImg);
          basket.scale = 0.7;
          
          // addImages
          // add all players to array
        }
    }
    play(){
            form.hide();
          
            
            Player.getPlayerInfo();
            // player.getCarsAtEnd();
            if(allPlayers !== undefined){
             // background(rgb(198,135,103));
             background(bgImg)
            //   image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
            drawSprites()
            chain.display();
            ball.display();
           
            ground.display();
            obstacle.display();
            // roof.display();
              var index = 0;        
              //x and y position of the cars
              var x = 175 ;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
        
                //position the cars a little away from each other in x direction
                x = x + 200;
                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                // cars[index-1].x = x;
                // cars[index-1].y = y;
               // console.log(index, player.index)
              }
            
               
                if (index === player.index){
                  stroke(10);   
                  fill("red");
                  ellipse(x,y,60,60);
                //  cars[index - 1].shapeColor = "red";
                // camera.position.x = displayWidth/2;
                // camera.position.y = cars[index-1].y;
                }
               
                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
              }
        
            
        
            if(keyIsDown(UP_ARROW) && player.index !== null){
              if (gs!=="launched"){
                chain.fly();
                Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-140}) 
               gs="launched";
               detectCollision(ball,obstacle);
              }

                // chain.fly();
                // Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-20}) 
               
              // Matter.Body.setStatic(ball.body,false)
             // player.distance +=10
             
              player.update();
            }
            console.log("player.distance"+player.distance)
            if(player.distance > 3770){
              gameState = 2;
              player.rank+=1;
              Player.updateCarsAtEnd(player.rank)
              console.log("player.rank"+player.rank)
            }
           
          
           
          }
        
          end(){
            console.log("Game Ended");
            console.log(player.rank)
          }
        
    
}
    
