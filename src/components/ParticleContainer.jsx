import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleContainer = () => {
    // init
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            className='w-full h-full absolute translate-z-0 z-1 tsparticles'
            id='tsparticles' 
            init={particlesInit}
            loaded={particlesLoaded} 
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: '',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: false,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 100
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.5,
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#217468'
                    },
                    links: {
                        color: '#7092B5',
                        distance: 175,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 550
                        },
                        value: 90
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'square'
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} 
        />
    );
};

export default ParticleContainer;