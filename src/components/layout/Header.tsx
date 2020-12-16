import Link from "next/link";
import { Box, Flex, Text, Image, Center, Heading, Badge, useColorModeValue, useColorMode } from "@chakra-ui/react";
import Logo from "./logo";
import ThemeToggle from "./ThemeToggle";

import { responsiveWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <Flex as="header" {...responsiveWidthProps}>
      <Center>
      <Logo />
      </Center>
      <Link href="/" passHref>
        <Heading as="a" cursor="pointer" fontSize="4xl" fontFamily="Markazi Text, sans-serif">
          Warga Tiga
        </Heading>
      </Link><br/>
      <Center>
        <Badge ml="2" fontSize="1em" variant="subtle">2021</Badge>
      </Center>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
