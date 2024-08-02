import styled from "styled-components";
import skillImage1 from "../assets/images/skill1.jpg";
import skillImage2 from "../assets/images/reactnative.png";
import skillImage3 from "../assets/images/reactimage.png";
import skillImage4 from "../assets/images/github.png";
import skillImage5 from "../assets/images/sqld.png";
import { motion } from "framer-motion";
import "./font.css";

const Styledback2 = styled.div`
  margin-top: -70px;
  padding-bottom: 10px;
  background-color: #c5ca72;
  color: white;
  height: 100%;
  @media (max-width: 1350px) {
    margin-top: -60px;
  }
  @media (max-width: 900px) {
    margin-top: -45px;
  }
`;

const P3title = styled.h1`
  font-size: 105px;
  padding-left: 50px;
  font-family: "DungGeunMo";
  @media (max-width: 1350px) {
    padding-top: 20px;
    font-size: 85px;
  }
  @media (max-width: 900px) {
    padding-top: 70px;
    font-size: 60px;
  }
  @media (max-width: 650px) {
    padding-top: 110px;
    font-size: 45px;
  }
`;

const Gridiv = styled.div`
  display: grid;
  grid-template-areas: "skill1 skill2 skill3 skill4";
`;

const SkillImage = styled.img`
  width: 100%;
  height: 60%;
  border: 1px solid white;
  border-radius: 15px;
  @media (max-width: 1350px) {
    height: 50%;
  }
`;

const SkillBox1 = styled(motion.div)`
  grid-area: skill1;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  border: 3px solid white;
  border-radius: 15px;
  margin-left: 50px;
  &:hover {
    width: 330px;
    height: 450px;
  }
  @media (max-width: 1350px) {
    width: 200px;
    height: 300px;
    &:hover {
      width: 230px;
      height: 350px;
    }
  }
  @media (max-width: 900px) {
    width: 150px;
    height: 230px;
    &:hover {
      width: 180px;
      height: 260px;
    }
  }
  @media (max-width: 650px) {
    width: 110px;
    height: 190px;
    &:hover {
      width: 130px;
      height: 210px;
    }
  }
`;

const SkillBox2 = styled(motion.div)`
  grid-area: skill2;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  height: 300px;
  border: 3px solid white;
  border-radius: 15px;
  &:hover {
    width: 330px;
    height: 330px;
  }
  @media (max-width: 1350px) {
    width: 200px;
    height: 200px;
    &:hover {
      width: 230px;
      height: 230px;
    }
  }
  @media (max-width: 900px) {
    width: 130px;
    height: 130px;
    &:hover {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 650px) {
    width: 90px;
    height: 90px;
    &:hover {
      width: 110px;
      height: 110px;
    }
  }
`;
const SkillBox3 = styled(motion.div)`
  grid-area: skill3;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  height: 300px;
  border: 3px solid white;
  border-radius: 15px;
  &:hover {
    width: 330px;
    height: 330px;
  }
  @media (max-width: 1350px) {
    width: 200px;
    height: 200px;
    &:hover {
      width: 230px;
      height: 230px;
    }
  }
  @media (max-width: 900px) {
    width: 130px;
    height: 130px;
    &:hover {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 650px) {
    width: 90px;
    height: 90px;
    &:hover {
      width: 110px;
      height: 110px;
    }
  }
`;
const SkillBox4 = styled(motion.div)`
  grid-area: skill4;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  height: 300px;
  border: 3px solid white;
  border-radius: 15px;
  &:hover {
    width: 330px;
    height: 330px;
  }
  @media (max-width: 1350px) {
    width: 200px;
    height: 200px;
    &:hover {
      width: 230px;
      height: 230px;
    }
  }
  @media (max-width: 900px) {
    width: 130px;
    height: 130px;
    &:hover {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 650px) {
    width: 90px;
    height: 90px;
    &:hover {
      width: 110px;
      height: 110px;
    }
  }
`;
const Skilltitle = styled.p`
  color: black;
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  font-family: "DungGeunMo";
  @media (max-width: 1350px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export default function Page_3() {
  return (
    <Styledback2>
      <P3title>🔗Skills</P3title>
      <Gridiv>
        <SkillBox1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, rotateX: 360 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 170, //강성, 값이 높을수록 빠르게 제자리로 돌아옴
            damping: 40, //감쇠계수, 높을수록 빠르게 진동을 멈춤
          }}
        >
          <Skilltitle>Frontend</Skilltitle>
          <SkillImage src={skillImage1} alt="html/css/js"></SkillImage>
          <SkillImage src={skillImage3} alt="React"></SkillImage>
        </SkillBox1>
        <SkillBox2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, rotateX: 360 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
            stiffness: 170, //강성, 값이 높을수록 빠르게 제자리로 돌아옴
            damping: 40, //감쇠계수, 높을수록 빠르게 진동을 멈춤
          }}
        >
          <Skilltitle>Mobile app</Skilltitle>
          <SkillImage src={skillImage2} alt="React Native"></SkillImage>
        </SkillBox2>
        <SkillBox3
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, rotateX: 360 }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
            stiffness: 170, //강성, 값이 높을수록 빠르게 제자리로 돌아옴
            damping: 40, //감쇠계수, 높을수록 빠르게 진동을 멈춤
          }}
        >
          <Skilltitle>Version Control</Skilltitle>
          <SkillImage src={skillImage4} alt="Github"></SkillImage>
        </SkillBox3>
        <SkillBox4
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, rotateX: 360 }}
          transition={{
            delay: 0.6,
            duration: 1,
            type: "spring",
            stiffness: 170, //강성, 값이 높을수록 빠르게 제자리로 돌아옴
            damping: 40, //감쇠계수, 높을수록 빠르게 진동을 멈춤
          }}
        >
          <Skilltitle>Certificate</Skilltitle>
          <SkillImage src={skillImage5} alt="SQLD"></SkillImage>
        </SkillBox4>
      </Gridiv>
    </Styledback2>
  );
}
