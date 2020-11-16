import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import Card from "../components/Card";
import MotionFlex from "../components/motion/MotionFlex";

import { getSortedProjectsData } from "../helpers/projects";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

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

// PROJECTS
const ProjectsSection = ({ data }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .map(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
  });

  return (
    <Box as="section" paddingY={22}>
      <Box>
        <Box>
          <Link href="/projects">
            <Heading as="h1" size="2xl" cursor="pointer">
              📅 Projects and Events
            </Heading>
          </Link>
          <Text>Di bawah ini tercantum beberapa project dan kegiatan Warga Tiga 2021.</Text>
        </Box>
        <MotionFlex
          wrap="wrap"
          marginTop={22}
          variants={{
            before: {},
            after: { transition: { staggerChildren: 0.06 } },
          }}
          initial="before"
          animate="after"
        >
          {data
            .filter((project) => project.highlight && project)
            .map(({ id, title, thumbnail }, index) => {
              return (
                <Card
                  title={title}
                  handleClick={() =>
                    router.push("/projects/[id]", `/projects/${id}`)
                  }
                  img={thumbnail}
                  key={index}
                />
              );
            })}
        </MotionFlex>
        <Link href="/projects">
          <Button
            width="100%"
            borderRadius={20}
            height={55}
            backgroundColor={colorMode === "light" ? "gray.100" : "teal.700"}
            _hover={{
              backgroundColor: colorMode === "light" ? "gray.300" : "teal.300",
              color: "black",
            }}
          >
            lihat selengkapnya
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

// SOCIAL MEDIA
const SocialSection = ({ data }) => {
  // const router = useRouter();
  const { colorMode } = useColorMode();

  // useEffect(() => {
  //   data
  //     .filter((project) => project.highlight && project)
  //     .map(({ id }) => {
  //       router.prefetch("/projects/[id]", `/projects/${id}`);
  //     });
  // });

  return (
    <Box as="section" paddingY={22}>
      <Box>
        <Box>
          <Link href="/projects">
            <Heading as="h1" size="2xl" cursor="pointer">
              📱 Find Us On
            </Heading>
          </Link>
          <Text>Media sosial 3'2021.</Text>
        </Box>
        <MotionFlex
          wrap="wrap"
          marginTop={22}
          variants={{
            before: {},
            after: { transition: { staggerChildren: 0.06 } },
          }}
          initial="before"
          animate="after"
        >
          <Link href="https://www.youtube.com/watch?v=QFHrl6UgeMk">
            <Card
              title={'RBL Documenter Video'}
              img={
                <FontAwesomeIcon icon={faYoutube} style={{ cursor: "pointer" }} />
              }
            />
          </Link>
        </MotionFlex>
      </Box>
    </Box>
  );
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default Home;
