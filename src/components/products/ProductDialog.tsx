

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { ProductDialogItem } from "./ProductDialogItem";


type Props = {
  item?: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ProductDialog = ({ open, onOpenChange, item }: Props) => {
 
 

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{item?.name}</DialogTitle>
        </DialogHeader>
            <ProductDialogItem onOpenChange={onOpenChange} item={item as Product} />
      </DialogContent>
    </Dialog>
  );
};
