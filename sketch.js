var umbrella;
var maxDrops;
var world;
function preload(){
  thunderbolt1 = loadImage("thunderbolt/1.png")
  thunderbolt2 = loadImage("thunderbolt/2.png")
  thunderbolt3 = loadImage("thunderbolt/3.png")
  thunderbolt4 = loadImage("thunderbolt/4.png")
  walkingImg1 = loadImage("Walking Frame/walking_1.png")
  walkingImg2 = loadImage("Walking Frame/walking_2.png")
  walkingImg3 = loadImage("Walking Frame/walking_3.png")
  walkingImg4 = loadImage("Walking Frame/walking_4.png")
  walkingImg5 = loadImage("Walking Frame/walking_5.png")
  walkingImg6 = loadImage("Walking Frame/walking_6.png")
  walkingImg7 = loadImage("Walking Frame/walking_7.png")
  walkingImg8 = loadImage("Walking Frame/walking_8.png")



}

function setup(){
   createCanvas(1000,600);
   umbrella = new umbrella(200,100,10);
   var maxDrops = 100;
   for(var i=0;i<maxDrops;i++){

      maxDrops.push(new createDrop(random(0,400),random(0,400)))
   }

   

    
}

function draw(){
  umbrella1.display();  

}  

function thunder(){
  if (frameCount % 20 === 0){
    var thunder = createSprite(600,165,10,40);

    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: thunder.addImage(thunderbolt1);
       
               break;
       case 2: thunder.addImage(thunderbolt2);
 
               break;
       case 3: thunder.addImage(thunderbolt3);
       
               break;
       case 4: thunder.addImage(thunderbolt4);
 
              
               break;
       default: break;
     }
    }
  }

  function walkingBoy(){

                var umbrella = createSprite(600,165,10,40);
            
                

                 var rand = Math.round(random(1,8));
                 switch(rand) {
                   case 1: umbrella.addImage(thunderbolt1);
                   
                           break;
                   case 2: umbrella.addImage(thunderbolt2);
             
                           break;
                   case 3: umbrella.addImage(thunderbolt3);
                   
                           break;
                   case 4: umbrella.addImage(thunderbolt4);
             
                          
                           break;
                           case 5: umbrella.addImage(thunderbolt5);
                   
                           break;
                   case 6: umbrella.addImage(thunderbolt6);
             
                           break;
                   case 7: umbrella.addImage(thunderbolt7);
                   
                           break;
                   case 8: umbrella.addImage(thunderbolt8);

                           break;

             
                   default: break;
                 }
                


  }

