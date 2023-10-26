import React from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Animated = ({ children, style }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Box ref={ref}>
      <Box
        style={{
          filter: !inView ? "opacity(0) blur(10px)" : "opacity(1) blur(0px)",
          transform: !inView ? "translate(0%, -5%)" : "translate(0%, 0%)",
          transition: "2s",
          ...style,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Animated;
