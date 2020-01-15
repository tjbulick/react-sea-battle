import React from 'react';
import Field from './components/Field';
import GameLog from './components/GameLog';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerField: [],
      enemyField: [],
      logs: ['Ожидание хода...'],
    };

    // первоначальное (пустое) состояние поля
    for (let i = 0; i < 10; i++) {
      this.state.enemyField.push([]);
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.state.enemyField[i].push({
          x: j,
          y: i,
          containsShip: false,
          shot: false,
          isShipVisible: false,
        });
      }
    }

    // расставляем корабли
    for (let i = 0; i < 4; i++) {
      this.state.enemyField[0][i].containsShip = true;
    }

    for (let i = 0; i < 3; i++) {
      this.state.enemyField[i+3][6].containsShip = true;
    }
    for (let i = 0; i < 3; i++) {
      this.state.enemyField[i+2][1].containsShip = true;
    }

    for (let i = 0; i < 2; i++) {
      this.state.enemyField[9][i].containsShip = true;
    }
    for (let i = 0; i < 2; i++) {
      this.state.enemyField[7][i+3].containsShip = true;
    }
    for (let i = 0; i < 2; i++) {
      this.state.enemyField[9][i+6].containsShip = true;
    }

    this.state.enemyField[4][3].containsShip = true;
    this.state.enemyField[2][9].containsShip = true;
    this.state.enemyField[5][9].containsShip = true;
    this.state.enemyField[9][9].containsShip = true;
  }

  handleClick(y, x) {
    if (this.state.enemyField[y][x].shot) {
      return;
    }

    this.setState((state) => {
      const newField = [...state.enemyField];
      newField[y][x].shot = true;
      newField[y][x].isShipVisible = true;

      const newLogs = [...state.logs];
      newLogs.push(`${this.state.enemyField[y][x].containsShip ? 'Попадание!' : 'Мимо!'}`);

      return {
        enemyField: newField,
        logs: newLogs,
      }
    })
  }

  render() {
    return (
      <div className="game">
        {/* <Field whose="player" fieldMap={this.state.playerField} /> */}
        <Field 
        whose="enemy" 
        fieldMap={this.state.enemyField} 
        onClick={(y, x) => this.handleClick(y, x)}
        />
        <GameLog logs={this.state.logs} />
      </div>
    );
  }
}

export default Game;
