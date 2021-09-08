import { memo, useCallback, useEffect, useRef, useState, VFC } from "react";

const StateClassLearning: VFC = () => {
  const [a, setA] = useState<HasNumber | null>(null);

  useEffect(() => {
    console.log("a is initialize");
    setA(new HasNumber(1));
  }, []);

  const click = () => {
    console.log("click");
    setA((prev) => {
      if (prev) {
        return prev;
      }
      return null;
    });
  };

  const click2 = () => {
    console.log("click2");
    setA((prev) => {
      if (prev) {
        prev.num += 1;
        return prev;
        // const b = JSON.parse(JSON.stringify(prev));
        // b.num = prev.num + 1;
        //  return b;
      }
      return null;
    });
  };
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("a is change");
  }, [a, a?.num]);

  const classRef = useRef<HasNumber>();

  useEffect(() => {
    classRef.current = new HasNumber(1);
  }, []);

  const numb = () => {
    if (classRef.current) {
      // DOMの更新はされないが値の更新はされている
      classRef.current.num += 1;
      console.log("effected")
    }
  };

  return (
    <div style={{ margin: "10%" }}>
      <h1 onClick={click}>State Learning</h1>
      <div>{a?.num}</div>
      <button onClick={click2}>click2</button>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        cnt: {cnt}
      </button>
      <div>
        <div>ref example</div>
        <div>{classRef.current?.num}</div>
        <div>
          <button onClick={numb}>+</button>
        </div>
      </div>
    </div>
  );
};

class HasNumber {
  public num: number;
  constructor(num: number) {
    this.num = num;
  }
}

export default StateClassLearning;
