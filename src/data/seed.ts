import type { Store } from '../types';
const today = new Date(); const daysAgo=(n:number)=>new Date(today.getTime()-n*86400000).toISOString();
export const seed:Store={
 categories:[{id:'c1',name:'Electronics'},{id:'c2',name:'Office Supplies'},{id:'c3',name:'Furniture'},{id:'c4',name:'Accessories'}],
 suppliers:[{id:'s1',company:'Northstar Components',contact:'Maya Chen',email:'maya@northstar.example',phone:'+1 555 0101',address:'18 Harbor Street'},{id:'s2',company:'Paper & Co.',contact:'Daniel Reed',email:'daniel@paperco.example',phone:'+1 555 0102',address:'240 Market Avenue'},{id:'s3',company:'Form & Function',contact:'Ava Brooks',email:'ava@formfunction.example',phone:'+1 555 0103',address:'6 Industrial Way'}],
 products:[
 {id:'p1',name:'Wireless Keyboard',sku:'ELC-001',category:'Electronics',description:'Compact wireless keyboard',supplier:'s1',costPrice:28,sellingPrice:49,stock:86,minStock:20,unit:'pcs',createdAt:daysAgo(45)},
 {id:'p2',name:'USB-C Hub 7-in-1',sku:'ELC-002',category:'Electronics',description:'Multiport USB-C adapter',supplier:'s1',costPrice:34,sellingPrice:59,stock:12,minStock:15,unit:'pcs',createdAt:daysAgo(35)},
 {id:'p3',name:'A4 Copy Paper',sku:'OFF-001',category:'Office Supplies',description:'80gsm copy paper, 500 sheets',supplier:'s2',costPrice:4.5,sellingPrice:7.9,stock:240,minStock:50,unit:'ream',createdAt:daysAgo(30)},
 {id:'p4',name:'Desk Organizer',sku:'OFF-002',category:'Office Supplies',description:'Bamboo desktop organizer',supplier:'s2',costPrice:12,sellingPrice:22,stock:8,minStock:10,unit:'pcs',createdAt:daysAgo(20)},
 {id:'p5',name:'Ergonomic Office Chair',sku:'FUR-001',category:'Furniture',description:'Adjustable mesh office chair',supplier:'s3',costPrice:115,sellingPrice:189,stock:18,minStock:5,unit:'pcs',createdAt:daysAgo(18)},
 {id:'p6',name:'Monitor Stand',sku:'ACC-001',category:'Accessories',description:'Aluminium adjustable stand',supplier:'s3',costPrice:22,sellingPrice:39,stock:0,minStock:8,unit:'pcs',createdAt:daysAgo(12)},
 {id:'p7',name:'Wireless Mouse',sku:'ELC-003',category:'Electronics',description:'Ergonomic optical mouse',supplier:'s1',costPrice:16,sellingPrice:29,stock:54,minStock:15,unit:'pcs',createdAt:daysAgo(8)}],
 movements:[
 {id:'m1',productId:'p1',productName:'Wireless Keyboard',sku:'ELC-001',type:'Stock In',quantity:30,previousStock:56,newStock:86,reference:'PO-24081',date:daysAgo(1),notes:'Monthly replenishment',supplier:'Northstar Components'},
 {id:'m2',productId:'p2',productName:'USB-C Hub 7-in-1',sku:'ELC-002',type:'Stock Out',quantity:8,previousStock:20,newStock:12,reference:'SO-1042',date:daysAgo(2),notes:'Retail orders'},
 {id:'m3',productId:'p3',productName:'A4 Copy Paper',sku:'OFF-001',type:'Stock In',quantity:100,previousStock:140,newStock:240,reference:'PO-24079',date:daysAgo(3),notes:'Restock',supplier:'Paper & Co.'},
 {id:'m4',productId:'p4',productName:'Desk Organizer',sku:'OFF-002',type:'Stock Out',quantity:4,previousStock:12,newStock:8,reference:'SO-1038',date:daysAgo(4),notes:'Bulk order'},
 {id:'m5',productId:'p5',productName:'Ergonomic Office Chair',sku:'FUR-001',type:'Stock In',quantity:10,previousStock:8,newStock:18,reference:'PO-24075',date:daysAgo(6),notes:'New shipment',supplier:'Form & Function'}]};
