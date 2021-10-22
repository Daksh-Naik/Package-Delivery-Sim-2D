class HTMLPSCHARS {

    constructor() {

        this.title = createElement('h1');
        this.startinst = createElement('h2');
        this.ensure = createElement('h3');
        this.ensure2 = createElement('h3');
        this.f11 = createElement('h3');
        this.pause = createElement('h1');

        this.control1 = createElement('h3');
        this.control2 = createElement('h3');
        this.control3 = createElement('h3');
        this.control4 = createElement('h3');
        this.control5 = createElement('h3');
        this.control6 = createElement('h3');
        this.control7 = createElement('h3');

        this.usearrk = createElement('h3');
        this.getonde = createElement('h3');
        this.das = createElement('h3');

        this.framecounter = createElement('h3');
        this.odometer = createElement('h3');
        this.DTtimert = createElement('h4');
        this.oppodtimert = createElement('h4');
        this.mtimer = createElement('h3');
        this.mtimereas = createElement('h3');
        this.timetakeninst = createElement('h3');
        this.timetaken = createElement('h3');
        this.packagesleft = createElement('h4');
        this.packagesdeli = createElement('h4');
        this.nexthouse = createElement('h4');
        this.nexthousen = createElement('h3');
        this.caution = createElement('h2');

        this.cc = createElement('h4');
        this.ccon = createElement('h4');
        this.ccinst = createElement('h4');
        this.cctimer = createElement('h4');
        this.ccspe = createElement('h4');
      
        this.dropackinst = createElement('h3');
        this.dropackinstfirst = createElement('h3');

        this.mHouse1delivinst = createElement('h4');
        this.mHouse1delivinstDeli = createElement('h4');
        this.mHouse2delivinst = createElement('h4');
        this.mHouse2delivinstDeli = createElement('h4');
        this.mHouse3delivinst = createElement('h4');
        this.mHouse3delivinstDeli = createElement('h4');
        this.mHouse4delivinst = createElement('h4');
        this.mHouse4delivinstDeli = createElement('h4');
        this.mHouse5delivinst = createElement('h4');
        this.mHouse5delivinstDeli = createElement('h4');
        this.morecoming = createElement('h4');
        this.slash = createElement('h4');
        this.mHouse6delivinst = createElement('h4');
        this.mHouse7delivinst = createElement('h4');
        this.mHouse8delivinst = createElement('h4');
        this.mHouse9delivinst = createElement('h4');
        this.mHouse10delivinst = createElement('h4');
        this.mHouse11delivinst = createElement('h4');
        this.mHouse6delivinstDeli = createElement('h4');
        this.mHouse7delivinstDeli = createElement('h4');
        this.mHouse8delivinstDeli = createElement('h4');
        this.mHouse9delivinstDeli = createElement('h4');
        this.mHouse10delivinstDeli = createElement('h4');
        this.mHouse11delivinstDeli = createElement('h4');

        this.instEnd = createElement('h2');
        this.restartinst = createElement('h2');

        this.duetitle = createElement('h3');
        this.duetitle2 = createElement('h3');

        this.gamewintitle = createElement('h2');
        this.gamewinscores = createElement('h3');

        this.angrymode = createElement('h2');
        this.devmoderes = createElement('h2');
    }

    showTitle() {
        this.title.position(837, 1);
        this.title.html("Package Delivery Sim 2D P5 AV");
        this.title.style('color', 'white');
        this.title.style('user-select', 'none');
        this.title.style('text-decoration', 'underline');
        this.title.style('text-align', 'center');
        this.title.style('background-color', 'black');
        this.title.style('border-radius', '10px');
        this.title.style('padding', '20px');
        this.title.style('margin', '1px');
        this.title.style('width', '480px');

    }

    startDisplay() {
        this.startinst.position(950, 170);
        this.startinst.html("Press E to start the engine");
        this.startinst.style('color', 'white');
        this.startinst.style('user-select', 'none');
        
        this.ensure.position(90, 10);
        this.ensure.html("Make sure that you've read all the information in the last tab before starting!");
        this.ensure.style('color', 'white');
        this.ensure.style('background-color', 'black');
        this.ensure.style('padding', '10px')
        this.ensure.style('user-select', 'none');

        this.ensure2.position(90, 55);
        this.ensure2.html("Please close unnecessary background apps / tabs before fastening your seatbelt!");
        this.ensure2.style('color', 'white');
        this.ensure2.style('background-color', 'black');
        this.ensure2.style('padding', '10px')
        this.ensure2.style('user-select', 'none');

        this.f11.position(90, 120);
        this.f11.html("Press F11 or Control-⌘-F to go full screen.");
        this.f11.style('color', 'white');
        this.f11.style('background-color', 'black');
        this.f11.style('padding', '10px');
        this.f11.style('user-select', 'none');

        this.control1.position(900, 255);
        this.control1.html("Use arrow keys to move.");
        this.control1.style('color', 'black');
        this.control1.style('background-color', 'white');
        this.control1.style('padding', '10px');
        this.control1.style('user-select', 'none');

        this.control2.position(900, 300);
        this.control2.html("Press W to drive faster.");
        this.control2.style('color', 'black');
        this.control2.style('background-color', 'white');
        this.control2.style('padding', '10px');
        this.control2.style('user-select', 'none');

        this.control3.position(900, 345);
        this.control3.html("Press D to deliver a package.");
        this.control3.style('color', 'black');
        this.control3.style('background-color', 'white');
        this.control3.style('padding', '10px');
        this.control3.style('user-select', 'none');

        this.control6.position(900, 400);
        this.control6.html("Press C to turn on Cruise Control.");
        this.control6.style('color', 'black');
        this.control6.style('background-color', 'white');
        this.control6.style('padding', '10px');
        this.control6.style('user-select', 'none');

        this.control7.position(900, 445);
        this.control7.html("Press V to turn off Cruise Control.");
        this.control7.style('color', 'black');
        this.control7.style('background-color', 'white');
        this.control7.style('padding', '10px');
        this.control7.style('user-select', 'none');

        this.control4.position(900, 500);
        this.control4.html("Press P to Pause.");
        this.control4.style('color', 'black');
        this.control4.style('background-color', 'white');
        this.control4.style('padding', '10px');
        this.control4.style('user-select', 'none');

        this.control5.position(900, 545);
        this.control5.html("Press F5 or E to Restart.");
        this.control5.style('color', 'black');
        this.control5.style('background-color', 'white');
        this.control5.style('padding', '10px');
        this.control5.style('user-select', 'none');
    }

    startDisplayHide() {
        this.startinst.hide();
        this.ensure.hide();
        this.ensure2.hide();
        this.f11.hide();
        this.control1.hide();
        this.control2.hide();
        this.control3.hide();
        this.control4.hide();
        this.control5.hide();
        this.control6.hide();
        this.control7.hide();
    }

    tutoriaSt() {
        this.usearrk.position(175, 0);
        this.usearrk.html("Use arrow keys to move your van!");
        this.usearrk.style('background-color', 'white');
        this.usearrk.style('color', 'black');
        this.usearrk.style('padding', '10px');

        this.getonde.position(175, 80);
        this.getonde.html("Follow the arrows on the road and start your journey!");
        this.getonde.style('background-color', 'white');
        this.getonde.style('color', 'black');
        this.getonde.style('padding', '10px');

        this.das.position(175, 40);
        this.das.html("Have a look at your dashboard for now, if you're done,");
        this.das.style('background-color', 'white');
        this.das.style('color', 'black');
        this.das.style('padding', '10px');
    }

    tutoriaStH() {
        this.usearrk.hide();
        this.getonde.hide();
        this.das.hide();
    }

    ccat() {
        this.cc.position(10, 100);
        this.cc.html("CC : OFF");
        this.cc.style('color', 'white');
        this.cc.style('user-select', 'none');
        this.cc.style('text-align', 'center');
        this.cc.style('background-color', 'black');
        this.cc.style('padding', '10px');
        this.cc.style('border-radius', '10px');
        this.cc.style('transition', '0.3s')

        this.ccinst.position(10, 135);
        this.ccinst.html("Press C to turn ON");
        this.ccinst.style('color', 'white');
        this.ccinst.style('user-select', 'none');
        this.ccinst.style('text-align', 'center');
        this.ccinst.style('background-color', 'black');
        this.ccinst.style('padding', '10px');
        this.ccinst.style('border-radius', '5px');

    }

    ccOn() {
        this.cc.html("CC : ON");
        this.cc.style('color', 'rgb(94, 255, 79)');
        this.ccinst.html("Press V to turn OFF");
    }

    ccEr() {
        this.cc.style('color', 'orange');
        this.cc.html("CC : AUTO OFF");
    }

    dashDisplay() {

        this.framecounter.position(10, 10);
        this.framecounter.html(Math.round(frameRate()) + "  FPS");
        this.framecounter.style('color', 'white');
        this.framecounter.style('user-select', 'none');
        this.framecounter.style('text-align', 'center');
        this.framecounter.style('background-color', 'black');
        this.framecounter.style('padding', '10px');
        this.framecounter.style('border-radius', '5px');
        this.framecounter.style('transition', '0.2s')

        this.odometer.position(1030, 440);
        this.odometer.html("Travelled: " + Math.round(delvan.y - delvan.y - delvan.y) + "m");
        this.odometer.style('color', 'white');
        this.odometer.style('user-select', 'none');
        this.odometer.style('text-align', 'center');

        this.DTtimert.position(880, 490);
        this.DTtimert.html("Total sec Driving : " + Math.round(DTtimer));
        this.DTtimert.style('color', 'white');
        this.DTtimert.style('text-align', 'center');
        this.DTtimert.style('user-select', 'none');

        this.oppodtimert.position(880, 530);
        this.oppodtimert.html("Total sec in Opposite Lane : " + Math.round(oppotimer));
        this.oppodtimert.style('color', 'white');
        this.oppodtimert.style('user-select', 'none');

        this.packagesleft.position(1150, 490);
        this.packagesleft.html("Packages Left : " + packages);
        this.packagesleft.style('color', 'white');
        this.packagesleft.style('user-select', 'none');

        this.packagesdeli.position(1150, 530);
        this.packagesdeli.html("Packages Delivered : " + packagedeli);
        this.packagesdeli.style('color', 'white');
        this.packagesdeli.style('user-select', 'none');

        this.mtimer.position(980, 370);
        this.mtimer.html("Time left : " + timer + " Seconds");
        this.mtimer.style('color', 'white');
        this.mtimer.style('background-color', 'black');
        this.mtimer.style('padding', '20px');
        this.mtimer.style('border-radius', '25px');
        this.mtimer.style('user-select', 'none');

        this.restartinst.position(980, 560);
        this.restartinst.html("Press F5 or E to restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '15px');
        this.restartinst.style('border-radius', '10px');

        this.nexthouse.html("Next house in:");
        this.nexthouse.position(700, 70);
        this.nexthouse.style('background-color', 'black');
        this.nexthouse.style('color', 'white');
        this.nexthouse.style('padding', '10px');
        
        this.nexthousen.position(730, 110);
        this.nexthousen.html(" "+nav + " M");
        this.nexthousen.style('background-color', 'black');
        this.nexthousen.style('color', 'white');
        this.nexthousen.style('padding', '10px');
        this.nexthousen.style('text-align', 'right');

        this.cctimer.html("Total time in CC : "+ Math.round(cctime));
        this.cctimer.style('color', 'white');
        this.cctimer.style('background-color', 'black');
        this.cctimer.style('padding', '10px');
        this.cctimer.style('border-radius', '10px');
        this.cctimer.style('user-select', 'none');
        this.cctimer.style('text-align', 'center');

        var st = delvan.velocityY-delvan.velocityY-delvan.velocityY;
        this.ccspe.html("CC Speed : "+st);
        this.ccspe.style('padding', '10px');
        this.ccspe.style('background-color', 'black');

    }

    warning() {
        this.caution.position(690, 200);
        this.caution.html("Caution!");
        this.caution.style('color', 'orange');
        this.caution.style('background-color', 'black');
        this.caution.style('padding', '10px');
    }

    warningOff() {
        this.caution.html("");
    }
 
    timeTakenShow() {
        this.timetakeninst.position(10, 130);
        this.timetakeninst.html("Total time taken : ");
        this.timetakeninst.style('color', 'white');
        this.timetakeninst.style('background-color', 'black');
        this.timetakeninst.style('padding', '15px');
        this.timetakeninst.style('border-radius', '15px');
        this.timetakeninst.style('user-select', 'none');

        this.timetaken.position(10, 170);
        this.timetaken.html(" " + timertaken + " Sec");
        this.timetaken.style('color', 'white');
        this.timetaken.style('background-color', 'black');
        this.timetaken.style('padding', '15px');
        this.timetaken.style('border-radius', '15px');
        this.timetaken.style('user-select', 'none');

        this.mtimereas.position(10, 380);
        this.mtimereas.html(" " + timer + " Sec");
        this.mtimereas.style('color', 'white');
        this.mtimereas.style('background-color', 'black');
        this.mtimereas.style('padding', '15px');
        this.mtimereas.style('border-radius', '15px');
        this.mtimereas.style('user-select', 'none');
    }

    gamePause() {
        this.pause.html("PAUSED : Press E to Play.");
        this.pause.style('background-color', 'black');
        this.pause.style('padding', '10px');
        this.pause.style('z-index', '50');
    }

    timeTakenGreen() {
        this.timetaken.style('color', 'rgb(94, 255, 79)');
    }

    timeTakenYellow() {
        this.timetaken.style('color', 'yellow');
    }

    goodtime() {
        this.mtimer.style('color', 'rgb(94, 255, 79)');
        this.mtimereas.style('color', 'rgb(94, 255, 79)');
    }

    duetime() {
        this.mtimer.style('color', 'red');
        this.mtimereas.style('color', 'red');
    }

    dueduetime() {
        this.mtimer.style('background-color', 'red');
        this.mtimer.style('color', 'black');
        this.mtimereas.style('background-color', 'red');
        this.mtimereas.style('color', 'black');
    }

    mTimerEasHide() {
        this.mtimereas.hide();
    }

    DropPackageInstructShow() {
        this.dropackinst.position(20, 560);
        this.dropackinst.html("Press D to drop the package.");
        this.dropackinst.style('color', 'white');
        this.dropackinst.style('background-color', 'black');
        this.dropackinst.style('user-select', 'none');
        this.dropackinst.style('padding', '10px');
    }

    DropPackageInstructHide() {
        this.dropackinst.html("");
    }

    DropPackageInstructFirstShow() {
        this.dropackinstfirst.position(20, 500);
        this.dropackinstfirst.html("Deliver the package in the green designated area first!");
        this.dropackinstfirst.style('color', 'white');
        this.dropackinstfirst.style('background-color', 'black');
        this.dropackinstfirst.style('user-select', 'none');
        this.dropackinstfirst.style('padding', '10px');
    }

    DropPackageInstructFirstHide() {
        this.dropackinstfirst.html("");
    }

    moreAdd() {
        this.morecoming.position(870, 320);
        this.morecoming.html("More coming up....");
        this.morecoming.style('color', 'white');
        this.morecoming.style('background-color', 'black');
        this.morecoming.style('padding', '5px');

        this.slash.position(1235, 320);
        this.slash.html(" " + packagedeli + " /  " + " 11");
        this.slash.style('color', 'white');
        this.slash.style('background-color', 'black');
        this.slash.style('padding', '5px')
        this.slash.style('text-align', 'center');
        this.slash.style('width', '75px');
    }

    mHouse1DashDisplay() {
        this.mHouse1delivinst.position(870, 120);
        this.mHouse1delivinst.html("Deliver a Package to Aryan's House at : " + Math.round(HousePA[0].y - HousePA[0].y - HousePA[0].y + delvan.y) + " Mts.");
       this.mHouse1delivinst.style('color', 'red');
        this.mHouse1delivinst.style('user-select', 'none');
        this.mHouse1delivinst.style('background-color', 'black');
        this.mHouse1delivinst.style('padding', '10px');
        this.mHouse1delivinst.style('width', '430px');
    }

    mHouse1DashDisplayDeliv() {
        this.mHouse1delivinst.hide();
        this.mHouse1delivinstDeli.position(870, 120);
        this.mHouse1delivinstDeli.html("Package Delivered to Aryan's House. (+10 Sec)");
        this.mHouse1delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse1delivinstDeli.style('user-select', 'none');
        this.mHouse1delivinstDeli.style('background-color', 'black');
        this.mHouse1delivinstDeli.style('padding', '10px');
        this.mHouse1delivinstDeli.style('width', '430px');
    }

    mHouse2DashDisplay() {
        this.mHouse2delivinst.position(870, 160);
        this.mHouse2delivinst.html("Deliver a Package to De Costa's House at : " + Math.round(HousePA[1].y - HousePA[1].y - HousePA[1].y + delvan.y) + " Mts.");
        this.mHouse2delivinst.style('color', 'red');
        this.mHouse2delivinst.style('user-select', 'none');
        this.mHouse2delivinst.style('background-color', 'black');
        this.mHouse2delivinst.style('padding', '10px');
        this.mHouse2delivinst.style('width', '430px');
    }

    mHouse2DashDisplayDeliv() {
        this.mHouse2delivinst.hide();
        this.mHouse2delivinstDeli.position(870, 160);
        this.mHouse2delivinstDeli.html("Package Delivered to De Costa's House. (+20 Sec)");
        this.mHouse2delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse2delivinstDeli.style('user-select', 'none');
        this.mHouse2delivinstDeli.style('background-color', 'black');
        this.mHouse2delivinstDeli.style('padding', '10px');
        this.mHouse2delivinstDeli.style('width', '430px');
    }

    mHouse3DashDisplay() {
        this.mHouse3delivinst.position(870, 240);
        this.mHouse3delivinst.html("Deliver a Package to Radha's House at : " + Math.round(HousePA[2].y - HousePA[2].y - HousePA[2].y + delvan.y) + " Mts.");
        this.mHouse3delivinst.style('color', 'red');
        this.mHouse3delivinst.style('user-select', 'none');
        this.mHouse3delivinst.style('background-color', 'black');
        this.mHouse3delivinst.style('padding', '10px');
        this.mHouse3delivinst.style('width', '430px');
    }

    mHouse3DashDisplayDeliv() {
        this.mHouse3delivinst.hide();
        this.mHouse3delivinstDeli.position(870, 240);
        this.mHouse3delivinstDeli.html("Package Delivered to Radha's House. (+10 Sec)");
        this.mHouse3delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse3delivinstDeli.style('user-select', 'none');
        this.mHouse3delivinstDeli.style('background-color', 'black');
        this.mHouse3delivinstDeli.style('padding', '10px');
        this.mHouse3delivinstDeli.style('width', '430px');
    }

    mHouse4DashDisplay() {
        this.mHouse4delivinst.position(870, 200);
        this.mHouse4delivinst.html("Deliver a Package to Rajat's House at : " + Math.round(HousePA[3].y - HousePA[3].y - HousePA[3].y + delvan.y) + " Mts.");
        this.mHouse4delivinst.style('color', 'red');
        this.mHouse4delivinst.style('user-select', 'none');
        this.mHouse4delivinst.style('background-color', 'black');
        this.mHouse4delivinst.style('padding', '10px');
        this.mHouse4delivinst.style('width', '430px');
    }

    mHouse4DashDisplayDeliv() {
        this.mHouse4delivinst.hide();
        this.mHouse4delivinstDeli.position(870, 200);
        this.mHouse4delivinstDeli.html("Package Delivered to Rajat's House. (+10 Sec)");
        this.mHouse4delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse4delivinstDeli.style('user-select', 'none');
        this.mHouse4delivinstDeli.style('background-color', 'black');
        this.mHouse4delivinstDeli.style('padding', '10px');
        this.mHouse4delivinstDeli.style('width', '430px');
    }

    mHouse5DashDisplay() {
        this.mHouse5delivinst.position(870, 280);
        this.mHouse5delivinst.html("Deliver a Package to Arjun's House at : " + Math.round(HousePA[4].y - HousePA[4].y - HousePA[4].y + delvan.y) + " Mts.");
        this.mHouse5delivinst.style('color', 'red');
        this.mHouse5delivinst.style('user-select', 'none');
        this.mHouse5delivinst.style('background-color', 'black');
        this.mHouse5delivinst.style('padding', '10px');
        this.mHouse5delivinst.style('width', '430px');
    }

    mHouse5DashDisplayDeliv() {
        this.mHouse5delivinst.hide();
        this.mHouse5delivinstDeli.position(870, 280);
        this.mHouse5delivinstDeli.html("Package Delivered to Arjun's House. (+15 Sec)");
        this.mHouse5delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse5delivinstDeli.style('user-select', 'none');
        this.mHouse5delivinstDeli.style('background-color', 'black');
        this.mHouse5delivinstDeli.style('padding', '10px');
        this.mHouse5delivinstDeli.style('width', '430px');
    }

    HousesOverFlowON1() {
        this.mHouse1delivinstDeli.hide();
        this.mHouse2delivinstDeli.hide();
        this.mHouse3delivinstDeli.hide();
        this.mHouse4delivinstDeli.hide();
        this.mHouse5delivinstDeli.position(870, 120);
    }

    mHouse6DashDisplay() {
        this.mHouse6delivinst.position(870, 160);
        this.mHouse6delivinst.html("Deliver a Package to Chowgule's House at : " + Math.round(HousePA[5].y - HousePA[5].y - HousePA[5].y + delvan.y) + " Mts.");
        this.mHouse6delivinst.style('color', 'red');
        this.mHouse6delivinst.style('user-select', 'none');
        this.mHouse6delivinst.style('background-color', 'black');
        this.mHouse6delivinst.style('padding', '10px');
        this.mHouse6delivinst.style('width', '430px');
    }

    mHouse6DashDisplayDeliv() {
        this.mHouse6delivinst.hide();
        this.mHouse6delivinstDeli.position(870, 160);
        this.mHouse6delivinstDeli.html("Package Delivered to Chowgule's House. (+20 Sec)");
        this.mHouse6delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse6delivinstDeli.style('user-select', 'none');
        this.mHouse6delivinstDeli.style('background-color', 'black');
        this.mHouse6delivinstDeli.style('padding', '10px');
        this.mHouse6delivinstDeli.style('width', '430px');
    }

    mHouse7DashDisplay() {
        this.mHouse7delivinst.position(870, 200);
        this.mHouse7delivinst.html("Deliver a Package to Kamat's House at : " + Math.round(HousePA[6].y - HousePA[6].y - HousePA[6].y + delvan.y) + " Mts.");
        this.mHouse7delivinst.style('color', 'red');
        this.mHouse7delivinst.style('user-select', 'none');
        this.mHouse7delivinst.style('background-color', 'black');
        this.mHouse7delivinst.style('padding', '10px');
        this.mHouse7delivinst.style('width', '430px');
    }

    mHouse7DashDisplayDeliv() {
        this.mHouse7delivinst.hide();
        this.mHouse7delivinstDeli.position(870, 200);
        this.mHouse7delivinstDeli.html("Package Delivered to Kamat's House. (+30 Sec)");
        this.mHouse7delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse7delivinstDeli.style('user-select', 'none');
        this.mHouse7delivinstDeli.style('background-color', 'black');
        this.mHouse7delivinstDeli.style('padding', '10px');
        this.mHouse7delivinstDeli.style('width', '430px');
    }

    mHouse8DashDisplay() {
        this.mHouse8delivinst.position(870, 240);
        this.mHouse8delivinst.html("Deliver a Package to Gregory's House at : " + Math.round(HousePA[7].y - HousePA[7].y - HousePA[7].y + delvan.y) + " Mts.");
        this.mHouse8delivinst.style('color', 'red');
       this.mHouse8delivinst.style('user-select', 'none');
        this.mHouse8delivinst.style('background-color', 'black');
        this.mHouse8delivinst.style('padding', '10px');
        this.mHouse8delivinst.style('width', '430px');
    }

    mHouse8DashDisplayDeliv() {
        this.mHouse8delivinst.hide();
        this.mHouse8delivinstDeli.position(870, 240);
        this.mHouse8delivinstDeli.html("Package Delivered to Gregory's House. (+20 Sec)");
        this.mHouse8delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse8delivinstDeli.style('user-select', 'none');
        this.mHouse8delivinstDeli.style('background-color', 'black');
        this.mHouse8delivinstDeli.style('padding', '10px');
        this.mHouse8delivinstDeli.style('width', '430px');
    }

    mHouse9DashDisplay() {
        this.mHouse9delivinst.position(870, 280);
        this.mHouse9delivinst.html("Deliver a Package to Neha's House at : " + Math.round(HousePA[8].y - HousePA[8].y - HousePA[8].y + delvan.y) + " Mts.");
        this.mHouse9delivinst.style('color', 'red');
        this.mHouse9delivinst.style('user-select', 'none');
        this.mHouse9delivinst.style('background-color', 'black');
        this.mHouse9delivinst.style('padding', '10px');
        this.mHouse9delivinst.style('width', '430px');
    }

    mHouse9DashDisplayDeliv() {
        this.mHouse9delivinst.hide();
        this.mHouse9delivinstDeli.position(870, 280);
        this.mHouse9delivinstDeli.html("Package Delivered to Neha's House. (+20 Sec)");
        this.mHouse9delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse9delivinstDeli.style('user-select', 'none');
        this.mHouse9delivinstDeli.style('background-color', 'black');
        this.mHouse9delivinstDeli.style('padding', '10px');
        this.mHouse9delivinstDeli.style('width', '430px');
    }

    mHouse10DashDisplay() {
        this.mHouse10delivinst.position(870, 160);
        this.mHouse10delivinst.html("Deliver a Package to Srivastava's House at : " + Math.round(HousePA[9].y - HousePA[9].y - HousePA[9].y + delvan.y) + " Mts.");
        this.mHouse10delivinst.style('color', 'red');
        this.mHouse10delivinst.style('user-select', 'none');
        this.mHouse10delivinst.style('background-color', 'black');
        this.mHouse10delivinst.style('padding', '10px');
        this.mHouse10delivinst.style('width', '430px');
    }

    mHouse10DashDisplayDeliv() {
        this.mHouse10delivinst.hide();
        this.mHouse10delivinstDeli.position(870, 160);
        this.mHouse10delivinstDeli.html("Package Delivered to Srivastava's House. (+10 Sec)");
        this.mHouse10delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse10delivinstDeli.style('user-select', 'none');
        this.mHouse10delivinstDeli.style('background-color', 'black');
        this.mHouse10delivinstDeli.style('padding', '10px');
        this.mHouse10delivinstDeli.style('width', '430px');
    }

    mHouse11DashDisplay() {
        this.mHouse11delivinst.position(870, 200);
        this.mHouse11delivinst.html("Deliver a Package to Bishnoi's House at : " + Math.round(HousePA[10].y - HousePA[10].y - HousePA[10].y + delvan.y) + " Mts.");
        this.mHouse11delivinst.style('color', 'red');
        this.mHouse11delivinst.style('user-select', 'none');
        this.mHouse11delivinst.style('background-color', 'black');
        this.mHouse11delivinst.style('padding', '10px');
        this.mHouse11delivinst.style('width', '430px');
    }

    mHouse11DashDisplayDeliv() {
        this.mHouse11delivinst.hide();
        this.mHouse11delivinstDeli.position(870, 200);
        this.mHouse11delivinstDeli.html("Package Delivered to Bishnoi's House.");
        this.mHouse11delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse11delivinstDeli.style('user-select', 'none');
        this.mHouse11delivinstDeli.style('background-color', 'black');
        this.mHouse11delivinstDeli.style('padding', '10px');
        this.mHouse11delivinstDeli.style('width', '430px');
    }

    HousesOverFlowON2() {
        this.mHouse5delivinstDeli.hide();
        this.mHouse6delivinstDeli.hide();
        this.mHouse7delivinstDeli.hide();
        this.mHouse8delivinstDeli.hide();
        this.mHouse9delivinstDeli.position(870, 120);
    }

    OverFlowInt() {
        this.morecoming.html(" " + packages + " remaining...")
    }

    allHousesDisplayOff() {
        this.mHouse1delivinst.hide();
        this.mHouse2delivinst.hide();
        this.mHouse3delivinst.hide();
        this.mHouse4delivinst.hide();
        this.mHouse5delivinst.hide();
        this.mHouse6delivinst.hide();
        this.mHouse7delivinst.hide();
        this.mHouse8delivinst.hide();
        this.mHouse9delivinst.hide();
        this.mHouse10delivinst.hide();
        this.mHouse11delivinst.hide();
    }

    dashDisplayForEnd() {
        this.usearrk.hide();
        this.getonde.hide();
        this.das.hide();

        this.instEnd.position(930, 70);
        this.instEnd.html("Sorry, you met in an Accident!");
        this.instEnd.style('color', 'white');
        this.instEnd.style('user-select', 'none');
        
        this.morecoming.hide();
        this.slash.hide();

        this.odometer.html("You travelled : " + Math.round(delvan.y - delvan.y - delvan.y) + " in Mts.");
        this.odometer.position(1000, 440)

        this.framecounter.html("Accident!")
        this.framecounter.style('color', 'orange');

        this.DTtimert.html("Total time in sec Driven : " + Math.round(DTtimer));

    }

    dashDisplayForDue() {
        this.duetitle.position(880, 70);
        this.duetitle.html("Sorry, you couldn't deliver the packages in time!");
        this.duetitle.style('color', 'white');
        this.duetitle.style('user-select', 'none');

        this.framecounter.html("Late!");
        this.framecounter.style('color', 'orange');

        this.odometer.html("You travelled : " + Math.round(delvan.y - delvan.y - delvan.y) + " in Mts.");
        this.odometer.position(1000, 440)

        this.DTtimert.html("Total time in sec Driven : " + Math.round(DTtimer));
    }

    dashHideWin() {
        this.framecounter.hide();
        this.packagesleft.hide();
        this.nexthousen.hide();
        this.nexthouse.hide();
    }

    GameStateWin() {
        this.title.position(450, 50);

        this.gamewintitle.position(300, 120);
        this.gamewintitle.html("Congrats! You delivered all the Packages! You deserve a gold medal!");
        this.gamewintitle.style('text-align', 'center');
        this.gamewintitle.style('color', 'white');
        this.gamewintitle.style('user-select', 'none');

        this.odometer.position(200, 200);
        this.DTtimert.position(800, 200);
        this.oppodtimert.position(1000, 200);
        this.restartinst.position(440, 550);
        this.packagesdeli.hide();

        this.morecoming.hide();
        this.slash.hide();

        this.cc.hide();
        this.ccinst.hide();
        this.ccon.hide();

        this.mHouse1delivinstDeli.hide();
        this.mHouse2delivinstDeli.hide();
        this.mHouse3delivinstDeli.hide();
        this.mHouse4delivinstDeli.hide();
        this.mHouse5delivinstDeli.hide();
        this.mHouse6delivinstDeli.hide();
        this.mHouse7delivinstDeli.hide();
        this.mHouse8delivinstDeli.hide();
        this.mHouse9delivinstDeli.hide();
        this.mHouse10delivinstDeli.hide();
        this.mHouse11delivinstDeli.hide();

        this.restartinst.position(600, 530);
        this.restartinst.html("Press F5 or E to Restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('user-select', 'none');

    }

    devmodeON() {
        this.angrymode.position(1000, 80);
        this.angrymode.html("Altaer Mode : ON");
        this.angrymode.style('color', 'white');
        this.morecoming.hide();
        this.slash.hide();
    }

    dashDisplaydevMode() {
        this.odometer.hide();
        this.mtimereas.hide();
        this.mtimer.hide();
        this.packagesdeli.hide();
        this.packagesleft.hide();
        this.oppodtimert.hide();
        this.timetaken.hide();
        this.timetakeninst.hide();
        this.DTtimert.hide();

        this.devmoderes.position(1000, 150);
        this.devmoderes.html("Press F5 to Revert");
        this.devmoderes.style('color', 'white');
    }

    devmodeOFF() {
        this.angrymode.html("Altaer Mode : OFF");
    }
}
