import { Box, IconButton, useDisclosure, HStack, Text, Icon, AspectRatio } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa"
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

function Map() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <IconButton
      aria-label="Show map" 
      icon={<FaMapMarkedAlt />} 
      mr={2}
      variant="outline"
      onClick={onOpen}
    />

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <Icon as={FaMapMarkerAlt} boxSize={4}/>
              <Text>Map</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7921.637014215003!2d107.615196!3d-6.912292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec1e28a948930064!2sSMA%20Negeri%203%20Bandung!5e0!3m2!1sen!2sid!4v1608195436372!5m2!1sen!2sid"
              alt="SMAN 3 Bandung Map"
            />
          </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Map;
