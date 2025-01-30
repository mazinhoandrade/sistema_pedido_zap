
import { StepsCheckout } from "@/types/stepCheckout"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useCheckoutStore } from "@/stores/checkout-store"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
    setStep: Dispatch<SetStateAction<StepsCheckout>>;
}

const formShema = z.object({
    name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    phone: z.string(). min(11, 'O telefone deve ter pelo menos 11 caracteres'),
})
export const StepUser = ({ setStep }: Props) => {

    const { name, phone, setNameAndPhone } = useCheckoutStore(state=> state);
    
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name,
            phone
        }
    })

    const onSubmit = (values: z.infer<typeof formShema>) => {
        setNameAndPhone(values.name, values.phone);
        setStep("address")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField  name="name" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Seu Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="...Nome" autoFocus {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                            <Input placeholder="79 9 9999-9999" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <Button className="mt-4 w-full" type="submit" variant="outline">Próximo</Button>
            </form>
        </Form>
    )
}