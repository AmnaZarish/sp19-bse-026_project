import React from 'react';
import web from "../images/restaurantpic.jpg";
import Common from "../Common";
const AboutUs = () => {
    return (
        <Common name="Welcome to the About page"
         imgsrc={web} visit="/contact-us" btname="Contact Now" />
      );
}
 
export default AboutUs;