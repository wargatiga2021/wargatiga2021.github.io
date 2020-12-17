import { Box, IconButton, useColorMode, useDisclosure } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { FaMapMarkedAlt } from "react-icons/fa"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react"

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
        
  return (
    <IconButton
      aria-label="toggle theme mode"
      icon={colorMode === "light" ? <BsMoon /> : <FiSun />}
      onClick={toggleColorMode}
      backgroundColor={colorMode === "light" ? "gray" : "teal.900"}
    />
  );
};

export default ThemeToggle;
