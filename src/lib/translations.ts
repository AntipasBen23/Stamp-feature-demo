// Multi-language translations for STAMP Social Commerce Bridge
// Supports: English (en), Chinese (zh), Spanish (es), Italian (it)

export type Language = 'en' | 'zh' | 'es' | 'it';

export interface Translations {
  // Common
  common: {
    loading: string;
    error: string;
    retry: string;
    cancel: string;
    confirm: string;
    save: string;
    delete: string;
    edit: string;
    close: string;
    back: string;
    next: string;
    search: string;
    filter: string;
    sort: string;
    viewAll: string;
    showMore: string;
    showLess: string;
    comingSoon: string;
    new: string;
    hot: string;
    sale: string;
  };

  // Navigation
  nav: {
    home: string;
    products: string;
    cart: string;
    profile: string;
    orders: string;
    favorites: string;
    messages: string;
    settings: string;
    logout: string;
  };

  // Product
  product: {
    addToCart: string;
    buyNow: string;
    outOfStock: string;
    inStock: string;
    itemsLeft: string;
    selectColor: string;
    selectSize: string;
    quantity: string;
    price: string;
    originalPrice: string;
    discount: string;
    saved: string;
    description: string;
    specifications: string;
    reviews: string;
    rating: string;
    share: string;
    favorite: string;
  };

  // Cart
  cart: {
    title: string;
    empty: string;
    emptyDescription: string;
    startShopping: string;
    subtotal: string;
    shipping: string;
    shippingFree: string;
    vat: string;
    vatSaved: string;
    total: string;
    checkout: string;
    remove: string;
    updateQuantity: string;
  };

  // Checkout
  checkout: {
    title: string;
    shippingAddress: string;
    paymentMethod: string;
    orderSummary: string;
    placeOrder: string;
    processing: string;
    success: string;
    successMessage: string;
    failed: string;
    failedMessage: string;
  };

  // Group Buy
  groupBuy: {
    title: string;
    joinNow: string;
    participants: string;
    spotsLeft: string;
    timeRemaining: string;
    discount: string;
    originalPrice: string;
    groupPrice: string;
    howItWorks: string;
    step1: string;
    step2: string;
    step3: string;
    share: string;
    inviteFriends: string;
  };

  // Live Stream
  liveStream: {
    live: string;
    upcoming: string;
    ended: string;
    viewers: string;
    watching: string;
    scheduled: string;
    notify: string;
    shopNow: string;
    featuredProducts: string;
    chat: string;
    sendMessage: string;
  };

  // Merchant Dashboard
  dashboard: {
    title: string;
    overview: string;
    analytics: string;
    customers: string;
    products: string;
    orders: string;
    campaigns: string;
    settings: string;
    totalSales: string;
    totalOrders: string;
    touristCustomers: string;
    conversionRate: string;
    avgOrderValue: string;
    repeatPurchaseRate: string;
    topProducts: string;
    recentTransactions: string;
    customerInsights: string;
  };

  // Customer
  customer: {
    profile: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    language: string;
    preferences: string;
    orderHistory: string;
    loyaltyPoints: string;
    totalSpent: string;
    visitCount: string;
    lastVisit: string;
    memberSince: string;
  };

  // Notifications
  notifications: {
    title: string;
    markAllRead: string;
    noNotifications: string;
    newOrder: string;
    orderShipped: string;
    orderDelivered: string;
    groupBuySuccess: string;
    liveStreamStarting: string;
    newProductAdded: string;
    priceDropAlert: string;
    backInStock: string;
  };

  // Auth
  auth: {
    login: string;
    logout: string;
    register: string;
    forgotPassword: string;
    resetPassword: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    rememberMe: string;
    dontHaveAccount: string;
    alreadyHaveAccount: string;
    continueWithWechat: string;
    continueWithAlipay: string;
  };

  // Social
  social: {
    share: string;
    shareWithFriends: string;
    copyLink: string;
    linkCopied: string;
    shareToWechat: string;
    shareToMoments: string;
    shareToAlipay: string;
    likes: string;
    comments: string;
    views: string;
  };

  // Shipping
  shipping: {
    title: string;
    domesticShipping: string;
    internationalShipping: string;
    estimatedDelivery: string;
    trackingNumber: string;
    trackOrder: string;
    shippingMethod: string;
    express: string;
    standard: string;
    economy: string;
  };

  // Payment
  payment: {
    title: string;
    paymentMethod: string;
    wechatPay: string;
    alipay: string;
    creditCard: string;
    payNow: string;
    secure: string;
    processing: string;
    success: string;
    failed: string;
  };

  // Loyalty
  loyalty: {
    points: string;
    rewards: string;
    earnPoints: string;
    redeemPoints: string;
    pointsBalance: string;
    pointsHistory: string;
    tier: string;
    nextTier: string;
    benefits: string;
  };

  // Onboarding
  onboarding: {
    welcome: string;
    welcomeMessage: string;
    howItWorks: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    getStarted: string;
    skip: string;
  };

  // Errors
  errors: {
    generic: string;
    network: string;
    notFound: string;
    unauthorized: string;
    serverError: string;
    invalidInput: string;
    tryAgain: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      retry: 'Retry',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      viewAll: 'View All',
      showMore: 'Show More',
      showLess: 'Show Less',
      comingSoon: 'Coming Soon',
      new: 'New',
      hot: 'Hot',
      sale: 'Sale',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      cart: 'Cart',
      profile: 'Profile',
      orders: 'Orders',
      favorites: 'Favorites',
      messages: 'Messages',
      settings: 'Settings',
      logout: 'Logout',
    },
    product: {
      addToCart: 'Add to Cart',
      buyNow: 'Buy Now',
      outOfStock: 'Out of Stock',
      inStock: 'In Stock',
      itemsLeft: 'items left',
      selectColor: 'Select Color',
      selectSize: 'Select Size',
      quantity: 'Quantity',
      price: 'Price',
      originalPrice: 'Original Price',
      discount: 'Discount',
      saved: 'Saved',
      description: 'Description',
      specifications: 'Specifications',
      reviews: 'Reviews',
      rating: 'Rating',
      share: 'Share',
      favorite: 'Favorite',
    },
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      emptyDescription: 'Start adding products to your cart',
      startShopping: 'Start Shopping',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingFree: 'Free Shipping',
      vat: 'VAT',
      vatSaved: 'VAT Saved with STAMP',
      total: 'Total',
      checkout: 'Checkout',
      remove: 'Remove',
      updateQuantity: 'Update Quantity',
    },
    checkout: {
      title: 'Checkout',
      shippingAddress: 'Shipping Address',
      paymentMethod: 'Payment Method',
      orderSummary: 'Order Summary',
      placeOrder: 'Place Order',
      processing: 'Processing...',
      success: 'Order Placed Successfully!',
      successMessage: 'Your order has been confirmed. You will receive a confirmation email shortly.',
      failed: 'Payment Failed',
      failedMessage: 'There was an error processing your payment. Please try again.',
    },
    groupBuy: {
      title: 'Group Buy',
      joinNow: 'Join Now',
      participants: 'Participants',
      spotsLeft: 'spots left',
      timeRemaining: 'Time Remaining',
      discount: 'Group Discount',
      originalPrice: 'Original Price',
      groupPrice: 'Group Price',
      howItWorks: 'How it works',
      step1: 'Join or start a group',
      step2: 'Invite friends to join',
      step3: 'Everyone gets the discount when target is reached',
      share: 'Share with Friends',
      inviteFriends: 'Invite Friends',
    },
    liveStream: {
      live: 'LIVE',
      upcoming: 'Upcoming',
      ended: 'Ended',
      viewers: 'Viewers',
      watching: 'watching now',
      scheduled: 'Scheduled for',
      notify: 'Notify Me',
      shopNow: 'Shop Now',
      featuredProducts: 'Featured Products',
      chat: 'Chat',
      sendMessage: 'Send message...',
    },
    dashboard: {
      title: 'Merchant Dashboard',
      overview: 'Overview',
      analytics: 'Analytics',
      customers: 'Customers',
      products: 'Products',
      orders: 'Orders',
      campaigns: 'Campaigns',
      settings: 'Settings',
      totalSales: 'Total Sales',
      totalOrders: 'Total Orders',
      touristCustomers: 'Tourist Customers',
      conversionRate: 'Conversion Rate',
      avgOrderValue: 'Avg. Order Value',
      repeatPurchaseRate: 'Repeat Purchase Rate',
      topProducts: 'Top Products',
      recentTransactions: 'Recent Transactions',
      customerInsights: 'Customer Insights',
    },
    customer: {
      profile: 'Customer Profile',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      country: 'Country',
      language: 'Language',
      preferences: 'Preferences',
      orderHistory: 'Order History',
      loyaltyPoints: 'Loyalty Points',
      totalSpent: 'Total Spent',
      visitCount: 'Visits',
      lastVisit: 'Last Visit',
      memberSince: 'Member Since',
    },
    notifications: {
      title: 'Notifications',
      markAllRead: 'Mark all as read',
      noNotifications: 'No notifications',
      newOrder: 'New order received',
      orderShipped: 'Your order has been shipped',
      orderDelivered: 'Your order has been delivered',
      groupBuySuccess: 'Group buy successful!',
      liveStreamStarting: 'Live stream starting soon',
      newProductAdded: 'New product added',
      priceDropAlert: 'Price drop alert',
      backInStock: 'Back in stock',
    },
    auth: {
      login: 'Login',
      logout: 'Logout',
      register: 'Register',
      forgotPassword: 'Forgot Password?',
      resetPassword: 'Reset Password',
      emailPlaceholder: 'Enter your email',
      passwordPlaceholder: 'Enter your password',
      rememberMe: 'Remember me',
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: 'Already have an account?',
      continueWithWechat: 'Continue with WeChat',
      continueWithAlipay: 'Continue with Alipay',
    },
    social: {
      share: 'Share',
      shareWithFriends: 'Share with Friends',
      copyLink: 'Copy Link',
      linkCopied: 'Link copied to clipboard',
      shareToWechat: 'Share to WeChat',
      shareToMoments: 'Share to Moments',
      shareToAlipay: 'Share to Alipay',
      likes: 'Likes',
      comments: 'Comments',
      views: 'Views',
    },
    shipping: {
      title: 'Shipping',
      domesticShipping: 'Domestic Shipping',
      internationalShipping: 'International Shipping to China',
      estimatedDelivery: 'Estimated Delivery',
      trackingNumber: 'Tracking Number',
      trackOrder: 'Track Order',
      shippingMethod: 'Shipping Method',
      express: 'Express (3-5 days)',
      standard: 'Standard (7-10 days)',
      economy: 'Economy (15-20 days)',
    },
    payment: {
      title: 'Payment',
      paymentMethod: 'Payment Method',
      wechatPay: 'WeChat Pay',
      alipay: 'Alipay',
      creditCard: 'Credit Card',
      payNow: 'Pay Now',
      secure: 'Secure Payment',
      processing: 'Processing payment...',
      success: 'Payment successful!',
      failed: 'Payment failed',
    },
    loyalty: {
      points: 'Points',
      rewards: 'Rewards',
      earnPoints: 'Earn Points',
      redeemPoints: 'Redeem Points',
      pointsBalance: 'Points Balance',
      pointsHistory: 'Points History',
      tier: 'Current Tier',
      nextTier: 'Next Tier',
      benefits: 'Benefits',
    },
    onboarding: {
      welcome: 'Welcome to STAMP Social Commerce',
      welcomeMessage: 'Shop European luxury, connect across borders',
      howItWorks: 'How It Works',
      step1Title: 'Shop with STAMP',
      step1Description: 'Complete your purchase with instant VAT savings',
      step2Title: 'Get Connected',
      step2Description: 'Access the merchant mini-program via WeChat or Alipay',
      step3Title: 'Shop Anytime',
      step3Description: 'Reorder products and enjoy exclusive online deals',
      getStarted: 'Get Started',
      skip: 'Skip',
    },
    errors: {
      generic: 'Something went wrong. Please try again.',
      network: 'Network error. Please check your connection.',
      notFound: 'Page not found',
      unauthorized: 'Unauthorized access',
      serverError: 'Server error. Please try again later.',
      invalidInput: 'Invalid input. Please check your information.',
      tryAgain: 'Try Again',
    },
  },

  zh: {
    common: {
      loading: '加载中...',
      error: '错误',
      retry: '重试',
      cancel: '取消',
      confirm: '确认',
      save: '保存',
      delete: '删除',
      edit: '编辑',
      close: '关闭',
      back: '返回',
      next: '下一步',
      search: '搜索',
      filter: '筛选',
      sort: '排序',
      viewAll: '查看全部',
      showMore: '显示更多',
      showLess: '收起',
      comingSoon: '即将推出',
      new: '新品',
      hot: '热门',
      sale: '促销',
    },
    nav: {
      home: '首页',
      products: '商品',
      cart: '购物车',
      profile: '我的',
      orders: '订单',
      favorites: '收藏',
      messages: '消息',
      settings: '设置',
      logout: '退出登录',
    },
    product: {
      addToCart: '加入购物车',
      buyNow: '立即购买',
      outOfStock: '缺货',
      inStock: '有货',
      itemsLeft: '件剩余',
      selectColor: '选择颜色',
      selectSize: '选择尺码',
      quantity: '数量',
      price: '价格',
      originalPrice: '原价',
      discount: '折扣',
      saved: '已省',
      description: '商品描述',
      specifications: '规格参数',
      reviews: '评价',
      rating: '评分',
      share: '分享',
      favorite: '收藏',
    },
    cart: {
      title: '购物车',
      empty: '购物车是空的',
      emptyDescription: '快去添加商品吧',
      startShopping: '开始购物',
      subtotal: '小计',
      shipping: '运费',
      shippingFree: '免运费',
      vat: '增值税',
      vatSaved: 'STAMP 节省的增值税',
      total: '总计',
      checkout: '去结算',
      remove: '移除',
      updateQuantity: '更新数量',
    },
    checkout: {
      title: '结算',
      shippingAddress: '收货地址',
      paymentMethod: '支付方式',
      orderSummary: '订单摘要',
      placeOrder: '提交订单',
      processing: '处理中...',
      success: '订单提交成功！',
      successMessage: '您的订单已确认。您将很快收到确认邮件。',
      failed: '支付失败',
      failedMessage: '处理您的支付时出错。请重试。',
    },
    groupBuy: {
      title: '拼团购',
      joinNow: '立即参团',
      participants: '参与人数',
      spotsLeft: '个名额剩余',
      timeRemaining: '剩余时间',
      discount: '团购折扣',
      originalPrice: '原价',
      groupPrice: '拼团价',
      howItWorks: '拼团说明',
      step1: '加入或发起拼团',
      step2: '邀请好友参团',
      step3: '达到人数后大家都享受折扣',
      share: '分享给好友',
      inviteFriends: '邀请好友',
    },
    liveStream: {
      live: '直播中',
      upcoming: '即将开始',
      ended: '已结束',
      viewers: '观看人数',
      watching: '人正在观看',
      scheduled: '预约时间',
      notify: '提醒我',
      shopNow: '立即购买',
      featuredProducts: '推荐商品',
      chat: '聊天',
      sendMessage: '发送消息...',
    },
    dashboard: {
      title: '商家后台',
      overview: '概览',
      analytics: '数据分析',
      customers: '客户',
      products: '商品',
      orders: '订单',
      campaigns: '营销活动',
      settings: '设置',
      totalSales: '总销售额',
      totalOrders: '总订单数',
      touristCustomers: '游客客户',
      conversionRate: '转化率',
      avgOrderValue: '平均订单金额',
      repeatPurchaseRate: '复购率',
      topProducts: '热销商品',
      recentTransactions: '最近交易',
      customerInsights: '客户洞察',
    },
    customer: {
      profile: '客户资料',
      name: '姓名',
      email: '邮箱',
      phone: '电话',
      country: '国家',
      language: '语言',
      preferences: '偏好',
      orderHistory: '订单历史',
      loyaltyPoints: '积分',
      totalSpent: '总消费',
      visitCount: '访问次数',
      lastVisit: '最后访问',
      memberSince: '注册时间',
    },
    notifications: {
      title: '通知',
      markAllRead: '全部标记为已读',
      noNotifications: '暂无通知',
      newOrder: '收到新订单',
      orderShipped: '您的订单已发货',
      orderDelivered: '您的订单已送达',
      groupBuySuccess: '拼团成功！',
      liveStreamStarting: '直播即将开始',
      newProductAdded: '新品上架',
      priceDropAlert: '降价提醒',
      backInStock: '补货提醒',
    },
    auth: {
      login: '登录',
      logout: '退出登录',
      register: '注册',
      forgotPassword: '忘记密码？',
      resetPassword: '重置密码',
      emailPlaceholder: '请输入邮箱',
      passwordPlaceholder: '请输入密码',
      rememberMe: '记住我',
      dontHaveAccount: '还没有账号？',
      alreadyHaveAccount: '已有账号？',
      continueWithWechat: '使用微信登录',
      continueWithAlipay: '使用支付宝登录',
    },
    social: {
      share: '分享',
      shareWithFriends: '分享给好友',
      copyLink: '复制链接',
      linkCopied: '链接已复制',
      shareToWechat: '分享到微信',
      shareToMoments: '分享到朋友圈',
      shareToAlipay: '分享到支付宝',
      likes: '点赞',
      comments: '评论',
      views: '浏览',
    },
    shipping: {
      title: '物流',
      domesticShipping: '国内配送',
      internationalShipping: '国际配送至中国',
      estimatedDelivery: '预计送达',
      trackingNumber: '快递单号',
      trackOrder: '追踪订单',
      shippingMethod: '配送方式',
      express: '快递 (3-5天)',
      standard: '标准 (7-10天)',
      economy: '经济 (15-20天)',
    },
    payment: {
      title: '支付',
      paymentMethod: '支付方式',
      wechatPay: '微信支付',
      alipay: '支付宝',
      creditCard: '信用卡',
      payNow: '立即支付',
      secure: '安全支付',
      processing: '支付处理中...',
      success: '支付成功！',
      failed: '支付失败',
    },
    loyalty: {
      points: '积分',
      rewards: '奖励',
      earnPoints: '赚取积分',
      redeemPoints: '兑换积分',
      pointsBalance: '积分余额',
      pointsHistory: '积分历史',
      tier: '当前等级',
      nextTier: '下一等级',
      benefits: '会员权益',
    },
    onboarding: {
      welcome: '欢迎来到 STAMP 社交电商',
      welcomeMessage: '购买欧洲奢品，跨境无忧连接',
      howItWorks: '如何使用',
      step1Title: '使用 STAMP 购物',
      step1Description: '完成购买，即时享受增值税优惠',
      step2Title: '获取连接',
      step2Description: '通过微信或支付宝访问商家小程序',
      step3Title: '随时购物',
      step3Description: '复购商品，享受独家在线优惠',
      getStarted: '开始使用',
      skip: '跳过',
    },
    errors: {
      generic: '出错了，请重试。',
      network: '网络错误，请检查您的连接。',
      notFound: '页面未找到',
      unauthorized: '未授权访问',
      serverError: '服务器错误，请稍后再试。',
      invalidInput: '输入无效，请检查您的信息。',
      tryAgain: '重试',
    },
  },

  es: {
    common: {
      loading: 'Cargando...',
      error: 'Error',
      retry: 'Reintentar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      save: 'Guardar',
      delete: 'Eliminar',
      edit: 'Editar',
      close: 'Cerrar',
      back: 'Atrás',
      next: 'Siguiente',
      search: 'Buscar',
      filter: 'Filtrar',
      sort: 'Ordenar',
      viewAll: 'Ver Todo',
      showMore: 'Mostrar Más',
      showLess: 'Mostrar Menos',
      comingSoon: 'Próximamente',
      new: 'Nuevo',
      hot: 'Popular',
      sale: 'Oferta',
    },
    nav: {
      home: 'Inicio',
      products: 'Productos',
      cart: 'Carrito',
      profile: 'Perfil',
      orders: 'Pedidos',
      favorites: 'Favoritos',
      messages: 'Mensajes',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
    },
    product: {
      addToCart: 'Añadir al Carrito',
      buyNow: 'Comprar Ahora',
      outOfStock: 'Agotado',
      inStock: 'En Stock',
      itemsLeft: 'unidades restantes',
      selectColor: 'Seleccionar Color',
      selectSize: 'Seleccionar Talla',
      quantity: 'Cantidad',
      price: 'Precio',
      originalPrice: 'Precio Original',
      discount: 'Descuento',
      saved: 'Ahorrado',
      description: 'Descripción',
      specifications: 'Especificaciones',
      reviews: 'Reseñas',
      rating: 'Valoración',
      share: 'Compartir',
      favorite: 'Favorito',
    },
    cart: {
      title: 'Carrito de Compras',
      empty: 'Tu carrito está vacío',
      emptyDescription: 'Comienza a añadir productos a tu carrito',
      startShopping: 'Comenzar a Comprar',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      shippingFree: 'Envío Gratis',
      vat: 'IVA',
      vatSaved: 'IVA Ahorrado con STAMP',
      total: 'Total',
      checkout: 'Pagar',
      remove: 'Eliminar',
      updateQuantity: 'Actualizar Cantidad',
    },
    checkout: {
      title: 'Pagar',
      shippingAddress: 'Dirección de Envío',
      paymentMethod: 'Método de Pago',
      orderSummary: 'Resumen del Pedido',
      placeOrder: 'Realizar Pedido',
      processing: 'Procesando...',
      success: '¡Pedido Realizado con Éxito!',
      successMessage: 'Tu pedido ha sido confirmado. Recibirás un correo de confirmación pronto.',
      failed: 'Pago Fallido',
      failedMessage: 'Hubo un error al procesar tu pago. Por favor, inténtalo de nuevo.',
    },
    groupBuy: {
      title: 'Compra Grupal',
      joinNow: 'Únete Ahora',
      participants: 'Participantes',
      spotsLeft: 'lugares restantes',
      timeRemaining: 'Tiempo Restante',
      discount: 'Descuento Grupal',
      originalPrice: 'Precio Original',
      groupPrice: 'Precio Grupal',
      howItWorks: 'Cómo funciona',
      step1: 'Únete o inicia un grupo',
      step2: 'Invita amigos a unirse',
      step3: 'Todos obtienen el descuento cuando se alcanza el objetivo',
      share: 'Compartir con Amigos',
      inviteFriends: 'Invitar Amigos',
    },
    liveStream: {
      live: 'EN VIVO',
      upcoming: 'Próximo',
      ended: 'Finalizado',
      viewers: 'Espectadores',
      watching: 'viendo ahora',
      scheduled: 'Programado para',
      notify: 'Notificarme',
      shopNow: 'Comprar Ahora',
      featuredProducts: 'Productos Destacados',
      chat: 'Chat',
      sendMessage: 'Enviar mensaje...',
    },
    dashboard: {
      title: 'Panel del Comerciante',
      overview: 'Resumen',
      analytics: 'Análisis',
      customers: 'Clientes',
      products: 'Productos',
      orders: 'Pedidos',
      campaigns: 'Campañas',
      settings: 'Configuración',
      totalSales: 'Ventas Totales',
      totalOrders: 'Pedidos Totales',
      touristCustomers: 'Clientes Turistas',
      conversionRate: 'Tasa de Conversión',
      avgOrderValue: 'Valor Promedio del Pedido',
      repeatPurchaseRate: 'Tasa de Recompra',
      topProducts: 'Productos Principales',
      recentTransactions: 'Transacciones Recientes',
      customerInsights: 'Información de Clientes',
    },
    customer: {
      profile: 'Perfil del Cliente',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      country: 'País',
      language: 'Idioma',
      preferences: 'Preferencias',
      orderHistory: 'Historial de Pedidos',
      loyaltyPoints: 'Puntos de Fidelidad',
      totalSpent: 'Gasto Total',
      visitCount: 'Visitas',
      lastVisit: 'Última Visita',
      memberSince: 'Miembro Desde',
    },
    notifications: {
      title: 'Notificaciones',
      markAllRead: 'Marcar todas como leídas',
      noNotifications: 'Sin notificaciones',
      newOrder: 'Nuevo pedido recibido',
      orderShipped: 'Tu pedido ha sido enviado',
      orderDelivered: 'Tu pedido ha sido entregado',
      groupBuySuccess: '¡Compra grupal exitosa!',
      liveStreamStarting: 'Transmisión en vivo comenzando pronto',
      newProductAdded: 'Nuevo producto añadido',
      priceDropAlert: 'Alerta de bajada de precio',
      backInStock: 'De vuelta en stock',
    },
    auth: {
      login: 'Iniciar Sesión',
      logout: 'Cerrar Sesión',
      register: 'Registrarse',
      forgotPassword: '¿Olvidaste tu contraseña?',
      resetPassword: 'Restablecer Contraseña',
      emailPlaceholder: 'Ingresa tu correo',
      passwordPlaceholder: 'Ingresa tu contraseña',
      rememberMe: 'Recuérdame',
      dontHaveAccount: '¿No tienes una cuenta?',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      continueWithWechat: 'Continuar con WeChat',
      continueWithAlipay: 'Continuar con Alipay',
    },
    social: {
      share: 'Compartir',
      shareWithFriends: 'Compartir con Amigos',
      copyLink: 'Copiar Enlace',
      linkCopied: 'Enlace copiado al portapapeles',
      shareToWechat: 'Compartir en WeChat',
      shareToMoments: 'Compartir en Momentos',
      shareToAlipay: 'Compartir en Alipay',
      likes: 'Me Gusta',
      comments: 'Comentarios',
      views: 'Vistas',
    },
    shipping: {
      title: 'Envío',
      domesticShipping: 'Envío Nacional',
      internationalShipping: 'Envío Internacional a China',
      estimatedDelivery: 'Entrega Estimada',
      trackingNumber: 'Número de Seguimiento',
      trackOrder: 'Rastrear Pedido',
      shippingMethod: 'Método de Envío',
      express: 'Exprés (3-5 días)',
      standard: 'Estándar (7-10 días)',
      economy: 'Económico (15-20 días)',
    },
    payment: {
      title: 'Pago',
      paymentMethod: 'Método de Pago',
      wechatPay: 'WeChat Pay',
      alipay: 'Alipay',
      creditCard: 'Tarjeta de Crédito',
      payNow: 'Pagar Ahora',
      secure: 'Pago Seguro',
      processing: 'Procesando pago...',
      success: '¡Pago exitoso!',
      failed: 'Pago fallido',
    },
    loyalty: {
      points: 'Puntos',
      rewards: 'Recompensas',
      earnPoints: 'Ganar Puntos',
      redeemPoints: 'Canjear Puntos',
      pointsBalance: 'Saldo de Puntos',
      pointsHistory: 'Historial de Puntos',
      tier: 'Nivel Actual',
      nextTier: 'Siguiente Nivel',
      benefits: 'Beneficios',
    },
    onboarding: {
      welcome: 'Bienvenido al Comercio Social STAMP',
      welcomeMessage: 'Compra lujo europeo, conecta a través de fronteras',
      howItWorks: 'Cómo Funciona',
      step1Title: 'Compra con STAMP',
      step1Description: 'Completa tu compra con ahorros instantáneos de IVA',
      step2Title: 'Conéctate',
      step2Description: 'Accede al mini-programa del comerciante via WeChat o Alipay',
      step3Title: 'Compra en Cualquier Momento',
      step3Description: 'Reordena productos y disfruta de ofertas exclusivas en línea',
      getStarted: 'Comenzar',
      skip: 'Omitir',
    },
    errors: {
      generic: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      network: 'Error de red. Por favor, verifica tu conexión.',
      notFound: 'Página no encontrada',
      unauthorized: 'Acceso no autorizado',
      serverError: 'Error del servidor. Por favor, inténtalo más tarde.',
      invalidInput: 'Entrada inválida. Por favor, verifica tu información.',
      tryAgain: 'Intentar de Nuevo',
    },
  },

  it: {
    common: {
      loading: 'Caricamento...',
      error: 'Errore',
      retry: 'Riprova',
      cancel: 'Annulla',
      confirm: 'Conferma',
      save: 'Salva',
      delete: 'Elimina',
      edit: 'Modifica',
      close: 'Chiudi',
      back: 'Indietro',
      next: 'Avanti',
      search: 'Cerca',
      filter: 'Filtra',
      sort: 'Ordina',
      viewAll: 'Vedi Tutto',
      showMore: 'Mostra Altro',
      showLess: 'Mostra Meno',
      comingSoon: 'Prossimamente',
      new: 'Nuovo',
      hot: 'Popolare',
      sale: 'Saldi',
    },
    nav: {
      home: 'Home',
      products: 'Prodotti',
      cart: 'Carrello',
      profile: 'Profilo',
      orders: 'Ordini',
      favorites: 'Preferiti',
      messages: 'Messaggi',
      settings: 'Impostazioni',
      logout: 'Esci',
    },
    product: {
      addToCart: 'Aggiungi al Carrello',
      buyNow: 'Acquista Ora',
      outOfStock: 'Esaurito',
      inStock: 'Disponibile',
      itemsLeft: 'articoli rimasti',
      selectColor: 'Seleziona Colore',
      selectSize: 'Seleziona Taglia',
      quantity: 'Quantità',
      price: 'Prezzo',
      originalPrice: 'Prezzo Originale',
      discount: 'Sconto',
      saved: 'Risparmiato',
      description: 'Descrizione',
      specifications: 'Specifiche',
      reviews: 'Recensioni',
      rating: 'Valutazione',
      share: 'Condividi',
      favorite: 'Preferito',
    },
    cart: {
      title: 'Carrello',
      empty: 'Il tuo carrello è vuoto',
      emptyDescription: 'Inizia ad aggiungere prodotti al tuo carrello',
      startShopping: 'Inizia lo Shopping',
      subtotal: 'Subtotale',
      shipping: 'Spedizione',
      shippingFree: 'Spedizione Gratuita',
      vat: 'IVA',
      vatSaved: 'IVA Risparmiata con STAMP',
      total: 'Totale',
      checkout: 'Procedi al Pagamento',
      remove: 'Rimuovi',
      updateQuantity: 'Aggiorna Quantità',
    },
    checkout: {
      title: 'Pagamento',
      shippingAddress: 'Indirizzo di Spedizione',
      paymentMethod: 'Metodo di Pagamento',
      orderSummary: 'Riepilogo Ordine',
      placeOrder: 'Effettua Ordine',
      processing: 'Elaborazione...',
      success: 'Ordine Effettuato con Successo!',
      successMessage: 'Il tuo ordine è stato confermato. Riceverai una email di conferma a breve.',
      failed: 'Pagamento Fallito',
      failedMessage: 'Si è verificato un errore durante l\'elaborazione del pagamento. Per favore riprova.',
    },
    groupBuy: {
      title: 'Acquisto di Gruppo',
      joinNow: 'Unisciti Ora',
      participants: 'Partecipanti',
      spotsLeft: 'posti rimasti',
      timeRemaining: 'Tempo Rimanente',
      discount: 'Sconto di Gruppo',
      originalPrice: 'Prezzo Originale',
      groupPrice: 'Prezzo di Gruppo',
      howItWorks: 'Come funziona',
      step1: 'Unisciti o avvia un gruppo',
      step2: 'Invita amici a unirsi',
      step3: 'Tutti ottengono lo sconto quando si raggiunge l\'obiettivo',
      share: 'Condividi con Amici',
      inviteFriends: 'Invita Amici',
    },
    liveStream: {
      live: 'LIVE',
      upcoming: 'Prossimo',
      ended: 'Terminato',
      viewers: 'Spettatori',
      watching: 'stanno guardando',
      scheduled: 'Programmato per',
      notify: 'Avvisami',
      shopNow: 'Acquista Ora',
      featuredProducts: 'Prodotti in Evidenza',
      chat: 'Chat',
      sendMessage: 'Invia messaggio...',
    },
    dashboard: {
      title: 'Pannello Commerciante',
      overview: 'Panoramica',
      analytics: 'Analisi',
      customers: 'Clienti',
      products: 'Prodotti',
      orders: 'Ordini',
      campaigns: 'Campagne',
      settings: 'Impostazioni',
      totalSales: 'Vendite Totali',
      totalOrders: 'Ordini Totali',
      touristCustomers: 'Clienti Turisti',
      conversionRate: 'Tasso di Conversione',
      avgOrderValue: 'Valore Medio Ordine',
      repeatPurchaseRate: 'Tasso di Riacquisto',
      topProducts: 'Prodotti Principali',
      recentTransactions: 'Transazioni Recenti',
      customerInsights: 'Insights sui Clienti',
    },
    customer: {
      profile: 'Profilo Cliente',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefono',
      country: 'Paese',
      language: 'Lingua',
      preferences: 'Preferenze',
      orderHistory: 'Storico Ordini',
      loyaltyPoints: 'Punti Fedeltà',
      totalSpent: 'Totale Speso',
      visitCount: 'Visite',
      lastVisit: 'Ultima Visita',
      memberSince: 'Membro Dal',
    },
    notifications: {
      title: 'Notifiche',
      markAllRead: 'Segna tutte come lette',
      noNotifications: 'Nessuna notifica',
      newOrder: 'Nuovo ordine ricevuto',
      orderShipped: 'Il tuo ordine è stato spedito',
      orderDelivered: 'Il tuo ordine è stato consegnato',
      groupBuySuccess: 'Acquisto di gruppo riuscito!',
      liveStreamStarting: 'Trasmissione in diretta in arrivo',
      newProductAdded: 'Nuovo prodotto aggiunto',
      priceDropAlert: 'Allerta riduzione prezzo',
      backInStock: 'Ritorno in magazzino',
    },
    auth: {
      login: 'Accedi',
      logout: 'Esci',
      register: 'Registrati',
      forgotPassword: 'Password dimenticata?',
      resetPassword: 'Reimposta Password',
      emailPlaceholder: 'Inserisci la tua email',
      passwordPlaceholder: 'Inserisci la tua password',
      rememberMe: 'Ricordami',
      dontHaveAccount: 'Non hai un account?',
      alreadyHaveAccount: 'Hai già un account?',
      continueWithWechat: 'Continua con WeChat',
      continueWithAlipay: 'Continua con Alipay',
    },
    social: {
      share: 'Condividi',
      shareWithFriends: 'Condividi con Amici',
      copyLink: 'Copia Link',
      linkCopied: 'Link copiato negli appunti',
      shareToWechat: 'Condividi su WeChat',
      shareToMoments: 'Condividi su Moments',
      shareToAlipay: 'Condividi su Alipay',
      likes: 'Mi Piace',
      comments: 'Commenti',
      views: 'Visualizzazioni',
    },
    shipping: {
      title: 'Spedizione',
      domesticShipping: 'Spedizione Nazionale',
      internationalShipping: 'Spedizione Internazionale in Cina',
      estimatedDelivery: 'Consegna Stimata',
      trackingNumber: 'Numero di Tracciamento',
      trackOrder: 'Traccia Ordine',
      shippingMethod: 'Metodo di Spedizione',
      express: 'Espresso (3-5 giorni)',
      standard: 'Standard (7-10 giorni)',
      economy: 'Economico (15-20 giorni)',
    },
    payment: {
      title: 'Pagamento',
      paymentMethod: 'Metodo di Pagamento',
      wechatPay: 'WeChat Pay',
      alipay: 'Alipay',
      creditCard: 'Carta di Credito',
      payNow: 'Paga Ora',
      secure: 'Pagamento Sicuro',
      processing: 'Elaborazione pagamento...',
      success: 'Pagamento riuscito!',
      failed: 'Pagamento fallito',
    },
    loyalty: {
      points: 'Punti',
      rewards: 'Ricompense',
      earnPoints: 'Guadagna Punti',
      redeemPoints: 'Riscatta Punti',
      pointsBalance: 'Saldo Punti',
      pointsHistory: 'Storico Punti',
      tier: 'Livello Attuale',
      nextTier: 'Prossimo Livello',
      benefits: 'Benefici',
    },
    onboarding: {
      welcome: 'Benvenuto al Commercio Sociale STAMP',
      welcomeMessage: 'Acquista lusso europeo, connetti attraverso i confini',
      howItWorks: 'Come Funziona',
      step1Title: 'Acquista con STAMP',
      step1Description: 'Completa il tuo acquisto con risparmio IVA istantaneo',
      step2Title: 'Connettiti',
      step2Description: 'Accedi al mini-programma del commerciante via WeChat o Alipay',
      step3Title: 'Acquista in Qualsiasi Momento',
      step3Description: 'Riordina prodotti e goditi offerte online esclusive',
      getStarted: 'Inizia',
      skip: 'Salta',
    },
    errors: {
      generic: 'Qualcosa è andato storto. Per favore riprova.',
      network: 'Errore di rete. Per favore controlla la tua connessione.',
      notFound: 'Pagina non trovata',
      unauthorized: 'Accesso non autorizzato',
      serverError: 'Errore del server. Per favore riprova più tardi.',
      invalidInput: 'Input non valido. Per favore controlla le tue informazioni.',
      tryAgain: 'Riprova',
    },
  },
};

// Hook to use translations
export function useTranslations(lang: Language = 'en'): Translations {
  return translations[lang];
}

// Get translation by key
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return typeof value === 'string' ? value : key;
}