import Particles from "react-tsparticles";
import { useGameContext } from "./GameContext";
import { P2 } from "./GameUtil";

const VictoryParty: React.FunctionComponent = () => {
    const {winner, gameOver} = useGameContext();
    
    let animate: boolean = false;
    if(winner && winner === P2 && gameOver === true){
        animate = true;
    }

    const options_empty: any = {
      autoplay: false,
      emitters: {
      },
     particles: {
       number: {
         value: 0,
       },
       size: {
         value: 0,
       }
      }
    };
    const options_party: any = {
        emitters: {
         },
        particles: {
          number: {
            value: 200,
          },
          color: {
            value: ["#FF5A86", "#953AFE", "#FFC326", "#46C0FF"],
          },
          shape: {
            type: ["square", "circle"],
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 0.5,
              startValue: "max",
              destroy: "min",
            },
          },
          size: {
            value: 5,
          },
          links: {
            enable: false,
          },
          life: {
            duration: {
              sync: true,
              value: 3,
            },
            count: 1,
          },
          move: {
            angle: {
              value: 45,
              offset: 0,
            },
            drift: {
              min: -0,
              max: 0,
            },
            enable: true,
            gravity: {
              enable: true,
              acceleration: 20,
            },
            speed: 90,
            decay: 1 - 0.9,
            direction: -90,
            random: true,
            straight: false,
            outModes: {
              default: "none",
              bottom: "destroy",
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 60,
            },
          },
          tilt: {
            direction: "random",
            enable: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 60,
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 25,
            },
            enable: true,
            speed: {
              min: 15,
              max: 25,
            },
          },
          wobble: {
            distance: 20,
            enable: true,
            speed: {
              min: -15,
              max: 15,
            },
          },
        },
      };

    return(
            <Particles options={animate? (options_party):(options_empty)} /> 
         );
};

export default VictoryParty;