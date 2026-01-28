'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency, formatTimeRemaining } from '@/lib/utils';
import { mockGroupBuys, mockLiveStreams } from '@/data/mockData';

export default function WeChatHomePage() {
  const router = useRouter();
  const { t, currentUser, currentMerchant, products, addToCart, language } = useApp();
  const [activeTab, setActiveTab] = useState<'home' | 'groupbuy' | 'live'>('home');

  const featuredProducts = products.slice(0, 4);
  const liveStream = mockLiveStreams[0];
  const activeGroupBuy = mockGroupBuys[0];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* WeChat Status Bar */}
      <div className="bg-[#0A1F3D] text-white text-xs px-4 py-1 flex items-center justify-between">
        <span>9:41</span>
        <span>微信</span>
        <span>🔋 100%</span>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF0066] to-[#E6005C] text-white px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{currentMerchant?.nameZh}</h1>
            <p className="text-sm opacity-90">{currentMerchant?.city}</p>
          </div>
          <div className="text-4xl">{currentMerchant?.logo}</div>
        </div>
        
        {/* Welcome Message */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <p className="text-sm">
            欢迎回来，{currentUser?.nameZh}！
          </p>
          <p className="text-xs opacity-90 mt-1">
            您在店内消费了 €{currentUser?.totalSpent.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex gap-4 sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('home')}
          className={`pb-2 px-1 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'home'
              ? 'border-[#FF0066] text-[#FF0066]'
              : 'border-transparent text-gray-600'
          }`}
        >
          首页
        </button>
        <button
          onClick={() => setActiveTab('groupbuy')}
          className={`pb-2 px-1 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'groupbuy'
              ? 'border-[#FF0066] text-[#FF0066]'
              : 'border-transparent text-gray-600'
          }`}
        >
          拼团 🔥
        </button>
        <button
          onClick={() => setActiveTab('live')}
          className={`pb-2 px-1 font-medium text-sm border-b-2 transition-colors relative ${
            activeTab === 'live'
              ? 'border-[#FF0066] text-[#FF0066]'
              : 'border-transparent text-gray-600'
          }`}
        >
          直播
          {liveStream.isLive && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {activeTab === 'home' && (
          <>
            {/* Live Banner */}
            {liveStream.isLive && (
              <Card className="mb-4 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveTab('live')}>
                <div className="relative">
                  <img src={liveStream.thumbnail} alt="Live" className="w-full h-40 object-cover" />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      🔴 直播中
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    👁 {liveStream.viewerCount.toLocaleString()}
                  </div>
                </div>
                <CardContent>
                  <p className="font-semibold">{liveStream.titleZh}</p>
                  <p className="text-sm text-gray-600 mt-1">点击观看直播</p>
                </CardContent>
              </Card>
            )}

            {/* Products Grid */}
            <h2 className="text-lg font-bold mb-3">为您推荐</h2>
            <div className="grid grid-cols-2 gap-3">
              {featuredProducts.map((product) => (
                <Card key={product.id} onClick={() => router.push(`/wechat/product/${product.id}`)}>
                  <img src={product.images[0]} alt={product.nameZh} className="w-full h-40 object-cover" />
                  <CardContent>
                    <p className="font-medium text-sm line-clamp-2">{product.nameZh}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[#FF0066] font-bold">
                        {formatCurrency(product.price, product.currency, 'zh-CN')}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                        className="text-[#FF0066] text-xl"
                      >
                        🛒
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === 'groupbuy' && (
          <div>
            <h2 className="text-lg font-bold mb-3">限时拼团</h2>
            <Card>
              <img src={products[0].images[0]} alt="Group Buy" className="w-full h-48 object-cover" />
              <CardContent>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold">{products[0].nameZh}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {activeGroupBuy.currentParticipants}/{activeGroupBuy.targetParticipants} 人已参团
                    </p>
                  </div>
                  <Badge variant="error">-{activeGroupBuy.discount}%</Badge>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mb-3">
                  <p className="text-xs text-yellow-800">
                    ⏰ {formatTimeRemaining(activeGroupBuy.endsAt, 'zh')}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-400 line-through text-sm">
                    ¥{products[0].price.toFixed(2)}
                  </span>
                  <span className="text-[#FF0066] font-bold text-xl">
                    ¥{(products[0].price * (1 - activeGroupBuy.discount / 100)).toFixed(2)}
                  </span>
                </div>

                <Button variant="primary" className="w-full">
                  立即参团
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'live' && (
          <div>
            <Card className="mb-4">
              <div className="relative">
                <img src={liveStream.thumbnail} alt="Live" className="w-full h-64 object-cover" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-red-500 text-white">
                    🔴 直播中
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                  👁 {liveStream.viewerCount.toLocaleString()}
                </div>
              </div>
              <CardContent>
                <h3 className="font-bold text-lg">{liveStream.titleZh}</h3>
                <p className="text-sm text-gray-600 mt-1">主播：{liveStream.hostName}</p>
              </CardContent>
            </Card>

            <h3 className="font-bold mb-3">直播商品</h3>
            <div className="space-y-3">
              {products.slice(0, 3).map((product) => (
                <Card key={product.id} className="flex">
                  <img src={product.images[0]} alt={product.nameZh} className="w-24 h-24 object-cover" />
                  <CardContent className="flex-1 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{product.nameZh}</p>
                      <p className="text-[#FF0066] font-bold mt-1">
                        {formatCurrency(product.price, product.currency, 'zh-CN')}
                      </p>
                    </div>
                    <Button size="sm" onClick={() => addToCart(product.id)}>
                      购买
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
        <button className="flex flex-col items-center gap-1 text-[#FF0066]">
          <span className="text-xl">🏠</span>
          <span className="text-xs">首页</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600" onClick={() => router.push('/wechat/cart')}>
          <span className="text-xl">🛒</span>
          <span className="text-xs">购物车</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-600">
          <span className="text-xl">👤</span>
          <span className="text-xs">我的</span>
        </button>
      </div>
    </div>
  );
}