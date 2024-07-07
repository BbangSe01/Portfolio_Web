import styled from "styled-components";
import skillImage1 from "../assets/images/skill1.jpg";
import skillImage2 from "../assets/images/reactnative.png";
import skillImage3 from "../assets/images/reactimage.png";
import skillImage4 from "../assets/images/github.png";
import skillImage5 from "../assets/images/sqld.png";
const Styledback2 = styled.div`
  margin-top: -70px;
  padding-bottom: 10px;
  background-color: #c5ca72;
  color: white;
  height: 100%;
`;

const P3title = styled.h1`
  font-size: 100px;
  padding-left: 50px;
`;

const Gridiv = styled.div`
  display: grid;
  grid-template-areas: "skill1 skill2 skill3 skill4";
`;

const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 15px;
`;

const SkillBox1 = styled.div`
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
`;

const SkillBox2 = styled.div`
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
`;
const SkillBox3 = styled.div`
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
`;
const SkillBox4 = styled.div`
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
`;
const Skilltitle = styled.p`
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export default function Page_3() {
  return (
    <Styledback2>
      <P3title>🔗Skills</P3title>
      <Gridiv>
        <SkillBox1>
          <Skilltitle>Frontend</Skilltitle>
          <SkillImage src={skillImage1} alt="html/css/js"></SkillImage>
          <SkillImage src={skillImage3} alt="React"></SkillImage>
        </SkillBox1>
        <SkillBox2>
          <Skilltitle>Mobile app</Skilltitle>
          <SkillImage src={skillImage2} alt="React Native"></SkillImage>
        </SkillBox2>
        <SkillBox3>
          <Skilltitle>Version Control</Skilltitle>
          <SkillImage src={skillImage4} alt="Github"></SkillImage>
        </SkillBox3>
        <SkillBox4>
          <Skilltitle>Certificate</Skilltitle>
          <SkillImage src={skillImage5} alt="SQLD"></SkillImage>
        </SkillBox4>
      </Gridiv>
    </Styledback2>
  );
}
