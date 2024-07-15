import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DocumentUpload = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Document Upload</h2>
      <div className="space-y-2">
        <Label htmlFor="signature">Signature</Label>
        <Input id="signature" type="file" {...register('page4.signature')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="photo">Photo</Label>
        <Input id="photo" type="file" {...register('page4.photo')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="panCard">PAN Card</Label>
        <Input id="panCard" type="file" {...register('page4.panCard')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="aadharCard">Aadhar Card</Label>
        <Input id="aadharCard" type="file" {...register('page4.aadharCard')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="idProof">ID Proof</Label>
        <Input id="idProof" type="file" {...register('page4.idProof')} />
      </div>
    </div>
  );
};

export default DocumentUpload;