import styled from "styled-components";
import { Typed } from "react-typed";
import myImage from "../assets/images/myPic.jpg";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./font.css";

const Styledback = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  margin-top: -60px;
  @media (max-width: 1350px) {
    margin-top: -50px;
  }
  @media (max-width: 900px) {
    margin-top: -30px;
  }
  @media (max-width: 650px) {
    margin-top: -20px;
  }
`;
const Ul_List = styled.ul`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const Styledabout = styled.div`
  display: flex;
  margin-left: 100px;
`;

const Aboutme = styled.p`
  font-size: 60px;
  font-weight: bold;
  padding-top: 30px;
  padding-left: 100px;
  font-family: "NEXON Lv1 Gothic OTF";
  @media (max-width: 1350px) {
    padding-top: 80px;
    font-size: 50px;
  }
  @media (max-width: 900px) {
    padding-top: 120px;
    font-size: 30px;
  }
  @media (max-width: 650px) {
    padding-top: 150px;
    font-size: 20px;
    margin-left: -50px;
  }
`;
const Image = styled.img`
  margin-right: 70px;
  width: 370px;
  height: 370px;
  @media (max-width: 1350px) {
    width: 250px;
    height: 250px;
    margin-right: 40px;
  }
  @media (max-width: 900px) {
    width: 220px;
    height: 220px;
    margin-right: 20px;
  }
  @media (max-width: 650px) {
    width: 180px;
    height: 180px;
    margin-right: -10px;
    margin-left: -50px;
  }
`;
const Introbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
`;

const Introtitle = styled(motion.span)`
  font-size: 70px;
  width: 800px;
  height: 100px;
  border: 2px solid white;
  border-left-width: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  font-family: "InkLipquid";
  line-height: 100px;
  margin-left: 50px;
  @media (max-width: 1350px) {
    font-size: 50px;
    width: 600px;
    height: 80px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
    width: 345px;
    height: 60px;
  }
  @media (max-width: 650px) {
    font-size: 20px;
    width: 230px;
    height: 60px;
  }
`;

const Eachlist = styled.li`
  margin: 15px;
  font-size: 25px;
  font-family: "NEXON Lv1 Gothic OTF";
  @media (max-width: 1350px) {
    font-size: 15px;
    margin: 7px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
    margin: 5px;
  }
`;

export default function Page_2() {
  const [pagearr, setPagearr] = useState(false);
  const introduce = useRef(null); //useRef를 통해 introduce를 직접적으로 참조

  useEffect(() => {
    if (pagearr) {
      if (pagearr && introduce.current) {
        new Typed(introduce.current, {
          strings: ["&quot;사용자를 이해하는 프론트엔드 개발자&quot;"],
          typeSpeed: 65,
          showCursor: false,
          onComplete: () => setPagearr(false),
        });
      }
    }
  }, [pagearr]); // pagearr이 업데이트 될때에만 useEffect 실행

  return (
    <Styledback>
      <Aboutme>About me</Aboutme>
      <Styledabout>
        <Image src={myImage} alt="내사진"></Image>
        <Introbox>
          <Introtitle
            ref={introduce} // ref 속성을 업데이트하여 introduce.current는 null이 아니라 Introtitle 요소의 참조를 가리킴.
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => setPagearr(true)} // 뷰포트(사용자가 보고있는 화면)에 진입할 때 실행
            viewport={{ once: false }}
          ></Introtitle>
          <Ul_List>
            <Eachlist>💬 Name: 방세현</Eachlist>
            <Eachlist>💬 Birth Date: 2001.06.12</Eachlist>
            <Eachlist>💬 Education: 명지대학교 정보통신공학과</Eachlist>
            <Eachlist>📩 Contact: tpwnstpgus1@naver.com</Eachlist>
          </Ul_List>
        </Introbox>
      </Styledabout>
    </Styledback>
  );
}
