import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Headphone from './components/Headphone.js'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import { Suspense } from 'react';
import {
  useTransition,
  useSpring,
  useTrail,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import Loading from './components/Loading';
import Hamburger from './components/Hamburger'
import Details from './components/Details'
import SmallHeadphone from './components/SmallHeadphone';
function App() {
  const [toggleHam, setToggleHam] = useState(false)

  const [open, set] = useState(false)
    
        const pages = [
            {
              title: "Home"
            },
            {
              title: "About"
            },
            {
              title: "Store"
            },
            {
              title: "Coming Soon"
            },
          ]
    
        const styles = useSpring({
            to: [
                { opacity: .5, color: '#000' },
                { opacity: 1, color: '#000' },
            ],
            from: { opacity: 1, color: 'red' },
        })
    
        const trail = useTrail(pages.length, {
            from: toggleHam ? { opacity: 0, transform: 'translateX(-100px)' } : { opacity: 1, transform: 'translateX(0)' },
            to: toggleHam ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-100px)' },
            config: { duration: 200 }
        })
    
        const trailStyles = useSpring({
            opacity: toggleHam ? 1 : 0,
            transform: toggleHam ? 'translateX(0)' : 'translateX(-100px)',
            duration: 200,
            delay: 50,
        })


  const handleClick = () => {
    setToggleHam(!toggleHam)
  }

  return (

    <div className="App">
      <div className='logo'>
        <Hamburger toggleHam={toggleHam} setToggleHam={setToggleHam} handleClick={handleClick} />
        <h1>CANS</h1>
      </div>
      <animated.div styles={trailStyles} className='menu'>
                { trail.map((props, index) => {
                    const page = pages[index]
                    return (
                        <animated.div
                        style={props}
                        key={index}
                        >
                          <a href="">{page.title}</a>
                        </animated.div>
                    )
                }
                )}
                </animated.div>
      <div className='section landing'>
        <div className='info'>
          <div>

            <div>
              <h1>Listen Boldly </h1>
            </div>
            <p>All-new CANS&#8482; <b>2.0</b> headphones out now. Titanium steel paired with comfortable memory phone creates an immerssive listening experience like no other.</p>
            <a href="#details"><button>MORE</button></a>
          </div>
        </div>
        <div className='canvas'>

          <Suspense fallback={<Loading />}>

            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -1, 50], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <spotLight position={[30, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
              <PresentationControls
                local
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                // rotation={[0, -.6, 1.5]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}>

                <Headphone scale={12.3} rotation={[0, -.6, 1.7]} position={[2, 0, -3]} />
              </PresentationControls>
              <ContactShadows rotation-x={Math.PI / 2} position={[0, -20.4, 0]} opacity={1} width={90} height={90} blur={5.7} far={40} />
              <Environment preset="city" />
            </Canvas>
          </Suspense>
        </div>
      </div>
      <div id="details" className='section infoSection'>
        <h1>Sound Reimagined</h1>
        <Suspense fallback={<Loading />}>

          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -1, 50], fov: 10 }}>
            <ambientLight intensity={0.8} />
            <spotLight position={[30, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />


            <SmallHeadphone scale={2.3} rotation={[0, -.6, 1.7]} position={[0, 0, 0]} />
            {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -20.4, 0]} opacity={1} width={90} height={90} blur={5.7} far={40} /> */}
            <Environment preset="night" />
          </Canvas>
        </Suspense>
        <div className='productdetails'>

          {/* <p>All-new CANS™ 2.0 headphones. Titanium steel paired with comfortable memory phone creates an immerssive listening experience like no other.</p> */}
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
