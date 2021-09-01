import { Box, HStack, Image, Text } from "@chakra-ui/react";

export default function MessageBubble() {
  return (
    <Box maxWidth="60%" >
      <HStack spacing="10px" align="flex-start">
        <Image
          w="30px"
          h="30px"
          mt="4px"
          borderRadius="10px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          alt="User photo"
        />
        <Box p="14px" bgColor="gray.100" color="gray.700" width="90%" borderRadius="15px">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>
      </HStack>
    </Box>
  )
}