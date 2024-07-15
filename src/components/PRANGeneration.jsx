import React, { useState } from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';
import PersonalDetails from './PersonalDetails';
import PRANDetails from './PRANDetails';
import BankDetails from './BankDetails';
import DocumentUpload from './DocumentUpload';

const PRANGeneration = () => {
  const [step, setStep] = useState(1);
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <FormProvider {...methods}>
      <Box maxWidth="800px" margin="auto" padding={8}>
        <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
          PRAN Generation
        </Heading>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <VStack spacing={8}>
            {step === 1 && <PersonalDetails />}
            {step === 2 && <PRANDetails />}
            {step === 3 && <BankDetails />}
            {step === 4 && <DocumentUpload />}
            <Box width="100%" display="flex" justifyContent="space-between">
              {step > 1 && (
                <Button onClick={prevStep} colorScheme="gray">
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button onClick={nextStep} colorScheme="blue">
                  Next
                </Button>
              ) : (
                <Button type="submit" colorScheme="green">
                  Submit
                </Button>
              )}
            </Box>
          </VStack>
        </form>
      </Box>
    </FormProvider>
  );
};

export default PRANGeneration;