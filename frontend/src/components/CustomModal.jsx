import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import useModal from "../hooks/useModal";

const CustomModal = () => {
  const { isOpen, closeModal, modalContent } = useModal();

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="#F9F7F3"
        borderRadius="lg"
        p={4}
        boxShadow="xl"
      >
        <ModalHeader>
          <Text fontSize="2xl" fontWeight="bold">
            Confirmação
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="lg" color="gray.800">
            {modalContent}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button bg="#FFD6FF" mr={3} onClick={closeModal}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
