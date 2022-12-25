import { Center, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Center bg="blue.200" color="white" w="100%" h="100vh">
      <Text fontSize="5xl" fontWeight="medium">
        Loading...
      </Text>
    </Center>
  );
};

export default Loader;
