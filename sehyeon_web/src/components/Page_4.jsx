import styled from "styled-components";
import { motion } from "framer-motion";
import arc_image1 from "../assets/images/github.png";
import arc_image2 from "../assets/images/velog.png";
import "./font.css";

const P4back = styled.div`
  margin-top: -75px;
  background-color: #9e72ca;
  height: 100%;
  @media (max-width: 1150px) {
    margin-top: -58px;
  }
  @media (max-width: 900px) {
    margin-top: -40px;
  }
  @media (max-width: 650px) {
    margin-top: -33px;
  }
`;

const P4title = styled.h2`
  color: #95cdee;
  font-size: 90px;
  text-align: center;
  padding-top: 40px;
  font-family: "NEXON Lv1 Gothic OTF";
  @media (max-width: 1150px) {
    font-size: 70px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
    padding-top: 90px;
  }
  @media (max-width: 650px) {
    font-size: 40px;
    padding-top: 150px;
  }
`;

const P4box = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const P4link = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #95cdee;
  width: 450px;
  height: 350px;
  border: 2px solid white;
  @media (max-width: 1150px) {
    width: 400px;
    height: 300px;
  }
  @media (max-width: 900px) {
    width: 300px;
    height: 200px;
  }
  @media (max-width: 650px) {
    width: 230px;
    height: 150px;
  }
`;

const P4ex = styled.ul`
  color: black;
`;

const EachEx = styled.li`
  margin: 15px;
  text-align: left;
  margin-left: 60px;
  list-style-type: none;
  font-family: "NEXON Lv1 Gothic OTF";
  @media (max-width: 1150px) {
    font-size: 15px;
    margin: 10px;
    margin-left: 40px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    margin: 5px;
    margin-left: 35px;
  }
  @media (max-width: 900px) {
    font-size: 10px;
    margin: 5px;
    margin-left: 35px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    margin: 2px;
    margin-left: 0px;
  }
`;

const EachEx2 = styled.li`
  margin: 15px;
  text-align: left;
  margin-left: 80px;
  list-style-type: none;
  font-family: "NEXON Lv1 Gothic OTF";
  @media (max-width: 1150px) {
    font-size: 15px;
    margin: 10px;
    margin-left: 60px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    margin: 5px;
    margin-left: 30px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    margin: 2px;
    margin-left: 10px;
  }
`;
const ArcImage = styled.img`
  width: 100%;
  height: 80%;
  @media (max-width: 900px) {
    height: 70%;
  }
  @media (max-width: 650px) {
    height: 60%;
  }
`;

const Linktitle = styled.h2`
  font-weight: bold;
  margin-top: -30px;
  text-align: center;
  margin-bottom: -10px;
  font-family: "Cafe24ClassicType-Regular";
  @media (max-width: 1150px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 17px;
    margin-top: -40px;
    margin-bottom: -15px;
  }
  @media (max-width: 650px) {
    font-size: 15px;
    margin-top: -37px;
    margin-bottom: -15px;
  }
`;

export default function Page_4() {
  return (
    <P4back>
      <P4title>Archiving</P4title>
      <P4box>
        <P4link
          animate={{ opacity: 0, x: -300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", bounce: 0.7, delay: 0.3 },
          }}
        >
          <a href="https://github.com/BbangSe01" target="_blank">
            <ArcImage src={arc_image1} alt="github image"></ArcImage>
          </a>
          <Linktitle>소스코드 저장소</Linktitle>
          <P4ex>
            <EachEx>✔️ 프로젝트 , 프로그램 등의 소스 코드</EachEx>
            <EachEx>✔️ 스터디 중 학습한 소스 코드</EachEx>
          </P4ex>
        </P4link>
        <P4link
          animate={{ opacity: 0, x: 300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", bounce: 0.7, delay: 0.3 },
          }}
        >
          <a href="https://velog.io/@sehyeon_zzang/posts" target="_blank">
            <ArcImage src={arc_image2} alt="velog image"></ArcImage>
          </a>
          <Linktitle>개발 블로그</Linktitle>
          <P4ex>
            <EachEx2>✔️ 학습한 내용 및 과정 정리</EachEx2>
            <EachEx2>✔️ 여러 개발자들과의 커뮤니케이션</EachEx2>
          </P4ex>
        </P4link>
      </P4box>
    </P4back>
  );
}
