import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Users from "./Users";

function UsersSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Users
          people={[
            {
              headerImage: "https://source.unsplash.com/pe_R74hldW4/1080x360",
              avatarImage: "http://media.wizards.com/2018/events/gpmil18/lynn.jpg",
              name: "Brian Lynn"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default UsersSection;
