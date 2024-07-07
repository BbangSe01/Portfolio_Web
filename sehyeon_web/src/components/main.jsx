import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import Page1 from "./Page_1";
import Page2 from "./Page_2";
import Page3 from "./Page_3";
import Page4 from "./Page_4";
import Page5 from "./Page_5";

export default function Mainpage() {
  let options = {
    anchors: [
      "sectionOne",
      "sectionTwo",
      "sectionThree",
      "sectionFour",
      "sectionFive",
    ],
  };

  return (
    <SectionsContainer {...options}>
      <Section>
        <Page1 />
      </Section>
      <Section>
        <Page2 />
      </Section>
      <Section>
        <Page3 />
      </Section>
      <Section>
        <Page4 />
      </Section>
      <Section>
        <Page5 />
      </Section>
    </SectionsContainer>
  );
}
