import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import ParallaxProps from "../components/home/parallaxProps";
import Layer3 from "../components/home/layer3";
import Layer2 from "../components/home/layer2";
import Layer1 from "../components/home/layer1";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  const parallax = useRef(null);

  return (
    <div style={{ width: "100%", height: "100%", background: "#28363b" }}>
      <Parallax ref={parallax} pages={3} style={{ backgroundColor: "#100b20" }}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BC" }}
        />

        <ParallaxProps />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Layer1 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Layer2 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Layer3 />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
