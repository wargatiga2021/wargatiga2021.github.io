import {
    Box,
    Button,
    Heading,
    Text,
    Link as ChakraLink,
    Image,
    useColorModeValue,
    Icon
  } from "@chakra-ui/react";
import Link from "next/link";
import MotionBox from "../components/motion/MotionBox";
import { FaHome } from "react-icons/fa";
import Head from "next/head";
  
const Page404 = () => {
const buttonBackgroundColor = useColorModeValue("gray.300", "gray.500");

return (
    <>
    <Head>
        <title>Are you lost baby? | Warga Tiga 21</title>
    </Head>
    <MotionBox
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
    >
        <Image src="/404.svg" />
    </MotionBox>
    <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
        Illustration by Freepik Stories
        </ChakraLink>
    </Text>

    <Box marginY={4}>
        <Heading textAlign="center" fontSize="3xl" marginBottom={2}>
        Seems like you're lost.
        </Heading>

        <Box textAlign="center">
        <Link href="/" passHref>
            <Button backgroundColor={buttonBackgroundColor}>
            <Icon as={FaHome} boxSize={4} mr={2} />Let's Head Back
            </Button>
        </Link>
        </Box>
    </Box>
    </>
);
};

export default Page404;