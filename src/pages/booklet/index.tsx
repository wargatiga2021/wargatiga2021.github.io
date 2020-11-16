import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionFlex from "../../components/motion/MotionFlex";
import { useEffect } from "react";
import Head from "next/head";

const Booklet = () => {
  return (
    <>
      <Head>
        <title>Booklet | Warga Tiga 2021</title>
      </Head>
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
                Timeline Booklet 🕘
            </Heading>
            
              <Box marginY={30}>
              <Heading as="h3" size="md">
                ‣ November - Desember
              </Heading>
              <Text>
                1. Adanya kegiatan pematangan konsep antara panitia booklet dengan tim nawa.
              </Text>
              <Text>
                2. Pengumpulan data setiap anak untuk dicantumkan di dalam booklet.
              </Text>
              <Text>
                3. Setiap kelas berdikusi mengenai tema, outfit, dan hal lainnya.
              </Text>
              <Text>
                4. Proses input data dan layout design oleh tim Nawa
              </Text>
            </Box>
            <Box marginY={30}>
              <Heading as="h3" size="md">
                Januari
              </Heading>
              <Text>
                1. Pelaksanaan sesi foto.
              </Text>
              <Text>
                2. Pengolahan foto oleh tim Nawa.
              </Text>
              <Text>
                3. Input foto ke layout.
              </Text>
              <Text>
                4. Revisi yang dilakukan oleh panitia.
              </Text>
            </Box>
            <Box marginY={30}>
              <Heading as="h3" size="md">
                Februari
              </Heading>
              <Text>
                1. Persiapan produksi dan produksi booklet.
              </Text>
            </Box>
            <Box marginY={30}>
              <Heading as="h3" size="md">
                Maret
              </Heading>
              <Text>
                1. Pengiriman booklet kepada setiap anak dan garansi jika ada kerusakan.
              </Text>
            </Box>
          </Box>
          <Box marginY={22}>
            <Heading as="h2" size="lg">
                Termin Pembayaran 💵
            </Heading>
            <Text fontWeight={500}>
              ‣ 9-30 November 110.000
            </Text>
            <Text>
              1-31 Desember 100.000 
            </Text>
            <Text>
              1-22 Januari 100.000
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
    </>
  );
};

export default Booklet;