import { Box, Heading, Text, Link, Button, OrderedList, Flex, Center, IconButton, Icon, createIcon  } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  ChakraProvider, 
} from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CalendarIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionBox from "../../components/motion/MotionBox";
import MotionFlex from "../../components/motion/MotionFlex";
import { useEffect } from "react";
import Head from "next/head";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

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
        <MotionBox
          as="section"
          variants={{
            before: { opacity: 0, y: 20, transition: { type: "spring" } },
            after: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
          initial="before"
          animate="after"
        >
          <Box marginY={22}>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Heading flex="1" textAlign="left" size="lg" my="2">
                🕘&nbsp;&nbsp;Timeline Booklet 
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text mb="2">
                  Timeline dan progress pengerjaan buku tahunan 3'2021. 
                  Progress yang sedang dilakukan ditandai dengan indikator
                  khusus.
                </Text>
                
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton borderLeft="2px">
                      <Heading flex="1" textAlign="left" size="md">
                        ‣ November - Desember
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <OrderedList>
                        <ListItem>Adanya kegiatan pematangan konsep antara panitia booklet dengan tim nawa.</ListItem>
                        <ListItem>Pengumpulan data setiap anak untuk dicantumkan di dalam booklet.</ListItem>
                        <ListItem>Setiap kelas berdikusi mengenai tema, outfit, dan hal lainnya.</ListItem>
                        <ListItem>Proses input data dan layout design oleh tim Nawa.</ListItem>
                      </OrderedList>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton borderLeft="2px" borderColor="#CDCDCD">
                      <Heading flex="1" textAlign="left" size="md">
                        • Januari
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <OrderedList>
                        <Flex>
                          <Center>
                            <ListItem>Pelaksanaan sesi foto.&nbsp;&nbsp;</ListItem>
                            <Popover>
                              <PopoverTrigger>
                              <IconButton aria-label="Jadwal foto" size="sm" icon={<CalendarIcon />} />
                              </PopoverTrigger>
                              <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Jadwal dan Sesi Foto</PopoverHeader>
                                <PopoverBody>Klik tombok JADWAL FOTO di atas untuk mengetahui.</PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </Center>
                        </Flex>
                        <ListItem>Pengolahan foto oleh tim Nawa.</ListItem>
                        <ListItem>Input foto ke layout.</ListItem>
                        <ListItem>Revisi yang dilakukan oleh panitia.</ListItem>
                      </OrderedList>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton borderLeft="2px" borderColor="#CDCDCD">
                      <Heading flex="1" textAlign="left" size="md">
                        • Februari
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <OrderedList>
                        <ListItem>Persiapan produksi dan produksi booklet.</ListItem>
                      </OrderedList>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton borderLeft="2px" borderColor="#CDCDCD">
                      <Heading flex="1" textAlign="left" size="md">
                        • Maret
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <OrderedList>
                        <ListItem>Pengiriman booklet kepada setiap anak dan garansi jika ada kerusakan.</ListItem>
                      </OrderedList>
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
             <AccordionButton>
               <Heading flex="1" textAlign="left" size="lg" my="2">
               💵&nbsp;&nbsp;Termin Pembayaran 
               </Heading>
               <AccordionIcon />
             </AccordionButton>
             <AccordionPanel pb={4}>
              <StatGroup>
                <Stat borderTop="2px" borderColor="#00cc00" paddingTop="2">
                  <StatLabel>
                    <CheckCircleIcon color="#00cc00"/> Termin 1
                  </StatLabel>
                  <StatNumber>Rp100.000,00</StatNumber>
                  <StatHelpText>
                    November
                  </StatHelpText>
                </Stat>
                
                <Stat borderTop="2px" borderColor="#CDCDCD" paddingTop="2">
                  <StatLabel>
                    <CircleIcon color="#CDCDCD"/> Termin 2
                  </StatLabel>
                  <StatNumber>Rp100.000,00</StatNumber>
                  <StatHelpText>
                    Desember
                  </StatHelpText>
                </Stat>
                
                <Stat borderTop="2px" borderColor="#CDCDCD" paddingTop="2">
                  <StatLabel>
                    <CircleIcon color="#CDCDCD"/> Termin 3
                  </StatLabel>
                  <StatNumber>Rp110.000,00</StatNumber>
                  <StatHelpText>
                    Januari
                  </StatHelpText>
                </Stat>
              </StatGroup>
             </AccordionPanel>
           </AccordionItem>

            <AccordionItem>
             <AccordionButton>
               <Heading flex="1" textAlign="left" size="lg" my="2">
               📑&nbsp;&nbsp;Pengisian Data 
               </Heading>
               <AccordionIcon />
             </AccordionButton>
             <AccordionPanel pb={4}>
              <Text>
                Pastikan data yang kalian masukkan benar karena setiap data yang diinput
                krusial dan memakan waktu yang lama untuk revisi kembali.
              </Text>
              <Box marginY={5}>
                <Link
                  href="https://forms.gle/4wojrjeo35iJGth16"
                  rel="noopener noreferrer"
                  marginRight={11}
                  isExternal
                >
                  <Button>🧑 Form Biodata</Button>
                </Link>
                {/* <Link
                  href="#"
                  rel="noopener noreferrer"
                  marginRight={11}
                  isExternal
                > */}
                  <Button marginY={3}>🕗 Coming Soon</Button>
                {/* </Link> */}
                </Box>
            </AccordionPanel>
           </AccordionItem>
          </Accordion>
        </Box>
      </MotionBox>
    </>
  );
};

export default Booklet;
