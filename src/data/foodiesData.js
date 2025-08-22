import ezinwanneVideo from '@/assets/videos/ezin.mp4';
import nsukka from '@/assets/images/foodies/fish.webp';
import tessy from '@/assets/images/foodies/nsala.webp';
import banquet from '@/assets/images/foodies/meals.jpg';
import chickenSalad from '@/assets/images/foodies/chicken.webp';
import fishBarbecue from '@/assets/images/foodies/max.webp';
import abacha from '@/assets/images/foodies/ezeagu.webp';


const foodies = [
  {
    id: 1,
    name: 'Madam Ezinwanne Kitchen',
    image: ezinwanneVideo,  // replaced meatsBg with video asset
    phone: '+2348166540841',
    whatsapp: '+2348166540841',
    branchUrl: '/foodie/madam-ezinwanne-kitchen',
    bankDetails: {
      bankName: 'Moniepoint Microfinance Bank',
      accountName: 'Ezinwanne Kitchen',
      accountNumber: '5322011454',
    },
    menu: [
      
      {category: 'Traditional Delicacies'},
      { id: 'ezinwa1', name: 'Ukwa', price: 4000, isOrderable: true },      
      { id: 'ezinwa2', name: 'Cow Leg', price: 3000, isOrderable: true },
      { id: 'ezinwa3', name: 'Cow Tail', price: 3000, isOrderable: true },
      { id: 'ezinwa4', name: 'Dry Fish', price: 5000, isOrderable: true },
      { id: 'ezinwa5', name: 'Vegetable Stew', price: 2000, isOrderable: true },
      { id: 'ezinwa6', name: 'Goat Leg', price: 2000, isOrderable: true },
      { id: 'ezinwa7', name: 'Peppered Meat', price: 1000, isOrderable: true },
      { id: 'ezinwa8', name: 'Snail', price: 4000, isOrderable: true },
      { id: 'ezinwa9', name: 'Dry Fish, Green & Ukpaka', price: 2000, isOrderable: true },
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
      bankName: 'Moniepoint Microfinance Bank',
      accountName: 'Tessy Special',
      accountNumber: '5322466243',
    },
    menu: [
      
      { category: 'Rice Dishes'},
      { id: 'tessy1', name: 'White Rice & Stew', price: 2500, isOrderable: true },
      { id: 'tessy2', name: 'White Rice & Egg Stew', price: 2500, isOrderable: true },
      { id: 'tessy3', name: 'White Rice & Vegetable Stew', price: 2500, isOrderable: true },
      { id: 'tessy4', name: 'White Rice & White Sauce ', price: 2500, isOrderable: true },
      { id: 'tessy5', name: 'Jollof Rice & Chicken', price: 3000, isOrderable: true },
      { category: 'Soups with Eba, Fufu or Semo'},
      { id: 'tessy6', name: 'Nsala', price: 2500, isOrderable: true },
      { id: 'tessy7', name: 'Vegetable Soup', price: 2500, isOrderable: true },
      { id: 'tessy8', name: 'Okra Soup', price: 2500, isOrderable: true },
      { id: 'tessy9', name: 'Afang Soup', price: 2500, isOrderable: true },
      { id: 'tessy10', name: 'Vegetable-Onugbu', price: 2500, isOrderable: true },
      { category: 'Pepper Soup Specials'},
      { id: 'tessy11', name: 'Fresh Fish Peppersoup (Head)', price: 4000, isOrderable: true },
      { id: 'tessy12', name: 'Fresh Fish Peppersoup (middle & tail)', price: 3000, isOrderable: true },
      { id: 'tessy13', name: 'Assorted Meat', price: 3000, isOrderable: true },
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
      bankName: 'United Bank for Africa (UBA)',
      accountName: 'Edeh Scholastica',
      accountNumber: '2018800874',
    },
    menu: [
      { category: 'Breakfast' },
      { id: 'banquet1', name: 'Chips and Egg Sauce', price: 2000, isOrderable: true },
      { id: 'banquet2', name: 'Tea & Bread Toast', price: 2000, isOrderable: true },
      { id: 'banquet3', name: 'Golden Morn', price: 2000, isOrderable: true },

      { category: 'Special Banquet' },
      { id: 'banquet4', name: 'White Rice & Stew', price: 3500, isOrderable: true },
      { id: 'banquet5', name: 'Fried Rice', price: 3500, isOrderable: true },
      { id: 'banquet6', name: 'Brown Sauce', price: 3500, isOrderable: true },
      { id: 'banquet7', name: 'Chicken Sauce', price: 3500, isOrderable: true },
      { id: 'banquet8', name: 'Beaf Sauce', price: 3500, isOrderable: true },
      { id: 'banquet9', name: 'Vegetable Soup', price: 3500, isOrderable: true },
      { id: 'banquet10', name: 'Ofe Uchakashir', price: 3500, isOrderable: true },
      { id: 'banquet11', name: 'Beans Soup', price: 3500, isOrderable: true },

      { category: 'A Banquet' },
      { id: 'banquet12', name: 'White Rice & Stew', price: 2500, isOrderable: true },
      { id: 'banquet13', name: 'Fried Rice', price: 2500, isOrderable: true },
      { id: 'banquet14', name: 'Jellof Rice', price: 2500, isOrderable: true },
      { id: 'banquet15', name: 'Egusi Soup', price: 2500, isOrderable: true },
      { id: 'banquet16', name: 'Ogbono Soup', price: 2500, isOrderable: true },

      { category: 'Final Banquet' },
      { id: 'banquet17', name: 'Basmatic Rice', price: 5000, isOrderable: true },
      { id: 'banquet18', name: 'Other Continental Dishes', price: 5000, isOrderable: true },

      { category: 'Snacks & Drinks' },
      { id: 'banquet19', name: 'Fried Chicken with Chips', price: 5000, isOrderable: true },
      { id: 'banquet20', name: 'Fried Beef with Chips', price: 2500, isOrderable: true },
      { id: 'banquet21', name: 'Pork Meat with Chips', price: 2500, isOrderable: true },
      { id: 'banquet22', name: 'Zobo Drinks', price: 500, isOrderable: true },
      { id: 'banquet22', name: 'Tiger Nut Drinks', price: 1000, isOrderable: true },
    ],
  },
  {
    id: 4,
    name: 'Mama Chioma Enterprises',
    image: nsukka,
    phone: '+2348034567890',
    whatsapp: '+2348034567890',
    branchUrl: '/foodie/nsukka-food-drink',
    bankDetails: {
      bankName: 'Moniepoint',
      accountName: 'Chioma Obodoechi',
      accountNumber: '5581205263',
    },
    menu: [
      { id: 'nsukka1', name: 'Nsukka Palm Wine', price: 2500, isOrderable: true },
      { id: 'nsukka2', name: 'Achicha/Agbugbu with Fish', price: 2000, isOrderable: true },
      { id: 'nsukka3', name: 'Plantain', price: 2000, isOrderable: true },
      { id: 'nsukka4', name: 'Chicken Vegetable', price: 2000, isOrderable: true },
      { id: 'nsukka5', name: 'Chicken Peppersoup', price: 3000, isOrderable: true },
      { id: 'nsukka6', name: 'Fried Chicken', price: 1000, isOrderable: true },
      { id: 'nsukka7', name: 'Agbugbu na Ji', price: 2000, isOrderable: true },
      { id: 'nsukka8', name: 'Bush Meat', price: 3000, isOrderable: true },
      { id: 'nsukka9', name: 'Ukwa Fresh with dried fish', price: 2000, isOrderable: true },
    ],
  },
  {
    id: 5,
    name: 'Chop with Nazzy',
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
      { id: 'fish1', name: 'Barbecue Fish', price: 15000, isOrderable: true },
      { id: 'fish2', name: 'Barbecue Fish with Chips', price: 20000, isOrderable: true },
    ],
  },
  {
    id: 7,
    name: 'Abacha Nwanyi Ezeagu',
    image: abacha,
    phone: '+2348067890123',
    whatsapp: '+2348067890123',
    branchUrl: '/foodie/abacha-enugu-special',
    bankDetails: {
      bankName: 'United Bank for Africa',
      accountName: 'Lawencia Chinenye',
      accountNumber: '0916810290',
    },
    menu: [
      { id: 'abacha1', name: 'Abacha', price: 3000, isOrderable: true },
      { id: 'abacha2', name: 'Isi Efi Peppersoup', price: 2000, isOrderable: true },
      { id: 'abacha3', name: 'Peppered Goat Meat', price: 3000, isOrderable: true },
      { id: 'abacha4', name: 'Peppered Kanda', price: 2000, isOrderable: true },
      { id: 'abacha5', name: 'Indomine', price: 2500, isOrderable: true },
    ],
  },
  {
    id: 8,
    name: '',
    image: '',
    phone: '+2348078901234',
    whatsapp: '+2348078901234',
    branchUrl: '/foodie/vacant-spot',
    bankDetails: {
      bankName: 'Keystone Bank',
      accountName: '',
      accountNumber: '4455667788',
    },
    menu: [
      
      { id: 'okpa1', name: '', price: 1800, isOrderable: true },
      { id: 'okpa2', name: '', price: 1500, isOrderable: true },
    ],
  },
];

export default foodies;
