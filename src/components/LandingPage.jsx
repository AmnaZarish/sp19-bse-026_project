import React from 'react';
import web from "../images/food-home-delivery.jpg";
import Common from "../Common";
const LandingPage = () => {
    return (
        <Common name="Welcome to the"
         imgsrc={web} visit="/menu" btname="Get Started" />
      );
}
 
export default LandingPage;