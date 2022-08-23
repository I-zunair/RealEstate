import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton,Stack, Container, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Zuni Property </Link>
    </Box>
    <Spacer />
    
    <Box
      bg={'gray.50'}
      color={'gray.700'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
    
        <Stack direction={'row'} spacing={6} fontWeight='bold' fontSize='lg' >
        <Link href='/' passHref icon={<BsSearch />}> Home</Link>
        <Link href='/search' passHref icon={<BsSearch />}>Search</Link>
        <Link href='/search?purpose=for-sale' passHref icon={<FcAbout />}>BUY</Link>
        <Link href='/search?purpose=for-rent' passHref icon={<FiKey />}>Rent</Link>
        </Stack>
      </Container>
      
          
      
    </Box>
  
  </Flex>
);

export default Navbar;
