import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PersonalDetails from './PersonalDetails';
import PRANDetails from './PRANDetails';
import BankDetails from './BankDetails';
import DocumentUpload from './DocumentUpload';
import { useForm, FormProvider } from 'react-hook-form';

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
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">PRAN Generation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="space-y-8">
              {step === 1 && <PersonalDetails />}
              {step === 2 && <PRANDetails />}
              {step === 3 && <BankDetails />}
              {step === 4 && <DocumentUpload />}
              <div className="flex justify-between">
                {step > 1 && (
                  <Button onClick={prevStep} variant="outline">
                    Previous
                  </Button>
                )}
                {step < 4 ? (
                  <Button onClick={nextStep} className="ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto">
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </FormProvider>
  );
};

export default PRANGeneration;