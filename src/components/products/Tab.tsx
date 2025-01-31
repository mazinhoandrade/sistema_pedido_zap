import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { ProductEmpty } from "@/components/products/Empty";
import { ProductItem } from "@/components/products/ProductItem";



export const ProductsTab = async () => {
  const products = await getAllProducts();

  type Tab = {
    title: string;
    value: string;
    products: Product[];
  };
  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((item) => item.category === "sushi"),
    },
    {
      title: "Temaki",
      value: "temaki",
      products: products.filter((item) => item.category === "temaki"),
    },
    {
      title: "Combinados",
      value: "pack",
      products: products.filter((item) => item.category === "pack"),
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: products.filter((item) => item.category === "beverage"),
    },
  ];

  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger value={item.value} key={item.value} className="flex-1">
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((item) => (
        <TabsContent key={item.value} value={item.value} className="my-5">
          {item.products.length > 0 && (
            <div className="mt-6 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </div>
          )}
          {item.products.length === 0 && <ProductEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};
