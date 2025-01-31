
export type Cep = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    estado: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}
export const getCep = async (cep: string): Promise<Cep> => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data as Cep;
    } catch (error) {
        return {} as Cep;
    }

};