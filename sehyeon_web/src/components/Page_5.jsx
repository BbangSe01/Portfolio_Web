import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import mut_image from "../assets/images/멋멋.png";
import w_image from "../assets/images/white.jpg";
import home_button from "../assets/images/home.png";
const P5back = styled.div`
  margin-top: -75px;
  width: 100%;
  height: 100%;
  background-color: #6adc90;
`;

const P5title = styled.h2`
  color: white;
  font-size: 90px;
  padding-top: 30px;
  padding-left: 70px;
`;

const P5box = styled(motion.div)`
  margin-top: -20px;
  display: grid;
  grid-template-areas:
    "pj1 pj2"
    "pj3 pj4";
  row-gap: 50px;
`;

const P5ex = styled.div`
  opacity: 0;
  width: 500px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  background-color: white;
  color: black;
`;
const P5grid1 = styled.div`
  grid-area: pj1;
  display: flex;
  margin-left: 40px;
  &:hover > ${P5ex} {
    opacity: 1;
  }
`;
const P5grid2 = styled.div`
  grid-area: pj2;
  display: flex;
  margin-left: 40px;
  //   &:hover > ${P5ex} {
  //     opacity: 1;
  //   }
`;
const P5grid3 = styled.div`
  grid-area: pj3;
  display: flex;
  margin-left: 40px;
  //   &:hover > ${P5ex} {
  //     opacity: 1;
  //   }
`;
const P5grid4 = styled.div`
  grid-area: pj4;
  display: flex;
  margin-left: 40px;
  //   &:hover > ${P5ex} {
  //     opacity: 1;
  //   }
`;

const P5img = styled.img`
  width: 200px;
  height: 200px;
  background-color: black;
`;

const Ex_title = styled.h3`
  font-size: 24px;
  margin-top: 10px;
  padding-left: 10px;
`;

const Ex_p = styled.p`
  font-size: 18px;
  margin: 5px;
  padding-left: 10px;
`;

const Button_size = styled.img`
  margin-left: 450px;
  margin-bottom: -30px;
  width: 30px;
  height: 30px;
`;
export default function Page_5() {
  return (
    <P5back>
      <P5title>💻Projects</P5title>
      <P5box
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 1 },
        }}
      >
        <P5grid1>
          <P5img src={mut_image} alt="멋멋 로고"></P5img>
          <P5ex>
            <Ex_title>👔 프로젝트_멋멋</Ex_title>
            <Ex_p>✔️ 패션 멘토-멘티를 매칭해주는 앱 개발 프로젝트</Ex_p>
            <Ex_p>✔️ 트렌디한 마이페이지 구현 , 채팅기능 구현</Ex_p>
            <a
              href="https://www.notion.so/mjucodingclub/2845e8240a334dac9fafe526f544a939"
              target="_blank>"
            >
              <Button_size src={home_button} alt="button"></Button_size>
            </a>
          </P5ex>
        </P5grid1>
        <P5grid2>
          <P5img src={w_image} alt="빈 화면"></P5img>
          <P5ex>
            <Ex_title></Ex_title>
          </P5ex>
        </P5grid2>
        <P5grid3>
          <P5img src={w_image} alt="빈 화면"></P5img>
          <P5ex>
            <Ex_title></Ex_title>
          </P5ex>
        </P5grid3>
        <P5grid4>
          <P5img src={w_image} alt="빈 화면"></P5img>
          <P5ex>
            <Ex_title></Ex_title>
          </P5ex>
        </P5grid4>
      </P5box>
    </P5back>
  );
}
