import './Style.css';

type IGrid = {
  grid: string[][];
  markGrid: (y: number, x: number) => void
}

function Grid({ grid, markGrid }:IGrid) {
    return (
      <div className="grid">
        <div className="row">
          <div className="square" onClick={() => markGrid(0, 0)}>
            {grid[0][0]}
          </div>
          <div className="square" onClick={() => markGrid(0, 1)}>
            {grid[0][1]}
          </div>
          <div className="square" onClick={() => markGrid(0, 2)}>
            {grid[0][2]}
          </div>
        </div>
        <div className="row">
            <div className="square" onClick={() => markGrid(1, 0)}>
              {grid[1][0]}
            </div>
            <div className="square" onClick={() => markGrid(1, 1)}>
              {grid[1][1]}
            </div>
            <div className="square" onClick={() => markGrid(1, 2)}>
              {grid[1][2]}
            </div>
        </div>
        <div className="row">
            <div className="square" onClick={() => markGrid(2, 0)}>
              {grid[2][0]}
            </div>
            <div className="square" onClick={() => markGrid(2, 1)}>
              {grid[2][1]}
            </div>
            <div className="square" onClick={() => markGrid(2, 2)}>
              {grid[2][2]}
            </div>
        </div>
      </div>
    );
  }
  
  export default Grid;
  