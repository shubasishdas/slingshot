import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const Cell = ({ x, y, snake, foods }) => {
  const isSnake = snake.find(p => p[0] === x && p[1] == y);
  const isFood = foods.find(p => p[0] === x && p[1] == y);
  return <div style={{
    width: 20,
    height: 20,
    border: "1px dashed black",
    background: isSnake ? 'black' : (isFood ? 'red' : 'white')
  }} />;
}
const Row = ({ x, snake, columns, foods }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
      {Array(columns).fill().map((_, i) => <Cell x={x} y={i} snake={snake} foods={foods} />)}
    </div>
  );
}
const Grid = ({ rows, columns, snake, foods }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      {Array(rows).fill().map((_, i) => <Row columns={columns} x={i} snake={snake} foods={foods} />)}
    </div>
  )
}
const Direction = {
  TOP: [-1, 0],
  DOWN: [1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1]
}
const nextSnake = (snake, direction, foods, { rows, columns }) => {
  const head = [
    (snake[0][0] + direction[0] + rows) % rows,
    (snake[0][1] + direction[1] + columns) % columns
  ];
  const newSnake = [
    head,
    ...snake
  ];
  const hadFood = foods.find(p => p[0] === head[0] && p[1] === head[1])
  return hadFood ? newSnake : newSnake.slice(0, -1);
}
const App = () => {
  const rows = 20, columns = 30;
  const [snake, setSnake] = useState([
    [3, 2],
    [3, 3],
    [3, 4],
    [2, 4],
  ]);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (foods.length < 5) {
        while (true) {
          const x = Math.floor(Math.random() * rows);
          const y = Math.floor(Math.random() * columns);
          if (!snake.concat(foods).find(p => p[0] == x && p[1] == y)) {
            setFoods([...foods, [x, y]]);
            break;
          }
        }
      }
    }, 2000);
  }, [foods]);
  const [direction, setDirection] = useState(Direction.TOP);
  useEffect(() => {
    setTimeout(() => {
      const newSnake = nextSnake(snake, direction, foods, {rows, columns});
      console.log({ newSnake })
      setSnake(newSnake)
    }, 200);
  }, [snake]);
  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.key === 'ArrowUp') {
        setDirection(Direction.TOP);
      }
      if (e.key === 'ArrowDown') {
        setDirection(Direction.DOWN);
      }
      if (e.key === 'ArrowLeft') {
        setDirection(Direction.LEFT);
      }
      if (e.key === 'ArrowRight') {
        setDirection(Direction.RIGHT);
      }
    })
  }, []);
  useEffect(() => {
    const eaten = foods.find(food => snake.find(snakeErTukra => snakeErTukra[0] === food[0] && snakeErTukra[1] == food[1]));
    if (eaten) {
      setFoods(foods.filter(food => food[0] !== eaten[0] || food[1] !== eaten[1]));
    }
  }, [snake, foods]);
  return <Grid rows={rows} columns={columns} snake={snake} foods={foods} />;
}
export default App;