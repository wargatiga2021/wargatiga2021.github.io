import { Heading, Text, Link, Box, BoxProps, Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaGithub, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import PropTypes from 'prop-types';
import React from "react";

import AccessibleLink from "../components/AccessibleLink";
import MotionBox from "../components/motion/MotionBox";
import MotionFlex from "../components/motion/MotionFlex";

const About = () => {
  return (
    <Box>
      <Head>
        <title>About | Warga Tiga 2021</title>
      </Head>
      <HeadSection />
      <AboutContent />
      <Links />
    </Box>
  );
};

const HeadSection = () => {
  return (
    <Box marginBottom={8}>
      <Heading>👋 Halo, Warga Tiga 2021!</Heading>
    </Box>
  );
};

const AboutContent = () => {
  const textProps: BoxProps = {
    marginY: 4,
  };

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Text {...textProps}>
          Stay tuned terus ya di website ini. Kalian bisa akses informasi tentang timeline/progress, 
          termin pembayaran, dan mengisi data untuk booklet, informasi mengenai tur budaya, 
          graduation, bahkan cerita pengalaman teman-teman kita selama bersekolah di SMAN 3 Bandung 
          ataupun setelah lulus nanti.
      </Text>
      <Text {...textProps}>
        Situs ini bersifat open-source dan dikembangkan menggunakan Typescript, Next.js, Framer, dan Chakra UI 
        kalian bisa menjadi kontributor dengan membantu mengembangkan situs ini di {" "}
        <AccessibleLink
          href="https://github.com/wargatiga2021"
          isExternal
        >
          <Text as="span" fontWeight={500}>
            Github. {" "}
          </Text>
        </AccessibleLink>
        Based on {" "}
        <AccessibleLink
          href="https://github.com/sozonome/sznm.dev"
          isExternal
        >
          <Text as="span" fontWeight={500}>
            Sozonome's dev site.
          </Text>
        </AccessibleLink>
      </Text>
    </MotionBox>
  );
};

const Links = () => {
  const wrapperAnimationProps = {
    variants: {
      before: { y: 0, opacity: 0, transition: { type: "spring" } },
      after: { y: 20, opacity: 1, transition: { type: "spring" } },
    },
    initial: "before",
    animate: "after",
  };

  const staggerAnimationProps = {
    variants: {
      before: {},
      after: { transition: { staggerChildren: 0.06 } },
    },
    initial: "before",
    animate: "after",
  };

  const childAnimationProps = {
    variants: {
      before: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
        },
      },
      after: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">Our Social Media</Text>
      <MotionFlex fontSize="4xl" {...staggerAnimationProps}>
        <MotionBox {...childAnimationProps}>
          <Link href="https://twitter.com/wargatiga21" isExternal>
            <IconButton 
              mr={1}
              icon={<FaTwitter />} 
              aria-label="Warga Tiga 21's Twitter"
            />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link href="https://www.instagram.com/wargatiga21/" isExternal>
            <IconButton 
              mr={1}
              icon={<FaInstagram />} 
              aria-label="Warga Tiga 21's Instagram"
            />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link href="https://www.youtube.com/watch?v=QFHrl6UgeMk" isExternal>
            <IconButton 
              mr={1}
              icon={<FaYoutube />} 
              aria-label="Warga Tiga 21's Youtube"
            />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link href="https://open.spotify.com/user/z48wo09r6tbcyr7durogzkifs?si=VLJEpPBeSriN3kjyW_1pzQ" isExternal>
            <IconButton 
              mr={1}
              icon={<FaSpotify />} 
              aria-label="Warga Tiga 21's Spotify"
            />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link href="https://github.com/wargatiga2021" isExternal>
            <IconButton 
              mr={1}
              icon={<FaGithub />} 
              aria-label="Warga Tiga 21's Github"
              variant="outline"
            />
          </Link>
        </MotionBox>
        <MotionBox {...childAnimationProps}>
          <Link href="mailto:warga32021@gmail.com" isExternal>
            <IconButton 
              mr={1}
              icon={<FaEnvelope />} 
              aria-label="Warga Tiga 21's Email"
              variant="outline"
            />
          </Link>
        </MotionBox>
      </MotionFlex>
    </MotionBox>
  );
};

export default About;
