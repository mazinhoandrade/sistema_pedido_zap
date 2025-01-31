import { Cep } from "@/types/stepCheckout";


export const getZipcodeData = async (cep: string): Promise<Cep> => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data as Cep;
    } catch (error) {
        return {} as Cep;
    }

};