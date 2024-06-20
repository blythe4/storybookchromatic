"use client";

import { Box, Center, Flex, Square, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      bg={{ base: "rgb(var(--background-start-rgb))", md: "red", lg: "green" }}
    >
      <Center>차크라</Center>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
      <Stack
        direction={["row", "column", "row", "column", "row"]}
        spacing="24px"
      >
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>
    </Box>
  );
}
