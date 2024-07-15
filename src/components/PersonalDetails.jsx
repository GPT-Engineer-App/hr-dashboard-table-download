import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PersonalDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register('page1.phone')} placeholder="Phone" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('page1.email')} type="email" placeholder="Email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" {...register('page1.dob')} type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select id="gender" {...register('page1.gender')}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </div>
        {/* Add more fields here... */}
      </div>
      <div className="space-y-2">
        <Checkbox id="usCitizen" {...register('page1.USCitizen')} />
        <Label htmlFor="usCitizen" className="ml-2">US Citizen</Label>
      </div>
      <div className="space-y-2">
        <Checkbox id="indianTaxResidence" {...register('page1.indianTaxResidance')} />
        <Label htmlFor="indianTaxResidence" className="ml-2">Indian Tax Residence</Label>
      </div>
      {/* Add more sections (Family Details, Communication Details) here... */}
    </div>
  );
};

export default PersonalDetails;