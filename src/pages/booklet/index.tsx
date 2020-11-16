import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionFlex from "../components/motion/MotionFlex";

const Booklet = () => {
  return (
    <>
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
          src="/app_icons/desbook-pwa.png"
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
          Booklet 3'2021
        </Heading>
        <Text fontSize="xl">
          Di halaman ini kalian dapat mengakses informasi terkait booklet 3'2021.
           Tahun ini, SMAN 3 Bandung bekerja sama dengan Nawa Factory dalam pembuatan 
           booklet.
        </Text>
      </Box>
    </MotionFlex>
        <Box marginY={22}>
          <Heading as="h2" size="lg">
              Timeline Booklet
          </Heading>
          <Text>
            Timeline pengerjaan booklet akan segera ditambahkan agar kamu tau sudah sejauh mana
            pembuatan booklet ini.
          </Text>
        </Box>
        <Box marginY={22}>
          <Heading as="h2" size="lg">
              Termin Pembayaran
          </Heading>
          <Text>
            Termin pembayaran booklet akan segera ditambahkan 
          </Text>
        </Box>
        <Box marginY={22}>
          <Heading as="h2" size="lg">
              Pengisian Data
          </Heading>
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