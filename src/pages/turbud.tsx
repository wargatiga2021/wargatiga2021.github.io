import { Heading, Text, Box, BoxProps } from "@chakra-ui/react";
import Head from "next/head";

import MotionBox from "../components/motion/MotionBox";

const About = () => {
  return (
    <Box>
      <Head>
        <title>About | Warga Tiga 2021</title>
      </Head>
      <HeadSection />
      <AboutContent />
      <Links />
    </Box>
  );
};

const HeadSection = () => {
  return (
    <Box marginBottom={8}>
      <Heading>🏖 Tur Budaya</Heading>
    </Box>
  );
};

const AboutContent = () => {
  const textProps: BoxProps = {
    marginY: 4,
  };

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Text {...textProps}>
          Halaman dalam pengembangan.
      </Text>
    </MotionBox>
  );
};

export default About;