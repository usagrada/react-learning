import styled from "@emotion/styled";
import { Drawer } from "@material-ui/core";
import { createRef, useCallback, useRef } from "react";

const Main = styled.main`
  display: grid;
  grid-template-rows: 100px 50px;
  grid-template-columns: 150px 1fr;

  aside {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    &.open {
      background-color: darkcyan !important;
    }

    &.close {
      background-color: darkkhaki;
    }
  }
  div {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }
`;
const Grid = () => {
  const ref = useRef<HTMLDivElement>(null);

  const changeSidebar = useCallback(() => {
    console.log(ref.current);
    ref.current?.classList.toggle("open");
    ref.current?.classList.toggle("close");
  }, []);

  return (
    <Main>
      <div className={"open"}>
        main content
        <button onClick={changeSidebar}>click</button>
      </div>
      <aside ref={ref} className={"style"}>
        sidebar
      </aside>
    </Main>
  );
};

export default Grid;
