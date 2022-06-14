//aqui se crean las constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//aqui se crean las variables
var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  //aqui se crean a los jugadores y a las bases donde estan parados, ademas de sus ubicaciones
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 150,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 150,
    120,
    120
  );
  
  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);

 //aqui se crea el codigo para hacer que aparezcan en el lienzo los jugadores, sus arcos, y sus bases
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();
   
  //aqui se crea el codigo para disparar la flecha cuando se presiona la barra espaciadora
   if(keyCode === 32){
     arrow.display()
     arrow.shoot(playerArcher.body.angle);
    }
}



