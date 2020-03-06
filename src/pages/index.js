import React from "react";
import Navbar from "./../components/Navbar";
import UsersSection from "./../components/UsersSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import Footer from "./../components/Footer";

function IndexPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <UsersSection color="white" size="medium" title="About me" subtitle="" />
      <ContentCardsSection
        color="white"
        size="medium"
        title="Featured Content"
        subtitle=""
      />
      <Footer
        color="white"
        size="medium"
        logo="https://uploads.divjoy.com/logo.svg"
        description="A short description of what you do here"
        copyright="© 2019 Company"
      />
    </>
  );
}

export default IndexPage;
