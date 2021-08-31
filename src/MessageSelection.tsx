import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Icon, Spacer, VStack } from "@chakra-ui/react";
import ConversationListItem from "./ConversationListItem";

export default function MessageSelection() {
  return (
    <Box
      bgColor="white"
      h="90vh"
      p="40px"
      borderRight={1}
      borderStyle="solid"
      borderColor="gray.200"
    >
      <Flex>
        <Heading size="md" fontWeight="semibold" color="gray.800">Chats</Heading>
        <Spacer />
        <HStack spacing="20px">
          <Icon as={SearchIcon} color="gray.500" _hover={{ color: "gray.600" }} />
          <Icon as={AddIcon} color="blue.500" _hover={{ color: "blue.800" }} />
        </HStack>
      </Flex>
      <VStack spacing="10px" mt="40px">
        <ConversationListItem />
        <ConversationListItem />
      </VStack>
    </Box>
  )
}