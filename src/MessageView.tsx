import { Box, Grid } from "@chakra-ui/react";
import MessageSelection from "./MessageSelection";

export default function MessageView() {
  return (
    <Grid mt="80px" templateColumns={{ base: "1fr", md: "2fr 5fr" }}>
      <Box display={{ base: "none", md: "block" }} minW="400px">
        <MessageSelection />
      </Box>
      <Box bgColor="white" />
    </Grid>
  )
}