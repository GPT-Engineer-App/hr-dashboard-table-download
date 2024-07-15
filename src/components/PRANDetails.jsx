import React from 'react';
import { Box, VStack, SimpleGrid, Input, Select, Checkbox, Button, Heading } from '@chakra-ui/react';
import { useFormContext, useFieldArray } from 'react-hook-form';

const PRANDetails = () => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "page2.nomineeDetails"
  });

  return (
    <Box>
      <Heading as="h2" size="lg" marginBottom={4}>PRAN Details</Heading>
      <VStack spacing={4} align="stretch">
        <Input {...register('page2.nameTobePrintedOnPRANCard')} placeholder="Name to be Printed on PRAN Card" />
        <Checkbox {...register('page2.pranPrintHindi')}>Print PRAN in Hindi</Checkbox>
        <Checkbox {...register('page2.physicalPan')}>Physical PAN</Checkbox>

        <Heading as="h3" size="md">Nominee Details</Heading>
        {fields.map((field, index) => (
          <Box key={field.id} borderWidth={1} borderRadius="lg" p={4}>
            <SimpleGrid columns={2} spacing={4}>
              <Input {...register(`page2.nomineeDetails.${index}.firstName`)} placeholder="First Name" />
              <Input {...register(`page2.nomineeDetails.${index}.middleName`)} placeholder="Middle Name" />
              <Input {...register(`page2.nomineeDetails.${index}.lastName`)} placeholder="Last Name" />
              <Input {...register(`page2.nomineeDetails.${index}.relation`)} placeholder="Relation" />
              <Input {...register(`page2.nomineeDetails.${index}.age`)} placeholder="Age" type="number" />
              <Checkbox {...register(`page2.nomineeDetails.${index}.above18`)}>Above 18</Checkbox>
              <Input {...register(`page2.nomineeDetails.${index}.dob`)} placeholder="Date of Birth" type="date" />
              <Input {...register(`page2.nomineeDetails.${index}.nomineeShare`)} placeholder="Nominee Share (%)" type="number" />
              <Input {...register(`page2.nomineeDetails.${index}.guardianName`)} placeholder="Guardian Name" />
            </SimpleGrid>
            <Button mt={2} onClick={() => remove(index)}>Remove Nominee</Button>
          </Box>
        ))}
        <Button onClick={() => append({})}>Add Nominee</Button>
      </VStack>
    </Box>
  );
};

export default PRANDetails;