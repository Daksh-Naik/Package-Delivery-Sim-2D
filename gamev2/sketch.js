//Package Delivery Sim 2D AV Made with P5.JS & P5.PLAY.JS
//Stable Release V2.08.9

p5.disableFriendlyErrors = true;

var delvan, testimage, delvanbo;
var backgroundHousesR1, backgroundHousesL1, backgroundHousesR2, backgroundHousesL2, backgroundHousesR4,
    backgroundHousesL3, backgroundHousesR3, backgroundHousesL4, backgroundHousesL5, backgroundHousesR5;
var backgroundHousesR6, backgroundHousesR7, backgroundHousesR8, backgroundHousesR9, backgroundHousesR10, backgroundHousesR11;
var backgroundHousesL6, backgroundHousesL7, backgroundHousesL8;
var mHouse1, mHouse2, mHouse3, mHouse4, mHouse5, mHouse6, mHouseapart, mHouseapartmentS8;
var backgroundcitiesL1, backgroundcitiesR1, backgroundcitiesL2, backgroundcitiesR2,
    backgroundcitiesL3, backgroundcitiesR3, backgroundcitiesL4, backgroundcitiesR4,
    backgroundcitiesL5, backgroundcitiesR5, backgroundcitiesL6, backgroundcitiesR6,
    backgroundcitiesR7, backgroundcitiesL7, backgroundcitiesR8, backgroundcitiesL8,
    backgroundcitiesR9, backgroundcitiesL9, backgroundcitiesR10, backgroundcitiesL10;

var treeG1, treeG2, treeG3, treeG4, treeG5, treeG6, treeG7, treeG8;
var riverimg, railwayimg;

var dashboard;
var road;
var upar, rightar, uparimage, rightarimage;
var nav1e43image, nav1e43, nav1e43intimage, nav1e43int, nav2e52image, nav2e52intimage, nav2e52int;
var ipath, ipathLT, ipathLL, ipathLB, ipathBlock;
var laneM;
var PTraffic, OTraffic, TrafficGroup;

let fr = 40;
let DTtimer = 0;
let oppotimer = 0;
let timer = 60;
let timertaken = 0;
let packages = 11;
let packagedeli = 0;
let cctime = 0;

var cc = false;
var trafftouch = false;
var spawntraf = true; 

var mHouse1PA, mHouse2PA, mHouse3PA, mHouse4PA, mHouse5PA, mHouse6PA, mHouse7PA, mHouse8PA, mHouse9PA, mHouse10PA;
var PA500x, PA400x; 

var htmlps;

var iPaths = [];
var allLanes = [];
var TrafficAr = [];
var HousePA = [];
var mHouseBounds = [];

var Start = 0;
var Play = 1;
var End = 2;
var Due = 3;
var Win = 4;
var angrymode = 5;
var gameState = Start;

function preload() {
    testimage = loadImage("images/delvan/delivvan-yellow.png");

    backgroundHousesR1 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR2 = loadImage("images/houses/housesR2.jpg")
    backgroundHousesR3 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR4 = loadImage("images/houses/housesR2.jpg");
    backgroundHousesR5 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR6 = loadImage("images/houses/housesR2.jpg");
    backgroundHousesR7 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR8 = loadImage("images/houses/housesR2.jpg");
    backgroundHousesR9 = loadImage("images/houses/housesR.jpg");
    backgroundHousesR10 = loadImage("images/houses/housesR2.jpg");

    backgroundHousesL1 = loadImage("images/houses/housesL.jpg");
    backgroundHousesL2 = loadImage("images/houses/housesL2.jpg");
    backgroundHousesL3 = loadImage("images/houses/housesL.jpg");
    backgroundHousesL4 = loadImage("images/houses/housesL.jpg");
    backgroundHousesL5 = loadImage("images/houses/housesL2.jpg");
    backgroundHousesL6 = loadImage("images/houses/housesL2.jpg");
    backgroundHousesL7 = loadImage("images/houses/housesL.jpg");
    backgroundHousesL8 = loadImage("images/houses/housesL2.jpg");

    backgroundcitiesL1 = loadImage("images/moderncities/modernbg1L.jpg");
    backgroundcitiesL2 = loadImage("images/moderncities/modernbg2L.jpg");
    backgroundcitiesL3 = loadImage("images/moderncities/modernbg3L.jpg");
    backgroundcitiesL4 = loadImage("images/moderncities/modernbg3L.jpg");
    backgroundcitiesL5 = loadImage("images/moderncities/modernbg4L.jpg");
    backgroundcitiesL6 = loadImage("images/moderncities/modernbg5L.jpg");
    backgroundcitiesL7 = loadImage("images/moderncities/modernbg1L.jpg");
    backgroundcitiesL8 = loadImage("images/moderncities/modernbg2L.jpg");
    backgroundcitiesL9 = loadImage("images/moderncities/modernbg3L.jpg");
    backgroundcitiesL10 = loadImage("images/moderncities/modernbg5L.jpg");
    
    backgroundcitiesR1 = loadImage("images/moderncities/modernbg1R.jpg");
    backgroundcitiesR2 = loadImage("images/moderncities/modernbg2R.jpg");
    backgroundcitiesR3 = loadImage("images/moderncities/modernbg3R.jpg");
    backgroundcitiesR4 = loadImage("images/moderncities/modernbg3R.jpg");
    backgroundcitiesR5 = loadImage("images/moderncities/modernbg2R.jpg");
    backgroundcitiesR6 = loadImage("images/moderncities/modernbg4R.jpg");
    backgroundcitiesR7 = loadImage("images/moderncities/modernbg5R.jpg");
    backgroundcitiesR8 = loadImage("images/moderncities/modernbg3R.jpg");
    backgroundcitiesR9 = loadImage("images/moderncities/modernbg1R.jpg");
    backgroundcitiesR10 = loadImage("images/moderncities/modernbg4R.jpg");
    
    mHouse1 = loadImage("images/houses/houseb.jpg");
    mHouse2 = loadImage("images/houses/houseg.jpg");
    mHouse3 = loadImage("images/houses/housey.jpg");
    mHouse4 = loadImage("images/houses/housep.jpg");
    mHouse5 = loadImage("images/houses/houser.jpg");
    mHouse6 = loadImage("images/houses/houselav.jpg");
    mHouseapart = loadImage("images/houses/housego.jpg");
    mHouseapartmentS8 = loadImage("images/houses/houseapartments1.jpg");

    treeG1 = loadImage("images/trees/treeG1.png");
    treeG2 = loadImage("images/trees/treeG2.png");
    treeG3 = loadImage("images/trees/treeG1.png");
    treeG4 = loadImage("images/trees/treeG2.png");
    treeG5 = loadImage("images/trees/treeG2.png");
    treeG6 = loadImage("images/trees/treeG1.png");
    treeG7 = loadImage("images/trees/treeG2.png");
    treeG8 = loadImage("images/trees/treeG1.png");

    riverimg = loadImage("images/river/rivera.jpg");
    railwayimg = loadImage("images/railways/railway.jpg");

    PA400x = loadImage("images/delivbounds/delivb-400 - .png");
    PA500x = loadImage("images/delivbounds/delivb-500-.png");

    uparimage = loadImage("images/directions/upar.bmp");
    rightarimage = loadImage("images/directions/rightar.bmp");

    nav1e43image = loadImage("images/directions/interstateRuralE43.bmp");
    nav1e43intimage = loadImage("images/directions/interstateRuralE43int.bmp");
    nav2e52image = loadImage("images/directions/interstateCityE52.bmp");
    nav2e52intimage = loadImage("images/directions/interstateCityE52int.bmp");

}

function setup() {
    createCanvas(1360, 630);

    console.log("%cPackage Delivery Sim 2D AV - Dev Console","color: lightgreen; font-family: Trebuchet MS; font-size: 25px");
    console.log("%cPaste codes here. Click below the empty area to type, SHIFT + ENTER to leave a line. Right click to clear console.", "color : lightblue");
    console.log("Click on Settings > Preferences > Toggle dark mode to turn on dark mode.")

    frameRate(fr);

    road = createSprite(400, height/2-60000, 500, 125000);
    road.shapeColor = rgb(70, 70, 70);

    laneR1 = createSprite(640, 3400, 5, 15000);
    laneR1.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR1);

    laneR2 = createSprite(640, -9000, 5, 9000);
    laneR2.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR2);

    laneR3 = createSprite(640, -18300, 5, 9000);
    laneR3.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR3);

    laneL1 = createSprite(160, -7380, 5, 13980);
    laneL1.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL1);

    laneL2 = createSprite(160, -19050, 5, 9000);
    laneL2.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL2);

    laneR4 = createSprite(640, -25600, 5, 5000);
    laneR4.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR4);

    laneL3 = createSprite(160, -25600, 5, 5000);
    laneL3.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL3);

    laneR5 = createSprite(640, -30500, 5, 5000);
    laneR5.visible = false;
    allLanes.push(laneR5);

    laneL4 = createSprite(160, -40500, 5, 30000);
    laneL4.shapeColor=rgb(255, 255, 255);
    allLanes.push(laneL4);

    laneR6 = createSprite(640, -40500, 5, 30000);
    laneR6.shapeColor=rgb(255, 255, 255);
    allLanes.push(laneR6);

    laneL5 = createSprite(160, -70100, 5, 29200);
    laneL5.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL5);

    laneR7 = createSprite(640, -70100, 5, 29200);
    laneR7.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR7);

    laneL6 = createSprite(160, -89150, 5, 8900);
    laneL6.visible = false;
    allLanes.push(laneL6);

    laneR8 = createSprite(640, -89150, 5, 8900);
    laneR8.visible = false;
    allLanes.push(laneR8);

    laneL7 = createSprite(160, -102740, 5, 18280);
    laneL7.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL7);

    laneR9 = createSprite(640, -100525, 5, 13850);
    laneR9.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR9);

    laneR10 = createSprite(640, -109600, 5, 4300);
    laneR10.visible = false;
    allLanes.push(laneR10);

    laneR11 = createSprite(640, -115775, 5, 8050);
    laneR11.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneR11);

    laneL8 = createSprite(160, -114035, 5, 4330);
    laneL8.visible = false;
    allLanes.push(laneL8);

    laneL9 = createSprite(160, -119050, 5, 5700);
    laneL9.shapeColor = rgb(255, 255, 255);
    allLanes.push(laneL9);

    ipath = createSprite(75, -100, 150, 600);
    ipath.shapeColor = rgb(70, 70, 70);

    ipathLT = createSprite(60, -390, 200, 5);
    ipathLT.shapeColor = rgb(255, 255, 255);
    iPaths.push(ipathLT);

    ipathLL = createSprite(0, -100, 5, 575);
    ipathLL.shapeColor = rgb(255, 255, 255);
    iPaths.push(ipathLL);

    ipathLB = createSprite(60, 190, 200, 5);
    ipathLB.shapeColor = rgb(255, 255, 255);
    iPaths.push(ipathLB);


    ipathLB2 = createSprite(width / 2, 190, 1200, 5);
    ipathLB2.visible = false;
    iPaths.push(ipathLB2);

    ipathBlock = createSprite(width / 2, height / 2, 1350, 200);
    ipathBlock.visible = false;
    iPaths.push(ipathBlock);

    iPathmHouse1BB = createSprite(width / 2 + 60, -4095, 200, 5);
    iPathmHouse1BB.visible = false;
    iPaths.push(iPathmHouse1BB);
    iPathmHouse1BT = createSprite(width / 2 + 60, -4485, 200, 5);
    iPathmHouse1BT.visible = false;
    iPaths.push(iPathmHouse1BT);
    iPathmHouse1BR = createSprite(width / 2 + 30, -4300, 5, 500);
    iPathmHouse1BR.visible = false;
    iPaths.push(iPathmHouse1BR);

    iPathmHouse2BB = createSprite(50, -14335, 200, 5);
    iPathmHouse2BB.visible = false;
    iPaths.push(iPathmHouse2BB);
    iPathmHouse2BT = createSprite(50, -14570, 200, 5);
    iPathmHouse2BT.visible = false;
    iPaths.push(iPathmHouse2BT);
    iPathmHouse2BR = createSprite(100, -14450, 5, 500);
    iPathmHouse2BR.visible = false;
    iPaths.push(iPathmHouse2BR);

    iPathmHouse3BB = createSprite(width / 2 + 60, -13480, 200, 5);
    iPathmHouse3BB.visible = false;
    iPaths.push(iPathmHouse3BB);
    iPathmHouse3BT = createSprite(width / 2 + 60, -13790, 200, 5);
    iPathmHouse3BT.visible = false;
    iPaths.push(iPathmHouse3BT);
    iPathmHouse3BR = createSprite(width / 2 + 30, -13600, 5, 500);
    iPathmHouse3BR.visible = false;
    iPaths.push(iPathmHouse3BR);

    iPathmHouse4BB = createSprite(width / 2 + 60, -22800, 200, 5);
    iPathmHouse4BB.visible = false;
    iPaths.push(iPathmHouse4BB);
    iPathmHouse4BT = createSprite(width / 2 + 60, -23100, 200, 5);
    iPathmHouse4BT.visible = false;
    iPaths.push(iPathmHouse4BT);
    iPathmHouse4BR = createSprite(width / 2 + 30, -23000, 5, 500);
    iPathmHouse4BR.visible = false;
    iPaths.push(iPathmHouse4BR);

    iPathmHouse5BB = createSprite(50, -31685, 200, 5);
    iPathmHouse5BB.visible = false;
    iPaths.push(iPathmHouse5BB);
    iPathmHouse5BB = createSprite(50, -32000, 200, 5);
    iPathmHouse5BB.visible = false;
    iPaths.push(iPathmHouse5BB);

    for (var i = -62500; i < 62500; i = i + 600) {
        laneM = createSprite(400, i-62500, 10, 300);
        laneM.shapeColor = rgb(255, 255, 255);
    }

    htmlps = new HTMLPSCHARS();

    mHouse1PA = createSprite(width/2, -4315, 500, 500);
    mHouse1PA.addImage(PA500x);
    HousePA.push(mHouse1PA);

    mHouse1Bound = createSprite(width/2, -4600, 2000, 5);
    mHouse1Bound.visible = false;
    mHouseBounds.push(mHouse1Bound);

    mHouse2PA = createSprite(width/2, -13620, 500, 500);
    mHouse2PA.addImage(PA500x);
    HousePA.push(mHouse2PA);
    
    mHouse2Bound = createSprite(width/2, -13900, 2000, 5);
    mHouse2Bound.visible = false;;
    mHouseBounds.push(mHouse2Bound);

    mHouse3PA = createSprite(width/2, -22920, 400, 400);
    mHouse3PA.addImage(PA400x);
    HousePA.push(mHouse3PA);
    
    mHouse3Bound = createSprite(width/2, -23200, 2000, 5);
    mHouse3Bound.visible = false;;
    mHouseBounds.push(mHouse3Bound);

    mHouse4PA = createSprite(0, -14500, 500, 500);
    mHouse4PA.addImage(PA500x);
    HousePA.push(mHouse4PA);
    
    mHouse4Bound = createSprite(width/2, -14750, 2000, 5);
    mHouse4Bound.visible = false;
    mHouseBounds.push(mHouse4Bound);

    mHouse5PA = createSprite(0, -31800, 500, 500);
    mHouse5PA.addImage(PA500x);
    HousePA.push(mHouse5PA);

    mHouse5Bound = createSprite(width/2, -32050, 2000, 5);
    mHouse5Bound.visible = false;
    mHouseBounds.push(mHouse5Bound);

    mHouse6PA = createSprite(width/2+50, -43800, 400, 400);
    mHouse6PA.addImage(PA400x);
    HousePA.push(mHouse6PA);

    mHouse6Bound = createSprite(width/2, -44000, 2000, 5);
    mHouse6Bound.visible = false;
    mHouseBounds.push(mHouse6Bound);

    mHouse7PA = createSprite(0, -53730, 500, 500);
    mHouse7PA.addImage(PA500x);
    HousePA.push(mHouse7PA);

    mHouse7Bound = createSprite(width/2, -53980, 2000, 5);
    mHouse7Bound.visible = false;
    mHouseBounds.push(mHouse7Bound);

    mHouse8PA = createSprite(width/2+50, -79700, 500, 500);
    mHouse8PA.addImage(PA500x);
    HousePA.push(mHouse8PA);

    mHouse8Bound = createSprite(width/2, -79950, 2000, 5);
    mHouse8Bound.visible = false;
    mHouseBounds.push(mHouse8Bound);

    mHouse9PA = createSprite(width/2+50, -94300, 500, 500);
    mHouse9PA.addImage(PA500x);
    HousePA.push(mHouse9PA);

    mHouse9Bound = createSprite(width/2, -94550, 2000, 5);
    mHouse9Bound.visible = false;
    mHouseBounds.push(mHouse9Bound);

    mHouse10PA = createSprite(0, -102500, 500, 500);
    mHouse10PA.addImage(PA500x);
    HousePA.push(mHouse10PA);

    mHouse10Bound = createSprite(width/2, -102750, 2000, 5);
    mHouse10Bound.visible = false;
    mHouseBounds.push(mHouse10Bound);

    mHouse11PA = createSprite(width/2+50, -113200, 400, 400);
    mHouse11PA.addImage(PA400x);
    HousePA.push(mHouse11PA);

    mHouse11Bound = createSprite(width/2, -113400, 2000, 5);
    mHouse11Bound.visible = false;
    mHouseBounds.push(mHouse11Bound);

    rightar2 = createSprite(80, -250, 60, 30);
    rightar2.addImage(rightarimage);

    rightar = createSprite(80, -150, 60, 30);
    rightar.addImage(rightarimage);

    upar = createSprite(280, -450, 60, 30);
    upar.addImage(uparimage);

    upar2 = createSprite(280, -650, 60, 30);
    upar2.addImage(uparimage);

    nav1e43 = createSprite(280, -24200, 200, 65);
    nav1e43.addImage(nav1e43image);
    nav1e43int = createSprite(280, -39000, 200, 24);
    nav1e43int.addImage(nav1e43intimage);
    nav2e52 = createSprite(280, -58000, 200, 65);
    nav2e52.addImage(nav2e52image);
    nav2e52int = createSprite(280, -74000, 200, 24);
    nav2e52int.addImage(nav2e52intimage);

    delvan = createSprite(80, 0, 25, 125);
    delvan.addImage(testimage);
    delvan.scale = 0.85;
    
    dashboard = createSprite(1100, delvan.y - 165, 530, 700);
    dashboard.shapeColor = rgb(30, 30, 30);

    TrafficGroup = new Group();

    setInterval(alarm, 1000);

    setInterval(CountSeconds, 1000);
    setInterval(DTtimerCounter, 1000);
    setInterval(oppotimerCounter, 1000);
    setInterval(CCCounter, 1000);

}

function draw() {
    background(185, 122, 87);

    htmlps.showTitle();

    dashboard.y = delvan.y - 240;

    image(backgroundHousesL1, -280, -5000, 392, 4520);
    image(backgroundHousesL2, -280, -9600, 392, 4520);
    image(backgroundHousesL3, -280, -14300, 392, 4520);
    image(backgroundHousesL4, -280, -19200, 392, 4520);
    image(backgroundHousesL5, -280, -24000, 392, 4520);
    image(backgroundHousesL6, -280, -44000, 392, 4520);
    image(backgroundHousesL7, -280, -48700, 392, 4520);
    image(backgroundHousesL8, -280, -53300, 392, 4520);

    image(backgroundHousesR1, width / 2, -4200, 392, 4520);
    image(backgroundHousesR2, width / 2, -9000, 392, 4520);
    image(backgroundHousesR3, width / 2, -13500, 392, 4520);
    image(backgroundHousesR4, width / 2, -18300, 392, 4520);
    image(backgroundHousesR5, width / 2, -22850, 392, 4520);
    image(backgroundHousesR6, width / 2, -43500, 392, 4520);
    image(backgroundHousesR7, width / 2, -48520, 392, 4520);
    image(backgroundHousesR8, width / 2, -53320, 392, 4520);
    image(backgroundHousesR9, width / 2, -57920, 392, 4520);

    image(backgroundcitiesL1, -240, -80000, 392, 4520);
    image(backgroundcitiesL2, -240, -84550, 392, 4520);
    image(backgroundcitiesL3, -240, -89070, 392, 4520);
    image(backgroundcitiesL4, -240, -93590, 392, 4520);
    image(backgroundcitiesL5, -240, -98110, 392, 4520);
    image(backgroundcitiesL6, -240, -102630, 392, 4520);
    image(backgroundcitiesL7, -240, -107150, 392, 4520);
    image(backgroundcitiesL8, -200, -111670, 392, 4520);
    image(backgroundcitiesL9, -240, -116190, 392, 4520);
    image(backgroundcitiesL10, -240, -120710, 392, 4520);

    image(backgroundcitiesR1, width / 2 - 40, -80520, 392, 4520);
    image(backgroundcitiesR2, width / 2 - 80, -84520, 392, 4520);
    image(backgroundcitiesR3, width / 2 - 40, -89100, 392, 4520);
    image(backgroundcitiesR4, width / 2 - 40, -93620, 392, 4520);
    image(backgroundcitiesR5, width / 2 - 80, -98200, 392, 4520);
    image(backgroundcitiesR6, width / 2 - 40, -102720, 392, 4520);
    image(backgroundcitiesR7, width / 2 - 40, -107240, 392, 4520);
    image(backgroundcitiesR8, width / 2 - 40, -111760, 392, 4520);
    image(backgroundcitiesR9, width / 2 - 40, -116280, 392, 4520);
    image(backgroundcitiesR10, width / 2 - 40, -120800, 392, 4520);

    image(mHouse1, width / 2 + 50, -4460, 300, 300);
    image(mHouse2, -120, -14650, 300, 300);
    image(mHouse3, width / 2 + 50, -13780, 300, 300);
    image(mHouse4, width / 2 + 50, -23175, 300, 300);
    image(mHouse5, -90, -32000, 300, 300);
    image(mHouse6, width / 2 + 20, -43900, 300, 300);
    image(mHouseapart, -200, -54000, 350, 600);
    image(mHouseapartmentS8, -200, -103000, 350, 800);

    image(treeG1, width / 2 + 50, -31000, 100, 7500);
    image(treeG2, -20, -31700, 100, 7500);
    image(treeG3, width / 2 +50, -38500, 100, 7500);
    image(treeG4, -20, -39500, 100, 7500);
    image(treeG5, -20, -61500, 100, 7500);
    image(treeG6, width / 2 + 50, -65500, 100, 7500);
    image(treeG7, -20, -75000, 100, 7500);
    image(treeG8, width / 2 + 50, -76000, 100, 7500);

    image(riverimg, 0, -67500, 900, 2000);
    image(railwayimg, 0, -72000, 900, 2068);

    camera.position.x = width / 2;
    camera.position.y = delvan.y - 240;

    delvan.collide(allLanes);
    delvan.collide(iPaths);

    if (gameState === Start) {
        htmlps.startDisplay();
    }

    if (keyDown("E")) {
        gameState = Play;
    }

    if (gameState === Play) {

        htmlps.startDisplayHide();
        htmlps.tutoriaSt();
        
        if (keyDown("UP_ARROW")) {
            delvan.y = delvan.y - 10;
            ipathBlock.y = delvan.y + 300;
        }

        if (keyDown("UP_ARROW") && keyDown("W")) {
            delvan.y = delvan.y - 10;
        }

        if (keyDown("DOWN_ARROW")) {
            delvan.y = delvan.y + 5;
        }

        if (keyDown("LEFT_ARROW") && keyDown("UP_ARROW")) {
            delvan.x = delvan.x - 5;
        }

        if (keyDown("RIGHT_ARROW") && keyDown("UP_ARROW")) {
            delvan.x = delvan.x + 5;
            
        }

        if (keyDown("LEFT_ARROW") && keyDown("DOWN_ARROW")) {
            delvan.x = delvan.x - 5;
        }

        if (keyDown("RIGHT_ARROW") && keyDown("DOWN_ARROW")) {
            delvan.x = delvan.x + 5;
        }

        if (cc == false) {
            htmlps.ccat();
        } else if (cc == true) {
            htmlps.ccOn();
        }

        if (keyDown("C") && gameState === Play) {
            delvan.velocityY=-10;
            cc = true;
        }

        if (keyDown("V") && gameState === Play) {
            delvan.velocityY=0;
            cc = false;
            htmlps.ccat();
        }

        if (cc == true && keyDown("UP_ARROW")) {
            delvan.y = delvan.y +5;
        }
        
        if (cc == true && keyDown("UP_ARROW") && keyDown("W")) {
            delvan.y = delvan.y +5;
        }

        if (delvan.velocityY === -10 && keyDown("LEFT_ARROW")) {
            delvan.x = delvan.x - 5;
        }

        if (delvan.velocityY === -10 && keyDown("RIGHT_ARROW")) {
            delvan.x = delvan.x + 5;
        }

        if (cc == true && delvan.velocityY === 0) {
            htmlps.ccEr();
        }

        if (delvan.isTouching(mHouseBounds) && cc == true) {
            htmlps.ccEr();
        }

        if (delvan.y < -500 && gameState === Play) {
            htmlps.timeTakenShow();
            htmlps.tutoriaStH();
        }

        htmlps.dashDisplay();
    
        if (delvan.isTouching(HousePA)) {
            htmlps.DropPackageInstructShow();
        } else {
            htmlps.DropPackageInstructHide();
        }

        if (delvan.isTouching(mHouseBounds) && keyDown("UP_ARROW") || delvan.isTouching(mHouseBounds) && cc == true) {
            htmlps.DropPackageInstructFirstShow();
        } else {
            htmlps.DropPackageInstructFirstHide();
        }

        var defFps = Math.round(frameRate());

        if (defFps < 20) {
            htmlps.framecounter.style('color', 'red');
        } else if (defFps < 30) {
            htmlps.framecounter.style('color', 'orange');
        } 
        if (defFps < 10) {
            htmlps.framecounter.style('background-color', 'red');
            htmlps.framecounter.style('color', 'black');
        }

        htmlps.mHouse1DashDisplay();
        htmlps.mHouse2DashDisplay();
        htmlps.mHouse3DashDisplay();
        htmlps.mHouse4DashDisplay();
        htmlps.mHouse5DashDisplay();
        htmlps.moreAdd();

        delvan.collide(mHouseBounds);

        if(delvan.isTouching(HousePA[0]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[0].remove();
            mHouseBounds[0].remove();
            htmlps.mHouse1DashDisplayDeliv();
            timer = timer+10;
        }

        if(delvan.isTouching(HousePA[1]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[1].remove();
            mHouseBounds[1].remove();
            htmlps.mHouse2DashDisplayDeliv();
            timer = timer+20;
        }

        if(delvan.isTouching(HousePA[2]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[2].remove();
            mHouseBounds[2].remove();
            htmlps.mHouse3DashDisplayDeliv();
            timer = timer+10;
        }

        if(delvan.isTouching(HousePA[3]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[3].remove();
            mHouseBounds[3].remove();
            htmlps.mHouse4DashDisplayDeliv();
            timer = timer + 10;
        }

        if(delvan.isTouching(HousePA[4]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[4].remove();
            mHouseBounds[4].remove();
            timer = timer + 15;
            htmlps.mHouse5DashDisplayDeliv();
            htmlps.HousesOverFlowON1();       
        }

        if (packagedeli > 4) {
            htmlps.mHouse6DashDisplay();
            htmlps.mHouse7DashDisplay();
            htmlps.mHouse8DashDisplay();
            htmlps.mHouse9DashDisplay();
        }

        if (delvan.isTouching(HousePA[5]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[5].remove();
            mHouseBounds[5].remove();
            timer = timer+20;
            htmlps.mHouse6DashDisplayDeliv();
        }

        if (delvan.isTouching(HousePA[6]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[6].remove();
            mHouseBounds[6].remove();
            timer = timer+30;
            htmlps.mHouse7DashDisplayDeliv();
        }

        if (delvan.isTouching(HousePA[7]) && gameState === Play && keyDown("D")) {
            packagedeli = packagedeli+1;
            packages = packages-1;
            HousePA[7].remove();
            mHouseBounds[7].remove();
            timer = timer+20;
            htmlps.mHouse8DashDisplayDeliv();
        }

        if (delvan.isTouching(HousePA[8]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[8].remove();
            mHouseBounds[8].remove();
            timer = timer+20;
            htmlps.mHouse9DashDisplayDeliv();
            htmlps.HousesOverFlowON2();
        }

        if (packagedeli > 8) {
            htmlps.mHouse10DashDisplay();
            htmlps.mHouse11DashDisplay();
            htmlps.OverFlowInt();
        }

        if (delvan.isTouching(HousePA[9]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[9].remove();
            mHouseBounds[9].remove();
            timer = timer+10;
            htmlps.mHouse10DashDisplayDeliv();
        }

        if (delvan.isTouching(HousePA[10]) && gameState === Play && keyDown("D")) {
            packages = packages-1;
            packagedeli = packagedeli+1;
            HousePA[10].remove();
            mHouseBounds[10].remove();
            htmlps.mHouse11DashDisplayDeliv();
        }

        if(packagedeli == 1) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[1].y - HousePA[1].y - HousePA[1].y + delvan.y) + " M"); 
        }
        if(packagedeli == 2) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[3].y - HousePA[3].y - HousePA[3].y + delvan.y) + " M"); 
        }
        if(packagedeli == 3) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[2].y - HousePA[2].y - HousePA[2].y + delvan.y) + " M"); 
        }
        if(packagedeli == 4) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[4].y - HousePA[4].y - HousePA[4].y + delvan.y) + " M"); 
        }
        if(packagedeli == 5) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[5].y - HousePA[5].y - HousePA[5].y + delvan.y) + " M"); 
        }
        if(packagedeli == 6) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[6].y - HousePA[6].y - HousePA[6].y + delvan.y) + " M"); 
        }
        if(packagedeli == 7) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[7].y - HousePA[7].y - HousePA[7].y + delvan.y) + " M"); 
        }
        if(packagedeli == 8) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[8].y - HousePA[8].y - HousePA[8].y + delvan.y) + " M"); 
        }
        if(packagedeli == 9) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[9].y - HousePA[9].y - HousePA[9].y + delvan.y) + " M"); 
        }
        if(packagedeli == 10) {
            htmlps.nexthousen.html(" "+Math.round(HousePA[10].y - HousePA[10].y - HousePA[10].y + delvan.y) + " M"); 
        }

        if (frameCount % 80 === 0 && spawntraf === true  ) {
            PTraffic = createSprite(350, delvan.y - 800, 40, 80);
            PTraffic.lifetime = 700;
            var PTrafficvar = Math.round(random(1, 2));
            switch (PTrafficvar) {
                case 1: PTraffic.x = Math.round(random(300, 375));
                        PTraffic.width = 40;
                        PTraffic.height = 80;
                        PTraffic.velocityY = (Math.round(random(-5, -15)));
                        PTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                case 2: PTraffic.x = Math.round(random(200, 270));
                        PTraffic.width = Math.round(random(60, 70));
                        PTraffic.height = Math.round(random(150, 200));
                        PTraffic.velocityY = (Math.round(random(-5, -10)));
                        PTraffic.shapeColor = color(random(150, 255), random(150, 200), random(150, 150));
                    break;
                default: break;
            }
            TrafficAr.push(PTraffic);
            TrafficGroup.add(PTraffic);
        }

        if (frameCount % 100 === 0 && spawntraf === true && trafftouch===false) {
            OTraffic = createSprite(450, delvan.y - 800, 40, 80);
            OTraffic.lifetime = 400;
            var OTrafficvar = Math.round(random(1, 2));
            switch (OTrafficvar) {
                case 1: OTraffic.x = Math.round(random(425, 470));
                        OTraffic.width = 40;
                        OTraffic.height = 80;
                        OTraffic.velocityY = (Math.round(random(7, 20)));
                        OTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                case 2: OTraffic.x = Math.round(random(530, 600));
                        OTraffic.width = Math.round(random(60, 70));
                        OTraffic.height = Math.round(random(150, 200));
                        OTraffic.velocityY = (Math.round(random(5, 10)));
                        OTraffic.shapeColor = color(random(150, 255), random(150, 255), random(150, 255));
                    break;
                default: break;
            }
            TrafficAr.push(OTraffic);
            TrafficGroup.add(OTraffic);
   
        }
        
        for(var i = 0; i < TrafficGroup.length; i++) {
            if (TrafficGroup.get(i).y > delvan.y+200) {
                TrafficGroup.get(i).destroy();
            }
        }

        for(var i = 0; i < HousePA.length; i++) {
            var cust = HousePA[i].y - delvan.y;
            if (cust > -500) {
                TrafficGroup.collide(HousePA[i]);
            }
        }

        TrafficGroup.collide(TrafficAr);
        
        if (timertaken < 200) {
            htmlps.timeTakenGreen();
        }

        if (timertaken > 199) {
            htmlps.timeTakenYellow();
        }

        if (timer > 20) {
            htmlps.goodtime();
        }

        if (timer < 15) {
            htmlps.duetime();
        }

        if (timer < 5) {
            htmlps.dueduetime();
        }

        if (timer < 1) {
            gameState = Due;
        }

        if (gameState === Due) {
            htmlps.dashDisplayForDue();
            TrafficGroup.setVelocityYEach(0);
        }

        if (gameState === Due && cc == true) {
            delvan.velocityY = 0;
            htmlps.ccEr();
        } 

        if (gameState === Due && keyDown("E")) {
            window.location.reload();
        }

    }
    
    if (delvan.isTouching(TrafficGroup)) {
        gameState = End;
    }

    if (gameState === End) {
        htmlps.dashDisplayForEnd();
        htmlps.allHousesDisplayOff();
        htmlps.mTimerEasHide();
        TrafficGroup.setVelocityYEach(0);
        OTraffic.lifetime = 12000;
        PTraffic.lifetime = 12000;
    }

    if (gameState === End && cc == true) {
        delvan.velocityY = 0;
        htmlps.ccEr();
    } 

    if (gameState === End && keyDown("E")) {
        window.location.reload();
    }

     if (packages === 0 && gameState === Play && packagedeli === 11) {
         gameState = Win;
         TrafficGroup.destroyEach();
    }

    if (keyDown("X") && gameState === Play) {
        gameState = angrymode;
    }

    if (gameState === angrymode) {

        timer = 1000;

        TrafficGroup.destroyEach();
        mHouseBounds.length = 0;

        htmlps.devmodeON();
        htmlps.dashHideWin();
        htmlps.dashDisplaydevMode();
        htmlps.allHousesDisplayOff();

        if (keyDown("UP_ARROW")) {
            delvan.addSpeed(0.2, delvan.rotation);
        }

        if (keyDown("UP_ARROW") && keyDown("W")) {
            delvan.y = delvan.y - 15;
            delvan.addSpeed(0.7, delvan.rotation);
        }

        if (keyDown("DOWN_ARROW")) {
            delvan.y = delvan.y + 10;
            delvan.addSpeed(-0.5, delvan.rotation);
        }

        if (keyDown("LEFT_ARROW") && keyDown("UP_ARROW")) {
            delvan.rotation -= 2;
        }

        if (keyDown("RIGHT_ARROW") && keyDown("UP_ARROW")) {
            delvan.rotation += 2;   
        }

        if (keyDown("LEFT_ARROW") && keyDown("DOWN_ARROW")) {
            delvan.rotation -= 2;
        }

        if (keyDown("RIGHT_ARROW") && keyDown("DOWN_ARROW")) {
            delvan.rotation += 2;
        }

    }

    if (keyDown("E") && gameState === angrymode) {
        window.location.reload();
    }

    drawSprites();

    if (gameState === Win) {
        cc = false;
        background(0, 0, 0);
        htmlps.GameStateWin();
        htmlps.DropPackageInstructHide();
        htmlps.dashHideWin();
        htmlps.allHousesDisplayOff();
        htmlps.mTimerEasHide();
    }

    if (gameState === Win && keyDown("E")) {
        window.location.reload();
    }

}

function alarm() {
    if(delvan.y < -500) {
    timer--;
    }
}

function CountSeconds() {
    if (gameState === Play && delvan.y < -500) {
        timertaken++;
    }
}

function DTtimerCounter() {
    if(keyDown("UP_ARROW") && gameState === Play && delvan.y > delvan.y-11 || delvan.velocityY===-10) {
    DTtimer++;
    }
}

function oppotimerCounter() {    
    if (delvan.x > 400 && delvan.x < 550 && keyDown("UP_ARROW") && gameState === Play || delvan.velocityY===-10 && delvan.x > 400 && delvan.x < 550) {
        oppotimer++;
    }
}

function CCCounter() {
    if(delvan.velocityY===-10 && gameState === Play) {
        cctime++;
    }
}
