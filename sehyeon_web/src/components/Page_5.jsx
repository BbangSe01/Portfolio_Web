import styled from "styled-components";
import { motion } from "framer-motion";
import mut_image from "../assets/images/멋멋.png";
import w_image from "../assets/images/white.jpg";
import home_button from "../assets/images/home.png";
import "./font.css";

const P5back = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #6adc90;
  overflow: auto;
`;

const P5title = styled.h2`
  color: white;
  font-size: 90px;
  padding-left: 70px;
  font-family: "Giants-Inline";
  @media (max-width: 1350px) {
    font-size: 70px;
  }
  @media (max-width: 1000px) {
    font-size: 50px;
    text-align: center;
    margin-left: -30px;
  }
`;

const P5box = styled.div`
  margin-top: -20px;
  display: grid;
  grid-template-areas:
    "pj1 pj2"
    "pj3 pj4";
  row-gap: 50px;
  @media (max-width: 1000px) {
    grid-template-areas:
      "pj1"
      "pj2"
      "pj3"
      "pj4";
    justify-items: center;
    row-gap: 35px;
  }
`;

const P5ex = styled(motion.div)`
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  font-family: "NEXON Lv1 Gothic OTF";
  @media (max-width: 1350px) {
    width: 250px;
    height: 170px;
  }
  @media (max-width: 1000px) {
    width: 200px;
    height: 100px;
  }
`;
const P5grid1 = styled(motion.div)`
  grid-area: pj1;
  display: flex;
  margin-left: 40px;
`;
const P5grid2 = styled(motion.div)`
  grid-area: pj2;
  display: flex;
  margin-left: 40px;
`;
const P5grid3 = styled(motion.div)`
  grid-area: pj3;
  display: flex;
  margin-left: 40px;
`;
const P5grid4 = styled(motion.div)`
  grid-area: pj4;
  display: flex;
  margin-left: 40px;
`;

const P5img = styled.img`
  width: 200px;
  height: 200px;
  background-color: black;
  @media (max-width: 1350px) {
    width: 200px;
    height: 170px;
  }
  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }
`;

const ExTitle = styled.h3`
  font-size: 24px;
  margin-top: 10px;
  padding-left: 10px;
  @media (max-width: 1350px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    margin-top: 4px;
    margin-bottom: 3px;
    font-size: 13px;
  }
`;

const Ex_p = styled.p`
  font-size: 15px;
  margin: 5px;
  padding-left: 10px;
  @media (max-width: 1350px) {
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    font-size: 10px;
    margin-bottom: 1px;
    padding-left: 5px;
  }
`;
const ALink = styled.a`
  display: inline-block;
  width: 30px;
  margin-left: 350px;
  margin-top: 30px;
  @media (max-width: 1350px) {
    margin-left: 210px;
    margin-top: 5px;
    width: 25px;
  }
  @media (max-width: 1000px) {
    margin-left: 175px;
    margin-top: -5px;
    width: 15px;
  }
`;
const Button_size = styled.img`
  width: 30px;
  height: 30px;
  display: block;
  @media (max-width: 1350px) {
    height: 25px;
    width: 25px;
  }
  @media (max-width: 1000px) {
    height: 15px;
    width: 15px;
  }
`;
export default function Page_5() {
  return (
    <P5back>
      <P5title>💻Projects</P5title>
      <P5box>
        <P5grid1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3 },
          }}
        >
          <P5img src={mut_image} alt="멋멋 로고"></P5img>
          <P5ex>
            <ExTitle>👔 프로젝트_멋멋</ExTitle>
            <Ex_p>✔️ 패션 멘토-멘티를 매칭해주는 앱 개발 프로젝트</Ex_p>
            <Ex_p>✔️ 트렌디한 마이페이지 구현 , 채팅기능 구현</Ex_p>
            <ALink
              href="https://www.notion.so/mjucodingclub/2845e8240a334dac9fafe526f544a939"
              target="_blank"
            >
              <Button_size src={home_button} alt="button"></Button_size>
            </ALink>
          </P5ex>
        </P5grid1>
        <P5grid2
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3 },
          }}
        >
          <P5img src={w_image} alt="빈 화면"></P5img>
          <P5ex>
            <ExTitle></ExTitle>
          </P5ex>
        </P5grid2>
        <P5grid3
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.6 },
          }}
        >
          <P5img src={w_image} alt="빈 화면"></P5img>
          <P5ex>
            <ExTitle></ExTitle>
          </P5ex>
        </P5grid3>
        <P5grid4
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.6 },
          }}
        >
          <P5img src={w_image} alt="빈 화면"></P5img>
          <P5ex>
            <ExTitle></ExTitle>
          </P5ex>
        </P5grid4>
      </P5box>
    </P5back>
  );
}
