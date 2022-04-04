import React from 'react';
import logoleft from "./img/clouda-logo-left.png"; // Tell webpack this JS file uses this image
import logoline from "./img/logo-line.png"; // Tell webpack this JS file uses this image

class CloudamiteFooter extends React.Component {

    render() {
        return(
            <div className="cloudamite-logo-footer">
                  <div className="logo-footer-left">
                    <a href="https://cloudamite.com"><img src={logoleft} alt="Logol" /></a>
                  </div>
                  <div className="logo-footer-right">
                  <img src={logoline} alt="Logol"/>
                  </div>
        </div>
      );
    }
  
    
}

export default CloudamiteFooter;