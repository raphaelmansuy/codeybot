"use strict";

let codeybot = require('./codeybot');

function changeColorRed() {

    codeybot.command_wheel_colour(255,0,0);
    
     codeybot.draw_character(3,3,'A');
}

function changeColorBlue() {

    codeybot.command_wheel_colour(0,0,255);
     codeybot.draw_character(3,3,'B');
    
}

function drawTest() {
    codeybot.draw_character(3,3,'A');
}

function clearScreen() {
    codeybot.clear_screen();
 }

function start() {

    codeybot.robot_set_to_singlemode();
    clearScreen();

  
    setInterval(changeColorRed, 1000);  // milliseconds
    setInterval(changeColorBlue, 300);  // milliseconds
    setInterval(clearScreen, 300);  // milliseconds

}


start();