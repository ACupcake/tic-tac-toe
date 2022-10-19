import './Style.css';

type IGrid = {
  grid: string[][];
  markGrid: (y: number, x: number) => void
}

function Grid({ grid, markGrid }:IGrid) {
  function Square(y: number, x:number) {
    return (
      <div key={String(y) + String(x)} className="square" onClick={() => markGrid(y, x)}>
        {grid[y][x]}
      </div>
    )
  }

  function GenerateRow(y:number) {
    let rowList = []
    
    for (let j = 0; j < 3; j++) {
      rowList.push(Square(y, j))
    }

    return (<div className="row">{rowList}</div>)
  }

  const GenerateGrid = () => {
    let squareList:any = []

    for (let i = 0; i < 3; i++) {
        squareList.push(GenerateRow(i));
    }

    return squareList;
  }


    return (
      <div className="grid">
        <GenerateGrid />
      </div>
    );
  }
  
  export default Grid;
  