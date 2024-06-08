import React from 'react'

const Login = () => {
  return (
    <VStack spacing='5px'>
    
    <FormControl id='email-login' isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        placeholder='Enter Your Email'
        name='email'
        value={user.email}
        onChange={handleChange}
      />
    </FormControl>
    <FormControl id='password-login' isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          type={show ? 'text' : 'password'}
          placeholder='Enter Your Password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
   

    <Button
      colorScheme='blue'
      width='100%'
      style={{ marginTop: 15 }}
      onClick={submitHandler}
    >
     Login
    </Button>
  </VStack>
  )
}

export default Login
  )
}

export default Login
