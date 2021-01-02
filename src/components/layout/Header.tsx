import Link from "next/link";
import { Box, Flex, Text, Image, HStack, Center, Heading, Badge, useColorModeValue, useColorMode, IconButton, useDisclosure, Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Map from "./Map";

import { responsiveWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <HStack as="header" {...responsiveWidthProps} align="center" spacing="0px">
      <Logo />
      <Link href="/" passHref>
        <Heading mr={2} cursor="pointer" fontSize={{base: "30px", sm: "36px"}} fontFamily="Markazi Text, sans-serif">
          Warga Tiga
        </Heading>
      </Link>
      <Badge fontSize="1em" variant="subtle">2021</Badge>
      <Spacer />
      <Box>
        <HStack spacing="0px">
          <Map />
          <ThemeToggle />
        </HStack>
      </Box>
    </HStack>
  );
};

export default Header;
