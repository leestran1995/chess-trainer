import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";

const MultiChoiceBoardSelection = () => {
  const Chess = require("chess.js");
  const chess = new Chess();
  const moves = chess.moves();
  const moveToMake = moves[Math.floor(Math.random() * moves.length)];
  chess.move(moveToMake);

  return (
    <div className="chessBoard">
      <Chessboard
        position={chess.fen()}
        calcWidth={(screenWidth) => screenWidth.screenWidth / 5}
        allowDrag={() => false}
      />
      <input type="radio" name="board" onClick={() => {}} />
    </div>
  );
};

export default MultiChoiceBoardSelection;
