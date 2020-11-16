import { Heading, Text, Link, Box, BoxProps } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import AccessibleLink from "../components/AccessibleLink";
import MotionBox from "../components/motion/MotionBox";
import MotionFlex from "../components/motion/MotionFlex"; 

const Graduation = () => {
  return (
    <Box>
      <Head>
        <title>Graduation | Warga Tiga 2021</title>
      </Head>
      <HeadSection />
      <AboutContent />
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
          Coming soon! Siap-siap aja dulu, belajar yang bener. 
          Semoga bisa lulus dari sini dan masuk universitas impian!
      </Text>
    </MotionBox>
  );
};

export default Graduation;