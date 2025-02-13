"use client";

import { Cep, StepsCheckout } from "@/types/stepCheckout";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {  z } from "zod";
import { useCheckoutStore } from "@/stores/checkout-store";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getZipcodeData } from "@/services/getstate";

type Props = {
  setStep: Dispatch<SetStateAction<StepsCheckout>>;
};

const formShema = z.object({
  street: z.string().min(4, "Preencha o endereço, 4 caracteres no minimo"),
  number: z.string().min(2, "Preencha o numero, 2 caracteres no minimo"),
  state: z.string().min(2, "Preencha o estado"),
  city: z.string().min(2, "Preencha o cidade, 2 caracteres no minimo"),
  district: z.string().min(2, "Preencha o bairro, 2 caracteres no minimo"),
  complement: z.string().optional(),
});

export const StepAddress = ({ setStep }: Props) => {
  const { name, address, setAddress } = useCheckoutStore((state) => state);

  const [cep, setCep] = useState<Cep>();


  const [control, setControl] = useState<boolean>(false);
  const [inputCep, setInputCep] = useState<string>('');

  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      ...address,
    },
  });


  
 
  const handleGetCep = (cep: string) => {
    cep = cep.replace("-", "");
    if (cep.length === 8) {
      getZipcodeData(cep).then((data) => {
        if (data.localidade) {
          setCep(data);
          setControl(false);
          form.setValue("city", data.localidade);
          form.setValue("state", data.estado);
          if (data.logradouro && data.bairro) {
            form.setValue("street", data.logradouro);
            form.setValue("district", data.bairro);
          } else {
            form.setValue("street", "");
            form.setValue("district", "");
          }
        } else {
          setControl(!control);
          form.setValue("city", "");
          form.setValue("state", "");
          form.setValue("street", "");
          form.setValue("district", "");
        }
      });
    }
  };



  const onSubmit = (values: z.infer<typeof formShema>) => {
    setAddress(values);
    setStep("finished");
  };

  useEffect(() => {
    handleGetCep(inputCep);
  }, [inputCep,]);

  return (
    <>
      <div className="text-md flex flex-1">
        <p className="font-bold mr-1">Olá {name},</p> Preecha seu endereço
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="street"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rua</FormLabel>
                  <FormControl>
                    <Input
                      disabled={cep?.bairro ? true : false}
                      placeholder="Ex: Rua dos bobos"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="number"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="number"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cep</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: 00000000"
                      onChange={(e) => setInputCep(e.target.value)}
                    />
                  </FormControl>
                  {control && inputCep.length === 8 && <p className="text-red-500 text-sm">Cep nao encontrado</p>}
                </FormItem>
              )}
            />
            

            <FormField
              name="complement"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complemento</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Casa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="district"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input
                      disabled={cep?.logradouro ? true : false}
                      placeholder="Ex: Centro"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input
                      disabled={cep?.localidade ? true : false}
                      placeholder="Ex: Sao Paulo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="state"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input disabled={cep?.estado ? true : false} placeholder="Ex: São Paulo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              name="state"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value as string | undefined}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SP">SP</SelectItem>
                        <SelectItem value="RJ">RJ</SelectItem>
                        <SelectItem value="SE">SE</SelectItem>
                      </SelectContent>
                    </Select>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button
              className="w-full"
              variant="link"
              onClick={() => setStep("user")}
            >
              Voltar
            </Button>
            <Button className="mt-4 w-full" type="submit">
              Concluir
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
