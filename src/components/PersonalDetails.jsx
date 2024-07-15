import React from 'react';
import { Box, VStack, SimpleGrid, Input, Select, Checkbox, Heading } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

const PersonalDetails = () => {
  const { register } = useFormContext();

  return (
    <Box>
      <Heading as="h2" size="lg" marginBottom={4}>Personal Details</Heading>
      <VStack spacing={4} align="stretch">
        <SimpleGrid columns={2} spacing={4}>
          <Input {...register('page1.phone')} placeholder="Phone" />
          <Input {...register('page1.email')} placeholder="Email" type="email" />
          <Input {...register('page1.dob')} placeholder="Date of Birth" type="date" />
          <Select {...register('page1.gender')} placeholder="Gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          <Input {...register('page1.countryOfBirth')} placeholder="Country of Birth" defaultValue="Indian" />
          <Input {...register('page1.nationality')} placeholder="Nationality" defaultValue="Indian" />
          <Select {...register('page1.residentFlag')} placeholder="Resident Flag">
            <option value="resident">Resident</option>
            <option value="non-resident">Non-Resident</option>
          </Select>
          <Checkbox {...register('page1.USCitizen')}>US Citizen</Checkbox>
          <Checkbox {...register('page1.indianTaxResidance')}>Indian Tax Residence</Checkbox>
        </SimpleGrid>
        
        <SimpleGrid columns={3} spacing={4}>
          <Select {...register('page1.title')} placeholder="Title">
            <option value="shri">Shri</option>
            <option value="smt">Smt</option>
            <option value="kumari">Kumari</option>
          </Select>
          <Input {...register('page1.firstName')} placeholder="First Name" />
          <Input {...register('page1.middleName')} placeholder="Middle Name" />
          <Input {...register('page1.lastName')} placeholder="Last Name" />
          <Input {...register('page1.cityOfBirth')} placeholder="City of Birth" />
          <Select {...register('page1.maritalStatus')} placeholder="Marital Status">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </Select>
        </SimpleGrid>

        <Heading as="h3" size="md">Family Details</Heading>
        <SimpleGrid columns={3} spacing={4}>
          <Input {...register('page1.familyDetails.father.firstName')} placeholder="Father's First Name" />
          <Input {...register('page1.familyDetails.father.middleName')} placeholder="Father's Middle Name" />
          <Input {...register('page1.familyDetails.father.lastName')} placeholder="Father's Last Name" />
          <Input {...register('page1.familyDetails.mother.firstName')} placeholder="Mother's First Name" />
          <Input {...register('page1.familyDetails.mother.middleName')} placeholder="Mother's Middle Name" />
          <Input {...register('page1.familyDetails.mother.lastName')} placeholder="Mother's Last Name" />
        </SimpleGrid>

        <Heading as="h3" size="md">Communication Details</Heading>
        <SimpleGrid columns={2} spacing={4}>
          <Select {...register('page1.communicationDetails.ownership')} placeholder="Ownership">
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
          </Select>
          <Input {...register('page1.communicationDetails.address1')} placeholder="Address Line 1" />
          <Input {...register('page1.communicationDetails.address2')} placeholder="Address Line 2" />
          <Input {...register('page1.communicationDetails.street')} placeholder="Street" />
          <Input {...register('page1.communicationDetails.city')} placeholder="City" />
          <Input {...register('page1.communicationDetails.state')} placeholder="State" />
          <Input {...register('page1.communicationDetails.country')} placeholder="Country" />
          <Input {...register('page1.communicationDetails.pincode')} placeholder="Pincode" />
          <Input {...register('page1.communicationDetails.area')} placeholder="Area" />
          <Input {...register('page1.communicationDetails.landmark')} placeholder="Landmark" />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default PersonalDetails;