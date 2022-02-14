var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fadaImg, fada, fadaBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadImage("images/fairy.png");

}

function setup() {
    createCanvas(800, 750);
    //escrever código para tocar o som vozFada
   
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(250,150);
    fada.addImage(fadaImg);
    fada.scale = 0.2;

    star = createSprite(650,150);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

    fadaBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, fadaBody);

	
	Engine.run(engine);

}
function draw(){

    background(bgImg);
    

    if(star.y > 470 && starBody.position.y > 470){

        Matter.Body.setStatic(starBody,true);
    }

    star.y = starBody.position.y;

drawSprites();
}
function keyPressed(){

if(keyCode === LEFT_ARROW){

    fada.velocityX = -4;

}

if(keyCode === RIGHT_ARROW){

    fada.velocityX = 4;

}

if(keyCode === DOWN_ARROW){

Matter.Body.setStatic(starBody,false);

}

}