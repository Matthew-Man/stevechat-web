import { Box, Heading } from "@chakra-ui/react";

export default function ChatConversation() {
  return (
    <Box bgColor="white" p="40px">
      <Heading fontSize="24px" color="gray.700">Timothy Placename</Heading>
      <Box bgColor="blue.50" maxW="60%" p="20px 40px" m="40px 40px 40px -40px" bgGradient="linear(to-r, #d7ebfa, #f2f9ff)">
        <Heading
          size="xs"
          color="blue.400"
        >Welcome to your personal Stevechat conversation</Heading>
      </Box>
    </Box>
  )
}