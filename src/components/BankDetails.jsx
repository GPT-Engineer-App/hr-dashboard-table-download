import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const BankDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Bank Details</h2>
      <div className="space-y-2">
        <Label htmlFor="annualIncome">Annual Income</Label>
        <Select id="annualIncome" {...register('page3.annualIncome')}>
          <option value="">Select Annual Income</option>
          <option value="below5L">Below 5 Lakhs</option>
          <option value="5L-10L">5-10 Lakhs</option>
          <option value="10L-25L">10-25 Lakhs</option>
          <option value="above25L">Above 25 Lakhs</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="occupation">Occupation</Label>
        <Select id="occupation" {...register('page3.occupation')}>
          <option value="">Select Occupation</option>
          <option value="private">Private Sector</option>
          <option value="public">Public Sector</option>
          <option value="business">Business</option>
          <option value="professional">Professional</option>
          <option value="others">Others</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankIfscCode">Bank IFSC Code</Label>
        <Input id="bankIfscCode" {...register('page3.bankDetails.bankIfscCode')} placeholder="Bank IFSC Code" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankAccountType">Bank Account Type</Label>
        <Select id="bankAccountType" {...register('page3.bankDetails.bankAccountType')}>
          <option value="">Select Account Type</option>
          <option value="savings">Savings</option>
          <option value="current">Current</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
        <Input id="bankAccountNumber" {...register('page3.bankDetails.bankAccountNumber')} placeholder="Bank Account Number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankName">Bank Name</Label>
        <Input id="bankName" {...register('page3.bankDetails.bankName')} placeholder="Bank Name" />
      </div>
    </div>
  );
};

export default BankDetails;