/**
 * gol.js
 *
 * EECS 183: Final Project
 * Fall 2016
 *
 * Implements Game of Life.
 */


var Constants = {
    numberOfRows: 20,
    numberOfColumns: 40,
    cellSize: 20,
    aliveColor: "#2ecc71",
    deadColor: "#e74c3c",
    generationInterval: 0.5,
};


/**
 * Creates an HTML table representing canvas and inserts it into HTML.
 */
function createCanvas() {
    var canvasTable = $("<table>", {id: "canvas-table"});
    var canvasTableHead = $("<thead>");
    // add rows and columns
    for (var rowIndex = 0; rowIndex < Constants.numberOfRows; rowIndex++) {
        // make a row
        var canvasRow = $("<tr>");
        for (var columnIndex = 0; columnIndex < Constants.numberOfColumns; columnIndex++) {
            // make a cell
            var canvasCell = $("<td>");
            canvasRow.append(canvasCell);
        }
        canvasTableHead.append(canvasRow);
    }
    canvasTable.append(canvasTableHead);
    // add table to HTML
    $("#canvas-container").append(canvasTable);

    // set size of cells
    $("#canvas-table td").css({
        width: Constants.cellSize,
        height: Constants.cellSize,
    });
}


/**
 * Returns cell from HTML canvas table at specified rowIndex and columnIndex.
 */
function getCanvasCellAtIndex(rowIndex, columnIndex) {
    return $("#canvas-table tr:eq(" + rowIndex + ") td:eq(" + columnIndex + ")");
}


/**
 * Creates and returns 2d array represnting game grid.
 * Initializes each cell to an object with and isAlive as false 0 liveNeighbors.
 */
function createGameGrid() {
    var grid = new Array(Constants.numberOfRows);
    for (var row = 0; row < Constants.numberOfRows; row++) {
        grid[row] = new Array(Constants.numberOfColumns);
        for (var col = 0; col < Constants.numberOfColumns; col++) {
            grid[row][col] = {
                isAlive: false,
                liveNeighbors: 0,
            };
        }
    }
    return grid;
}


/**
 * Executes when entire HTML document loads.
 */
$(document).ready(function() {
    createCanvas();
    var gameGrid = createGameGrid();

    $("#still-life-btn, #oscillator-btn, #spaceship-btn").click(function () {
        var selector = $(this).attr("id");
        selector = "#" + selector.replace("btn", "select");
        var pattern = $(selector).val();
        var newRow = Math.floor(Math.random() * Constants.numberOfRows);
        var newCol = Math.floor(Math.random() * Constants.numberOfColumns);
        drawPattern(pattern, gameGrid, newRow, newCol);
    });

    // event loop
    var isRunning = false;
    var timer;
    function runGoL() {
        if (!isRunning) {
            isRunning = true;
            evolveStep(gameGrid);
            // wait to run again
            timer = setTimeout(function() {
                isRunning = false;
                runGoL();
            }, Constants.generationInterval * 1000);
        }
    }
    $("#start-game").click(function () {
        runGoL();
    });
    $("#stop-game").click(function () {
        isRunning = false;
        clearTimeout(timer);
    });

    // TODO: Add a click event listener for your clear button here.
    //       Do not modify any code above this!
})


/****************************** BEGIN CORE CODE ******************************/


/**
 * Requires: grid is a 2d array representing game grid
 *           0 <= row && row < Constants.numberOfRows
 *           0 <= col && col < Constants.numberOfColumns
 *           state is set to the string "alive" or the string "dead"
 * Modifies: grid and HTML table representing the grid
 * Effects:  Sets isAlive field in cell of grid to either true or false,
 *           depending on the value of state.
 *           Updates backgroundColor of cell in HTML table.
 */
function setCellState(state, grid, row, col) {
    // TODO: implement
}


/**
 * Requires: grid is a 2d array representing game grid
 *           0 <= row && row < Constants.numberOfRows
 *           0 <= col && col < Constants.numberOfColumns
 * Modifies: Nothing.
 * Effects:  Counts the number of live neighbors for
 *           the cell at row, col in grid and returns the count.
 */
function countLiveNeighbors(grid, row, col) {
    // TODO: implement
}



/**
 * Requires: grid is a 2d array representing game grid
 * Modifies: grid
 * Effects:  Updates the liveNeighbors field of each cell in grid
 */
function updateLiveNeighbors(grid) {
    for(var i = 0; i < Constants.numberOfColumns; ++i) {
        for(var j = 0 j < Constants.numberOfRows; ++i) {
            var count = 0
            if(j == Constants.numberOfColumns - 1 && i == Constants.numberOfRows - 1 && grid[j+1][i+1].isAlive == true) {
                ++count
            }
            if(j == Constants.numberOfColumns - 1 && grid[j+1][i].isAlive == true) {
                ++count
            }
            if(i == Constants.numberOfRows - 1 && grid[j][i+1].isAlive == true) {
                ++count
            }
            if(j == Constants.numberOfColumns - 1 && i == 0 && grid[j+1][i-1].isAlive == true) {
                ++count
            }
            if(j == 0 && i == Constants.numberOfRows - 1 && grid[j-1][i+1].isAlive == true) {
                ++count
            }
            if(i == 0 && grid[j][i-1].isAlive == true) {
                ++count
            }
            if(j == 0 && grid[j-1][i].isAlive == true) {
                ++count
            }
            if(j == 0 && i == 0 && grid[j-1][i-1].isAlive == true) {
                ++count
            }
            grid[j][i].liveNeighbors = count
        }
    } 
}

/**
 * Requires: grid is a 2d array representing game grid
 * Modifies: grid
 * Effects:  Sets the state of cells in grid according to the number of
 *           liveNeighbors each cell has, and to the rules of the Game of Life.
 */
function updateCells(grid) {
    // TODO: implement
}

/**
 * Requires: grid is a 2d array representing game grid
 * Modifies: grid
 * Effects:  Changes the grid to evolve the cells to the next generation according
 *           to the rules of the Game of Life. In order to correctly move forward,
 *           all cells should count the number of their live neighbors before
 *           proceeding to change the state of all cells.
 */
function evolveStep(grid) {
    updateLiveNeighbors(grid)
    updateCells(grid)
}

/**
 * Requires: patternName is a string
 *           grid is a 2d array representing game grid
 *           row and col represent the top left corner of the pattern
 *           0 <= row && row < Constants.numberOfRows
 *           0 <= col && col < Constants.numberOfColumns
 * Modifies: grid
 * Effects:  This function is called when a user clicks on one of the HTML
 *           "Draw <pattern>" buttons.
 *           Draws the pattern specified by patternName.
 */
function drawPattern(patternName, grid, row, col) {
    // TODO: implement
}

/**
 * Requires: patternName is one of {"Block", "Beehive", "Loaf", "Boat"}
 *           grid is a 2d array representing game grid
 *           row and col represent the top left corner of the pattern
 *           0 <= row && row < Constants.numberOfRows
 *           0 <= col && col < Constants.numberOfColumns
 * Modifies: grid
 * Effects:  Draws the pattern specified by patternName.
 *           This function should draw as much of the pattern as possible
 *           without going outside the boundaries of the canvas.
 */
function drawStillLife(patternName, grid, row, col) {
    // TODO: implement
}


/**
 * Requires: patternName is one of {"Blinker", "Toad", "Beacon", "Pulsar"}
 *           grid is a 2d array representing game grid
 *           row and col represent the top left corner of the pattern
 *           0 <= row && row < Constants.numberOfRows
 *           0 <= col && col < Constants.numberOfColumns
 * Modifies: grid
 * Effects:  Draws the pattern specified by patternName.
 *           This function should draw as much of the pattern as possible
 *           without going outside the boundaries of the canvas.
 */
function drawOscillator(patternName, grid, row, col) {
    // TODO: implement
}


/**
 * Requires: patternName is one of {"Glider", "Lwss"}
 *           grid is a 2d array representing game grid
 *           row and col represent the top left corner of the pattern
 *           0 <= row && row < Constants.numberOfRows
 *           0 <= col && col < Constants.numberOfColumns
 * Modifies: grid
 * Effects:  Draws the pattern specified by patternName.
 *           This function should draw as much of the pattern as possible
 *           without going outside the boundaries of the canvas.
 */
function drawSpaceship(patternName, grid, row, col) {
    // TODO: implement
}
