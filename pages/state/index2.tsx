// copy of https://codesandbox.io/s/agitated-wilson-fd89d?file=/src/App.js
import { useState, useEffect } from "react";

const set = (i: number, j: number, mut: any) => (matrix: any) =>
  matrix.map((row: any, ii: any) =>
    ii === i ? row.map((col: any, jj: any) => (jj === j ? mut(col) : col)) : row
  );

export default function App() {
  const [a, setA] = useState([
    [1, 2],
    [0, 4],
  ]);

  const port = () => {
    // const newArray = a;
    // a[1][1] = 3;
    setA((p) => {
      const newArray = [
        [
          p[0][0] * p[0][0] + p[0][1] * p[1][0],
          p[0][0] * p[0][1] + p[0][1] * p[1][1],
        ],
        [
          p[1][0] * p[0][0] + p[1][1] * p[1][0],
          p[1][0] * p[0][1] + p[1][1] * p[1][1],
        ],
      ];
      const newArray2 = [
        [0, 0],
        [0, 1],
      ];
      return newArray;
    });
  };

  useEffect(() => {
    const eff = setInterval(() => {
      setA(set(1, 0, (x: number) => x + 100));
    }, 1000);
    return () => {
      clearInterval(eff);
    };
  }, []);

  return (
    <div className="App">
      <div onClick={port}>
        <div>
          {a[0][0]}, {a[0][1]}
        </div>
        <div>
          {a[1][0]}, {a[1][1]}
        </div>
      </div>
    </div>
  );
}
