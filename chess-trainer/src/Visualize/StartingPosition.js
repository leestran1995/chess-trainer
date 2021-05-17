import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";

const StartingPosition = () => {
  const Chess = require("chess.js");
  const chess = new Chess();
  for (var i = 0; i < 8; i++) {
    const moves = chess.moves();
    const moveToMake = moves[Math.floor(Math.random() * moves.length)];
    chess.move(moveToMake);
  }
  return (
    <div className="startingPositionBoard">
      <Chessboard
        position={chess.fen()}
        calcWidth={(screenWidth) => screenWidth.screenWidth / 4}
      />
    </div>
  );
};

export default StartingPosition;
