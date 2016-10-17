# GoL

This project involves creating [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The goal of this project is for you to:

* Gain experience in Web Development and related technologies, including JavaScript, HTML, HTML5's Canvas, jQuery, and CSS.
* Solidify the concepts you've learned in EECS 183, including dynamic typing (similar to Python), creating and using objects, and array interaction.
* Use these concepts in a comprehensive project.
* Start moving beyond simply writing code to designing programs.
* Have fun!

Here's a demo of what your final product might look like:

[Game of Life!](https://youtu.be/fEdAywq9X4Q)

## Table of Contents

* [Project Description](#description)
    * [GoL Rules](#rules-of-life)
    * [Patterns](#patterns)
* [Core](#core)
    * [Software Overview](#software-overview)
        * [Global Variables](#global-variables)
        * [Rules](#software-rules)
* [Getting Started](#getting-started)
    * [Software](#software)
        * [Chrome Browser](#google-chrome)
        * [Distribution Code](#distribution-code)
* [Reach](#reach)
* [Proposal](#proposal)
* [Submission](#submission)
* [Grading](#Grading-Point-Distribution-and-Dates)
* [Support Staff](#support-staff)

# Description
Conway's Game of Life is a fairly simple interactive program that simulates life using a grid of cells.
These cells can change to an “alive” or “dead” state with each passing generation, based on a set of rules regarding the cell’s neighbors.
A neighboring cell is defined as any cell that is adjacent to the cell being evaluated.
A cell will, at most, have 8 neighbors (2 vertically, 2 horizontally, and 2 on each diagonal).

## Rules of Life
The rules that determine if a cell continues to the next generation are as follows:

* Any cell with fewer than two live neighbors dies, as if caused by under-population
* Any live cell with either two or three live neighbors lives on to the next generation
* Any live cell with more than three live neighbors dies, as if by overcrowding
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction

## Patterns
hese rules yield some very interesting patterns of cells that occur frequently when using correct versions of Game of Life.  These examples consist of 3 categories:

* Still Lifes
	Still lifes are exactly what they sound like; they remain stationary between each generation.

* Oscillators
	Oscillators change between 2 or more different arrangements between each generation.

* Spaceships
	Spaceships are patterns that appear as though they are "flying" across the grid over the course of each generation.

You are welcome to read more about Conway's Game of Life, as well as see what these patterns look like [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

# Core

The core part of this project is for you to implement a grid-based implementation of Game of Life using our starter implementation. We chose this game as it represents a challenge in Web Development-related skills with an interesting background in mathematics. However, having a backround in mathematics is not required to complete this project!

## Software Overview

There are three files that you will be given to work on this project:

* gol.js: This is the JavaScript file that is responsible for making your Game of Life functional.  This file will be the primary focus of the Core portion of this project.
* index.html: This is the basic webpage you will be working with over the course of this project.  You will NOT need to modify this for the Core portion of this project.
* styles.css: This is the basic style sheet for index.html that applies custom styles to the webpage.  You will NOT need to modify this for the Core portion of this project.

For the Core portion of this project, you will be responsible for writing the JavaScript that will interact with the canvas and make your Game of Life...well...come to life!  Gol.js contains code that is already implemented for you, some global variables* listed near the top, as well as a list of functions that you must implement to make your web app work.  Many of the functions should be self-explanatory, between their name and their RMEs.

### Global Variables
The global variables you will be using are:

* CELL_SIZE: an integer variable that represents the height and width of the cells on the canvas in pixels.
* CELL_ALIVE_COLOR: a string variable that represents the hex color value of a cell that is currently alive.
* CELL_DEAD_COLOR: a string variable that represents the hex color value of a cell that was previously alive (in other words, is currently dead).
* NUM_COLS: the number of columns in the gameGrid array and canvas in the HTML.
* NUM_ROWS: the number of rows in the gameGrid array and canvas in the HTML.
* gameGrid: the array that represents the array of cells that appear on the canvas.

**WARNING: JavaScript does not have a const keyword, so be very VERY sure you do not make any assignments to those global variables**.

### Software Rules
One important part of the of Game of Life are the rules listed above, which we will go over in more detail now, with a few special rules for our project.

Each cell has three different states (or colors) while the game is running.  The three different states are:

* White/Unoccupied: this color represents a cell that has never been alive (green) or dead (red), and therefore has never been occupied.  All cells start in this state when the webpage is loaded, and will never be this color again after being occupied.
* Green/Alive: this color represents a cell that is currently alive.  You can enter this state by either changing from an unoccupied cell (white) or by bringing a cell back to life (from red).
* Red/Dead: this color represents a cell that was occupied at some point.  You will only enter this state after a cell changes from alive (green) to dead.

Note that in gol.js, we have given you the colors that you will need for representing the "Alive" and "Dead" states, with the global variables CELL_ALIVE_COLOR and CELL_DEAD_COLOR. 
The background of the grid is white, so you do not need to worry about coloring a cell white (for "Unoccupied").
We have also created a custom Cell object to aid in the process of manipulating the canvas.
The various data members of the Cell object are given fairly intuitive names, and are paired with short explanations in comments.

You will also be writing the functions drawPattern, drawStillLife, drawOscillator, and drawSpaceship which will draw the pattern that is provided to the function (drawPattern will be called when one of the "Draw <pattern type>" buttons on index.html is clicked).
In addition to the pattern name, you will be provided a row and column index which represents the top left corner of the pattern.
It is guaranteed that row and col will be valid indexes within the canvas and array, and your functions should draw as much of the pattern as possible, given the coordinates row and col (without producing any errors in the JavaScript console*).
For example, if you were given a row of 39 and a col of 69 then you would only color the bottom right corner of the canvas, since all other coordinates would be considered "off the canvas."
We have provided you with a global variable TEST_DRAW_PATTERN that you are allowed to modify.
When this variable is set to true, it will always calls drawPattern with row and col equal to 6.
This will allow you to verify your patterns are correct before letting them be placed at some random location on the grid.

*To get the basics on JavaScript, to learn how to open your html file in Google Chrome, to find out how to use the browser console to find errors and to debug your code, and much more, watch the JavaScript tutorial on Canvas in the lecture recordings.

**WARNING: You can find the different types of patterns we expect you to be able to draw [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)**.

**WARNING: You may find it beneficial to create functions for each of the different patterns that exist**.

# Getting Started

Here is a short guide to help you start this project. 

## Software

There are two parts to your software enviroment to start: the project distribution code and Google Chrome browswer.

### Google Chrome

We will use Google's Chrome browser when grading your project. This means you must test your project using Google Chrome to verify it will work as you expect when we test your submission. You can download Chrome [here](https://www.google.com/chrome/browser/desktop/).

### Distribution Code

**WARNING: When completing your project, be sure to start with the distribution code in your official group project repository. Do not use the general project description repository.**

You will start the project with three files in your distribution code, as outlined above in [Software Overview](#Software Overview).

Download your team's repository distribution code from Github by issuing this command on the terminal to clone your team's repository:

    `git clone https://github.com/eecs183/GoL_<###>_repository.git`
    
    where `<###>` is the number of your group's repository. **Be sure to clone your group's repository, NOT that of the gameOfLife-F16 specification!**

# Reach
The basic principles of your web app are now functional, and you have the makings of a cool, interactive web app!  However, with such limited interactivity, this web app can become boring rather quickly.  Imagine in Facebook only letting you send messages to each other, without being able to upload images, tag each other in photos, and send each other annoying Facebook game invites.  Would some people really spend hours of their time sitting on it, if it had such limited interactivity? Interactivity is not only aspect of a web app that keeps users hooked; something else that keeps bringing users back is the User Interface (UI) and visual qualities.  If you were to take away all of the fancy colors, icons, and fonts on Facebook you would, more than likely, find it uninteresting once again.  Or, imagine that the Facebook logo was a bright lime yellow and orange instead of blue and white; it would be difficult to look at because the colors could put a strain on your eyes.

The reach portion of this project revolves around making your Game of Life more interactive and aesthetically appealing!  We are going to require you add at least 1 more interactive capability to the project, and at least 1 modification to the style of index.html (whether it's applying some BootStrap classes, or creating your own custom CSS styles is up to you).

Here is a list of suggestions, however this is not an all inclusive list.  Your imagination is the limit when it comes to what you can do with your reach!

* Allow users to click the canvas and toggle specific cells.
* Make the webpage look more interesting by:
    * Using BootStrap CSS classes.
    * Creating your own styles and adding them styles.css.
    * Using Font Awesome icons.
* Add a new rule to the Game of Life like a new cell type (a landmine for example).
* Add a feature that allows users to clear the entire canvas and start fresh.
* Allow users to set the speed at which cells change.
* A button to allow users to control when to move from one generation to the next.

# Proposal

## Step 1 of 2

The team that you submit your proposal with constitutes your team for the Final Project. There will be no revisions to these teams except in situations which merit staff intervention. You may not change your team once this document has been submitted.

Create a PDF file called proposal.pdf. Include the following:
* The name of your team.
* Name, uniqname, and GitHub username for each team member.

Your proposal **must** also answer the following questions about your team:

* How will your team split up the work?
* How regularly will your team meet to work on this project, if at all?
* What additions would you like to make to the Game of Life for the Reach portion of the project?
    * Include at least one interactive component.
        * What additional technologies do you need to accomplish this?
    * Include at least one style component.
        * What approach would you take to accomplishing these features?    

## Step 2 of 2

Only one person per team needs to complete the following instructions.
Submit your proposals in PDF format by **Sunday 11/20** to [EECS 183 on Gradescope](https://gradescope.com/courses/4780).

* Head to [EECS 183 on Gradescope](https://gradescope.com/courses/4780). Then choose **Proposal: Game of Life** from the assignments list. Select **Submit PDF** and upload your proposal.pdf.
* Once the PDF file has been uploaded, select pages corresponding to each part (i.e., question) of the proposal assignment. Click **Save**.
* Click on **Add Group Member** on the top right. Add the three other members of your team by typing their names or email addresses. Once everyone on your team is in the list, click **Save**. Everyone who has been added to the group on Gradescope will receive an email and will be able to access the submission, including the score and staff's comments after the proposal has been graded.


# Project Submission

Submissions will occur via your team GitHub repository. You will alter the starter files as necessary and specified above. Do not just write your code without continuously testing it on the board. It will be exceptionally hard to debug that way.

# Grading Point Distribution and Dates

Be sure to visit the [final project general specification](https://eecs183.org/projects/final) for more details on submission dates, times, and policies.

| Project Component   | Maximum Points | Due Date | How to Submit |
|:-------------------:|:--------------:|:--------:|:-------------:|
|Proposal             |      10         |  10/20   | Gradescope |
|Core                 |      50        |    12/2   |GitHub         |
|Core Team Evaluation |      5         |    12/3   |TBA        |
|Reach                |      50        |     12/13    |GitHub         |
|Final Team Evaluation|      5         |     12/14    |TBA        |
|Showcase             |      10        |    12/16     |Attendance + Presentation     |

# Support Staff

The Game of Life staff team has the following staff members.

* Isabella DeShantz-Cook
* Zhengxi Tan
* Maxim Aleksa
* Diana Gage


