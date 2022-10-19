import { useState } from "react";
import Grid from "../../components/grid/Grid"
import Header from "../../components/header/Header";
import './Style.css';

function Home() {
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
  const [turn, setTurn] = useState<string>("x");
  const [points, setPoints] = useState({
    x: 0,
    o: 0
  })

  const selectTurn = () => {
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  }

  const checkRowWin = (y: number) => {
    return grid[y][0] === grid[y][1] && grid[y][1] === grid[y][2] && grid[y][0] !== "";
  }
  
  const checkColWin = (x: number) => {
    return grid[0][x] === grid[1][x] && grid[1][x] === grid[2][x] && grid[0][x] !== "";
  }

  const checkDiagonalWin = () => {
    if (grid[1][1] === "") {
      return false;
    }
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      return true;
    }
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      return true;
    }
    return false;
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
    if (winner === "") {
      alert("draw!");
    } else {
      alert(winner + " win!");
      setPoints({
        ...points,
        [winner]: points[winner as "x"|"o"] + 1
      })
    }
    resetGrid();
  }

  const checkWinner = () => {
    if (checkRowWin(0)) {
      win(grid[0][0]);
    }
    if (checkRowWin(1)) {
      win(grid[1][0]);
    }
    if (checkRowWin(2)) {
      win(grid[2][0]);
    }

    if (checkColWin(0)) {
      win(grid[0][0]);
    }
    if (checkColWin(1)) {
      win(grid[0][1]);
    }
    if (checkColWin(2)) {
      win(grid[0][2]);
    }

    if (checkDiagonalWin()) {
      win(grid[1][1]);
    }

    if (checkDraw()) {
      win("");
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
        title="Tic-Tac-Toe"
        player1={points.x}
        player2={points.o}
      />
      <Grid grid={grid} markGrid={markGrid}/>
    </div>
  );
}

export default Home;
