import './Style.css';

type IHeader = {
  title: string;
  player1: number;
  player2: number;
}

function Header({ title, player1, player2 }:IHeader) {
    return (
      <div className="header">
        <h1 className="points player1">
          {player1}
        </h1>
        <h1 className="header-title">
          {title}
        </h1>
        <h1 className="points player2">
          {player2}
        </h1>
      </div>
    );
  }
  
  export default Header;
  