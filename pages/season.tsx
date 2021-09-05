import styled from "@emotion/styled";
import { useEffect, useState, VFC } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setAnimation } from "~/src/animation/season";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import springImg from "/public/spring.jpg";

const SeasonPage: VFC = () => {
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const theme = useTheme();
  const [bgColor, _setBgColor] = useState(theme.colors.primary.main);

  return (
    <Main id="main" bgColor={bgColor}>
      <TopSection>
        <h2>Season Page</h2>
      </TopSection>
      <SpringSection id="spring">
        <h2 className="title">Spring Section</h2>
        <div className="side">
          <Image src={springImg} alt="spring img" />
        </div>
        <div className="description">
          Spring is &apos;Haru&apos; in Japanese.
        </div>
      </SpringSection>
      <SummerSection id="summer">
        <h2>Summer Section</h2>
        <div>Summer is &apos;Natsu&apos; in Japanese.</div>
      </SummerSection>
      <AutumnSection id="autumn">
        <h2>Autumn Section</h2>
        <div>Autumn is &apos;Aki&apos; in Japanese.</div>
      </AutumnSection>
      <WinterSection id="winter">
        <h2>Winter Section</h2>
        <div>Winter is &apos;Fuyu&apos; in Japanese.</div>
      </WinterSection>
    </Main>
  );
};

interface MainThemeProps {
  bgColor: string;
}
/* background-image: ${props => props.bgColor || props.theme.colors.primary.main}; */
const Main = styled.main<MainThemeProps>`
  padding: 0px;
`;

const TopSection = styled.section`
  padding: 10px 10%;
  height: 100vh;
`;

const SpringSection = styled.section`
  padding: 10px 10%;
  /* background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%); */
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px 200px 1fr;
  grid-template-columns: 200px 1fr;
  
  h2 {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }

  .side {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    padding: 20px;
  }

  .description {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    padding: 20px;
  }
`;

const SummerSection = styled.section`
  padding: 10px 10%;
  /* background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%); */
  min-height: 100vh;
`;

const AutumnSection = styled.section`
  padding: 10px 10%;
  /* background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%); */
  min-height: 100vh;
`;

const WinterSection = styled.section`
  padding: 10px 10%;
  /* background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%); */
  min-height: 100vh;
`;

export default SeasonPage;
