import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function ConversationListItem() {
  return (
    <Box
      h="90px"
      w="100%"
      p="20px"
      bgColor="white"
      cursor="pointer"
      _hover={{ bgColor: "gray.50", transition: "500ms" }}
      borderRadius={8}
    >
      <HStack>
        <Image
          w="50px"
          h="50px"
          borderRadius="16px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          alt="User photo"
        />
        <VStack align="flex-start" pl="10px" spacing={1} w="80%">
          <Heading size="xs">Timothy Placename</Heading>
          <HStack w="100%" justify="space-between">
            <Text fontSize="13px" color="gray.600" fontWeight="medium">You: Lorem ipsum this is</Text>
            <Text fontSize="12px" color="gray.500" fontWeight="semibold">12m</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}