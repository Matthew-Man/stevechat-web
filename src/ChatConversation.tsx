import { Box, Heading, Text } from "@chakra-ui/react";
import MessageBubble from "./MessageBubble";
import MessageInputs from "./MessageInputs";

export default function ChatConversation() {
  return (
    <>
      <Box bgColor="white" p="40px">
        <Heading fontSize="24px" color="gray.700">
          Timothy Placename
        </Heading>
        <Box
          bgColor="blue.50"
          maxW={{ base: "80%", m: "60%" }}
          p="20px 40px"
          m="40px 40px 40px -40px"
          bgGradient="linear(to-r, #e3f0fa, #f2f9ff)"
        >
          <Heading size="xs" color="blue.400">
            Welcome to your personal Stevechat conversation
          </Heading>
          <Text mt="6px" fontSize="14px" color="#6e8a9c" fontWeight="med">
            Conversation description placeholder. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.{" "}
          </Text>
        </Box>
        <Box mt="40px">
          <MessageBubble />
          <MessageBubble isMyMessage />
        </Box>
      </Box>
      <Box>
        <MessageInputs />
      </Box>
    </>
  );
}
