import { Heading, Box } from "@chakra-ui/react";
import Head from "next/head";

import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";
import MotionBox from "../../components/motion/MotionBox";

import { getSortedProjectsData } from "../../helpers/projects";

import { ProjectType } from "../../models/project";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  return (
    <Box>
      <Head>
        <title>Projects | Warga Tiga 2021</title>
      </Head>
      <Box marginBottom={22}>
        <Heading as="h1" size="2xl">
          📅 Projects and Event
        </Heading>
        <Heading as="p" size="md" fontWeight="normal">
        Di bawah tercantum kegiatan dan project yang akan kita laksanakan.
        </Heading>
      </Box>
      <MotionBox
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.06 } },
        }}
        initial="before"
        animate="after"
      >
        {/* Highlight */}
        {allProjectsData
          .filter((project) => project.featured && project)
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}

        {/* Other Projects */}
        {allProjectsData
          .filter((project) => !project.featured && project)
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}
      </MotionBox>
    </Box>
  );
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default Projects;
