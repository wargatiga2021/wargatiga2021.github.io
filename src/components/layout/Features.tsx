import { useColorMode, Box, Grid, GridItem, Flex, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion";
import MotionFlex from "../motion/MotionFlex";

import { FaChevronCircleRight } from "react-icons/fa";

type CardProps = {
  title: string;
  img?: string;
  handleClick?: () => void;
};

const Card = () => {
  const MotionCard = motion.custom(Box);
  const { colorMode } = useColorMode();

  return (
    <MotionCard
      // Chakra UI props
      shadow="lg"
      height={{base: "100px", sm: "200px"}}
      width="23%"
      maxWidth="170px"
      backgroundColor={colorMode === "light" ? "gray.200" : "teal.700"}
      borderRadius={6}
      cursor={"pointer"}

      // Motion API
      whileHover={{ scale: 1.03 }}
      variants={{
        before: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
      }}
    />
  );
};

const ContentCard = () => {
  const MotionCard = motion.custom(Box);
  const { colorMode } = useColorMode();

  return (
    <MotionCard
      // Chakra UI props
      shadow="lg"
      height="200px"
      width="23%"
      maxWidth="170px"
      backgroundColor={colorMode === "light" ? "gray.200" : "teal.700"}
      borderRadius={6}
      cursor={"pointer"}

      // Motion API
      whileHover={{ scale: 1.03 }}
      variants={{
        before: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
      }}
    />
  );
};

const FeaturedCard = () => {
  const MotionCard = motion.custom(Box);
  const { colorMode } = useColorMode();

  return (
    <MotionCard
      // Chakra UI props
      shadow="lg"
      height="200px"
      width="73%"
      backgroundColor={colorMode === "light" ? "gray.200" : "teal.700"}
      borderRadius={6}
      cursor={"pointer"}

      // Motion API
      whileHover={{ scale: 1.03 }}
      variants={{
        before: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
      }}
    />
  );
};

const FeaturesSection = () => {

  return (
    <Box marginY={20} marginX="auto" width={{base: "100%", sm: "90%"}} height="700px">
        <MotionFlex 
        justifyContent="space-around"
        marginBottom={5}
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </MotionFlex>
      <MotionFlex
        justifyContent="space-around"
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <FeaturedCard />
        <ContentCard />
      </MotionFlex>
    </Box>
  );
};

export default FeaturesSection;

// Flex layout
{/* 
  <MotionFlex 
        justifyContent="space-around"
        marginBottom={5}
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </MotionFlex>
      <MotionFlex
        justifyContent="space-around"
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <FeaturedCard />
        <ContentCard />
      </MotionFlex>
*/}

// Grid Layout
{/* 
  <Box marginY={20} marginX="auto" width={{base: "100%", sm: "90%"}}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={9}
          h="600px"
        >
          <GridItem colSpan={1} borderRadius={6} bg="gray.200" shadow="md" />
          <GridItem colSpan={1} borderRadius={6} bg="gray.200" shadow="md" />
          <GridItem colSpan={1} borderRadius={6} bg="gray.200" shadow="md" />
          <GridItem colSpan={1} borderRadius={6} bg="gray.200" shadow="md" />
        </Grid>
    </Box>
*/}