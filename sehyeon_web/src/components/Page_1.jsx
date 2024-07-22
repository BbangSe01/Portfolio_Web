// import styled, { keyframes } from "styled-components";
// import "./font.css";

// // Keyframes 정의
// const animate1 = keyframes`
//   0% {
//     transform: scale(0) translateY(0) rotate(70deg);
//   }
//   100% {
//     transform: scale(1.3) translateY(-100px) rotate(360deg);
//   }
// `;
// const animate2 = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// // styled-components를 사용하여 스타일 정의
// const BackImage = styled.div`
//   background-color: black;
//   width: 100%;
//   height: 100%;
// `;

// const Wrapper = styled.div`
//   position: relative;
// `;

// const Nav = styled.nav`
//   font-size: 18px;
//   padding: 18px;
//   color: white;
//   display: flex;
//   justify-content: space-evenly;
// `;

// const Title = styled.div`
//   opacity: 0;
//   position: absolute;
//   top: 200px;
//   left: 33%;
//   font-family: sans-serif;
//   letter-spacing: 1px;
//   word-spacing: 2px;
//   color: #fff;
//   animation: ${animate2} 3s linear forwards;
//   font-family: "NEXON Lv1 Gothic OTF";
//   margin-top: 10px;
// `;

// const H1 = styled.h1`
//   font-size: 70px;
//   font-weight: 888;
//   text-transform: uppercase;
// `;

// const H2 = styled.h2`
//   margin-top: -30px;
//   padding-left: 150px;
//   font-size: 20px;
//   font-weight: 888;
//   text-transform: uppercase;
// `;

// // Bubble 스타일 정의 (픽셀 값으로 변경)
// const Bubble = styled.div`
//   height: 60px;
//   width: 60px;
//   border: 2px solid rgba(255, 255, 255, 0.7);
//   border-radius: 50px;
//   position: absolute;
//   animation: ${animate1} 10s linear infinite;
// `;

// const P1_a = styled.a`
//   text-decoration-line: none;
//   color: white;
// `;

// const Navtitle = styled.li`
//   list-style-type: none;
//   font-family: "NEXON Lv1 Gothic OTF";
// `;

// const Page1 = () => {
//   return (
//     <BackImage>
//       <Wrapper>
//         <Nav>
//           <P1_a href="#sectionTwo">
//             <Navtitle>About me</Navtitle>
//           </P1_a>
//           <P1_a href="#sectionThree">
//             <Navtitle>Skills</Navtitle>
//           </P1_a>
//           <P1_a href="#sectionFour">
//             <Navtitle>Archiving</Navtitle>
//           </P1_a>
//           <P1_a href="#sectionFive">
//             <Navtitle>Projects</Navtitle>
//           </P1_a>
//         </Nav>
//         <hr />
//         <Title>
//           <H1>Bang SeHyeon</H1>
//           <H2>Frontend Developer</H2>
//         </Title>
//         {/* Bubble 요소들 */}
//         <Bubble
//           style={{ top: "500px", left: "10%", animationDuration: "8s" }}
//         />
//         <Bubble
//           style={{ top: "350px", left: "20%", animationDuration: "10s" }}
//         />
//         <Bubble
//           style={{ top: "300px", left: "25%", animationDuration: "3s" }}
//         />
//         <Bubble
//           style={{ top: "600px", left: "40%", animationDuration: "7s" }}
//         />
//         <Bubble
//           style={{ top: "620px", left: "50%", animationDuration: "9s" }}
//         />
//         <Bubble
//           style={{ top: "650px", left: "60%", animationDuration: "5s" }}
//         />
//         <Bubble
//           style={{ top: "390px", left: "73%", animationDuration: "8s" }}
//         />
//         <Bubble
//           style={{ top: "530px", left: "83%", animationDuration: "10s" }}
//         />
//         <Bubble
//           style={{ top: "570px", left: "90%", animationDuration: "6s" }}
//         />
//         {/* <Bubble
//           style={{ top: "200px", left: "20%", animationDuration: "10s" }}
//         />
//         <Bubble
//           style={{ top: "200px", left: "90%", animationDuration: "9s" }}
//         />
//         <Bubble
//           style={{ top: "200px", left: "70%", animationDuration: "7s" }}
//         /> */}
//       </Wrapper>
//     </BackImage>
//   );
// };

// export default Page1;
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import "./font.css";

// Keyframes 정의
const animate1 = keyframes`
  0% {z
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
`;
const animate2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// styled-components를 사용하여 스타일 정의
const BackImage = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  font-size: 18px;
  padding: 18px;
  color: white;
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.div`
  opacity: 0;
  position: absolute;
  top: 200px;
  left: 33%;
  font-family: sans-serif;
  letter-spacing: 1px;
  word-spacing: 2px;
  color: #fff;
  animation: ${animate2} 2s linear forwards;
  animation-delay: 1.5s;
  font-family: "NEXON Lv1 Gothic OTF";
  margin-top: 10px;
`;

const H1 = styled.h1`
  font-size: 70px;
  font-weight: 888;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  margin-top: -30px;
  padding-left: 150px;
  font-size: 20px;
  font-weight: 888;
  text-transform: uppercase;
`;

// Bubble 스타일 정의 (픽셀 값으로 변경)
const Bubble = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  position: absolute;
  animation: ${animate1} 10s linear infinite;
`;

const P1_a = styled.a`
  text-decoration-line: none;
  color: white;
`;

const Navtitle = styled.li`
  list-style-type: none;
  font-family: "NEXON Lv1 Gothic OTF";
`;

const Page1 = () => {
  return (
    <BackImage
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1.5,
        type: "tween",
      }}
    >
      <Wrapper>
        <Nav>
          <P1_a href="#sectionTwo">
            <Navtitle>About me</Navtitle>
          </P1_a>
          <P1_a href="#sectionThree">
            <Navtitle>Skills</Navtitle>
          </P1_a>
          <P1_a href="#sectionFour">
            <Navtitle>Archiving</Navtitle>
          </P1_a>
          <P1_a href="#sectionFive">
            <Navtitle>Projects</Navtitle>
          </P1_a>
        </Nav>
        <hr />
        <Title>
          <H1>Bang SeHyeon</H1>
          <H2>Frontend Developer</H2>
        </Title>
        {/* Bubble 요소들 */}
        <Bubble
          style={{ top: "500px", left: "10%", animationDuration: "8s" }}
        />
        <Bubble
          style={{ top: "350px", left: "20%", animationDuration: "10s" }}
        />
        <Bubble
          style={{ top: "300px", left: "25%", animationDuration: "3s" }}
        />
        <Bubble
          style={{ top: "600px", left: "40%", animationDuration: "7s" }}
        />
        <Bubble
          style={{ top: "620px", left: "50%", animationDuration: "9s" }}
        />
        <Bubble
          style={{ top: "650px", left: "60%", animationDuration: "5s" }}
        />
        <Bubble
          style={{ top: "390px", left: "73%", animationDuration: "8s" }}
        />
        <Bubble
          style={{ top: "530px", left: "83%", animationDuration: "10s" }}
        />
        <Bubble
          style={{ top: "570px", left: "90%", animationDuration: "6s" }}
        />
        {/* <Bubble
          style={{ top: "200px", left: "20%", animationDuration: "10s" }}
        />
        <Bubble
          style={{ top: "200px", left: "90%", animationDuration: "9s" }}
        />
        <Bubble
          style={{ top: "200px", left: "70%", animationDuration: "7s" }}
        /> */}
      </Wrapper>
    </BackImage>
  );
};

export default Page1;
