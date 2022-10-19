import { useState } from "react";
import Grid from "../../components/grid/Grid"
import Header from "../../components/header/Header";
import './Style.css';

function Game() {
  const initialGrid: string[][]= [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""]
                  ];
  const [grid, setGrid] = useState<string[][]>(
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  );
  const [turn, setTurn] = useState<"x"|"o">("x");
  const [points, setPoints] = useState({
    x: 0,
    o: 0,
    draw: 0
  })

  const selectTurn = () => {
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  }

  const checkRowWin = (y: number) => {
    let won = grid[y][0] === grid[y][1] && grid[y][1] === grid[y][2] && grid[y][0] !== "";

    if (won) {
      return grid[y][0];
    }
    return null;
  }
  
  const checkColWin = (x: number) => {
    let won =  grid[0][x] === grid[1][x] && grid[1][x] === grid[2][x] && grid[0][x] !== "";

    if (won) {
      return grid[0][x];
    }
    return null;
  }

  const checkDiagonalWin = () => {
    if (grid[1][1] === "") {
      return null;
    }
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      return grid[1][1];
    }
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      return grid[1][1];
    }
    return null;
  }

  const checkDraw = () => {
    for (let row of grid) {
      for (let col of row) {
        if (col === "") {
          return false;
        }
      }
    }
    return true;
  }

  const resetGrid = () => {
    setGrid(initialGrid);
  }

  const win = (winner: string) => {
    // TODO: better winner screen 
    if (winner === "draw") {
      alert("draw!");
    } else {
      alert(winner + " win!");
    }

    setPoints({
      ...points,
      [winner]: points[winner as "x"|"o"|"draw"] + 1
    })
    resetGrid();
    setTurn('x')
  }

  function checkRows() {
    let winner = null;

    for (let i = 0; i < 3; i++) {
      winner = checkRowWin(i) || winner;
    }

    return winner;
  }

  function checkColumns() {
    let winner = null;

    for (let i = 0; i < 3; i++) {
      winner = checkColWin(i) || winner;
    }

    return winner;
  }

  const checkWinner = () => {
    let rowWinner = checkRows();
    let columnWinner = checkColumns();
    let diagonalWinner = checkDiagonalWin();
    
    if (rowWinner) {
      win(rowWinner);
    }
    else if (columnWinner) {
      win(columnWinner);
    }
    else if (diagonalWinner) {
      win(diagonalWinner);
    }
    else if (checkDraw()) {
      win("draw");
    }
  }

  const markGrid = (y: number, x: number) => {
    if (grid[y][x] !== "") {
      return;
    }

    let currGrid = grid;
    currGrid[y][x] = turn;
    setGrid(currGrid);
    selectTurn();
    checkWinner();
  }

  return (
    <div className="container">
      <Header
        x={points.x}
        o={points.o}
        draw={points.draw}
      />
      <Grid grid={grid} markGrid={markGrid}/>
      <h1 className="turn">
        <div>Turn</div>
        {turn}
      </h1>
    </div>
  );
}

export default Game;
