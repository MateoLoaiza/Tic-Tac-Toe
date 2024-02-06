import { WINNER_COMBOS } from '../components/constans'

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheck[a] &&
      boardToCheck[b] === boardToCheck[a] &&
      boardToCheck[c] === boardToCheck[a]
    ) {
      return boardToCheck[a]
    }
  }

  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
