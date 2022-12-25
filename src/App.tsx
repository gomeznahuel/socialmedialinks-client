import { Box, Container, Divider, Heading, Link, Text } from "@chakra-ui/react";
import { Props } from "./types";
import { CustomText } from "./components";
import CustomLink from "./components/CustomLink/CustomLink";
import { getData } from "./services";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [data, setData] = useState<Props[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData(import.meta.env.VITE_API_URL)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? <Loader /> :
      <Container minH='100vh' bg='blue.200' py='5' centerContent minW='100%'>
        <Box bg='blue.600' color='white' textAlign='center' px='6' py='3' rounded={5} minW={{ sm:"67%", md: "47%", lg: "37%", xl: "36%", '2xl': '27%' }}>
          <Heading as='h1'>My Social Media</Heading>
          <Divider mt='3' mb='5' />
          <Box display="flex" flexDirection="column" textAlign="center" mt={3}>
            {data.map((item: Props) => <CustomLink key={item.id} id={item.id} url={item.url} title={item.title} /> 
          )}

            <Divider mt='2' />

            <CustomText>
              <Text fontSize='2xl' fontWeight='medium'>
                Thanks for visiting!
              </Text>
              <Link href="https://www.github.com/gomeznahuel" color='blue.100' fontSize='lg' _hover={{ color: "blue.200", transform: "scale(1.05)", transition: "all 0.2s ease-in-out 0s" }}>
                @gomeznahueldev              
              </Link>
            </CustomText>
          </Box>
        </Box>
      </Container>
      }
    </>
  );
};

export default App;
