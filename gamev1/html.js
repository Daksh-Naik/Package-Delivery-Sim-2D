class HTMLPSCHARS {

    constructor() {

        this.title = createElement('h1');
        this.startinst = createElement('h2');
        this.ensure = createElement('h3');
        this.f11 = createElement('h3');
        this.pause = createElement('h1');

        this.control1 = createElement('h3');
        this.control2 = createElement('h3');
        this.control3 = createElement('h3');
        this.control4 = createElement('h3');
        this.control5 = createElement('h3');

        this.tutoria1 = createElement('h3');
        this.tutoria2 = createElement('h3');
        this.tutoria3 = createElement('h3');
        this.tutoria4 = createElement('h3');
        this.tutoria5 = createElement('h3');
        this.tutoria6 = createElement('h3');
        this.tutoria7 = createElement('h3');
        this.tutoria8 = createElement('h3');

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
        this.title.html("Package Delivery Sim 2D LT");
        this.title.style('color', 'white');
        this.title.style('user-select', 'none');
        this.title.style('font-family', 'Trebuchet MS');
        this.title.style('text-decoration', 'underline');
        this.title.style('text-align', 'center');
        this.title.style('background-color', 'black');
        this.title.style('border-radius', '10px');
        this.title.style('padding', '20px');
        this.title.style('margin', '1px');
        this.title.style('width', '480px');
        
    }

    startDisplay() {
        this.startinst.position(950, 140);
        this.startinst.html("Press E to start the engine");
        this.startinst.style('color', 'white');
        this.startinst.style('user-select', 'none');
        
        this.ensure.position(130, 10);
        this.ensure.html("Make sure that you've read all the information in the last tab before starting!");
        this.ensure.style('color', 'black');
        this.ensure.style('background-color', 'white');
        this.ensure.style('padding', '10px')
        this.ensure.style('user-select', 'none');

        this.f11.position(130, 55);
        this.f11.html("Press F11 or Control-⌘-F to go full screen.");
        this.f11.style('color', 'black');
        this.f11.style('background-color', 'white');
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

        this.control4.position(900, 400);
        this.control4.html("Press P to Pause.");
        this.control4.style('color', 'black');
        this.control4.style('background-color', 'white');
        this.control4.style('padding', '10px');
        this.control4.style('user-select', 'none');

        this.control5.position(900, 445);
        this.control5.html("Press F5 or E to Restart.");
        this.control5.style('color', 'black');
        this.control5.style('background-color', 'white');
        this.control5.style('padding', '10px');
        this.control5.style('user-select', 'none');
        
    }

    startDisplayHide() {
        this.startinst.hide();
        this.ensure.hide();
        this.f11.hide();
        this.control1.hide();
        this.control2.hide();
        this.control3.hide();
        this.control4.hide();
        this.control5.hide();

    }

    startTut() {
        this.tutoria1.html("Use your arrow keys to move your van!");
        this.tutoria1.position(300, 20);
        this.tutoria1.style('padding', '10px');
        this.tutoria1.style('color', 'black');
        this.tutoria1.style('background-color', 'white');
        this.tutoria1.style('user-select', 'none');

        this.tutoria5.html("Have a look at the dashboard for now, if you're done,");
        this.tutoria5.position(250, 70);
        this.tutoria5.style('padding', '10px');
        this.tutoria5.style('color', 'black');
        this.tutoria5.style('background-color', 'white');
        this.tutoria5.style('user-select', 'none');

        this.tutoria2.html("Follow the arrows on the road, and start your journey!");
        this.tutoria2.position(250, 120);
        this.tutoria2.style('padding', '10px');
        this.tutoria2.style('color', 'black');
        this.tutoria2.style('background-color', 'white');
        this.tutoria2.style('user-select', 'none');
    }

    startTutH() { this.tutoria1.hide(); this.tutoria2.hide(); this.tutoria5.hide(); }

    startTutd() {
        this.tutoria3.html("Take a note on this [[[[[[]]]]]] distance, and deliver the package to the first owner!");
        this.tutoria3.position(560, 540);
        this.tutoria3.style('padding', '10px');
        this.tutoria3.style('color', 'black');
        this.tutoria3.style('background-color', 'white');
        this.tutoria3.style('user-select', 'none');

        this.tutoria6.html("Your time starts now!");
        this.tutoria6.position(10, 60);
        this.tutoria6.style('padding', '10px');
        this.tutoria6.style('color', 'black');
        this.tutoria6.style('background-color', 'white');
        this.tutoria6.style('user-select', 'none');

        this.tutoria8.html("Don't hit the Traffic & Roadworks!");
        this.tutoria8.position(90, 560);
        this.tutoria8.style('padding', '10px');
        this.tutoria8.style('color', 'black');
        this.tutoria8.style('background-color', 'white');
        this.tutoria8.style('user-select', 'none');
    }

    startTutN() {
        this.tutoria4.html("Nice one! Now deliver the rest of the packages. Good luck!");
        this.tutoria4.position(820, 540);
        this.tutoria4.style('padding', '10px');
        this.tutoria4.style('color', 'black');
        this.tutoria4.style('background-color', 'white');
        this.tutoria4.style('user-select', 'none');
    }

    startDelTut() {
        this.tutoria7.html("Drive up to the Green designated area to deliver the package.");
        this.tutoria7.position(90, 0);
        this.tutoria7.style('padding', '10px');
        this.tutoria7.style('color', 'black');
        this.tutoria7.style('background-color', 'white');
        this.tutoria7.style('user-select', 'none');
    }

    dashDisplay() {

        this.framecounter.position(10, 10);
        this.framecounter.html(Math.round(frameRate()) +"  FPS");
        this.framecounter.style('color', 'white');
        this.framecounter.style('user-select', 'none');
        this.framecounter.style('text-align', 'center');
        this.framecounter.style('background-color', 'black');
        this.framecounter.style('padding', '10px');
        this.framecounter.style('border-radius', '5px')

        this.odometer.position(1030, 400);
        this.odometer.html("Travelled: " +Math.round(delvan.y - delvan.y - delvan.y) +"m");
        this.odometer.style('color', 'white');
        this.odometer.style('user-select', 'none');
        this.odometer.style('text-align', 'center');

        this.DTtimert.position(880, 460);
        this.DTtimert.html("Total sec Driving : " +Math.round(DTtimer));
        this.DTtimert.style('color', 'white');
        this.DTtimert.style('text-align', 'center');
        this.DTtimert.style('user-select', 'none');

        this.oppodtimert.position(1070, 460);
        this.oppodtimert.html("Total sec in Opposite Lane : " +Math.round(oppotimer));
        this.oppodtimert.style('color', 'white');
        this.oppodtimert.style('user-select', 'none');

        this.packagesleft.position(910, 500);
        this.packagesleft.html("Packages Left : " +packages);
        this.packagesleft.style('color', 'white');
        this.packagesleft.style('user-select', 'none');

        this.packagesdeli.position(1125, 500);
        this.packagesdeli.html("Packages Delivered : " +packagedeli);
        this.packagesdeli.style('color', 'white');
        this.packagesdeli.style('user-select', 'none');

        this.mtimer.position(980, 330);
        this.mtimer.html("Time left : " +timer +" Seconds");
        this.mtimer.style('color', 'white');
        this.mtimer.style('background-color', 'black');
        this.mtimer.style('padding', '20px');
        this.mtimer.style('border-radius', '25px');
        this.mtimer.style('user-select', 'none');

        this.mtimereas.position(10, 120);
        this.mtimereas.html(" "+timer +" Seconds");
        this.mtimereas.style('color', 'white');
        this.mtimereas.style('background-color', 'black');
        this.mtimereas.style('padding', '15px');
        this.mtimereas.style('border-radius', '15px');
        this.mtimereas.style('user-select', 'none');

        this.nexthouse.html("Next house in:");
        this.nexthouse.position(700, 500);
        this.nexthouse.style('background-color', 'black');
        this.nexthouse.style('color', 'white');
        this.nexthouse.style('padding', '10px');
        
        this.nexthousen.position(745, 540);
        this.nexthousen.html(" "+nav + " M");
        this.nexthousen.style('background-color', 'black');
        this.nexthousen.style('color', 'white');
        this.nexthousen.style('padding', '10px');
        this.nexthousen.style('text-align', 'right');
    }

    timeTakenShow() {
        this.timetakeninst.position(10, 100);
        this.timetakeninst.html("Total time taken : ");
        this.timetakeninst.style('color', 'white');
        this.timetakeninst.style('background-color', 'black');
        this.timetakeninst.style('padding', '15px');
        this.timetakeninst.style('border-radius', '15px');
        this.timetakeninst.style('user-select', 'none');

        this.timetaken.position(10, 140);
        this.timetaken.html(" "+timertaken +" Seconds");
        this.timetaken.style('color', 'white');
        this.timetaken.style('background-color', 'black');
        this.timetaken.style('padding', '15px');
        this.timetaken.style('border-radius', '15px');
        this.timetaken.style('user-select', 'none');

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

    badframes() {
        this.framecounter.style('color', 'rgb(255, 71, 71)');
    }

    goodtime() {
        this.mtimer.style('color', 'rgb(94, 255, 79)');
        this.mtimereas.style('color', 'rgb(94, 255, 79)');
    }

    duetime() {
        this.mtimer.style('color', 'rgb(255, 71, 71)');
        this.mtimereas.style('color', 'rgb(255, 71, 71)');
    }

    dueduetime() {
        this.mtimer.style('background-color', 'rgb(255, 71, 71)');
        this.mtimer.style('color', 'black');
        this.mtimereas.style('background-color', 'rgb(255, 71, 71)');
        this.mtimereas.style('color', 'black');
    }

    mTimerEasHide() {
        this.mtimereas.hide();
    }

    DropPackageInstructShow() {
        this.dropackinst.position(20, 520);
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
        this.dropackinstfirst.position(20, 450);
        this.dropackinstfirst.html("Drop the package in the designated area first!");
        this.dropackinstfirst.style('color', 'white');
        this.dropackinstfirst.style('background-color', 'black');
        this.dropackinstfirst.style('user-select', 'none');
        this.dropackinstfirst.style('padding', '10px');
    }

    DropPackageInstructFirstHide() {
        this.dropackinstfirst.html("");
    }

    mHouse1DashDisplay() {
        this.mHouse1delivinst.position(880, 100);
        this.mHouse1delivinst.html("Deliver a Package to Ram's House at : " +Math.round(HousePA[0].y - HousePA[0].y - HousePA[0].y + delvan.y) +" Meters.");
        this.mHouse1delivinst.style('font-family', 'Segoe UI')
        this.mHouse1delivinst.style('color', 'rgb(255, 71, 71)');
        this.mHouse1delivinst.style('user-select', 'none');
        this.mHouse1delivinst.style('background-color', 'black');
        this.mHouse1delivinst.style('padding', '10px');
    }

    mHouse1DashDisplayDeliv() {
        this.mHouse1delivinst.hide();
        this.mHouse1delivinstDeli.position(880, 100);
        this.mHouse1delivinstDeli.html("Package Delivered to Ram's House. (+10 Seconds)");
        this.mHouse1delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse1delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse1delivinstDeli.style('user-select', 'none');
        this.mHouse1delivinstDeli.style('background-color', 'black');
        this.mHouse1delivinstDeli.style('padding', '10px');
    }

    mHouse2DashDisplay() {
        this.mHouse2delivinst.position(880, 140);
        this.mHouse2delivinst.html("Deliver a Package to Chandan's House at : " +Math.round(HousePA[1].y - HousePA[1].y - HousePA[1].y + delvan.y) +" Meters.");
        this.mHouse2delivinst.style('font-family', 'Segoe UI')
        this.mHouse2delivinst.style('color', 'rgb(255, 71, 71)');    
        this.mHouse2delivinst.style('user-select', 'none');
        this.mHouse2delivinst.style('background-color', 'black');
        this.mHouse2delivinst.style('padding', '10px');
    }

    mHouse2DashDisplayDeliv() {
        this.mHouse2delivinst.hide();
        this.mHouse2delivinstDeli.position(880, 140);
        this.mHouse2delivinstDeli.html("Package Delivered to Chandan's House. (+20 Seconds)");
        this.mHouse2delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse2delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse2delivinstDeli.style('user-select', 'none');
        this.mHouse2delivinstDeli.style('background-color', 'black');
        this.mHouse2delivinstDeli.style('padding', '10px');
    }

    mHouse3DashDisplay() {
        this.mHouse3delivinst.position(880, 220);
        this.mHouse3delivinst.html("Deliver a Package to Gurpreet's House at : " +Math.round(HousePA[2].y - HousePA[2].y - HousePA[2].y + delvan.y) +" Meters.");
        this.mHouse3delivinst.style('font-family', 'Segoe UI')
        this.mHouse3delivinst.style('color', 'rgb(255, 71, 71)');   
        this.mHouse3delivinst.style('user-select', 'none'); 
        this.mHouse3delivinst.style('background-color', 'black');
        this.mHouse3delivinst.style('padding', '10px');
    }

    mHouse3DashDisplayDeliv() {
        this.mHouse3delivinst.hide();
        this.mHouse3delivinstDeli.position(880, 220);
        this.mHouse3delivinstDeli.html("Package Delivered to Gurpreet's House. (+10 Seconds)");
        this.mHouse3delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse3delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse3delivinstDeli.style('user-select', 'none');
        this.mHouse3delivinstDeli.style('background-color', 'black');
        this.mHouse3delivinstDeli.style('padding', '10px');
    }

    mHouse4DashDisplay() {
        this.mHouse4delivinst.position(880, 180);
        this.mHouse4delivinst.html("Deliver a Package to Ratan's House at : " +Math.round(HousePA[3].y - HousePA[3].y - HousePA[3].y + delvan.y) +" Meters.");
        this.mHouse4delivinst.style('font-family', 'Segoe UI')
        this.mHouse4delivinst.style('color', 'rgb(255, 71, 71)');   
        this.mHouse4delivinst.style('user-select', 'none');
        this.mHouse4delivinst.style('background-color', 'black'); 
        this.mHouse4delivinst.style('padding', '10px');
    }

    mHouse4DashDisplayDeliv() {
        this.mHouse4delivinst.hide();
        this.mHouse4delivinstDeli.position(880, 180);
        this.mHouse4delivinstDeli.html("Package Delivered to Ratan's House. (+10 Seconds)");
        this.mHouse4delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse4delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse4delivinstDeli.style('user-select', 'none');
        this.mHouse4delivinstDeli.style('background-color', 'black');
        this.mHouse4delivinstDeli.style('padding', '10px');
    }

    mHouse5DashDisplay() {
        this.mHouse5delivinst.position(880, 260);
        this.mHouse5delivinst.html("Deliver a Package to Darya's House at : " +Math.round(HousePA[4].y - HousePA[4].y - HousePA[4].y + delvan.y) +" Meters.");
        this.mHouse5delivinst.style('font-family', 'Segoe UI');
        this.mHouse5delivinst.style('color', 'rgb(255, 71, 71)');
        this.mHouse5delivinst.style('user-select', 'none');
        this.mHouse5delivinst.style('background-color', 'black');
        this.mHouse5delivinst.style('padding', '10px');
    }

    mHouse5DashDisplayDeliv() {
        this.mHouse5delivinst.hide();
        this.mHouse5delivinstDeli.position(880, 260);
        this.mHouse5delivinstDeli.html("Package Delivered to Dharya's House.");
        this.mHouse5delivinstDeli.style('color', 'rgb(94, 255, 79)');
        this.mHouse5delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse5delivinstDeli.style('user-select', 'none');
        this.mHouse5delivinstDeli.style('background-color', 'black');
        this.mHouse5delivinstDeli.style('padding', '10px');
    }
    
    allHousesDisplayOff() {
        this.mHouse1delivinst.hide();
        this.mHouse2delivinst.hide();
        this.mHouse3delivinst.hide();
        this.mHouse4delivinst.hide();
        this.mHouse5delivinst.hide();
    }

    dashDisplayForEnd() {
        this.framecounter.hide();
        this.tutoria1.hide();
        this.tutoria2.hide();
        this.tutoria3.hide();
        this.tutoria4.hide();

        this.instEnd.position(930, 90);
        this.instEnd.html("Sorry, you met in an Accident!");
        this.instEnd.style('color', 'white');
        this.instEnd.style('user-select', 'none');
        
        this.mHouse1delivinstDeli.position(880, 140);
        this.mHouse2delivinstDeli.position(880, 180);
        this.mHouse3delivinstDeli.position(880, 220);
        this.mHouse4delivinstDeli.position(880, 260);
        this.mHouse5delivinstDeli.position(880, 300);

        this.odometer.html("You travelled : " +Math.round(delvan.y - delvan.y - delvan.y) +" in Meters.");
        this.odometer.position('970', '400');

        this.DTtimert.position(1000, 440);
        this.DTtimert.html("Total time in sec Driven : " +Math.round(DTtimer));
        this.oppodtimert.position(980, 460);

        this.restartinst.position(980, 530);
        this.restartinst.html("Press F5 or E to restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '10px');

    }

    dashDisplayForDue() {
        this.duetitle.position(880, 70);
        this.duetitle.html("Sorry, you couldn't deliver the packages in time!");
        this.duetitle.style('color', 'white');
        this.duetitle.style('user-select', 'none');
        this.tutoria1.hide();
        this.tutoria3.hide();
        this.tutoria4.hide();
        this.tutoria2.hide();
        this.tutoria5.hide();
        this.tutoria8.hide();

        this.framecounter.hide();
        
        this.odometer.html("You travelled : " +Math.round(delvan.y - delvan.y - delvan.y) +" in Meters.");

        this.DTtimert.position(1000, 440);
        this.DTtimert.html("Total time in sec Driven : " +Math.round(DTtimer));
        this.oppodtimert.position(980, 460);

        this.restartinst.position(980, 530);
        this.restartinst.html("Press F5 or E to restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '10px')
    }

    dashHideWin() {
        this.framecounter.hide();
        this.packagesleft.hide();
        this.nexthousen.hide();
        this.nexthouse.hide();
    }

    GameStateWin() {
        this.title.position(450, 50);
        
        this.gamewintitle.position(350, 120);
        this.gamewintitle.html("Congrats! You delivered all the Packages! You're a Champ!");
        this.gamewintitle.style('text-align', 'center');
        this.gamewintitle.style('color', 'white');
        this.gamewintitle.style('user-select', 'none');

        this.odometer.position(200, 200);
        this.DTtimert.position(800, 200);
        this.oppodtimert.position(1000, 200);
        this.restartinst.position(440, 550);
        this.packagesdeli.hide();

        this.mHouse1delivinstDeli.position(100, 250);
        this.mHouse2delivinstDeli.position(100, 290);
        this.mHouse3delivinstDeli.position(100, 330);
        this.mHouse4delivinstDeli.position(100, 370);
        this.mHouse1delivinstDeli.position(100, 410);
        
        this.restartinst.position(600, 530);
        this.restartinst.html("Press F5 or E to Restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '10px')

    }

    devmodeON() {
        this.angrymode.position(1000, 80);
        this.angrymode.html("Altaer Mode : ON");
        this.angrymode.style('color', 'white');
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
