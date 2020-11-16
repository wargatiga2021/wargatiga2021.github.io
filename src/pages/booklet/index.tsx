import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Booklet = () => {
  return (
    <>
      <Box as="article">
        <Image
          src="/app_icons/desbook-pwa.png"
          width={110}
          height={110}
          alt="Booklet"
        />
        <Box marginY={22}>
          <Heading as="h1" size="2xl">
            Booklet 3'2021
          </Heading>
        </Box>
        <Heading as="h2" size="lg">
            Timeline Booklet
        </Heading>
        <Text>
          Timeline pengerjaan booklet akan segera ditambahkan agar kamu tau sudah sejauh mana
          pembuatan booklet ini.
        </Text>
        <Heading as="h2" size="lg">
            Termin Pembayaran
        </Heading>
        <Text>
          Termin pembayaran booklet akan segera ditambahkan 
        </Text>
        <Heading as="h2" size="lg">
            Pengisian Data
        </Heading>
        <Box marginY={22}>
          <Link
            href="/booklet/biodata"
            rel="noopener noreferrer"
            marginRight={11}
            isExternal
          >
            <Button>📑 Form Biodata</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Booklet;