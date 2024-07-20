import styled from "styled-components";
import { motion } from "framer-motion";
import arc_image1 from "../assets/images/github.png";
import arc_image2 from "../assets/images/velog.png";
import "./font.css";

const P4back = styled.div`
  margin-top: -75px;
  background-color: #9e72ca;
  height: 100%;
`;

const P4title = styled.h2`
  color: #95cdee;
  font-size: 90px;
  margin-left: 590px;
  padding-top: 40px;
  font-family: "NEXON Lv1 Gothic OTF";
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
  margin-left: 50px;
`;

const P4ex = styled.ul`
  color: black;
`;

const EachEx = styled.li`
  margin: 15px;
  margin-left: 55px;
  list-style-type: none;
  font-family: "NEXON Lv1 Gothic OTF";
`;

const EachEx2 = styled.li`
  margin: 15px;
  margin-left: 80px;
  list-style-type: none;
  font-family: "NEXON Lv1 Gothic OTF";
`;
const ArcImage = styled.img`
  width: 100%;
  height: 80%;
`;

const Linktitle = styled.h2`
  font-weight: bold;
  margin-top: -30px;
  text-align: center;
  margin-bottom: -10px;
  font-family: "Cafe24ClassicType-Regular";
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
