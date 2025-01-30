
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/components/checkout/StepUser";
import { StepAddress } from "@/components/checkout/StepAddress";
import { StepFinish } from "@/components/checkout/StepFinish";
import { StepsCheckout } from "@/types/stepCheckout";

type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void
}




export const CheckoutDialog = ({open, onOpenChange}: Props) => {
  
  const [step , setStep] = useState<StepsCheckout>("user")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step==="user" && "Dados do usuário"}	
            {step==="address" && "Endereço"}
            {step==="finished" && "Finalizar"} 
          </DialogTitle>
        </DialogHeader>

        <Progress value={step==="user" ? 35 : step==="address" ? 70 : 100} />

        <div className="flex flex-col gap-3 my-2">
          {step==="user" && (
            <StepUser setStep={setStep} />
          )}
          {step==="address" && (
            <StepAddress setStep={setStep} />
          )}
          {step==="finished" && (
             <StepFinish setStep={setStep} />
          )}
        </div>

      </DialogContent>
    </Dialog>
  );
};
