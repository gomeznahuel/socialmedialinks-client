import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const CustomText = ({ children }: Props) => {
  return <Box bg='blue.600' textAlign='center' mt='3'>{children}</Box>;
};
