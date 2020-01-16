// компонент, который создает и экспортирует стандартный набор кораблей
// направление кораблю задается для того, чтобы можно было определить, в какую сторону его рисовать из стартовой точки
// Размещать корабли можно либо вертикально, либо горизонтально, были выбраны направления вправо(right) и вниз(down), 
// поскольку они совпадают с положительными направлениеми координатных осей

class Ship {
    constructor(size, startSquare, direction) {
        this.size = size;
        this.startSquare = startSquare;
        this.direction = direction;
        this.id = Ship.incrementId();
        this.hitpoints = this.size;
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        } else {
            this.latestId++;
        }
        return this.latestId
    }
}

const set = [];
set.push(new Ship(4, { y: 1, x: 1}, 'right'));
set.push(new Ship(3, { y: 3, x: 2}, 'down'));
set.push(new Ship(3, { y: 4, x: 7}, 'down'));
set.push(new Ship(2, { y: 8, x: 4}, 'right'));
set.push(new Ship(2, { y: 10, x: 1}, 'right'));
set.push(new Ship(2, { y: 10, x: 7}, 'right'));
set.push(new Ship(1, { y: 3, x: 10}, 'right'));
set.push(new Ship(1, { y: 5, x: 4}, 'right'));
set.push(new Ship(1, { y: 6, x: 10}, 'right'));
set.push(new Ship(1, { y: 10, x: 10}, 'right'));

export default set;
