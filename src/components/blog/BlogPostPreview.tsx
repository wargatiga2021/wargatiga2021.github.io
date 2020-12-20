import { Box, Heading, Text, Flex, useColorModeValue, useColorMode, Icon } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "../motion/MotionBox";
import AccessibleLink from "../AccessibleLink";
import { FaChevronCircleRight, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

import { dateFormatLong } from "../../helpers/dateFormat";

import { BlogPostType } from "../../models/blog";

type BlogPostPreviewProps = {
  postData: BlogPostType;
};

const BlogPostPreview = ({ postData }: BlogPostPreviewProps) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      width="100%"
      marginY={22}
      variants={{
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
      }}
    >
      <AccessibleLink href={`/blog/${postData.id}`}>
        <MotionBox 
          rounded="md" 
          shadow="md" 
          padding={{base: "10px", sm: "12px"}}
          backgroundColor={colorMode === "light" ? "gray.100" : "teal.700"}
        >
          <Flex flexWrap={"wrap"} alignItems="center" width="100%">
            <Flex justifyContent="center" alignItems="center" flexBasis={["10%"]}>
              <Box boxSize="60%">
                <Image src={postData.thumbnail} alt={postData.title} unsized />
              </Box>
            </Flex>
            <Box flexBasis={["80%"]} paddingLeft={[11, 22]}>
              <Heading size="lg">{postData.title}</Heading>
              <Text size="sm">
                {dateFormatLong(postData.date)}
              </Text>
            </Box>
            <Flex align="center" flexBasis={["10%"]} justifyContent="flex-end" paddingRight={{base: "10px", sm: "25px"}}>
              <FaChevronCircleRight />
            </Flex>
          </Flex>
        </MotionBox>
      </AccessibleLink>
    </MotionBox>
  );
};

export default BlogPostPreview;
