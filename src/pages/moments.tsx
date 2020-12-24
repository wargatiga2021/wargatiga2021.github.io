import PLiST from "../components/moments/PLiST";
import Marva from "../components/moments/Marva";
import Bakdes from "../components/moments/Bakdes";

import MotionFlex from "../components/motion/MotionFlex";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Moments = () => {
  return (
    <>
      <Head>
        <title>Moments | Warga Tiga 21</title>
      </Head>
      <MotionFlex
        marginY={"2.75rem"}
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
        justifyContent="center"
        flexDirection="column"
        align="center"
      >
        <Box 
          shadow="md" 
          maxW="400px" 
          bg="white" 
          paddingTop={2}
          paddingX={2}
          paddingBottom={4}
        >
          <PLiST />
        </Box>
        {/*<Box 
          shadow="md" 
          maxW="400px"
          bg="white" 
          paddingTop={2}
          paddingX={2}
          paddingBottom={4}
          marginTop={3}
        >
          <Marva />
        </Box>
        <Box 
          shadow="md" 
          maxW="400px"
          bg="white" 
          paddingTop={2}
          paddingX={2}
          paddingBottom={4}
          marginTop={3}
        >
          <Bakdes />
        </Box> */}
      </MotionFlex>
    </>
  );
};

export default Moments;