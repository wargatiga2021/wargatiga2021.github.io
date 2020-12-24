import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Text, Button, useColorMode, useColorModeValue, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

import Card from "../components/Card";
import MotionFlex from "../components/motion/MotionFlex";
import MotionBox from "../components/motion/MotionBox";
import BlogPostPreview from "../components/blog/BlogPostPreview";
import FeaturesSection from "../components/layout/Features";

import { getSortedProjectsData } from "../helpers/projects";
import { getSortedPostsData } from "../helpers/posts";

const Home = ({ allPostsData }) => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <RecentPostSection allPostsData={allPostsData} />
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
          src="/avatar.png"
          className="glow"
          alt=""
        />
      </Box>
      <Box
        verticalAlign="center"
        width={["100%", "80%", "60%"]}
        paddingX={22}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="2xl" paddingBottom={11}>
          Halo! Warga Tiga 2021,
        </Heading>
        <Text fontSize="xl">
          Selamat datang di situs web 3'2021. Kalian bisa mengakses banyak hal di sini. 
          Mulai dari kegiatan, informasi, cerita, dan lain-lain.
        </Text>
      </Box>
    </MotionFlex>
  );
};

const ProjectsSection = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box as="section" paddingY={22} marginY={16}>
        <Box>
          <Box>
            <Heading as="h1" size="2xl">
              Projects and Events
            </Heading>
            <Text>
              Agenda, kegiatan, dan project yang telah/sedang/akan kita laksanakan. 
              Tap/klik untuk melihat detailnya.
            </Text>
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

            {/* {data
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
              })} */}

            <Card
              title = "Booklet"
              img = "/app_icons/desbook-pwa.png"
              handleClick = {() =>
                router.push("/booklet")
              }
            />
            <Card
              title = "Turbud"
              img = "/app_icons/beach.png"
              handleClick = {() =>
                router.push("/turbud")
              }
            />
            <Card
              title = "Research Based Learning"
              img = "/app_icons/rbl.png"
              handleClick = {() =>
                router.push("/rbl")
              }
            />
            <Card
              title = "Gayapatri"
              img = "/app_icons/gayapatri.png"
            />

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
    </>
  );
};

const RecentPostSection = ({ allPostsData }) => {
  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.700");
  const { colorMode } = useColorMode();


  return (
    <Box as="section" marginY={24}>
      <Heading size="2xl" marginBottom={2}>
        News and Information
      </Heading>
      <Text>Informasi, artikel, berita, dan pengumuman untuk 3'2021.</Text>
      <MotionBox
        marginTop={22}
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.06 } },
        }}
        initial="before"
        animate="after"
      >
        {allPostsData
          .filter((post) => post.published === true)
          .slice(0, 2)
          .map((postData, index) => (
            <BlogPostPreview postData={postData} key={index} />
          ))}
      </MotionBox>

      <Link href="/blog" passHref>
        <Button
          isFullWidth
          width="100%"
          borderRadius={20}
          height={55}
          backgroundColor={colorMode === "light" ? "gray.100" : "teal.700"}
          _hover={{
            backgroundColor: colorMode === "light" ? "gray.300" : "teal.300",
            color: "black",
          }}
          fontFamily="Catamaran, sans-serif"
        >
          lihat selengkapnya
        </Button>
      </Link>
    </Box>
  );
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
};

export default Home;
