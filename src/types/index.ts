export type Product = { id:string; name:string; sku:string; category:string; description:string; supplier:string; costPrice:number; sellingPrice:number; stock:number; minStock:number; unit:string; createdAt:string };
export type Category = { id:string; name:string };
export type Supplier = { id:string; company:string; contact:string; email:string; phone:string; address:string };
export type Movement = { id:string; productId:string; productName:string; sku:string; type:'Stock In'|'Stock Out'|'Initial Stock'; quantity:number; previousStock:number; newStock:number; reference:string; date:string; notes:string; supplier?:string };
export type Store = { products:Product[]; categories:Category[]; suppliers:Supplier[]; movements:Movement[] };
