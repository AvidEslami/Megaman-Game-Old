var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var surface, currentScreen;
var friction = 0.94;
var shooting = true;
var attackCooldown = 8;
var attackState = 0;
var bossAttackCooldown = 4.5;
var bossShooting = false;
var colValue;
var bossHealthBarVisible = false;
var bossHealthWidth = 11;
var bossHits = 0;
var heroHealthWidth = 5;
var heroHits = 0;
var upgradeState = "none";
var attackCounter = 0;
var heroHealthCounter = 0;
var ultimateOn = false;
var ultimateCounter = 0;
var ultimateCounter2 = 0;
var ultimateAvailable = false;
var ultimateCooldown = 100;
var ultimateAvailable2 = false;
var ultimateCooldown2 = 100;
var gameState = 0;
var moneyHolder = 0;
var currentMoney = 0;



//Start actual code for start screen
canvas = document.getElementById("gameWindow");
ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 600;

elements = [];
elements.push({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    imgId: "startPage"
});
playElements = [];

bossHealth = [];

for (var i = 0; i < 40; i++) {
    bossHealth.push(bossHealthWidth * i);
}

heroHealth = [];
//20
for (var i = 0; i < 20; i++) {
    heroHealth.push(heroHealthWidth * i);
}

keys = [];

function update() {
    //Clear the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //We have a fully cleanned screen



    if (currentScreen === "Start") {

        //Draw start screen
        for (var i = 0; i < elements.length; i++) {
            console.log("Drawing element " + elements[i].imgId);
            ctx.drawImage(document.getElementById(elements[i].imgId), elements[i].x, elements[i].y);
        }

    } else if (currentScreen === "Play") {

        if (gameState === 0) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 350,
                y: -200,
                velX: 0,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 110) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 6,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 220) {
            playElements.push({
                x: 0,
                y: -400,
                velX: 2,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -400,
                velX: -1,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -400,
                velX: 1,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -400,
                velX: -1,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -400,
                velX: -1,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 370) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 0,
                y: -500,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 5,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -800,
                velX: 0,
                velY: 8,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 600) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 200,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 200,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 700) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 350,
                y: -200,
                velX: 0,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 880) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 6,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 890) {
            playElements.push({
                x: 0,
                y: -400,
                velX: 2,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -400,
                velX: -1,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -400,
                velX: 1,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -400,
                velX: -1,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -400,
                velX: -1,
                velY: 4,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 1000) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 0,
                y: -500,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 450,
                y: -300,
                velX: 0,
                velY: 5,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -200,
                velX: 0,
                velY: 6,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -200,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -800,
                velX: 0,
                velY: 8,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 1150) {
            playElements.push({
                x: 0,
                y: 300,
                velX: 3,
                velY: 4,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 1249) {
            playElements.push({
                x: 0,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 100,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 200,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-r",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 200,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 300,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
            playElements.push({
                x: 400,
                y: -300,
                velX: 0,
                velY: 2,
                imgId: "Elebee-l",
                health: 3,
                directionX: "",
                directionY: "",
                width: 70,
                height: 53
            });
        } else if (gameState === 1250) {
            playElements.push({
                x: 150,
                y: -100,
                velX: 0,
                velY: 1,
                imgId: "gutsman",
                directionX: "",
                directionY: "",
                width: 150,
                height: 161
            });
        }
        gameState++;

        //draw elements and move them

        for (var i = 0; i < playElements.length; i++) {
            //            console.log("Drawing element " + elements[i].imgId);
            //            ctx.drawImage(document.getElementById(elements[i].imgId), elements[i].x, elements[i].y);

            // garbage collector
            if (playElements[i].y < -1600 || playElements[i].y > 1600 || playElements[i].x > 600 || playElements[i].x < -100) {
                playElements.splice(i, 1);
            } else if ((playElements[i].imgId === "projectile" || playElements[i].imgId === "projectile-2" || playElements[i].imgId === "water-1" || playElements[i].imgId === "water-2" || playElements[i].imgId === "water-3" || playElements[i].imgId === "water-4" || playElements[i].imgId === "water-3" || playElements[i].imgId === "water-5" || playElements[i].imgId === "grass-1" || playElements[i].imgId === "grass-2" || playElements[i].imgId === "grass-3" || playElements[i].imgId === "grass-4" || playElements[i].imgId === "grass-5" || playElements[i].imgId === "elec-1" || playElements[i].imgId === "elec-2" || playElements[i].imgId === "elec-3" || playElements[i].imgId === "elec-4" || playElements[i].imgId === "elec-5") && playElements[i].y < 0) {
                playElements.splice(i, 1);
            } else {

                if (playElements[i].imgId === "background" && playElements[i].y == 600) {
                    playElements[i].y = -1400;
                }

                if (playElements[i].imgId === "gutsman") {
                    if (playElements[i].y > 55) {
                        playElements[i].velY = 0;
                        playElements[i].velX = 3;
                        playElements[i].y = 54;
                        bossShooting = true;
                        bossHealthBarVisible = true;
                    }
                    if (playElements[i].x < 0 || playElements[i].x > 350) {
                        playElements[i].velX *= -1;
                    }

                    //boss shooting control
                    if (bossAttackCooldown < 0 && bossShooting == true) {
                        bossAttackCooldown = 4.5;
                        playElements.push({
                            x: playElements[i].x + 70,
                            y: playElements[i].y + 15,
                            velX: Math.random() * 8 - Math.random() * 8,
                            velY: 8,
                            imgId: "gutsman-p",
                            directionX: "",
                            directionY: "",
                            width: 9,
                            height: 31
                        });
                    }
                    bossAttackCooldown--;
                    // bullet collisions boss and megaman bullet
                    for (var j = 0; j < playElements.length; j++) {
                        if (playElements[j].imgId === "projectile" || playElements[j].imgId === "projectile-2" || playElements[j].imgId === "water-1" || playElements[j].imgId === "water-2" || playElements[j].imgId === "water-3" || playElements[j].imgId === "water-4" || playElements[j].imgId === "water-3" || playElements[j].imgId === "water-5" || playElements[j].imgId === "grass-1" || playElements[j].imgId === "grass-2" || playElements[j].imgId === "grass-3" || playElements[j].imgId === "grass-4" || playElements[j].imgId === "grass-5" || playElements[j].imgId === "elec-1" || playElements[j].imgId === "elec-2" || playElements[j].imgId === "elec-3" || playElements[j].imgId === "elec-4" || playElements[j].imgId === "elec-5") {
                            colValue = colCheck(playElements[i], playElements[j]);

                            if (colValue === "l" || colValue === "r" || colValue === "b" || colValue === "t") {
                                playElements[j].y = -700;
                                if (playElements[j].imgId === "projectile") {
                                    bossHits++;
                                } else if (playElements[j].imgId == "water-1") {
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "water-2") {
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "water-3") {
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "water-4") {
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "water-5") {
                                    bossHits += 5;

                                } else if (playElements[j].imgId == "grass-1") {
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "grass-2") {
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "grass-3") {
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "grass-4") {
                                    bossHits += 10;
                                } else if (playElements[j].imgId == "grass-5") {
                                    bossHits += 1;
                                } else if (playElements[j].imgId == "elec-1") {
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "elec-2") {
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                    bossHits++;
                                } else if (playElements[j].imgId == "elec-3") {
                                    bossHits++;
                                    bossHits++;

                                } else if (playElements[j].imgId == "elec-4") {
                                    bossHits++;

                                }


                                if (bossHits > 50) {
                                    bossHealth.pop();
                                    bossHits = 0;
                                    //upgradeState++;
                                    if (bossHealth.length === 0) {
                                        console.log("Splicing " + playElements[i].imgId);
                                        playElements.splice(i, 1);
                                        bossHealthBarVisible = false;
                                    }
                                }

                                ctx.drawImage(document.getElementById("explosion"), playElements[i].x, playElements[i].y);

                            }
                        }
                    }


                    //set boss health counter
                    healthCounter = playElements[i].health * 2;
                }
                //collision between Elebee and projectiles
                if (playElements[i].imgId === "Elebee-r" || playElements[i].imgId === "Elebee-l") {
                    for (var j = 0; j < playElements.length; j++) {
                        if (playElements[j].imgId === "projectile" || playElements[j].imgId === "projectile-2" || playElements[j].imgId === "water-1" || playElements[j].imgId === "water-2" || playElements[j].imgId === "water-3" || playElements[j].imgId === "water-4" || playElements[j].imgId === "water-3" || playElements[j].imgId === "water-5" || playElements[j].imgId === "grass-1" || playElements[j].imgId === "grass-2" || playElements[j].imgId === "grass-3" || playElements[j].imgId === "grass-4" || playElements[j].imgId === "grass-4-expand" || playElements[j].imgId === "grass-5" || playElements[j].imgId === "elec-1" || playElements[j].imgId === "elec-2" || playElements[j].imgId === "elec-3" || playElements[j].imgId === "elec-4") {

                            colValue = colCheck(playElements[i], playElements[j]);

                            if (colValue === "l" || colValue === "r" || colValue === "b" || colValue === "t") {
                                if (playElements[j].imgId !== "grass-4")
                                {
                                    playElements[j].y = -700;
                                }
                                else
                                {
                                    playElements[j].imgId = "grass-4-expand"
                                    playElements[j].width = 130;
                                    playElements[j].height = 127;
                                    playElements[j].velX = 0; 
                                    playElements[j].velY = 0; 
                                    playElements[j].y -= 40;
                                    playElements[j].x -= 40;
                                    
                                }
                                playElements[i].health--;

                                if (playElements[i].health < 1) {
                                    playElements[i].y = 700;
                                    moneyHolder += 200;
                                }

                            }
                        }
                    }
                }

                if (playElements[i].imgId === "megaman" || playElements[i].imgId === "megaman-w" || playElements[i].imgId === "megaman-g" || playElements[i].imgId === "megaman-l") {

                    if (moneyHolder > 0) {
                        playElements[i].money += moneyHolder;
                        currentMoney += moneyHolder;
                        moneyHolder = 0;
                    }

                    if (keys[39] || keys[68]) {
                        playElements[i].velX = playElements[i].velX + 2;
                        if (playElements[i].velX > 1) {
                            playElements[i].directionX = "r";
                        }
                    }
                    if (keys[37] || keys[65]) {
                        playElements[i].velX = playElements[i].velX - 2;
                        if (playElements[i].velX < -1) {
                            playElements[i].directionX = "l";
                        }
                    }
                    if (keys[38] || keys[32] || keys[87]) {
                        playElements[i].velY = playElements[i].velY - 2;
                        if (playElements[i].velY < -1) {
                            playElements[i].directionY = "u";
                        }
                    }
                    if (keys[83] || keys[40]) {
                        playElements[i].velY = playElements[i].velY + 2;
                        if (playElements[i].velY > 1) {
                            playElements[i].directionY = "d";
                        }
                    }
                    if (keys[85]) {
                        currentScreen = "Upgrade";
                    }

                    if (keys[88] && upgradeState === "5-w" && ultimateAvailable === true && ultimateOn === false) {
                        ultimateOn = true;
                        ultimateCounter = 100;
                        ultimateCooldown = 500;
                    }

                    if (ultimateOn === true && ultimateCounter > 0) {
                        playElements.push({
                            x: playElements[i].x + 8,
                            y: playElements[i].y + -275,
                            velX: 0,
                            velY: -20,
                            imgId: "water-5",
                            directionX: "",
                            directionY: "",
                            width: 50,
                            height: 273
                        });
                        ultimateCounter--;
                    }

                    if (keys[88] && upgradeState === "5-g" && ultimateAvailable2 === true && ultimateOn === false) {
                        ultimateOn = true;
                        ultimateCounter2 = 100;
                        ultimateCooldown2 = 500;
                    }

                    if (ultimateOn === true && ultimateCounter2 > 0) {
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: 0,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: -15,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: 15,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: 5,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: 10,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: -10,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        playElements.push({
                            x: playElements[i].x,
                            y: playElements[i].y,
                            velX: -5,
                            velY: -10,
                            imgId: "grass-5",
                            directionX: "",
                            directionY: "",
                            width: 10,
                            height: 10
                        });
                        ultimateCounter2--;
                    }

                    ultimateCooldown--;
                    ultimateCooldown2--;

                    if (ultimateCooldown2 < 1 && ultimateCooldown < 1) {
                        ultimateOn = false;
                    }

                    if (playElements[i].x > 425 || playElements[i].x < 0) {
                        playElements[i].velX = 0;
                        if (playElements[i].directionX === "r") {
                            playElements[i].x = 424;
                        } else {
                            playElements[i].x = 1;
                        }
                    }

                    if (playElements[i].y > 525 || playElements[i].y < 0) {
                        playElements[i].velY = 0;
                        if (playElements[i].directionY === "u") {
                            playElements[i].y = 1;
                        } else {
                            playElements[i].y = 524;
                        }

                    }
                    playElements[i].velX *= friction;
                    playElements[i].velY *= friction;

                    //shooting Controls
                    if (shooting == true && attackCooldown < 0) {
                        if (upgradeState === "none") {
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "projectile",
                                    directionX: "",
                                    directionY: "",
                                    width: 20,
                                    height: 20
                                });
                                attackCooldown = 6;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "projectile",
                                    directionX: "",
                                    directionY: "",
                                    width: 20,
                                    height: 20
                                });
                                attackCooldown = 6;
                                attackState--;
                            }
                        } else if (upgradeState === "1-w") {
                            playElements[i].imgId = "megaman-w";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "water-1",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState++;
                            } else {
                                playElements[i].imgId = "megaman-w";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "water-1",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState--;
                            }
                        } else if (upgradeState === "2-w") {
                            playElements[i].imgId = "megaman-w";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "water-2",
                                    directionX: "",
                                    directionY: "",
                                    width: 30,
                                    height: 30
                                });
                                attackCooldown = 6;
                                attackState++;
                            } else {
                                playElements[i].imgId = "megaman-w";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "water-2",
                                    directionX: "",
                                    directionY: "",
                                    width: 30,
                                    height: 30
                                });
                                attackCooldown = 6;
                                attackState--;
                            }
                        } else if (upgradeState === "3-w") {
                            playElements[i].imgId = "megaman-w";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -15,
                                    imgId: "water-3",
                                    directionX: "",
                                    directionY: "",
                                    width: 36,
                                    height: 36
                                });
                                attackCooldown = 3;
                                attackState++;
                            } else {
                                playElements[i].imgId = "megaman-w";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -15,
                                    imgId: "water-3",
                                    directionX: "",
                                    directionY: "",
                                    width: 36,
                                    height: 36
                                });
                                attackCooldown = 3;
                                attackState--;
                            }
                        } else if (upgradeState === "4-w" || upgradeState === "5-w") {
                            playElements[i].imgId = "megaman-w";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: Math.random() * 4 - Math.random() * 4,
                                    velY: -15,
                                    imgId: "water-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 36,
                                    height: 36
                                });
                                attackCooldown = 5;
                                attackState++;
                            } else {
                                playElements[i].imgId = "megaman-w";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: Math.random() * 4 - Math.random() * 4,
                                    velY: -15,
                                    imgId: "water-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 36,
                                    height: 36
                                });
                                attackCooldown = 1;
                                attackState--;
                            }
                        } else if (upgradeState === "1-g") {
                            playElements[i].imgId = "megaman-g";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "grass-1",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState++;
                            } else {
                                playElements[i].imgId = "megaman-g";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "grass-1",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState--;

                            }
                        } else if (upgradeState === "2-g") {
                            playElements[i].imgId = "megaman-g";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "grass-2",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState++;

                            } else {
                                playElements[i].imgId = "megaman-g";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -12,
                                    imgId: "grass-2",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState--;
                            }
                        } else if (upgradeState === "3-g") {
                            playElements[i].imgId = "megaman-g";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -15,
                                    imgId: "grass-3",
                                    directionX: "",
                                    directionY: "",
                                    width: 36,
                                    height: 36
                                });
                                attackCooldown = 3;
                                attackState++;
                            } else {
                                playElements[i].imgId = "megaman-g";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -15,
                                    imgId: "grass-3",
                                    directionX: "",
                                    directionY: "",
                                    width: 36,
                                    height: 36
                                });
                                attackCooldown = 3;
                                attackState--;
                            }
                        } else if (upgradeState === "4-g") {
                            playElements[i].imgId = "megaman-g";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "grass-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 12;
                                attackState++;

                            } else {
                                playElements[i].imgId = "megaman-g";
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "grass-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 12;
                                attackState--;
                            }
                        } else if (upgradeState === "5-g") {
                            playElements[i].imgId = "megaman-g";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "grass-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 12;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "grass-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 12;
                                attackState--;
                            }
                        } else if (upgradeState === "1-e") {
                            playElements[i].imgId = "megaman-l";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-1",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-1",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState--;
                            }
                        } else if (upgradeState === "2-e") {
                            playElements[i].imgId = "megaman-l";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-2",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-2",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 6;
                                attackState--;
                            }
                        } else if (upgradeState === "3-e") {
                            playElements[i].imgId = "megaman-l";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-3",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 2;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-3",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 2;
                                attackState--;
                            }
                        } else if (upgradeState === "4-e") {
                            playElements[i].imgId = "megaman-l";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 0.2;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 0.2;
                                attackState--;
                            }
                        } else if (upgradeState === "5-e") {
                            playElements[i].imgId = "megaman-l";
                            if (attackState == 0) {
                                playElements.push({
                                    x: playElements[i].x - 5,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 0.2;
                                attackState++;
                            } else {
                                playElements.push({
                                    x: playElements[i].x + 60,
                                    y: playElements[i].y,
                                    velX: 0,
                                    velY: -10,
                                    imgId: "elec-4",
                                    directionX: "",
                                    directionY: "",
                                    width: 22,
                                    height: 22
                                });
                                attackCooldown = 0.2;
                                attackState--;
                            }
                        }




                    }

                    attackCooldown--;
                    // bullet collisions hero and enemy bullet
                    for (var j = 0; j < playElements.length; j++) {
                        if (playElements[j].imgId === "gutsman-p") {

                            colValue = colCheck(playElements[i], playElements[j]);

                            if (colValue === "l" || colValue === "r" || colValue === "b" || colValue === "t") {
                                playElements[j].y = 700;
                                playElements[i].velY = 5;

                                attackCounter++;

                                console.log(attackCounter);

                                if (attackCounter > 3) {
                                    heroHealth.pop();
                                    attackCounter = 0;
                                }

                                heroHits++;
                                playElements[i].directionY = "d";
                                if (heroHealth.length < 1 && (playElements[i].imgId === "megaman" || playElements[i].imgId === "megaman-l" || playElements[i].imgId === "megaman-w" || playElements[i].imgId === "megaman-g")) {

                                    playElements.splice(i, 1);
                                    currentScreen = "Retry";
                                }
                            }
                        }
                        if (playElements[j].imgId === "Elebee-r" || playElements[j].imgId === "Elebee-l") {

                            colValue = colCheck(playElements[i], playElements[j]);

                            if (colValue === "l" || colValue === "r" || colValue === "b" || colValue === "t") {
                                playElements[j].y = 700;
                                playElements[i].velY = 5;

                                attackCounter++;

                                console.log(attackCounter);


                                heroHealth.pop();
                                attackCounter = 0;



                                playElements[i].directionY = "d";
                                if (heroHealth.length < 1 && (playElements[i].imgId === "megaman" || playElements[i].imgId === "megaman-l" || playElements[i].imgId === "megaman-w" || playElements[i].imgId === "megaman-g")) {

                                    playElements.splice(i, 1);
                                    currentScreen = "Retry";
                                }
                            }
                        }
                    }
                }

                ctx.drawImage(document.getElementById(playElements[i].imgId), playElements[i].x, playElements[i].y);



                //        ctx.drawImage(document.getElementById("background"), 0, 0); 
                //        ctx.drawImage(document.getElementById("megaman"), 0, 0);

                playElements[i].x += playElements[i].velX;
                playElements[i].y += playElements[i].velY;


            }
        }
        //draw oss health bar
        if (bossHealthBarVisible == true) {
            ctx.drawImage(document.getElementById("healthBarGutsman"), 0, 0);

            for (var i = 0; i < bossHealth.length; i++) {
                ctx.drawImage(document.getElementById("healthGutsman"), bossHealth[i] + 26, 20);
            }
            ctx.drawImage(document.getElementById("bossText"), 90, 20);

        }


        //draw hero health bar
        ctx.drawImage(document.getElementById("megamanBar"), 0, 530);
        for (var i = 0; i < heroHealth.length; i++) {
            ctx.drawImage(document.getElementById("megamanHealth"), heroHealth[i], 580);
        }
        ctx.drawImage(document.getElementById("megamanText"), 1, 580);


        ctx.font = "30px Techno";
        ctx.fillText('$'+currentMoney, 419, 580);
        
        //console.log(playElements);

        //        if (upgradeState > 33 && playElements[i].imgId === "megaman") {
        //            console.log("hi");
        //            playElements[i].imgId = "megaman-l";
        //        }

    } else if (currentScreen === "Options") {
        ctx.drawImage(document.getElementById("Options"), 0, 0); 
    } else if (currentScreen === "Retry") {
        ctx.drawImage(document.getElementById("retry"), 0, 0);
    }   else if (currentScreen === "Upgrade") {
        if (upgradeState === "none") {
            ctx.drawImage(document.getElementById("water-upgrade-1"), 0, 0);
        } else if (upgradeState === "1-w") {
            ctx.drawImage(document.getElementById("water-upgrade-2"), 0, 0);
        } else if (upgradeState === "2-w") {
            ctx.drawImage(document.getElementById("water-upgrade-3"), 0, 0);
        } else if (upgradeState === "3-w") {
            ctx.drawImage(document.getElementById("water-upgrade-4"), 0, 0);
        } else if (upgradeState === "4-w" || upgradeState === "5-w") {
            ctx.drawImage(document.getElementById("water-upgrade-5"), 0, 0);
        } else if (upgradeState === "1-g") {
            ctx.drawImage(document.getElementById("grass-upgrade-2"), 0, 0);
        } else if (upgradeState === "2-g") {
            ctx.drawImage(document.getElementById("grass-upgrade-3"), 0, 0);
        } else if (upgradeState === "3-g") {
            ctx.drawImage(document.getElementById("grass-upgrade-4"), 0, 0);
        } else if (upgradeState === "4-g" || upgradeState === "5-g") {
            ctx.drawImage(document.getElementById("grass-upgrade-5"), 0, 0);
        } else if (upgradeState === "1-e") {
            ctx.drawImage(document.getElementById("elec-upgrade-2"), 0, 0);
        } else if (upgradeState === "2-e") {
            ctx.drawImage(document.getElementById("elec-upgrade-3"), 0, 0);
        } else if (upgradeState === "3-e") {
            ctx.drawImage(document.getElementById("elec-upgrade-4"), 0, 0);
        } else if (upgradeState === "4-e" || upgradeState === "5-e") {
            ctx.drawImage(document.getElementById("elec-upgrade-5"), 0, 0);
        }
        
        
        
        ctx.font = "30px Techno";
        ctx.fillText(currentMoney, 419, 593);
    }




    requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

window.addEventListener("load", function () {
    currentScreen = "Start";

    update();
});
//ctx.drawImage(document.getElementById())