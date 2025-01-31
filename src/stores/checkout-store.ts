import { create } from "zustand";

type States = {
    name: string,
    phone: string,
    address: {
        street : string,
        number : string,
        complement?: string | undefined,
        state : string
        city : string,
        district : string
    }
};
type Actions = {
     setNameAndPhone: (name: string, phone: string) => void,
     setAddress: (address: States["address"]) => void
     resetCheckout: () => void
};

const initialState: States = {
    name: "",
    phone: "",
    address: {
        street : "",
        number : "",
        state : "",
        city : "",
        district : ""
    }
};

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialState,
    
    resetCheckout: () => set(initialState),

    setNameAndPhone: (name, phone) => set(state=> ({ ...state, name, phone })),
    setAddress: (address) => set(state=> ({ ...state, address }))
}))