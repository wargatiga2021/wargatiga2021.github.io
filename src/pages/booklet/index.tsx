import { Heading, Text, Link, Box, BoxProps } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import AccessibleLink from "../components/AccessibleLink";
import MotionBox from "../components/motion/MotionBox";
import MotionFlex from "../components/motion/MotionFlex";

const Booklet = () => {
  return (
    <Box>
      <Head>
        <title>Booklet | Warga Tiga 2021</title>
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
      <Heading>📔 Booklet</Heading>
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
        Di halaman ini kamu bisa mengetahui progress/timeline pengerjaan booklet, informasi termin
        pembayaran, dan list form yang harus kamu isi.
      </Text>
      <Text {...textProps}>
        Tahun ini, untuk pengerjaan booklet, SMAN 3 Bandung berkolaborasi dengan {" "}
        <AccessibleLink
          href="https://instagram.com/nawafactory"
          isExternal
        >
          <Text as="span" fontWeight={500}>
            Nawa Factory.
          </Text>
        </AccessibleLink>
      </Text>
    </MotionBox>
  );
};

export default Booklet;