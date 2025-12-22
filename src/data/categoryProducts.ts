export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  tag?: string
}

export const sofaProducts: Product[] = [
  {
    id: 'sofa-1',
    name: 'Classic Tufted Sofa',
    imageUrl: 'https://images.pexels.com/photos/1866519/pexels-photo-1866519.jpeg',
    price: '₹48,000',
    tag: 'Premium',
  },
  {
    id: 'sofa-2',
    name: 'Modern Minimalist Couch',
    imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    price: '₹42,000',
    tag: 'Popular',
  },
  {
    id: 'sofa-3',
    name: 'Sectional L-Shape Sofa',
    imageUrl: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg',
    price: '₹65,000',
    tag: 'Spacious',
  },
  {
    id: 'sofa-4',
    name: 'Contemporary Gray Sofa',
    imageUrl: 'https://images.pexels.com/photos/2291537/pexels-photo-2291537.jpeg',
    price: '₹38,000',
  },
  {
    id: 'sofa-5',
    name: 'Luxury Velvet Sofa',
    imageUrl: 'https://images.pexels.com/photos/2433212/pexels-photo-2433212.jpeg',
    price: '₹72,000',
    tag: 'Luxury',
  },
  {
    id: 'sofa-6',
    name: 'Compact Loveseat Sofa',
    imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    price: '₹28,000',
  },
]

export const stoneCladdingProducts: Product[] = [
  {
    id: 'stone-1',
    name: 'Natural Slate Cladding',
    imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
    price: '₹2,500/sqft',
    tag: 'Premium',
  },
  {
    id: 'stone-2',
    name: 'Limestone Wall Panels',
    imageUrl: 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg',
    price: '₹1,800/sqft',
  },
  {
    id: 'stone-3',
    name: 'Granite Stone Tiles',
    imageUrl: 'https://images.pexels.com/photos/5632389/pexels-photo-5632389.jpeg',
    price: '₹2,200/sqft',
    tag: 'Durable',
  },
  {
    id: 'stone-4',
    name: 'Sandstone Rustic Cladding',
    imageUrl: 'https://images.pexels.com/photos/3807535/pexels-photo-3807535.jpeg',
    price: '₹1,600/sqft',
  },
  {
    id: 'stone-5',
    name: 'Travertine Accent Wall',
    imageUrl: 'https://images.pexels.com/photos/5632405/pexels-photo-5632405.jpeg',
    price: '₹2,100/sqft',
  },
  {
    id: 'stone-6',
    name: 'Marble Luxury Cladding',
    imageUrl: 'https://images.pexels.com/photos/3586064/pexels-photo-3586064.jpeg',
    price: '₹3,500/sqft',
    tag: 'Luxury',
  },
]

export const flooringProducts: Product[] = [
  {
    id: 'floor-1',
    name: 'Engineered Oak Flooring',
    imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    price: '₹85/sqft',
    tag: 'Popular',
  },
  {
    id: 'floor-2',
    name: 'Premium Teak Wood Flooring',
    imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    price: '₹150/sqft',
    tag: 'Premium',
  },
  {
    id: 'floor-3',
    name: 'Walnut Hardwood Flooring',
    imageUrl: 'https://images.pexels.com/photos/1457843/pexels-photo-1457843.jpeg',
    price: '₹120/sqft',
    tag: 'Elegant',
  },
  {
    id: 'floor-4',
    name: 'Maple Light Flooring',
    imageUrl: 'https://images.pexels.com/photos/1454496/pexels-photo-1454496.jpeg',
    price: '₹95/sqft',
  },
  {
    id: 'floor-5',
    name: 'Exotic Bamboo Flooring',
    imageUrl: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
    price: '₹110/sqft',
    tag: 'Eco-Friendly',
  },
  {
    id: 'floor-6',
    name: 'Rustic Reclaimed Wood',
    imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    price: '₹140/sqft',
    tag: 'Vintage',
  },
]

export const chandelierProducts: Product[] = [
  {
    id: 'chandelier-1',
    name: 'Crystal Luxury Chandelier',
    imageUrl: 'https://images.pexels.com/photos/1866519/pexels-photo-1866519.jpeg',
    price: '₹18,000',
    tag: 'Premium',
  },
  {
    id: 'chandelier-2',
    name: 'Modern Minimalist Pendant',
    imageUrl: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg',
    price: '₹8,500',
    tag: 'Contemporary',
  },
  {
    id: 'chandelier-3',
    name: 'Vintage Brass Chandelier',
    imageUrl: 'https://images.pexels.com/photos/3218547/pexels-photo-3218547.jpeg',
    price: '₹12,000',
    tag: 'Retro',
  },
  {
    id: 'chandelier-4',
    name: 'Glass Sputnik Chandelier',
    imageUrl: 'https://images.pexels.com/photos/3194516/pexels-photo-3194516.jpeg',
    price: '₹15,500',
  },
  {
    id: 'chandelier-5',
    name: 'Bohemian Macramé Fixture',
    imageUrl: 'https://images.pexels.com/photos/3217119/pexels-photo-3217119.jpeg',
    price: '₹9,000',
    tag: 'Trending',
  },
  {
    id: 'chandelier-6',
    name: 'Art Deco Golden Chandelier',
    imageUrl: 'https://images.pexels.com/photos/3175123/pexels-photo-3175123.jpeg',
    price: '₹22,000',
    tag: 'Luxury',
  },
]

export const curtainProducts: Product[] = [
  {
    id: 'curtain-1',
    name: 'Silk Drape Curtains',
    imageUrl: 'https://images.pexels.com/photos/3204639/pexels-photo-3204639.jpeg',
    price: '₹4,200/pair',
    tag: 'Premium',
  },
  {
    id: 'curtain-2',
    name: 'Linen Neutral Curtains',
    imageUrl: 'https://images.pexels.com/photos/3204641/pexels-photo-3204641.jpeg',
    price: '₹2,800/pair',
    tag: 'Natural',
  },
  {
    id: 'curtain-3',
    name: 'Velvet Blackout Curtains',
    imageUrl: 'https://images.pexels.com/photos/3204637/pexels-photo-3204637.jpeg',
    price: '₹3,600/pair',
    tag: 'Luxury',
  },
  {
    id: 'curtain-4',
    name: 'Cotton Print Curtains',
    imageUrl: 'https://images.pexels.com/photos/3204643/pexels-photo-3204643.jpeg',
    price: '₹2,200/pair',
  },
  {
    id: 'curtain-5',
    name: 'Jacquard Patterned Curtains',
    imageUrl: 'https://images.pexels.com/photos/3204645/pexels-photo-3204645.jpeg',
    price: '₹3,500/pair',
    tag: 'Elegant',
  },
  {
    id: 'curtain-6',
    name: 'Sheer Lightweight Curtains',
    imageUrl: 'https://images.pexels.com/photos/3204647/pexels-photo-3204647.jpeg',
    price: '₹1,800/pair',
  },
]

export const vaseStandProducts: Product[] = [
  {
    id: 'vase-1',
    name: 'Ceramic White Vase Set',
    imageUrl: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg',
    price: '₹4,500',
    tag: 'Modern',
  },
  {
    id: 'vase-2',
    name: 'Crystal Cut Glass Vase',
    imageUrl: 'https://images.pexels.com/photos/3587627/pexels-photo-3587627.jpeg',
    price: '₹6,800',
    tag: 'Premium',
  },
  {
    id: 'vase-3',
    name: 'Marble Pedestal Table + Vase',
    imageUrl: 'https://images.pexels.com/photos/3587633/pexels-photo-3587633.jpeg',
    price: '₹12,500',
    tag: 'Luxury',
  },
  {
    id: 'vase-4',
    name: 'Minimalist Metal Stand Vase',
    imageUrl: 'https://images.pexels.com/photos/3587614/pexels-photo-3587614.jpeg',
    price: '₹3,200',
  },
  {
    id: 'vase-5',
    name: 'Bohemian Rattan Vase',
    imageUrl: 'https://images.pexels.com/photos/3587641/pexels-photo-3587641.jpeg',
    price: '₹2,800',
    tag: 'Boho',
  },
  {
    id: 'vase-6',
    name: 'Gold Geometric Vase',
    imageUrl: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg',
    price: '₹5,600',
    tag: 'Trendy',
  },
]
