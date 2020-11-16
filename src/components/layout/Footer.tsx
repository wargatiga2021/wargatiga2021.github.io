import { Box, Link, Text } from "@chakra-ui/react";

import { responsiveWidthProps } from "../../styles/customTheme";

const Footer = () => {
  return (
    <Box as="footer" {...responsiveWidthProps}>
      <Text fontSize="sm">
        2020 -{" "}
        <Link
          href="https://link.osissman3bdg.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Warga Tiga 2021
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
