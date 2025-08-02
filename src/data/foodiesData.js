import meatsBg from '@/assets/images/foodies/meats.jpg';
import nsukka from '@/assets/images/foodies/palm.webp';
import tessy from '@/assets/images/foodies/rice-stew.jpg';
import banquet from '@/assets/images/foodies/banquets.jpg';
import chickenSalad from '@/assets/images/foodies/chicken.jpg';
import fishBarbecue from '@/assets/images/foodies/barbecue.jpg';
import abacha from '@/assets/images/foodies/abacha.jpg';
import okpa from '@/assets/images/foodies/okpa.jpg';

const foodies = [
  {
    id: 1,
    name: 'Madam Ezinwanne Kitchen',
    image: meatsBg,
    phone: '+2348166540841',
    whatsapp: '+2348166540841',
    branchUrl: '/foodie/madam-ezinwanne-kitchen',
    bankDetails: {
      bankName: 'Zenith Bank',
      accountName: 'Madam Ezinwanne Kitchen',
      accountNumber: '0123456789',
    },
    menu: [
      { id: 'ezinwa1', name: 'Assorted Meats', price: 2500, isOrderable: true },
      { id: 'ezinwa2', name: 'Cow Leg', price: 3000, isOrderable: true },
      { id: 'ezinwa3', name: 'Beef Pepper Soup', price: 2000, isOrderable: true },
    ],
  },
  {
    id: 2,
    name: 'Tessy Special Kitchen',
    image: tessy,
    phone: '+2348063025640',
    whatsapp: '+2348063025640',
    branchUrl: '/foodie/tessy-special-kitchen',
    bankDetails: {
      bankName: 'Moniepoint',
      accountName: 'Tessy Special',
      accountNumber: '5322466243',
    },
    menu: [
      { id: 'tessy1', name: 'White Rice (with Stew, Salad, etc)', price: 2200, isOrderable: true },
      { id: 'tessy2', name: 'All Kinds of Soup with Eba, Fufu', price: 2500, isOrderable: true },
      { id: 'tessy3', name: 'Fresh Fish Peppersoup (Head)', price: 4000, isOrderable: true },
      { id: 'tessy4', name: 'Fresh Fish Peppersoup (middle & tail)', price: 3000, isOrderable: true },
      { id: 'tessy4', name: 'Assorted Meat', price: 3000, isOrderable: true },
    ],
  },
  {
    id: 3,
    name: 'De Banquet Hotel Kitchen',
    image: banquet,
    phone: '+2348032265822',
    whatsapp: '+2348032265822',
    branchUrl: '/foodie/de-banquet-hotel-kitchen',
    bankDetails: {
      bankName: 'First Bank',
      accountName: 'De Banquet Hotel Kitchen',
      accountNumber: '1122334455',
    },
    menu: [
      { id: 'banquet1', name: 'Grilled Fish', price: 4000, isOrderable: true },
      { id: 'banquet2', name: 'Chicken Stew', price: 2500, isOrderable: true },
      { id: 'banquet3', name: 'Special Platter', price: 5000, isOrderable: true },
      { id: 'banquet3', name: 'Ofe Nsala', price: 5000, isOrderable: true },
    ],
  },
  {
    id: 4,
    name: 'Nsukka Food & Drink',
    image: nsukka,
    phone: '+2348034567890',
    whatsapp: '+2348034567890',
    branchUrl: '/foodie/nsukka-food-drink',
    bankDetails: {
      bankName: 'United Bank for Africa',
      accountName: 'Nsukka Food & Drink',
      accountNumber: '5566778899',
    },
    menu: [
      { id: 'nsukka1', name: 'Nsukka Palm Wine', price: 1500, isOrderable: true },
      { id: 'nsukka2', name: 'Achicha/Agbugbu with Fish', price: 2000, isOrderable: true },
      { id: 'nsukka3', name: 'Plantain', price: 2000, isOrderable: true },
      { id: 'nsukka4', name: 'Chicken Vegetable', price: 2000, isOrderable: true },
      { id: 'nsukka5', name: 'Fried Chicken', price: 2000, isOrderable: true },
      { id: 'nsukka6', name: 'Agbugbu na Ji', price: 2000, isOrderable: true },
      { id: 'nsukka7', name: 'Bush Meat', price: 2000, isOrderable: true },
      { id: 'nsukka8', name: 'Ukwa Fresh with dried fish', price: 2000, isOrderable: true },
    ],
  },
  {
    id: 5,
    name: 'Chicken Salad Special',
    image: chickenSalad,
    phone: '+2348045678901',
    whatsapp: '+2348045678901',
    branchUrl: '/foodie/chicken-salad-special',
    bankDetails: {
      bankName: 'Access Bank',
      accountName: 'Chicken Salad Special',
      accountNumber: '3344556677',
    },
    menu: [
      { id: 'salad1', name: 'Chicken Salad', price: 3000, isOrderable: true },
      { id: 'salad2', name: 'Fruit Salad', price: 1500, isOrderable: true },
    ],
  },
  {
    id: 6,
    name: 'Fresh Fish Barbecue with Chips',
    image: fishBarbecue,
    phone: '+2348056789012',
    whatsapp: '+2348056789012',
    branchUrl: '/foodie/fresh-fish-barbecue',
    bankDetails: {
      bankName: 'FCMB',
      accountName: 'Fish Barbecue Package',
      accountNumber: '7788990011',
    },
    menu: [
      { id: 'fish1', name: 'BBQ Fish', price: 3500, isOrderable: true },
      { id: 'fish2', name: 'Fish Pepper Soup', price: 2500, isOrderable: true },
    ],
  },
  {
    id: 7,
    name: 'Abacha Enugu Special',
    image: abacha,
    phone: '+2348067890123',
    whatsapp: '+2348067890123',
    branchUrl: '/foodie/abacha-enugu-special',
    bankDetails: {
      bankName: 'Polaris Bank',
      accountName: 'Abacha Enugu Special',
      accountNumber: '2233445566',
    },
    menu: [
      { id: 'abacha1', name: 'Abacha Special', price: 2000, isOrderable: true },
      { id: 'abacha2', name: 'Ugba Platter', price: 2200, isOrderable: true },
    ],
  },
  {
    id: 8,
    name: 'Okpa 9th Mile with Chicken',
    image: okpa,
    phone: '+2348078901234',
    whatsapp: '+2348078901234',
    branchUrl: '/foodie/okpa-9th-mile',
    bankDetails: {
      bankName: 'Keystone Bank',
      accountName: 'Okpa 9th Mile with Chicken',
      accountNumber: '4455667788',
    },
    menu: [
      { id: 'okpa1', name: 'Okpa with Chicken', price: 1800, isOrderable: true },
      { id: 'okpa2', name: 'Okpa Special', price: 1500, isOrderable: true },
    ],
  },
];

export default foodies;