import { Box, Flex, Heading, Text, Icon, HStack, Image } from "@chakra-ui/react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { FaUserEdit, FaRegCalendarAlt, FaRegUserCircle, FaRegUser } from "react-icons/fa";

import { renderers } from "../../components/blog/renderers";

import { getAllPostIds, getPostData } from "../../helpers/posts";
import { dateFormatLong } from "../../helpers/dateFormat";

import { BlogPostType } from "../../models/blog";

import styles from "./[id].module.scss";

type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <Box>
      <Head>
        <title>{postData.title} | Warga Tiga 21</title>
      </Head>
      <Flex alignItems="center" marginBottom={8}>
        <Box flexBasis={["80%"]}>
          <Heading size="2xl">{postData.title}</Heading>
          <HStack><Icon as={FaRegUser} boxSize={4} /><Text>{postData.author}</Text></HStack>
          <HStack><Icon as={FaRegCalendarAlt} boxSize={4} /><Text>{dateFormatLong(postData.date)}</Text></HStack>
        </Box>
        <Flex flexBasis={["20%"]}>
          <Box marginLeft="auto" width="60%">
            <Image src={postData.thumbnail} />
          </Box>
        </Flex>
      </Flex>
      <ReactMarkdown
        className={styles.content}
        children={postData.rawContent}
        renderers={renderers}
        allowDangerousHtml
      />
    </Box>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
};

export default BlogPost;
