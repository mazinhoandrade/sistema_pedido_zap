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

export type StepsCheckout = "user" | "address" | "finished"