import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Footer = () => {
    return ( 
        <footer className="w-100 bg-light text-center">
            <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
            <p>© 2021 Royal Eaters. All rights reserved.</p>
        </footer>
     );
}
 
export default Footer;