import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Keyframes 정의
const animate1 = keyframes`
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
`;
const animate2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// styled-components를 사용하여 스타일 정의
const BackImage = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  font-size: 18px;
  padding: 18px;
  color: white;
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.div`
  opacity: 0;
  position: absolute;
  top: 200px;
  left: 33%;
  font-family: sans-serif;
  letter-spacing: 1px;
  word-spacing: 2px;
  color: #fff;
  animation: ${animate2} 3s linear forwards;
`;

const H1 = styled.h1`
  font-size: 70px;
  font-weight: 888;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  margin-top: -30px;
  padding-left: 150px;
  font-size: 20px;
  font-weight: 888;
  text-transform: uppercase;
`;

// Bubble 스타일 정의 (픽셀 값으로 변경)
const Bubble = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  position: absolute;
  animation: ${animate1} 10s linear infinite;
`;

const P1_a = styled.a`
  text-decoration-line: none;
  color: white;
`;
const Page1 = () => {
  return (
    <BackImage>
      <Wrapper>
        <Nav>
          <P1_a href="#sectionTwo">
            <li>About me</li>
          </P1_a>
          <P1_a href="#sectionThree">
            <li>Skills</li>
          </P1_a>
          <P1_a href="#sectionFour">
            <li>Archiving</li>
          </P1_a>
          <P1_a href="#sectionFive">
            <li>Projects</li>
          </P1_a>
        </Nav>
        <hr />
        <Title>
          <H1>Bang SeHyeon</H1>
          <H2>Frontend Developer</H2>
        </Title>
        {/* Bubble 요소들 */}
        <Bubble
          style={{ top: "500px", left: "10%", animationDuration: "8s" }}
        />
        <Bubble
          style={{ top: "350px", left: "20%", animationDuration: "10s" }}
        />
        <Bubble
          style={{ top: "300px", left: "25%", animationDuration: "3s" }}
        />
        <Bubble
          style={{ top: "600px", left: "40%", animationDuration: "7s" }}
        />
        <Bubble
          style={{ top: "620px", left: "50%", animationDuration: "9s" }}
        />
        <Bubble
          style={{ top: "650px", left: "60%", animationDuration: "5s" }}
        />
        <Bubble
          style={{ top: "390px", left: "73%", animationDuration: "8s" }}
        />
        <Bubble
          style={{ top: "530px", left: "83%", animationDuration: "10s" }}
        />
        <Bubble
          style={{ top: "570px", left: "90%", animationDuration: "6s" }}
        />
        {/* <Bubble
          style={{ top: "200px", left: "20%", animationDuration: "10s" }}
        />
        <Bubble
          style={{ top: "200px", left: "90%", animationDuration: "9s" }}
        />
        <Bubble
          style={{ top: "200px", left: "70%", animationDuration: "7s" }}
        /> */}
      </Wrapper>
    </BackImage>
  );
};

export default Page1;
