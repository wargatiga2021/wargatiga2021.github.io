import { Heading, Text, Link, Box, BoxProps } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

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
        Situs ini bersifat open-source dan dikembangkan menggunakan Typescript dan Next.js, 
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

  const MotionLinks = (props: { link: string; icon: IconProp }) => {
    const { link, icon } = props;
    return (
      <MotionBox {...childAnimationProps}>
        <Link href={link} marginRight={11} isExternal>
          <FontAwesomeIcon icon={icon} />
        </Link>
      </MotionBox>
    );
  };

  return (
    <MotionBox marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">Our Social Media</Text>
      <MotionFlex fontSize="4xl" {...staggerAnimationProps}>
        <MotionLinks
          link={`https://github.com/wargatiga2021`}
          icon={["fab", "github"]}
        />
        <MotionLinks
          link={`https://twitter.com/wargatiga21`}
          icon={["fab", "twitter"]}
        />
        <MotionLinks
          link={`https://www.instagram.com/wargatiga21`}
          icon={["fab", "instagram"]}
        />
        <MotionLinks
          link={`https://www.youtube.com/watch?v=QFHrl6UgeMk`}
          icon={["fab", "youtube"]}
        />
        <MotionLinks
          link={`https://open.spotify.com/user/z48wo09r6tbcyr7durogzkifs?si=VLJEpPBeSriN3kjyW_1pzQ`}
          icon={["fab", "spotify"]} />
        <MotionLinks
          link={`mailto:warga32021@gmail.com`}
          icon={faEnvelope}
        />
      </MotionFlex>
    </MotionBox>
  );
};

export default About;
