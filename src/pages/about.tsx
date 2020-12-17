import { Heading, Text, Link, Box, BoxProps, Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaGithub, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import PropTypes from 'prop-types';

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
          Websitenya masih dalam proses pengembangan nih, nanti kalau udah beres semua,
          kalian bisa akses informasi tentang timeline/progress, termin pembayaran, 
          dan mengisi data untuk booklet, informasi mengenai tur budaya, graduation, dan lain-lain.
      </Text>
      <Text {...textProps}>
        Situs ini bersifat open-source dan dikembangkan menggunakan Typescript, Next.js, Framer, dan Chakra UI 
        kalian bisa menjadi kontributor dengan membantu mengembangkan situs ini di {" "}
        <AccessibleLink
          href="https://github.com/wargatiga2021"
          isExternal
        >
          <Text as="span" fontWeight={500}>
            Github.
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

  const MotionLinks = (props: { link: string; icon: Element; label: string; color: string; type: string }) => {
    const { link, icon, label, color, type } = props;
    return (
      <MotionBox {...childAnimationProps}>
        <Link href={link} isExternal>
          <IconButton mr={1} icon={icon} aria-label={label} colorScheme={color} variant={type} />
        </Link>
      </MotionBox>
    );
  };

  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">Our Social Media</Text>
      <MotionFlex fontSize="4xl" {...staggerAnimationProps}>
        <MotionLinks
          link={`https://twitter.com/wargatiga21`}
          icon={<FaTwitter />}
          label={"Warga Tiga 21's Twitter"}
        />
        <MotionLinks
          link={`https://www.instagram.com/wargatiga21`}
          icon={<FaInstagram />}
          label={"Warga Tiga 21's Instagram"}
        />
        <MotionLinks
          link={`https://www.youtube.com/watch?v=QFHrl6UgeMk`}
          icon={<FaYoutube />}
          label={"Warga Tiga 21's Youtube"}
        />
        <MotionLinks
          link={`https://open.spotify.com/user/z48wo09r6tbcyr7durogzkifs?si=VLJEpPBeSriN3kjyW_1pzQ`}
          icon={<FaSpotify />} 
          label={"Warga Tiga 21's Spotify"}
        />
        <MotionLinks 
          link={`https://github.com/wargatiga2021`}
          icon={<FaGithub />}
          type={'outline'}
          label={"Warga Tiga 21's Github"}
        />
        <MotionLinks
          link={`mailto:warga32021@gmail.com`}
          icon={<FaEnvelope />}
          type={'outline'}
          label={"Warga Tiga 21's Email"}
        />
      </MotionFlex>
    </MotionBox>
  );
};

export default About;
