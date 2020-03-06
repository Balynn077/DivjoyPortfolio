import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import ContentCards from "./ContentCards";

function ContentCardsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ContentCards
          people={[
            {
              image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "jamFinder",
              body:
                "Search engine for local shows and associated music videos. Technologies used: HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL.",
              url: "/post/golden-gate"
            },
            {
              image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
              title: "escribe",
              body:
                "Teaching application which organizes stundents and lesson notes. Technologies used: HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL.",
              url: "/post/beach"
            },
            {
              image: "https://source.unsplash.com/3XN-BNRDUyY/800x600",
              title: "AnimalTracks",
              body:
                "Application for searching and posting animal sightings. Technologies used: HTML5, CSS3, Javascript, ReactJS, JQuery, Bootstrap, Node Js, MongoDB.",
              url: "/post/road"
            },
            {
              image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
              title: "Reactjs Portfolio",
              body:
                "Additional example of portfolio using Reactjs.",
              url: "/post/ballons"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ContentCardsSection;
