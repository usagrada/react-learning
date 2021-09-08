import { memo, useCallback, useEffect, useState, VFC } from "react";

const StateLearning: VFC = () => {
  const [a, setA] = useState([
    [1, 2],
    [0, 4],
  ]);

  // これだとバグる
  // useEffect(() => {
  //   const eff = setInterval(() => {
  //     a[1][0] += 100;
  //     console.log('add 100')
  //     setA([...a]);
  //   }, 1000);

  // }, [a]);

  // // これだとバグる
  // useEffect(() => {
  //   const eff = setInterval(() => {
  //     a[1][0] += 100;
  //     console.log('add 100')
  //     setA([...a]);
  //   }, 1000);
  //   return () => clearInterval(eff);
  // }, []);

  // これならバグらない
  // useEffect(() => {
  //   const eff = setInterval(() => {
  //     a[1][0] += 100;
  //     console.log('add 100')
  //     setA([...a]);
  //   }, 1000);
  //   return () => clearInterval(eff);
  // }, [a]);

  // これならバグらない2
  // useEffect(() => {
  //   const eff = setTimeout(() => {
  //     a[1][0] += 100;
  //     console.log('add 100')
  //     setA([...a]);
  //   }, 1000);
  //   return () => clearInterval(eff);
  // }, [a]);

  // 微妙にバグる 200ずつ足される？？？？
  // useEffect(() => {
  //   const eff = setTimeout(() => {
  //     setA((prev) => {
  //       prev[1][0] += 100;
  //       console.log("add 100");
  //       console.info(prev);
  //       return [...prev];
  //     });
  //   }, 1000);
  //   return () => clearInterval(eff);
  // }, [a]);

  useEffect(() => {
    const eff = setInterval(() => {
      setA((prev) => {
        // const newA = prev.map((e) => e) // これだとバグる
        // const newA = prev.map((e) => e.map(el => el)) // うまくいく
        const newA = JSON.parse(JSON.stringify(prev)); // 最適解
        // const newA = [...prev];　// バグる
        newA[1][0] += 100;
        return [...newA];
      });
    }, 1000);

    return () => {
      clearInterval(eff);
    };
  }, []);

  const a3 = () => {
    // console.log("a3");
    return a[1][0];
  };

  const port = useCallback(() => {
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
      return newArray2;
    });
  }, []);
  const [b, setB] = useState(1);
  return (
    <div style={{ margin: "10%" }}>
      <h1>State Learning</h1>
      <div>
        <NewMemoStateArea a={a} b={b} a3={a3} />
        {/* <StateArea a={a} /> */}
        <div onClick={port}>Click</div>
        <div onClick={() => console.log("click2")}>click2</div>
        <div
          onClick={() => {
            setB(b + 1);
          }}
        >
          {b}
        </div>
      </div>
    </div>
  );
};

const StateArea: VFC<{ a: number[][]; b: number }> = (props) => {
  // console.log("state area");
  const a = props.a;
  function a1(a: any) {
    return a[0][0];
  }

  function a2(a: any) {
    return a[0][1];
  }

  return (
    <div>
      <div>
        {a1(a)}, {a2(a)}
      </div>
      <div>
        {a[1][0]}, {a[1][1]}
      </div>
      <div>b:{props.b}</div>
    </div>
  );
};

const MemoStateArea = memo(StateArea);

type Props = { a: number[][]; b: number; a3: Function };
// eslint-disable-next-line react/display-name
const NewMemoStateArea = memo((props: Props) => {
  console.log("state area");
  const a = props.a;
  const a1 = () => {
    console.log("a1");
    return a[0][0];
  };
  function a2() {
    console.log("a2");
    return a[0][1];
  }

  function cli() {
    console.log(a1() == 0 || 2 || "style" || 3);
  }

  return (
    <div>
      <div onClick={cli}>
        {a1()}, {a2()}
      </div>
      <div>
        {a[1][0]}, {a[1][1]}
      </div>
      <div>b:{props.b}</div>
      <div>a3: {props.a3()}</div>
    </div>
  );
});

export default StateLearning;
