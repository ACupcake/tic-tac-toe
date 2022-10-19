import './Style.css';

type IHeader = {
  x: number;
  o: number;
  draw: number;
}

function Header({ x, o, draw }:IHeader) {

    function isWinner(player: string) {
      if (player === "x") {
        if (x > o && x > draw)
          return true;
      }
      if (player === "o") {
        if (o > x && o > draw)
          return true;
      }
      if (player === "draw") {
        if (draw > o && draw > x)
          return true;
      }
      return false;
    }  

    function chooseStyle(player:string) {

      if (isWinner(player)) {
        return { color: "#92ba92" }
      }
      return {}
    }

    return (
      <div className="header-points">
        <h1 className="points" style={chooseStyle("x")}>
          <div>X</div>
          {x}
        </h1>
        <h1 className="points" style={chooseStyle("draw")}>
          <div>Draw</div>
          {draw}
        </h1>
        <h1 className="points" style={chooseStyle("o")}>
          <div>O</div>
          {o}
        </h1>
      </div>
    );
  }
  
  export default Header;
  