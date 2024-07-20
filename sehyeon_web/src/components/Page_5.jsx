import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import mut_image from "../assets/images/멋멋.png";
import w_image from "../assets/images/white.jpg";
import home_button from "../assets/images/home.png";
import "./font.css";

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
  font-family: "Giants-Inline";
`;

const P5box = styled.div`
  margin-top: -20px;
  display: grid;
  grid-template-areas:
    "pj1 pj2"
    "pj3 pj4";
  row-gap: 50px;
`;

const P5ex = styled(motion.div)`
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  font-family: "NEXON Lv1 Gothic OTF";
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
`;

const Ex_title = styled.h3`
  font-size: 24px;
  margin-top: 10px;
  padding-left: 10px;
`;

const Ex_p = styled.p`
  font-size: 15px;
  margin: 5px;
  padding-left: 10px;
`;
const A_link = styled.a`
  display: inline-block;
  width: 30px;
  margin-left: 350px;
  margin-top: 30px;
`;
const Button_size = styled.img`
  width: 30px;
  height: 30px;
  display: block;
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
            <Ex_title>👔 프로젝트_멋멋</Ex_title>
            <Ex_p>✔️ 패션 멘토-멘티를 매칭해주는 앱 개발 프로젝트</Ex_p>
            <Ex_p>✔️ 트렌디한 마이페이지 구현 , 채팅기능 구현</Ex_p>
            <A_link
              href="https://www.notion.so/mjucodingclub/2845e8240a334dac9fafe526f544a939"
              target="_blank"
            >
              <Button_size src={home_button} alt="button"></Button_size>
            </A_link>
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
            <Ex_title></Ex_title>
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
            <Ex_title></Ex_title>
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
            <Ex_title></Ex_title>
          </P5ex>
        </P5grid4>
      </P5box>
    </P5back>
  );
}
