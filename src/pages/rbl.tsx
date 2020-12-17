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
import MotionBox from "../components/motion/MotionBox";
import MotionFlex from "../components/motion/MotionFlex";
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
        <title>RBL | Warga Tiga 2021</title>
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
            src="/app_icons/rbl.png"
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
            Research Based Learning
          </Heading>
          <Text fontSize="xl">
            Research Based Learning adalah program yang wajib dilaksanakan oleh 
            siswa-siswi SMAN 3 Bandung untuk menuntaskan mata pelajaran tertentu 
            dengan melakukan sebuah riset.
          </Text>
        </Box>
        </MotionFlex>
        <MotionBox
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
                📔&nbsp;&nbsp;List Riset
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text mb="2">
                  Informasi mengenai riset akan ditambahkan segera.
                </Text>
                
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton borderLeft="2px">
                      <Heading flex="1" textAlign="left" size="md">
                        Riset 1
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      TBA
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton borderLeft="2px" borderColor="#CDCDCD">
                      <Heading flex="1" textAlign="left" size="md">
                        Riset 2
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      TBA
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton borderLeft="2px" borderColor="#CDCDCD">
                      <Heading flex="1" textAlign="left" size="md">
                        Riset 3
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      TBA
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton borderLeft="2px" borderColor="#CDCDCD">
                      <Heading flex="1" textAlign="left" size="md">
                        Riset 4
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      TBA
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
             <AccordionButton>
               <Heading flex="1" textAlign="left" size="lg" my="2">
               📺&nbsp;&nbsp;Video Dokumenter RBL
               </Heading>
               <AccordionIcon />
             </AccordionButton>
             <AccordionPanel pb={4}>
               <Center>
                  <iframe 
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/QFHrl6UgeMk"
                    allowFullScreen
                  />
                </Center>
             </AccordionPanel>
           </AccordionItem>

          </Accordion>
        </Box>
      </MotionBox>
    </>
  );
};

export default Booklet;
