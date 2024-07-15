import React from 'react';
import { Box, VStack, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

const DocumentUpload = () => {
  const { register } = useFormContext();

  return (
    <Box>
      <Heading as="h2" size="lg" marginBottom={4}>Document Upload</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Signature</FormLabel>
          <Input type="file" {...register('page4.signature')} />
        </FormControl>
        <FormControl>
          <FormLabel>Photo</FormLabel>
          <Input type="file" {...register('page4.photo')} />
        </FormControl>
        <FormControl>
          <FormLabel>PAN Card</FormLabel>
          <Input type="file" {...register('page4.panCard')} />
        </FormControl>
        <FormControl>
          <FormLabel>Aadhar Card</FormLabel>
          <Input type="file" {...register('page4.aadharCard')} />
        </FormControl>
        <FormControl>
          <FormLabel>ID Proof</FormLabel>
          <Input type="file" {...register('page4.idProof')} />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default DocumentUpload;