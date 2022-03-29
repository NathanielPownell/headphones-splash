import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from "react-spring";

import {
    useTransition,
    useSpring,
    useTrail,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'
import Topic from './Topic'
import { BluetoothAudio, Chair, Mic, VolumeUp } from '@mui/icons-material';

const Details = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [open, set] = useState(false)
    
        const topics = [
            {
                title: 'Comfortable',
                desc: "We design a beautiful solution that looks amazing on any device.",
                icon: <Chair />
            },
            {
                title: 'Clear Sound',
                desc: "We use the best possible technologies to develop your solutions.",
                icon: <VolumeUp />
            },
            {
                title: 'Bluetooth ',
                desc: "Using the latest data and trends, we create a Search Engine Optimization plan to make sure your site ranks high on search engines like Google.",
                icon: <BluetoothAudio />
            },
            {
                title: 'Crisp Mic',
                desc: "What good is a website if you can't see the results? Using Google Analytics, we provide you with valuable data so you know where your views are generating.",
                icon: <Mic />
            },
        ]
    
        const styles = useSpring({
            to: [
                { opacity: .5, color: '#000' },
                { opacity: 1, color: '#000' },
            ],
            from: { opacity: 1, color: 'red' },
        })
    
        const trail = useTrail(topics.length, {
            from: isVisible ? { opacity: 0 } : { opacity: 1 },
            to: isVisible ? { opacity: 1 } : { opacity: 0 },
            config: { duration: 400 }
        })
    
        const trailStyles = useSpring({
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            duration: 400,
            delay: 50,
        })
        const h2Styles = {
            fontSize: "82px",
        };
    
        const visChange = () => {
            setIsVisible(!isVisible)
        }
  return (
    <VisibilitySensor onChange={visChange} partialVisibility>

                <animated.div styles={trailStyles} className='topicsContainer'>
                { trail.map((props, index) => {
                    const topic = topics[index]
                    return (
                        <animated.div
                        style={props}
                        key={index}
                        >
                        <Topic title={topic.title} desc={topic.desc} icon={topic.icon} />
                        </animated.div>
                    )
                }
                )}
                </animated.div>
            </VisibilitySensor>
  )
}

export default Details