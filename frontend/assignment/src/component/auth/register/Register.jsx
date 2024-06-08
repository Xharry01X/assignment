import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box
      bg="gray.900"
      color="white"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <VStack
        spacing={4}
        width={{ base: '100%', sm: '400px' }}
        padding={6}
        boxShadow="2xl"
        borderRadius="md"
        bg="gray.800"
      >
        <Heading as="h1" size="lg" mb={4}>
          Register
        </Heading>
        <FormControl id="email-login" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            name="username"
            value={user.username}
            onChange={handleChange}
            bg="gray.700"
            border="none"
            color="white"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>
        <FormControl id="password-login" isRequired>
          <FormLabel>Password</FormLabel>
          <Box
            bg="gray.700"
            display="flex"
            alignItems="center"
            borderRadius="md"
            paddingRight="1rem"
          >
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Enter Your Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              bg="gray.700"
              border="none"
              color="white"
              _placeholder={{ color: 'gray.400' }}
            />
            <Button
              onClick={handleClick}
              variant="ghost"
              colorScheme="blue"
              borderRadius="full"
              size="sm"
              ml={-10}
              zIndex={1}
            >
              {show ? <AiFillEyeInvisible size="1.5em" /> : <AiFillEye size="1.5em" />}
            </Button>
          </Box>
        </FormControl>
        <Button colorScheme="blue" width="100%" mt={4}>
          Login
        </Button>
        <Text fontSize="sm" color="gray.300" mt={4}>
          Don’t have an account?{' '}
          <NavLink to="/login" color="blue.400">
            Sign In
          </NavLink>
        </Text>
      </VStack>
    </Box>
  );
};

export default Register;
