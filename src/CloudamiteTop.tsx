import React  from 'react';
import slogan from "./img/slogan.png"; // Tell webpack this JS file uses this image

const CloudamiteTop: React.FunctionComponent = () => {

    return(
        <div className="cloudamite-slogan-top">
              <div className="cloudamite-slogan">
                <a href="https://cloudamite.com"><img src={slogan} alt="blow your mind" /></a>
              </div>
    </div>
  );

  
    
}

export default CloudamiteTop;