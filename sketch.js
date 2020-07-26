var bullet, wall, speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 50, 20, 10);
  speed = Math.round(random(223,321),0);
  weight = Math.round(random(30,52),0);
  thickness = Math.round(random(22,83),0);
  wall=createSprite(1200,50,thickness,height/2);
}

function draw() {
  background(255,255,255);    
  bullet.velocityX = speed;
  
    var damage = Math.round((0.5 * weight * speed * speed)/(thickness*thickness*thickness),0);

text("damage: " + damage,150,150);
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    bullet.x = wall.x - bullet.width;

    bullet.depth = wall.depth;
    bullet.depth = bullet.depth + 1;

     if(damage < 10 ){
      bullet.shapeColor ="green";
     }
     if(damage > 10 ){
      bullet.shapeColor ="red";
     }
     
  }
  drawSprites();
}

function hasCollided (object1,object2){
  if(object1.x+object1.width>=object2.x) {
      return true;
  }
    return false;

}