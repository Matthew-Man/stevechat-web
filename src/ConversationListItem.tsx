import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function ConversationListItem() {
  return (
    <Box
      h="90px"
      w="100%"
      p="15px"
      bgColor="white"
      _hover={{ bgColor: "gray.100", transition: "500ms" }}
      borderRadius={8}
    >
      <HStack>
        <Image
          w="60px"
          h="60px"
          borderRadius="5px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          alt="User photo"
        />
        <VStack align="flex-start" pl="10px">
          <Heading size="xs">Timothy Placename</Heading>
          <Text fontSize="14px" color="gray.600">You: Lorem ipsum this is</Text>
        </VStack>
      </HStack>
    </Box>
  )
}