import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Icon, Spacer } from "@chakra-ui/react";

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
        <Heading size="md" fontWeight="semibold">Chats</Heading>
        <Spacer />
        <HStack spacing="20px">
          <Icon as={SearchIcon} />
          <Icon as={AddIcon} />
        </HStack>
      </Flex>
    </Box>
  )
}