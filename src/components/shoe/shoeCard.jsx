import { Canvas } from 'react-three-fiber'
import { useState, Suspense, useEffect } from "react"
import { OrbitControls } from "@react-three/drei"
import { Card, Colors, InnerWrapper, ProductCanvas, Wrapper, Picker, Label } from './style'
import { Model } from './shoeModel'

export const ShoeCard = () => {
    const [mesh, setMesh] = useState("#ffffff")
    const [stripes, setStripes] = useState("#ffffff")
    const [laces, setLaces] = useState("#ffffff")
    const [sole, setSole] = useState("#ffffff")
    const [width, setWidth] = useState(null);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth);
            if (newWidth <= 1000) {
                console.log("small")
            }
            if (newWidth > 1000) {
                console.log("big")
            }
            console.log("updating Width", width);
        };
        window.addEventListener("resize", updateWindowDimensions)
        updateWindowDimensions()

        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [width])

    console.log("give Width", width);

    const handleScreenSize = () => {
        console.log("handlewidth:", width)
        if (width <= 700) {
            return 25
        }
        if (width > 700 && width <= 1000) {
            return 50
        }
        else {
            return 75
        }
    }

    return (
        <Wrapper>
            <InnerWrapper>
                <h1>customize your shoe</h1>
                <Card>
                    <ProductCanvas>
                        <Canvas id="canvas" orthographic camera={{ zoom: handleScreenSize(), position: [0, 0, 100] }}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={1} />
                                <spotLight
                                    intensity={0.5}
                                    angle={0.1}
                                    penumbra={1}
                                    position={[10, 15, 10]}
                                    castShadow
                                />
                                <Model customColors={{ mesh: mesh, stripes: stripes, laces: laces, sole: sole }} />
                                <OrbitControls
                                    enablePan={false}
                                    enableZoom={true}
                                />
                            </Suspense>
                        </Canvas>
                    </ProductCanvas>
                    <h2>choose your colors</h2>
                    <Colors>
                        <Picker>
                            <input type="color" id="mesh" name="mesh"
                                value={mesh}
                                onChange={(e) => setMesh(e.target.value)} />
                            <Label htmlFor="mesh">Main</Label>
                        </Picker>

                        <Picker>
                            <input type="color" id="stripes" name="stripes"
                                value={stripes}
                                onChange={(e) => setStripes(e.target.value)} />
                            <Label htmlFor="stripes">Stripes</Label>
                        </Picker>

                        <Picker>
                            <input type="color" id="laces" name="laces"
                                value={laces}
                                onChange={(e) => setLaces(e.target.value)} />
                            <Label htmlFor="laces">Laces</Label>
                        </Picker>

                        <Picker>
                            <input type="color" id="sole" name="sole"
                                value={sole}
                                onChange={(e) => setSole(e.target.value)} />
                            <Label htmlFor="sole">Sole</Label>
                        </Picker>
                    </Colors>
                </Card>
            </InnerWrapper>
        </Wrapper>
    )
}
