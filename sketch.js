const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var doggyball;
var engine, world;
var ground;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;


    console.log(doggyball);
    var doggyball_options = {
        restitution: 1
    }

    doggyball = Bodies.circle(200, 100, 20, doggyball_options);
    World.add(world, doggyball);

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
    World.add(world, ground);

    console.log(ground);
}

function draw() {
    background("pink");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipse(doggyball.position.x, doggyball.position.y, 20, 20);
}