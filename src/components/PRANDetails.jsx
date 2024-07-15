import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PRANDetails = () => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "page2.nomineeDetails"
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">PRAN Details</h2>
      <div className="space-y-2">
        <Label htmlFor="pranName">Name to be Printed on PRAN Card</Label>
        <Input id="pranName" {...register('page2.nameTobePrintedOnPRANCard')} placeholder="Name to be Printed on PRAN Card" />
      </div>
      <div className="space-y-2">
        <Checkbox id="pranPrintHindi" {...register('page2.pranPrintHindi')} />
        <Label htmlFor="pranPrintHindi" className="ml-2">Print PRAN in Hindi</Label>
      </div>
      <div className="space-y-2">
        <Checkbox id="physicalPan" {...register('page2.physicalPan')} />
        <Label htmlFor="physicalPan" className="ml-2">Physical PAN</Label>
      </div>

      <h3 className="text-lg font-semibold mt-4">Nominee Details</h3>
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`nominee-firstName-${index}`}>First Name</Label>
              <Input id={`nominee-firstName-${index}`} {...register(`page2.nomineeDetails.${index}.firstName`)} placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`nominee-middleName-${index}`}>Middle Name</Label>
              <Input id={`nominee-middleName-${index}`} {...register(`page2.nomineeDetails.${index}.middleName`)} placeholder="Middle Name" />
            </div>
            {/* Add more nominee fields here... */}
          </div>
          <Button onClick={() => remove(index)} variant="destructive">Remove Nominee</Button>
        </div>
      ))}
      <Button onClick={() => append({})} variant="outline">Add Nominee</Button>
    </div>
  );
};

export default PRANDetails;