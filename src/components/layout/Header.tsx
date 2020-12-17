import Link from "next/link";
import { Box, Flex, Text, Image, HStack, Center, Heading, Badge, useColorModeValue, useColorMode, IconButton, useDisclosure } from "@chakra-ui/react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Map from "./Map";

import { responsiveWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <Flex as="header" {...responsiveWidthProps} align="center">
      <Logo />
      <Link href="/" passHref>
        <Heading as="a" cursor="pointer" fontSize="4xl" fontFamily="Markazi Text, sans-serif">
          Warga Tiga
        </Heading>
      </Link>
      <Badge ml="2" fontSize="1em" variant="subtle">2021</Badge>
      <Box marginLeft="auto">
        <Map />
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
