import Tilt from "react-parallax-tilt";

export default function TiltCard({ children }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.05}
      transitionSpeed={2000}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      className="rounded-2xl"
    >
      {children}
    </Tilt>
  );
}