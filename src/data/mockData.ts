// Mock data for STAMP Social Commerce Bridge Demo
// Simulates backend responses from PostgreSQL, Redis, and external APIs

export interface Transaction {
  id: string;
  customerId: string;
  merchantId: string;
  amount: number;
  currency: string;
  vatSaved: number;
  items: CartItem[];
  timestamp: string;
  location: string;
  paymentMethod: 'alipay' | 'wechat';
  status: 'completed' | 'pending' | 'refunded';
}

export interface Customer {
  id: string;
  name: string;
  nameZh: string;
  avatar: string;
  wechatId?: string;
  alipayId?: string;
  country: string;
  language: 'zh' | 'en' | 'es' | 'it';
  totalSpent: number;
  visitCount: number;
  lastVisit: string;
  preferences: string[];
  loyaltyPoints: number;
}

export interface Product {
  id: string;
  merchantId: string;
  name: string;
  nameZh: string;
  nameEs: string;
  nameIt: string;
  description: string;
  descriptionZh: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  inventory: number;
  sizes?: string[];
  colors?: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Merchant {
  id: string;
  name: string;
  nameZh: string;
  logo: string;
  location: string;
  city: string;
  country: string;
  address: string;
  categories: string[];
  rating: number;
  totalSales: number;
  touristCustomers: number;
  conversionRate: number;
  wechatMiniProgramUrl?: string;
  alipayLifeServiceUrl?: string;
}

export interface GroupBuy {
  id: string;
  productId: string;
  currentParticipants: number;
  targetParticipants: number;
  discount: number;
  endsAt: string;
  participants: {
    name: string;
    avatar: string;
  }[];
}

export interface LiveStream {
  id: string;
  merchantId: string;
  title: string;
  titleZh: string;
  thumbnail: string;
  viewerCount: number;
  isLive: boolean;
  scheduledFor?: string;
  hostName: string;
  hostAvatar: string;
}

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: 'cust_001',
    name: 'Wei Wang',
    nameZh: '王伟',
    avatar: '👨',
    wechatId: 'wangwei_888',
    country: 'China',
    language: 'zh',
    totalSpent: 1250.00,
    visitCount: 3,
    lastVisit: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    preferences: ['fashion', 'luxury', 'leather'],
    loyaltyPoints: 125,
  },
  {
    id: 'cust_002',
    name: 'Na Li',
    nameZh: '李娜',
    avatar: '👩',
    alipayId: 'lina_2024',
    country: 'China',
    language: 'zh',
    totalSpent: 890.00,
    visitCount: 2,
    lastVisit: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    preferences: ['cosmetics', 'accessories'],
    loyaltyPoints: 89,
  },
  {
    id: 'cust_003',
    name: 'Jing Zhang',
    nameZh: '张静',
    avatar: '👩‍💼',
    wechatId: 'zhangjing_pro',
    country: 'China',
    language: 'zh',
    totalSpent: 2340.00,
    visitCount: 5,
    lastVisit: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    preferences: ['fashion', 'shoes', 'bags'],
    loyaltyPoints: 234,
  },
];

// Mock Merchants
export const mockMerchants: Merchant[] = [
  {
    id: 'merch_001',
    name: 'Eleganza Milano',
    nameZh: '米兰优雅精品店',
    logo: '🏪',
    location: 'Via Montenapoleone, 8',
    city: 'Milan',
    country: 'Italy',
    address: 'Via Montenapoleone, 8, 20121 Milano MI, Italy',
    categories: ['Fashion', 'Luxury', 'Leather Goods'],
    rating: 4.8,
    totalSales: 125000,
    touristCustomers: 3420,
    conversionRate: 23.5,
    wechatMiniProgramUrl: '/wechat/eleganza-milano',
    alipayLifeServiceUrl: '/alipay/eleganza-milano',
  },
  {
    id: 'merch_002',
    name: 'Madrid Fashion House',
    nameZh: '马德里时尚之家',
    logo: '👗',
    location: 'Calle Serrano, 47',
    city: 'Madrid',
    country: 'Spain',
    address: 'Calle Serrano, 47, 28001 Madrid, Spain',
    categories: ['Fashion', 'Accessories', 'Shoes'],
    rating: 4.6,
    totalSales: 98000,
    touristCustomers: 2890,
    conversionRate: 19.8,
    wechatMiniProgramUrl: '/wechat/madrid-fashion',
    alipayLifeServiceUrl: '/alipay/madrid-fashion',
  },
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 'prod_001',
    merchantId: 'merch_001',
    name: 'Italian Leather Handbag',
    nameZh: '意大利真皮手提包',
    nameEs: 'Bolso de Cuero Italiano',
    nameIt: 'Borsa in Pelle Italiana',
    description: 'Handcrafted genuine Italian leather handbag with gold hardware',
    descriptionZh: '手工制作的意大利真皮手提包，配有金色五金件',
    price: 450.00,
    currency: 'EUR',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    ],
    category: 'Bags',
    inventory: 12,
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.9,
    reviewCount: 234,
    tags: ['leather', 'luxury', 'handmade', 'italian'],
  },
  {
    id: 'prod_002',
    merchantId: 'merch_001',
    name: 'Designer Sunglasses',
    nameZh: '设计师太阳镜',
    nameEs: 'Gafas de Sol de Diseñador',
    nameIt: 'Occhiali da Sole Firmati',
    description: 'Premium UV protection sunglasses with Italian design',
    descriptionZh: '优质防紫外线太阳镜，意大利设计',
    price: 280.00,
    currency: 'EUR',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    ],
    category: 'Accessories',
    inventory: 28,
    colors: ['Black', 'Tortoise', 'Gold'],
    rating: 4.7,
    reviewCount: 189,
    tags: ['sunglasses', 'designer', 'uv-protection'],
  },
  {
    id: 'prod_003',
    merchantId: 'merch_001',
    name: 'Silk Scarf',
    nameZh: '真丝围巾',
    nameEs: 'Bufanda de Seda',
    nameIt: 'Sciarpa di Seta',
    description: '100% pure silk scarf with hand-painted Italian design',
    descriptionZh: '100%纯真丝围巾，手绘意大利设计',
    price: 180.00,
    currency: 'EUR',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400',
    ],
    category: 'Accessories',
    inventory: 45,
    colors: ['Red', 'Blue', 'Gold', 'Green'],
    rating: 4.8,
    reviewCount: 156,
    tags: ['silk', 'scarf', 'handpainted', 'luxury'],
  },
  {
    id: 'prod_004',
    merchantId: 'merch_002',
    name: 'Spanish Leather Boots',
    nameZh: '西班牙真皮靴子',
    nameEs: 'Botas de Cuero Españolas',
    nameIt: 'Stivali in Pelle Spagnoli',
    description: 'Handcrafted Spanish leather boots with traditional craftsmanship',
    descriptionZh: '手工制作的西班牙真皮靴子，传统工艺',
    price: 380.00,
    currency: 'EUR',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400',
    ],
    category: 'Shoes',
    inventory: 18,
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Black', 'Brown'],
    rating: 4.6,
    reviewCount: 92,
    tags: ['boots', 'leather', 'spanish', 'handmade'],
  },
  {
    id: 'prod_005',
    merchantId: 'merch_002',
    name: 'Flamenco-Inspired Dress',
    nameZh: '弗拉明戈风格连衣裙',
    nameEs: 'Vestido Inspirado en Flamenco',
    nameIt: 'Abito Ispirato al Flamenco',
    description: 'Beautiful dress inspired by traditional Spanish flamenco',
    descriptionZh: '受传统西班牙弗拉明戈启发的美丽连衣裙',
    price: 320.00,
    currency: 'EUR',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    ],
    category: 'Fashion',
    inventory: 8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black', 'White'],
    rating: 4.9,
    reviewCount: 67,
    tags: ['dress', 'flamenco', 'spanish', 'traditional'],
  },
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    id: 'txn_001',
    customerId: 'cust_001',
    merchantId: 'merch_001',
    amount: 450.00,
    currency: 'EUR',
    vatSaved: 99.00,
    items: [
      { productId: 'prod_001', quantity: 1, color: 'Black' },
    ],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    location: 'Milan, Italy',
    paymentMethod: 'wechat',
    status: 'completed',
  },
  {
    id: 'txn_002',
    customerId: 'cust_002',
    merchantId: 'merch_001',
    amount: 460.00,
    currency: 'EUR',
    vatSaved: 101.20,
    items: [
      { productId: 'prod_002', quantity: 1, color: 'Black' },
      { productId: 'prod_003', quantity: 1, color: 'Red' },
    ],
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    location: 'Milan, Italy',
    paymentMethod: 'alipay',
    status: 'completed',
  },
  {
    id: 'txn_003',
    customerId: 'cust_003',
    merchantId: 'merch_002',
    amount: 700.00,
    currency: 'EUR',
    vatSaved: 154.00,
    items: [
      { productId: 'prod_004', quantity: 1, size: '38', color: 'Brown' },
      { productId: 'prod_005', quantity: 1, size: 'M', color: 'Red' },
    ],
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    location: 'Madrid, Spain',
    paymentMethod: 'wechat',
    status: 'completed',
  },
];

// Mock Group Buys
export const mockGroupBuys: GroupBuy[] = [
  {
    id: 'group_001',
    productId: 'prod_001',
    currentParticipants: 7,
    targetParticipants: 10,
    discount: 15,
    endsAt: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(), // 4 hours from now
    participants: [
      { name: '王伟', avatar: '👨' },
      { name: '李娜', avatar: '👩' },
      { name: '张静', avatar: '👩‍💼' },
      { name: '刘强', avatar: '👨‍💼' },
      { name: '陈敏', avatar: '👩‍🦰' },
      { name: '杨磊', avatar: '👨‍🦱' },
      { name: '赵霞', avatar: '👩‍🦳' },
    ],
  },
  {
    id: 'group_002',
    productId: 'prod_003',
    currentParticipants: 12,
    targetParticipants: 15,
    discount: 20,
    endsAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    participants: [
      { name: '王伟', avatar: '👨' },
      { name: '李娜', avatar: '👩' },
      // ... more participants
    ],
  },
];

// Mock Live Streams
export const mockLiveStreams: LiveStream[] = [
  {
    id: 'live_001',
    merchantId: 'merch_001',
    title: 'New Spring Collection Launch',
    titleZh: '春季新品发布会',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    viewerCount: 1247,
    isLive: true,
    hostName: 'Sofia Rossi',
    hostAvatar: '👩‍💼',
  },
  {
    id: 'live_002',
    merchantId: 'merch_001',
    title: 'Leather Goods Masterclass',
    titleZh: '皮具制作大师课',
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400',
    viewerCount: 0,
    isLive: false,
    scheduledFor: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    hostName: 'Marco Bianchi',
    hostAvatar: '👨‍🏫',
  },
];

// Helper function to get random customer
export const getRandomCustomer = () => {
  return mockCustomers[Math.floor(Math.random() * mockCustomers.length)];
};

// Helper function to simulate inventory decrease
export const decreaseInventory = (productId: string, amount: number = 1) => {
  const product = mockProducts.find(p => p.id === productId);
  if (product) {
    product.inventory = Math.max(0, product.inventory - amount);
  }
};

// Helper function to simulate new transaction
export const generateNewTransaction = (customerId: string, merchantId: string, items: CartItem[]): Transaction => {
  const total = items.reduce((sum, item) => {
    const product = mockProducts.find(p => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return {
    id: `txn_${Date.now()}`,
    customerId,
    merchantId,
    amount: total,
    currency: 'EUR',
    vatSaved: total * 0.22, // 22% VAT
    items,
    timestamp: new Date().toISOString(),
    location: mockMerchants.find(m => m.id === merchantId)?.city || 'Milan',
    paymentMethod: Math.random() > 0.5 ? 'wechat' : 'alipay',
    status: 'completed',
  };
};