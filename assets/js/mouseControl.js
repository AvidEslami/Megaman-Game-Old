var canvas = document.getElementById("gameWindow");
var mouse = [0,0];

function findPos(obj) 
{
    var curleft = curtop = 0;

    if (obj.offsetParent) 
    {
        do 
        {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;    
        } 
        while (obj = obj.offsetParent);
    }
    return [curleft,curtop];
}

CO = findPos(canvas);

function onclick(e)
{
    mouse[0] = e.pageX - self.CO[0] + 100;
    mouse[1] = e.pageY - self.CO[1];
    /*Rest of the code*/
    console.log("mouse position at " + mouse[0] + "," + mouse[1]);
    if ( currentScreen === "Start" && mouse[0] > 13 && mouse[0] < 135 && mouse[1] > 436 && mouse[1] < 475)
    {
        console.log("Clicked the play button");
        currentScreen = "Play";
        //push hero and background
        //background
        playElements.push({x:0 , y:0, velX: 0, velY:10, imgId:"background"});
        //hero
        playElements.push({x:0 , y:-1000, velX: 0, velY:10, imgId:"background"});
        playElements.push({x:200 , y:300, velX: 0, velY: 0, imgId:"megaman", directionX: "", directionY: "", width: 75, height: 79, health:20, money: 0});
        //playElements.push({x:150 , y:-300, velX: 0, velY: 1, imgId:"gutsman", directionX: "", directionY: "", width: 150, height: 161});
        playElements.push({x:370 , y:580, velX: 0, velY: 0, imgId:"upgrade", directionX: "", directionY: "", width: 125, height: 18});
        
        

    }   
    
    else if ( currentScreen == "Start" && mouse[0] > 16 && mouse[0] < 110 && mouse[1] > 498 && mouse[1] < 521)
    {
        console.log("Clicked the options button");
        currentScreen = "Options";
    }
//    else if ( currentScreen === "Play" && mouse[0] > 0 && mouse[0] < canvas.width && mouse[1] > 0 && mouse[1] <canvas.height)
//    {
//        currentScreen = "Start";
//     
//            playElements.length = 0;
//
//    }
    else if (currentScreen === "Play" && mouse [0] > 371 && mouse[0] < 500 && mouse[1] > 582 && mouse[1] < 600)
    {
            currentScreen = "Upgrade";
//            ctx.drawImage(document.getElementById("water-upgrade-1"), 0, 0);
    }
     else if ( currentScreen === "Options" && mouse[0] > 357 && mouse[0] < 500 && mouse[1] < 25 && mouse[1] > 3)
    {
        currentScreen = "Start";
    }
     else if ( currentScreen === "Options" && mouse[0] < 472 && mouse[0] > 40 && mouse[1] > 259 && mouse[1] < 330)
    {
        canvas.width = 600;
        canvas.height = 600;
    }
    else if ( currentScreen === "Options" && mouse[0] < 460 && mouse[0] > 31 && mouse[1] > 180 && mouse[1] < 253)
    {
        canvas.width = 500;
        canvas.height = 600;
    }
    else if ( currentScreen === "Options" && mouse[0] < 467 && mouse[0] > 37 && mouse[1] > 337 && mouse[1] < 410)
    {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    }
    else if ( currentScreen === "Retry" && mouse[0] < 277 && mouse[0] > 178 && mouse[1] > 165 && mouse[1] < 206)
    {
        playElements.length = 0;
        for (var i = 0; i < 20; i++) {
            heroHealth.push(heroHealthWidth * i);
        }
        gameState = 0;
        currentMoney = 0;
        upgradeState = "none";
        currentScreen = "Play";
        //push hero and background
        //background
        playElements.push({x:0 , y:0, velX: 0, velY:10, imgId:"background"});
        //hero
        playElements.push({x:0 , y:-1000, velX: 0, velY:10, imgId:"background"});
        playElements.push({x:200 , y:300, velX: 0, velY: 0, imgId:"megaman", directionX: "", directionY: "", width: 75, height: 79, health:20, money: 0});
        //playElements.push({x:150 , y:-300, velX: 0, velY: 1, imgId:"gutsman", directionX: "", directionY: "", width: 150, height: 161});
        playElements.push({x:370 , y:580, velX: 0, velY: 0, imgId:"upgrade", directionX: "", directionY: "", width: 125, height: 18});
    }
    else if ( currentScreen === "Retry" && mouse[0] < 354 && mouse[0] > 107 && mouse[1] > 233 && mouse[1] < 263)
    {
        playElements.length = 0;
        for (var i = 0; i < 20; i++) {
            heroHealth.push(heroHealthWidth * i);
        }
        gameState = 0;
        upgradeState = "none";
        currentMoney = 0;
        currentScreen = "Start";
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 96 && mouse[0] > 23 && mouse[1] > 140 && mouse[1] < 181 && currentMoney > 99)
    {
        upgradeState="1-w";
        currentMoney -=100;
        moneyHolder -=100;
        
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 37 && mouse[0] > 3 && mouse[1] > 1 && mouse[1] < 17)
    {
        currentScreen = "Play";
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 95 && mouse[0] > 17 && mouse[1] > 95 && mouse[1] < 254 && upgradeState=== "1-w" && currentMoney > 199)
    {
        upgradeState="2-w";
        currentMoney -=200;
        moneyHolder -=200;
        
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 99 && mouse[0] > 22 && mouse[1] > 278 && mouse[1] < 339 && upgradeState=== "2-w" && currentMoney > 399)
    {
        upgradeState="3-w";
        currentMoney -=400;
        moneyHolder -=400;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 99 && mouse[0] > 17 && mouse[1] > 364 && mouse[1] < 435 && upgradeState=== "3-w" && currentMoney > 799)
    {
        upgradeState="4-w";
        currentMoney -=800;
        moneyHolder -=800;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 116 && mouse[0] > 3 && mouse[1] > 464 && mouse[1] < 590 && upgradeState=== "4-w" && currentMoney > 1599)
    {
        upgradeState="5-w";
        ultimateAvailable = true;
        currentMoney -=1600;
        moneyHolder -=1600;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 229 && mouse[0] > 151 && mouse[1] > 137 && mouse[1] < 187 && currentMoney > 109)
    {
        upgradeState="1-g";
        currentMoney -=110;
        moneyHolder -=110;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 233 && mouse[0] > 146 && mouse[1] > 206 && mouse[1] < 259 && upgradeState=== "1-g" && currentMoney > 219)
    {
        upgradeState="2-g";
        currentMoney -=220;
        moneyHolder -=220;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 233 && mouse[0] > 146 && mouse[1] > 280 && mouse[1] < 339 && upgradeState=== "2-g" && currentMoney > 439)
    {
        upgradeState="3-g";
        currentMoney -=440;
        moneyHolder -=440;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 233 && mouse[0] > 146 && mouse[1] > 368 && mouse[1] < 438 && upgradeState=== "3-g" && currentMoney > 879)
    {
        upgradeState="4-g";
        currentMoney -=880;
        moneyHolder -=880;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 233 && mouse[0] > 146 && mouse[1] > 245 && mouse[1] < 593 && upgradeState=== "4-g" && currentMoney > 1759)
    {
        upgradeState="5-g";
        ultimateAvailable2 = true;
        currentMoney -=1760;
        moneyHolder -=1760;
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 478 && mouse[0] > 401 && mouse[1] > 138 && mouse[1] < 187)
    {
        upgradeState="1-e";
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 478 && mouse[0] > 401 && mouse[1] > 205 && mouse[1] < 258 && upgradeState === "1-e")
    {
        upgradeState="2-e";
    }
    else if ( currentScreen === "Upgrade" && mouse[0] < 474 && mouse[0] > 398 && mouse[1] > 277 && mouse[1] < 340 && upgradeState === "2-e")
    {
        upgradeState="3-e";
    }
    
    
}


canvas.addEventListener("click", onclick);


