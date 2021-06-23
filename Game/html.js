class HTMLPSCHARS {

    constructor() {

        this.title = createElement('h1');
        this.startinst = createElement('h2');
        this.ensure = createElement('h3');

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
    }

    showTitle() {
        this.title.position(895, 10);
        this.title.html("Package Delivery Sim 2D V1");
        this.title.style('color', 'white');
        this.title.style('user-select', 'none');
        this.title.style('font-family', 'Trebuchet MS');
        this.title.style('text-decoration', 'underline');
        this.title.style('text-align', 'center');

    }

    startDisplay() {
        this.startinst.position(950, 140);
        this.startinst.html("Press E to start the engine");
        this.startinst.style('color', 'white');
        this.startinst.style('user-select', 'none');
        this.startinst.style('font-family', 'Trebuchet MS');

        this.ensure.position(130, 10);
        this.ensure.html("Make sure that you've read all the information in the last tab before starting!");
        this.ensure.style('color', 'black');
        this.ensure.style('background-color', 'white');
        this.ensure.style('padding', '10px')
        this.ensure.style('font-family', 'Trebuchet MS');
        this.ensure.style('user-select', 'none');
    }

    startDisplayHide() {
        this.startinst.hide();
        this.ensure.hide();
    }

    dashDisplay() {

        this.framecounter.position(10, 10);
        this.framecounter.html(Math.round(frameRate()) +"  FPS");
        this.framecounter.style('color', 'white');
        this.framecounter.style('user-select', 'none');
        this.framecounter.style('text-align', 'center');
        this.framecounter.style('font-family', 'Trebuchet MS');
        this.framecounter.style('background-color', 'black');
        this.framecounter.style('padding', '10px');
        this.framecounter.style('border-radius', '5px')

        this.odometer.position(1000, 400);
        this.odometer.html("You travelled: " +Math.round(delvan.y - delvan.y - delvan.y) +"m");
        this.odometer.style('color', 'white');
        this.odometer.style('font-family', 'Trebuchet MS');
        this.odometer.style('user-select', 'none');
        this.odometer.style('text-align', 'center');

        this.DTtimert.position(880, 460);
        this.DTtimert.html("Total sec Driving : " +Math.round(DTtimer));
        this.DTtimert.style('color', 'white');
        this.DTtimert.style('font-family', 'Trebuchet MS');
        this.DTtimert.style('text-align', 'center');
        this.DTtimert.style('user-select', 'none');

        this.oppodtimert.position(1070, 460);
        this.oppodtimert.html("Total sec in Opposite Lane : " +Math.round(oppotimer));
        this.oppodtimert.style('color', 'white');
        this.oppodtimert.style('font-family', 'Trebuchet MS');
        this.oppodtimert.style('user-select', 'none');

        this.packagesleft.position(910, 500);
        this.packagesleft.html("Packages Left : " +packages);
        this.packagesleft.style('color', 'white');
        this.packagesleft.style('font-family', 'Trebuchet MS');
        this.packagesleft.style('user-select', 'none');

        this.packagesdeli.position(1125, 500);
        this.packagesdeli.html("Packages Delivered : " +packagedeli);
        this.packagesdeli.style('color', 'white');
        this.packagesdeli.style('font-family', 'Trebuchet MS');
        this.packagesdeli.style('user-select', 'none');

        this.mtimer.position(980, 330);
        this.mtimer.html("Time left : " +timer +" Seconds");
        this.mtimer.style('color', 'white');
        this.mtimer.style('font-family', 'Trebuchet MS');
        this.mtimer.style('background-color', 'black');
        this.mtimer.style('padding', '20px');
        this.mtimer.style('border-radius', '25px');
        this.mtimer.style('user-select', 'none');

        this.mtimereas.position(10, 350);
        this.mtimereas.html(" "+timer +" Seconds");
        this.mtimereas.style('color', 'white');
        this.mtimereas.style('background-color', 'black');
        this.mtimereas.style('font-family', 'Trebuchet MS');
        this.mtimereas.style('padding', '15px');
        this.mtimereas.style('border-radius', '15px');
        this.mtimereas.style('user-select', 'none');

    }

    timeTakenShow() {
        this.timetakeninst.position(10, 100);
        this.timetakeninst.html("Total time taken : ");
        this.timetakeninst.style('color', 'white');
        this.timetakeninst.style('font-family', 'Trebuchet MS');
        this.timetakeninst.style('background-color', 'black');
        this.timetakeninst.style('padding', '15px');
        this.timetakeninst.style('border-radius', '15px');
        this.timetakeninst.style('user-select', 'none');

        this.timetaken.position(10, 140);
        this.timetaken.html(" "+timertaken +" Seconds");
        this.timetaken.style('color', 'white');
        this.timetaken.style('background-color', 'black');
        this.timetaken.style('padding', '15px');
        this.timetaken.style('font-family', 'Trebuchet MS');
        this.timetaken.style('border-radius', '15px')

    }

    timeTakenGreen() {
        this.timetaken.style('color', 'limegreen');
    }

    timeTakenYellow() {
        this.timetaken.style('color', 'yellow');
    } 

    badframes() {
        this.framecounter.style('color', 'red');
    }

    goodtime() {
        this.mtimer.style('color', 'limegreen');
        this.mtimereas.style('color', 'limegreen');
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
        this.dropackinst.position(20, 520);
        this.dropackinst.html("Press D to drop the package.");
        this.dropackinst.style('color', 'white');
        this.dropackinst.style('font-family', 'Trebuchet MS');
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
        this.dropackinstfirst.style('font-family', 'Trebuchet MS');
        this.dropackinstfirst.style('background-color', 'black');
        this.dropackinstfirst.style('user-select', 'none');
        this.dropackinstfirst.style('padding', '10px');
    }

    DropPackageInstructFirstHide() {
        this.dropackinstfirst.html("");
    }

    mHouse1DashDisplay() {
        this.mHouse1delivinst.position(900, 100);
        this.mHouse1delivinst.html("Deliver a Package to Ram's House at : " +Math.round(HousePA[0].y - HousePA[0].y - HousePA[0].y + delvan.y) +" Meters.");
        this.mHouse1delivinst.style('font-family', 'Segoe UI')
        this.mHouse1delivinst.style('color', 'red');
        this.mHouse1delivinst.style('user-select', 'none');
    }

    mHouse1DashDisplayDeliv() {
        this.mHouse1delivinst.hide();
        this.mHouse1delivinstDeli.position(910, 100);
        this.mHouse1delivinstDeli.html("Package Delivered to Ram's House. (+10 Seconds)");
        this.mHouse1delivinstDeli.style('color', 'limegreen');
        this.mHouse1delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse1delivinstDeli.style('user-select', 'none');
    }

    mHouse2DashDisplay() {
        this.mHouse2delivinst.position(870, 140);
        this.mHouse2delivinst.html("Deliver a Package to Chandan's House at : " +Math.round(HousePA[1].y - HousePA[1].y - HousePA[1].y + delvan.y) +" Meters.");
        this.mHouse2delivinst.style('font-family', 'Segoe UI')
        this.mHouse2delivinst.style('color', 'red');    
        this.mHouse2delivinst.style('user-select', 'none');
    }

    mHouse2DashDisplayDeliv() {
        this.mHouse2delivinst.hide();
        this.mHouse2delivinstDeli.position(910, 140);
        this.mHouse2delivinstDeli.html("Package Delivered to Chandan's House. (+20 Seconds)");
        this.mHouse2delivinstDeli.style('color', 'limegreen');
        this.mHouse2delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse2delivinstDeli.style('user-select', 'none');
    }

    mHouse3DashDisplay() {
        this.mHouse3delivinst.position(870, 180);
        this.mHouse3delivinst.html("Deliver a Package to Gurpreet's House at : " +Math.round(HousePA[2].y - HousePA[2].y - HousePA[2].y + delvan.y) +" Meters.");
        this.mHouse3delivinst.style('font-family', 'Segoe UI')
        this.mHouse3delivinst.style('color', 'red');   
        this.mHouse3delivinst.style('user-select', 'none'); 
    }

    mHouse3DashDisplayDeliv() {
        this.mHouse3delivinst.hide();
        this.mHouse3delivinstDeli.position(910, 180);
        this.mHouse3delivinstDeli.html("Package Delivered to Gurpreet's House. (+10 Seconds)");
        this.mHouse3delivinstDeli.style('color', 'limegreen');
        this.mHouse3delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse3delivinstDeli.style('user-select', 'none');
    }

    mHouse4DashDisplay() {
        this.mHouse4delivinst.position(890, 220);
        this.mHouse4delivinst.html("Deliver a Package to Ratan's House at : " +Math.round(HousePA[3].y - HousePA[3].y - HousePA[3].y + delvan.y) +" Meters.");
        this.mHouse4delivinst.style('font-family', 'Segoe UI')
        this.mHouse4delivinst.style('color', 'red');   
        this.mHouse4delivinst.style('user-select', 'none'); 
    }

    mHouse4DashDisplayDeliv() {
        this.mHouse4delivinst.hide();
        this.mHouse4delivinstDeli.position(910, 220);
        this.mHouse4delivinstDeli.html("Package Delivered to Ratan's House. (+10 Seconds)");
        this.mHouse4delivinstDeli.style('color', 'limegreen');
        this.mHouse4delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse4delivinstDeli.style('user-select', 'none');
    }

    mHouse5DashDisplay() {
        this.mHouse5delivinst.position(890, 260);
        this.mHouse5delivinst.html("Deliver a Package to Darya's House at : " +Math.round(HousePA[4].y - HousePA[4].y - HousePA[4].y + delvan.y) +" Meters.");
        this.mHouse5delivinst.style('font-family', 'Segoe UI');
        this.mHouse5delivinst.style('color', 'red');
        this.mHouse5delivinst.style('user-select', 'none');
    }

    mHouse5DashDisplayDeliv() {
        this.mHouse5delivinst.hide();
        this.mHouse5delivinstDeli.position(910, 260);
        this.mHouse5delivinstDeli.html("Package Delivered to Dharya's House.");
        this.mHouse5delivinstDeli.style('color', 'limegreen');
        this.mHouse5delivinstDeli.style('font-family', 'Segoe UI');
        this.mHouse5delivinstDeli.style('user-select', 'none');
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

        this.instEnd.position(930, 90);
        this.instEnd.html("Sorry, you met with an Accident!");
        this.instEnd.style('color', 'white');
        this.instEnd.style('font-family', 'Trebuchet MS');

        this.mHouse1delivinstDeli.position(900, 140);
        this.mHouse2delivinstDeli.position(900, 180);
        this.mHouse3delivinstDeli.position(900, 220);
        this.mHouse4delivinstDeli.position(900, 260);
        this.mHouse5delivinstDeli.position(900, 300);

        this.odometer.html("You travelled : " +Math.round(delvan.y - delvan.y - delvan.y) +" in Meters.");

        this.DTtimert.position(1000, 440);
        this.DTtimert.html("Total time in sec Driven : " +Math.round(DTtimer));
        this.oppodtimert.position(980, 460);

        this.restartinst.position(980, 530);
        this.restartinst.html("Press F5 or E to restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('font-family', 'Trebuchet MS');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '10px')
    }

    dashDisplayForDue() {
        this.duetitle.position(880, 70);
        this.duetitle.html("Sorry, you couldn't deliver the packages in time!");
        this.duetitle.style('color', 'white');
        this.duetitle.style('font-family', 'Trebuchet MS');
        this.duetitle.style('user-select', 'none');

        this.framecounter.hide();
        
        this.odometer.html("You travelled : " +Math.round(delvan.y - delvan.y - delvan.y) +" in Meters.");

        this.DTtimert.position(1000, 440);
        this.DTtimert.html("Total time in sec Driven : " +Math.round(DTtimer));
        this.oppodtimert.position(980, 460);

        this.restartinst.position(980, 530);
        this.restartinst.html("Press F5 or E to restart");
        this.restartinst.style('color', 'white');
        this.restartinst.style('font-family', 'Trebuchet MS');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '10px')
    }

    dashHideWin() {
        this.framecounter.hide();
        this.packagesleft.hide();
    }

    GameStateWin() {
        this.title.position(450, 50);
        
        this.gamewintitle.position(350, 120);
        this.gamewintitle.html("Congrats! You delivered all the Packages! You're a Champ!");
        this.gamewintitle.style('text-align', 'center');
        this.gamewintitle.style('color', 'white');
        this.gamewintitle.style('font-family', 'Trebuchet MS');
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
        this.restartinst.style('font-family', 'Trebuchet MS');
        this.restartinst.style('user-select', 'none');
        this.restartinst.style('background-color', 'black');
        this.restartinst.style('padding', '10px')

    }
}
