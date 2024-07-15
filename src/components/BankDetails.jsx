import React from 'react';
import { Box, VStack, Input, Select, Heading } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

const BankDetails = () => {
  const { register } = useFormContext();

  return (
    <Box>
      <Heading as="h2" size="lg" marginBottom={4}>Bank Details</Heading>
      <VStack spacing={4} align="stretch">
        <Select {...register('page3.annualIncome')} placeholder="Annual Income">
          <option value="below5L">Below 5 Lakhs</option>
          <option value="5L-10L">5-10 Lakhs</option>
          <option value="10L-25L">10-25 Lakhs</option>
          <option value="above25L">Above 25 Lakhs</option>
        </Select>
        <Select {...register('page3.occupation')} placeholder="Occupation">
          <option value="private">Private Sector</option>
          <option value="public">Public Sector</option>
          <option value="business">Business</option>
          <option value="professional">Professional</option>
          <option value="others">Others</option>
        </Select>
        <Input {...register('page3.bankDetails.bankIfscCode')} placeholder="Bank IFSC Code" />
        <Select {...register('page3.bankDetails.bankAccountType')} placeholder="Bank Account Type">
          <option value="savings">Savings</option>
          <option value="current">Current</option>
        </Select>
        <Input {...register('page3.bankDetails.bankAccountNumber')} placeholder="Bank Account Number" />
        <Input {...register('page3.bankDetails.bankName')} placeholder="Bank Name" />
      </VStack>
    </Box>
  );
};

export default BankDetails;