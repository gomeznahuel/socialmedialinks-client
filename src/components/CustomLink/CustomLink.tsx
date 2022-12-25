import { Link } from '@chakra-ui/react'
import { Props } from '../../types'

const CustomLink = ({id, url, title}: Props) => {
  return (
    <Link key={id} href={url} target="_blank" bg='gray.900' mb='5' rounded={5} p={5} _hover={{ bg: "gray.800", transform: "scale(1.05)", transition: "all 0.2s ease-in-out 0s" }} cursor='pointer'>
      {title}
   </Link>
  )
}

export default CustomLink