'use client'

import { useState, useEffect, useMemo } from 'react'

type Player = 'X' | 'O' | null
type Board = Player[]
type AIType = 'minimax' | 'alphabeta' | 'random' | 'utility'

interface GameState {
  board: Board
  currentPlayer: Player
  winner: Player | 'draw' | null
  gameOver: boolean
}

interface AI {
  getNextMove(board: Board): number
}

// Minimax algorithm implementation
class MinimaxAI implements AI {
  private playerMark: Player = 'O'
  private opponentMark: Player = 'X'

  getNextMove(board: Board): number {
    const bestMove = this.minimaxSearch(board)
    return bestMove
  }

  private minimaxSearch(board: Board): number {
    const { move } = this.maxValue([...board])
    return move!
  }

  private maxValue(state: Board): { value: number; move: number | null } {
    const terminal = this.isTerminal(state)
    if (terminal.isTerminal) {
      return { value: this.utility(state), move: null }
    }

    let v = -Infinity
    let bestMove: number | null = null

    const openSpaces = this.getOpenSpaces(state)
    for (const action of openSpaces) {
      const newState = this.result(state, action, this.playerMark)
      const { value: v2 } = this.minValue(newState)
      if (v2 > v) {
        v = v2
        bestMove = action
      }
    }

    return { value: v, move: bestMove }
  }

  private minValue(state: Board): { value: number; move: number | null } {
    const terminal = this.isTerminal(state)
    if (terminal.isTerminal) {
      return { value: this.utility(state), move: null }
    }

    let v = Infinity
    let bestMove: number | null = null

    const openSpaces = this.getOpenSpaces(state)
    for (const action of openSpaces) {
      const newState = this.result(state, action, this.opponentMark)
      const { value: v2 } = this.maxValue(newState)
      if (v2 < v) {
        v = v2
        bestMove = action
      }
    }

    return { value: v, move: bestMove }
  }

  private result(state: Board, action: number, mark: Player): Board {
    const newState = [...state]
    newState[action] = mark
    return newState
  }

  private utility(state: Board): number {
    if (this.hasWin(state, this.playerMark)) {
      return 1
    } else if (this.hasWin(state, this.opponentMark)) {
      return -1
    } else {
      return 0
    }
  }

  private isTerminal(state: Board): { isTerminal: boolean; winner: Player | 'draw' | null } {
    if (this.hasWin(state, 'X')) {
      return { isTerminal: true, winner: 'X' }
    }
    if (this.hasWin(state, 'O')) {
      return { isTerminal: true, winner: 'O' }
    }
    if (this.isFull(state)) {
      return { isTerminal: true, winner: 'draw' }
    }
    return { isTerminal: false, winner: null }
  }

  private hasWin(board: Board, player: Player): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]

    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    )
  }

  private isFull(board: Board): boolean {
    return board.every(cell => cell !== null)
  }

  private getOpenSpaces(board: Board): number[] {
    return board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index): index is number => index !== null)
  }
}

// Alpha-Beta Pruning algorithm implementation
class AlphaBetaAI implements AI {
  private playerMark: Player = 'O'
  private opponentMark: Player = 'X'

  getNextMove(board: Board): number {
    const bestMove = this.alphaBetaDecision(board)
    return bestMove
  }

  private alphaBetaDecision(board: Board): number {
    const { move } = this.maxValue([...board], -Infinity, Infinity)
    return move!
  }

  private maxValue(state: Board, alpha: number, beta: number): { value: number; move: number | null } {
    const terminal = this.isTerminal(state)
    if (terminal.isTerminal) {
      return { value: this.utility(state), move: null }
    }

    let v = -Infinity
    let bestMove: number | null = null

    const openSpaces = this.getOpenSpaces(state)
    for (const action of openSpaces) {
      const newState = this.result(state, action, this.playerMark)
      const { value: v2 } = this.minValue(newState, alpha, beta)
      if (v2 > v) {
        v = v2
        bestMove = action
        alpha = Math.max(alpha, v)
      }
      if (v >= beta) {
        return { value: v, move: bestMove }
      }
    }

    return { value: v, move: bestMove }
  }

  private minValue(state: Board, alpha: number, beta: number): { value: number; move: number | null } {
    const terminal = this.isTerminal(state)
    if (terminal.isTerminal) {
      return { value: this.utility(state), move: null }
    }

    let v = Infinity
    let bestMove: number | null = null

    const openSpaces = this.getOpenSpaces(state)
    for (const action of openSpaces) {
      const newState = this.result(state, action, this.opponentMark)
      const { value: v2 } = this.maxValue(newState, alpha, beta)
      if (v2 < v) {
        v = v2
        bestMove = action
        beta = Math.min(beta, v)
      }
      if (v <= alpha) {
        return { value: v, move: bestMove }
      }
    }

    return { value: v, move: bestMove }
  }

  private result(state: Board, action: number, mark: Player): Board {
    const newState = [...state]
    newState[action] = mark
    return newState
  }

  private utility(state: Board): number {
    if (this.hasWin(state, this.playerMark)) {
      return 1
    } else if (this.hasWin(state, this.opponentMark)) {
      return -1
    } else {
      return 0
    }
  }

  private isTerminal(state: Board): { isTerminal: boolean; winner: Player | 'draw' | null } {
    if (this.hasWin(state, 'X')) {
      return { isTerminal: true, winner: 'X' }
    }
    if (this.hasWin(state, 'O')) {
      return { isTerminal: true, winner: 'O' }
    }
    if (this.isFull(state)) {
      return { isTerminal: true, winner: 'draw' }
    }
    return { isTerminal: false, winner: null }
  }

  private hasWin(board: Board, player: Player): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]

    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    )
  }

  private isFull(board: Board): boolean {
    return board.every(cell => cell !== null)
  }

  private getOpenSpaces(board: Board): number[] {
    return board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index): index is number => index !== null)
  }
}

// Random player implementation
class RandomAI implements AI {
  getNextMove(board: Board): number {
    const openSpaces = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index): index is number => index !== null)
    
    if (openSpaces.length === 0) {
      return 0
    }
    
    const randomIndex = Math.floor(Math.random() * openSpaces.length)
    return openSpaces[randomIndex]
  }
}

// Utility-based player implementation
class UtilityAI implements AI {
  private playerMark: Player = 'O'
  private opponentMark: Player = 'X'
  private lines: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ]

  getNextMove(board: Board): number {
    const possibleMoves = this.getOpenSpaces(board)

    // First, check if AI can win (decisive move)
    for (const move of possibleMoves) {
      const testBoard = this.result(board, move, this.playerMark)
      if (this.hasWin(testBoard, this.playerMark)) {
        return move
      }
    }

    // Second, check if opponent can win and block it
    for (const move of possibleMoves) {
      const testBoard = this.result(board, move, this.opponentMark)
      if (this.hasWin(testBoard, this.opponentMark)) {
        return move
      }
    }

    // Otherwise, evaluate all moves using utility function
    const utilities: number[] = []
    for (const move of possibleMoves) {
      const testBoard = this.result(board, move, this.playerMark)
      utilities.push(this.getUtility(testBoard))
    }

    const maxUtility = Math.max(...utilities)
    const bestMoveIndex = utilities.indexOf(maxUtility)
    return possibleMoves[bestMoveIndex]
  }

  private getLineUtility(board: Board, line: number[]): number {
    let o = 0
    let x = 0
    let utility = 0

    for (const index of line) {
      if (board[index] === 'O') {
        o += 1
      } else if (board[index] === 'X') {
        x += 1
      }
    }

    if (o === 2) {
      utility += 3
    } else if (o === 1) {
      utility += 1
    }

    if (x === 2) {
      utility -= 3
    } else if (x === 1) {
      utility -= 1
    }

    return utility
  }

  private getUtility(board: Board): number {
    let utility = 0

    for (const line of this.lines) {
      utility += this.getLineUtility(board, line)
    }

    return utility
  }

  private result(state: Board, action: number, mark: Player): Board {
    const newState = [...state]
    newState[action] = mark
    return newState
  }

  private hasWin(board: Board, player: Player): boolean {
    return this.lines.some(pattern =>
      pattern.every(index => board[index] === player)
    )
  }

  private getOpenSpaces(board: Board): number[] {
    return board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index): index is number => index !== null)
  }
}

const checkWinner = (board: Board): Player | 'draw' | null => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }

    if (board.every(cell => cell !== null)) {
      return 'draw'
    }

    return null
}

export default function TicTacToe() {
  const [aiType, setAiType] = useState<AIType>('minimax')
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null) as Board,
    currentPlayer: 'X',
    winner: null,
    gameOver: false
  })

  const ai = useMemo(() => {
    switch (aiType) {
      case 'minimax':
        return new MinimaxAI()
      case 'alphabeta':
        return new AlphaBetaAI()
      case 'random':
        return new RandomAI()
      case 'utility':
        return new UtilityAI()
      default:
        return new MinimaxAI()
    }
  }, [aiType])

  const getAIDescription = (type: AIType): string => {
    switch (type) {
      case 'minimax':
        return 'Minimax Algorithm'
      case 'alphabeta':
        return 'Alpha-Beta Pruning'
      case 'random':
        return 'Random Player'
      case 'utility':
        return 'Utility-Based Player'
      default:
        return 'Minimax Algorithm'
    }
  }

  const getAITip = (type: AIType): string => {
    switch (type) {
      case 'minimax':
        return 'The AI uses optimal strategy - you can\'t beat it, but you can tie!'
      case 'alphabeta':
        return 'Same optimal strategy as Minimax, but faster with pruning!'
      case 'random':
        return 'The AI plays randomly - you have a good chance to win!'
      case 'utility':
        return 'Uses heuristic evaluation - good strategy but not perfect!'
      default:
        return ''
    }
  }

  const handleCellClick = (index: number) => {
    if (gameState.gameOver || gameState.board[index] || gameState.currentPlayer !== 'X') {
      return
    }

    const newBoard = [...gameState.board]
    newBoard[index] = 'X'

    const winner = checkWinner(newBoard)
    const gameOver = winner !== null || newBoard.every(cell => cell !== null)

    setGameState({
      board: newBoard,
      currentPlayer: 'O',
      winner: winner as Player | 'draw' | null,
      gameOver
    })
  }

  useEffect(() => {
    if (gameState.currentPlayer === 'O' && !gameState.gameOver) {
      // AI's turn - add a small delay for better UX
      const timer = setTimeout(() => {
        setGameState(prevState => {
          const aiMove = ai.getNextMove(prevState.board)
          const newBoard = [...prevState.board]
          newBoard[aiMove] = 'O'

          const winner = checkWinner(newBoard)
          const gameOver = winner !== null || newBoard.every(cell => cell !== null)

          return {
            board: newBoard,
            currentPlayer: 'X',
            winner: winner as Player | 'draw' | null,
            gameOver
          }
        })
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [gameState.currentPlayer, gameState.gameOver, ai])

  const resetGame = () => {
    setGameState({
      board: Array(9).fill(null) as Board,
      currentPlayer: 'X',
      winner: null,
      gameOver: false
    })
  }

  const handleAIChange = (newAiType: AIType) => {
    setAiType(newAiType)
    resetGame()
  }

  const getStatusMessage = () => {
    if (gameState.winner === 'X') {
      return 'You Win! 🎉'
    } else if (gameState.winner === 'O') {
      return 'AI Wins! 🤖'
    } else if (gameState.winner === 'draw') {
      return "It's a Draw! 🤝"
    } else if (gameState.currentPlayer === 'O') {
      return 'AI is thinking...'
    } else {
      return 'Your turn!'
    }
  }

  return (
    <section id="tictactoe" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Play Tic-Tac-Toe</h2>
        <div className="max-w-md mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose AI Opponent:
                </label>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => handleAIChange('minimax')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      aiType === 'minimax'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Minimax
                  </button>
                  <button
                    onClick={() => handleAIChange('alphabeta')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      aiType === 'alphabeta'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Alpha-Beta
                  </button>
                  <button
                    onClick={() => handleAIChange('utility')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      aiType === 'utility'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Utility
                  </button>
                  <button
                    onClick={() => handleAIChange('random')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      aiType === 'random'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Random
                  </button>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {getStatusMessage()}
              </p>
              <p className="text-sm text-gray-500">
                You are X, AI is O ({getAIDescription(aiType)})
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {gameState.board.map((cell, index) => (
                <button
                  key={index}
                  onClick={() => handleCellClick(index)}
                  disabled={gameState.gameOver || cell !== null || gameState.currentPlayer !== 'X'}
                  className={`
                    aspect-square text-4xl font-bold rounded-lg transition-all
                    ${cell === 'X' 
                      ? 'bg-blue-100 text-blue-600' 
                      : cell === 'O' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-white hover:bg-gray-100 border-2 border-gray-200'
                    }
                    ${gameState.gameOver || cell !== null || gameState.currentPlayer !== 'X'
                      ? 'cursor-not-allowed opacity-60'
                      : 'cursor-pointer hover:scale-105'
                    }
                  `}
                >
                  {cell || ''}
                </button>
              ))}
            </div>

            <button
              onClick={resetGame}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              New Game
            </button>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p className="mb-2">Powered by {getAIDescription(aiType)}</p>
              <p className="text-xs text-gray-500">
                {getAITip(aiType)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

