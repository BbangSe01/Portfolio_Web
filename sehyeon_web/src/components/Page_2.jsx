import styled, { keyframes } from "styled-components";
import myImage from "../assets/images/myPic.jpg";
import { motion } from "framer-motion";

const aboutmove = keyframes`
  0% {transform: translate(200px,0px); }
  100% {transform: translate(0px, 0px); }
  `;

const Styledback = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  margin-top: -70px;
`;
const Ul_list = styled(motion.ul)`
  opacity: 0;
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
`;
const Image = styled.img`
  margin-right: 70px;
  width: 370px;
  height: 370px;
`;

const Eachlist = styled.li`
  margin: 20px;
`;

export default function Page_2() {
  return (
    <Styledback>
      <Aboutme>About me</Aboutme>
      <Styledabout>
        <Image src={myImage} alt="내사진"></Image>
        <Ul_list //Framer Motion
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.4 },
          }}
        >
          <Eachlist>💬 Name: 방세현</Eachlist>
          <Eachlist>💬 Birth Date: 2001.06.12</Eachlist>
          <Eachlist>💬 Education: 명지대학교 정보통신공학과</Eachlist>
          <Eachlist>📩 Contact: tpwnstpgus1@naver.com</Eachlist>
        </Ul_list>
      </Styledabout>
    </Styledback>
  );
}
