import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionFlex from "../components/motion/MotionFlex";
import { useEffect } from "react";
import Head from "next/head";

const Turbud = () => {
  return (
    <>
      <Head>
        <title>Turbud | Warga Tiga 2021</title>
      </Head>
      <MotionFlex
        marginY={"2.75rem"}
        as="section"
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <Box boxSize={[100, 160]}>
          <Image
            width={160}
            height={160}
            src="/app_icons/beach.png"
            alt="Warga Tiga 2021"
          />
        </Box>
        <Box
          verticalAlign="center"
          width={["100%", "80%", "60%"]}
          paddingX={22}
          alignSelf={["none", "center"]}
        >
          <Heading as="h1" size="2xl" paddingBottom={11}>
            Tur Budaya 3'2021
          </Heading>
          <Text fontSize="xl">
            Halaman ini sedang dikembangkan.
          </Text>
        </Box>
      </MotionFlex>
    </>
  );
};

export default Turbud;