import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
  return (
    <Particles
    id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
                options={{
                    fullScreen: {
                      enable: true,
                      zIndex: 0
                    },
                    particles: {
                      number: {
                        value: 100,
                        limit: 100,
                        density: {
                          enable: true,
                          value_area: 800
                        }
                      },
                      color: {
                        // value: ["#e211bf","#223fd3","#f0782d","#2df033"]
                        value:"#655965"
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 0,
                          color: "#eee"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        // image: {
                        //   src: "images/github.svg",
                        //   width: 100,
                        //   height: 100
                        // }
                      },
                      opacity: {
                        value: 0.7,
                        random: true,
                        anim: {
                          enable: true,
                          speed: 1,
                          opacity_min: 0.5,
                          sync: false
                        }
                      },
                      size: {
                        value: 10,
                        random: true,
                        anim: {
                          enable: true,
                          speed: 2,
                          size_min: 4,
                          sync: false
                        }
                      },
                      links: {
                        enable: false
                      },
                      move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onHover: {
                          enable: false,
                          mode: "bubble",
                          parallax: {
                            enable: false,
                            force: 40,
                            // smooth: 15
                          }
                        },
                        onClick: {
                          enable: false,
                          mode: "push"
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 300,
                          lineLinked: {
                            opacity: 0.6
                          }
                        },
                        bubble: {
                          distance: 400,
                          size: 30,
                          duration: 2,
                          opacity: 1,
                          speed: 1
                        },
                        repulse: {
                          distance: 200
                        },
                        push: {
                          particles_nb: 8
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    detectRetina: true,
                    fpsLimit: 30,
                    background: {
                      color: "transparent"
                    }
                  }}
    />
  )
}

export default Particle