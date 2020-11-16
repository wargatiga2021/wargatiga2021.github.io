import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import Card from "../components/Card";
import MotionFlex from "../components/motion/MotionFlex";

import { getSortedProjectsData } from "../helpers/projects";

const Home = ({ allProjectsData }) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection data={allProjectsData} />
    </>
  );
};

const HeroSection = () => {
  return (
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
          className="glow"
          src="/avataaars.svg"
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
        Warga Tiga 2021
        </Heading>
        <Text fontSize="xl">
        👋 Halo, Warga Tiga 21! Di situs ini kalian bisa mengakses berbagai informasi, pengumuman, 
        dan mengisi data.
        </Text>
      </Box>
    </MotionFlex>
  );
};

export default Home;
