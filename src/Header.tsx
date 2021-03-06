import { Box, Flex, Heading, HStack, Icon, Image, IconButton, Link, SkeletonCircle, Spacer, Text } from "@chakra-ui/react";
import { AiFillMessage } from "react-icons/ai";
import { GrNotification } from "react-icons/gr"

export default function Header() {
  return (
    <Box p="0px 20px" borderBottom={1} borderStyle="solid" borderColor="gray.200" bgColor="white">
      <Flex h="10vh" align="center" >
        <Link href="/">
          <HStack spacing="0px">
            <Image src="/stevechat-steve.png" alt="Stevechat Steve Chick" h="60px" w="60px" />
            <Heading fontSize="24px" fontWeight="medium" color="blue.800">SteveChat Web</Heading>
          </HStack>
        </Link>
        <Spacer />
        <HStack spacing={6}>
          <IconButton
            as={GrNotification}
            aria-label="Notifications"
            variant="unstyled"
            size="xxs"
          />
          <SkeletonCircle size="10" />
        </HStack>
      </Flex>
    </Box>
  )
}