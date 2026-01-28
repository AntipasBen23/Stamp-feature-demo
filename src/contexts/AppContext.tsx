'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';
import { 
  Customer, 
  Product, 
  CartItem, 
  Merchant,
  mockCustomers,
  mockProducts,
  mockMerchants,
} from '@/data/mockData';

interface CartItemWithDetails extends CartItem {
  product: Product;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
  
  currentUser: Customer | null;
  setCurrentUser: (user: Customer | null) => void;
  
  currentMerchant: Merchant | null;
  setCurrentMerchant: (merchant: Merchant | null) => void;
  
  cart: CartItemWithDetails[];
  addToCart: (productId: string, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  products: Product[];
  
  viewMode: 'tourist' | 'merchant' | 'demo';
  setViewMode: (mode: 'tourist' | 'merchant' | 'demo') => void;
  
  notifications: Notification[];
  addNotification: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');
  const [currentUser, setCurrentUser] = useState<Customer | null>(mockCustomers[0]);
  const [currentMerchant, setCurrentMerchant] = useState<Merchant | null>(mockMerchants[0]);
  const [cart, setCart] = useState<CartItemWithDetails[]>([]);
  const [products] = useState<Product[]>(mockProducts);
  const [viewMode, setViewMode] = useState<'tourist' | 'merchant' | 'demo'>('demo');
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const t = translations[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (currentUser) {
      setCurrentUser({ ...currentUser, language: lang });
    }
  };

  const addToCart = (productId: string, quantity = 1, size?: string, color?: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(
      item => item.productId === productId && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([...cart, { productId, quantity, size, color, product }]);
    }

    addNotification('success', t.product.addToCart, product.name);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.productId !== productId));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const addNotification = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const notification: Notification = {
      id: `notif_${Date.now()}`,
      type,
      title,
      message,
    };
    setNotifications([notification, ...notifications]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 3000);
  };

  const value: AppContextType = {
    language,
    setLanguage,
    t,
    currentUser,
    setCurrentUser,
    currentMerchant,
    setCurrentMerchant,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
    products,
    viewMode,
    setViewMode,
    notifications,
    addNotification,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}