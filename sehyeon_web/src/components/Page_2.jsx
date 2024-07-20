import styled from "styled-components";
import { Typed } from "react-typed";
import myImage from "../assets/images/myPic.jpg";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./font.css";

const Styledback = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  margin-top: -70px;
`;
const Ul_list = styled.ul`
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
  font-size: 70px;
  font-weight: bold;
  padding-top: 30px;
  padding-left: 100px;
  font-family: "NEXON Lv1 Gothic OTF";
`;
const Image = styled.img`
  margin-right: 70px;
  width: 370px;
  height: 370px;
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
`;

const Eachlist = styled.li`
  margin: 15px;
  font-size: 25px;
  font-family: "NEXON Lv1 Gothic OTF";
`;

export default function Page_2() {
  const [pagearr, setPagearr] = useState(false);
  const introduce = useRef(null);

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
  }, [pagearr]);

  return (
    <Styledback>
      <Aboutme>About me</Aboutme>
      <Styledabout>
        <Image src={myImage} alt="내사진"></Image>
        <Introbox>
          <Introtitle
            ref={introduce}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => setPagearr(true)}
            viewport={{ once: false }}
          ></Introtitle>
          <Ul_list>
            <Eachlist>💬 Name: 방세현</Eachlist>
            <Eachlist>💬 Birth Date: 2001.06.12</Eachlist>
            <Eachlist>💬 Education: 명지대학교 정보통신공학과</Eachlist>
            <Eachlist>📩 Contact: tpwnstpgus1@naver.com</Eachlist>
          </Ul_list>
        </Introbox>
      </Styledabout>
    </Styledback>
  );
}
