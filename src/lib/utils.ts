import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind class merger utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency formatting
export function formatCurrency(amount: number, currency: string = 'EUR', locale: string = 'en-EU'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Date formatting
export function formatDate(date: string | Date, locale: string = 'en-US'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

// Relative time formatting (e.g., "2 hours ago")
export function formatRelativeTime(date: string | Date, locale: string = 'en'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const translations: Record<string, Record<string, string>> = {
    en: {
      justNow: 'Just now',
      secondsAgo: 'seconds ago',
      minuteAgo: '1 minute ago',
      minutesAgo: 'minutes ago',
      hourAgo: '1 hour ago',
      hoursAgo: 'hours ago',
      dayAgo: '1 day ago',
      daysAgo: 'days ago',
      weekAgo: '1 week ago',
      weeksAgo: 'weeks ago',
      monthAgo: '1 month ago',
      monthsAgo: 'months ago',
      yearAgo: '1 year ago',
      yearsAgo: 'years ago',
    },
    zh: {
      justNow: '刚刚',
      secondsAgo: '秒前',
      minuteAgo: '1分钟前',
      minutesAgo: '分钟前',
      hourAgo: '1小时前',
      hoursAgo: '小时前',
      dayAgo: '1天前',
      daysAgo: '天前',
      weekAgo: '1周前',
      weeksAgo: '周前',
      monthAgo: '1个月前',
      monthsAgo: '个月前',
      yearAgo: '1年前',
      yearsAgo: '年前',
    },
    es: {
      justNow: 'Justo ahora',
      secondsAgo: 'segundos atrás',
      minuteAgo: 'hace 1 minuto',
      minutesAgo: 'minutos atrás',
      hourAgo: 'hace 1 hora',
      hoursAgo: 'horas atrás',
      dayAgo: 'hace 1 día',
      daysAgo: 'días atrás',
      weekAgo: 'hace 1 semana',
      weeksAgo: 'semanas atrás',
      monthAgo: 'hace 1 mes',
      monthsAgo: 'meses atrás',
      yearAgo: 'hace 1 año',
      yearsAgo: 'años atrás',
    },
    it: {
      justNow: 'Proprio ora',
      secondsAgo: 'secondi fa',
      minuteAgo: '1 minuto fa',
      minutesAgo: 'minuti fa',
      hourAgo: '1 ora fa',
      hoursAgo: 'ore fa',
      dayAgo: '1 giorno fa',
      daysAgo: 'giorni fa',
      weekAgo: '1 settimana fa',
      weeksAgo: 'settimane fa',
      monthAgo: '1 mese fa',
      monthsAgo: 'mesi fa',
      yearAgo: '1 anno fa',
      yearsAgo: 'anni fa',
    },
  };

  const t = translations[locale] || translations.en;

  if (diffInSeconds < 10) return t.justNow;
  if (diffInSeconds < 60) return `${diffInSeconds} ${t.secondsAgo}`;
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes === 1) return t.minuteAgo;
  if (diffInMinutes < 60) return `${diffInMinutes} ${t.minutesAgo}`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours === 1) return t.hourAgo;
  if (diffInHours < 24) return `${diffInHours} ${t.hoursAgo}`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return t.dayAgo;
  if (diffInDays < 7) return `${diffInDays} ${t.daysAgo}`;
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks === 1) return t.weekAgo;
  if (diffInWeeks < 4) return `${diffInWeeks} ${t.weeksAgo}`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths === 1) return t.monthAgo;
  if (diffInMonths < 12) return `${diffInMonths} ${t.monthsAgo}`;
  
  const diffInYears = Math.floor(diffInDays / 365);
  if (diffInYears === 1) return t.yearAgo;
  return `${diffInYears} ${t.yearsAgo}`;
}

// Time remaining formatter (for countdown timers)
export function formatTimeRemaining(endDate: string | Date, locale: string = 'en'): string {
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  const now = new Date();
  const diffInSeconds = Math.floor((end.getTime() - now.getTime()) / 1000);

  if (diffInSeconds <= 0) {
    return locale === 'zh' ? '已结束' : locale === 'es' ? 'Finalizado' : locale === 'it' ? 'Terminato' : 'Ended';
  }

  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  if (hours > 0) {
    return locale === 'zh' 
      ? `剩余 ${hours}小时 ${minutes}分钟`
      : locale === 'es'
      ? `${hours}h ${minutes}m restantes`
      : locale === 'it'
      ? `${hours}h ${minutes}m rimanenti`
      : `${hours}h ${minutes}m left`;
  }

  if (minutes > 0) {
    return locale === 'zh'
      ? `剩余 ${minutes}分钟 ${seconds}秒`
      : locale === 'es'
      ? `${minutes}m ${seconds}s restantes`
      : locale === 'it'
      ? `${minutes}m ${seconds}s rimanenti`
      : `${minutes}m ${seconds}s left`;
  }

  return locale === 'zh'
    ? `剩余 ${seconds}秒`
    : locale === 'es'
    ? `${seconds}s restantes`
    : locale === 'it'
    ? `${seconds}s rimanenti`
    : `${seconds}s left`;
}

// Percentage formatter
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

// Number abbreviation (1000 -> 1K, 1000000 -> 1M)
export function abbreviateNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
}

// Generate QR code URL (using a QR code API)
export function generateQRCode(data: string, size: number = 200): string {
  // Using QR Server API (free, no API key needed)
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
}

// Generate share URL for WeChat/Alipay
export function generateShareUrl(merchantId: string, productId?: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://stamp-demo.vercel.app';
  const path = productId 
    ? `/wechat/${merchantId}/product/${productId}`
    : `/wechat/${merchantId}`;
  return `${baseUrl}${path}`;
}

// Simulate API delay (for realistic loading states)
export function simulateDelay(ms: number = 1000): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate random transaction ID
export function generateTransactionId(): string {
  return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Calculate VAT amount
export function calculateVAT(amount: number, vatRate: number = 0.22): number {
  return amount * vatRate;
}

// Calculate discount amount
export function calculateDiscount(price: number, discountPercentage: number): number {
  return price * (discountPercentage / 100);
}

// Get payment method icon
export function getPaymentMethodIcon(method: 'wechat' | 'alipay' | 'card'): string {
  const icons = {
    wechat: '💬',
    alipay: '💳',
    card: '💳',
  };
  return icons[method] || '💳';
}

// Get country flag emoji
export function getCountryFlag(country: string): string {
  const flags: Record<string, string> = {
    'China': '🇨🇳',
    'Italy': '🇮🇹',
    'Spain': '🇪🇸',
    'Germany': '🇩🇪',
    'France': '🇫🇷',
    'UK': '🇬🇧',
    'USA': '🇺🇸',
  };
  return flags[country] || '🌍';
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number (international format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

// Get locale from language code
export function getLocaleFromLanguage(lang: 'zh' | 'en' | 'es' | 'it'): string {
  const locales = {
    zh: 'zh-CN',
    en: 'en-US',
    es: 'es-ES',
    it: 'it-IT',
  };
  return locales[lang] || 'en-US';
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

// Generate random color (for avatars without images)
export function generateAvatarColor(name: string): string {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
  ];
  
  const charCode = name.charCodeAt(0);
  return colors[charCode % colors.length];
}

// Get initials from name
export function getInitials(name: string): string {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

// Format file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Check if device is mobile
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Copy to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === 'undefined') return false;
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}

// Vibrate device (for mobile haptic feedback)
export function vibrate(pattern: number | number[] = 50): void {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// Generate shareable link
export function generateShareableLink(type: 'product' | 'merchant' | 'groupbuy', id: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  return `${baseUrl}/share/${type}/${id}`;
}