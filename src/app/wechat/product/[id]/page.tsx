'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { products, addToCart, t, currentUser } = useApp();
  
  const product = products.find(p => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product.id, quantity, selectedSize, selectedColor);
    router.push('/wechat/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 sticky top-0 z-10 border-b">
        <button onClick={() => router.back()} className="text-xl">
          ←
        </button>
        <h1 className="text-lg font-semibold flex-1">商品详情</h1>
        <button className="text-xl">🏠</button>
      </div>

      {/* Image Gallery */}
      <div className="bg-white">
        <div className="relative aspect-square">
          <img 
            src={product.images[selectedImage]} 
            alt={product.nameZh}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="error">
              ⭐ {product.rating}
            </Badge>
          </div>
        </div>
        
        {product.images.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 ${
                  selectedImage === idx ? 'border-[#FF0066]' : 'border-gray-200'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover rounded" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price & Title */}
      <Card className="mt-2">
        <CardContent className="pt-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#FF0066] text-3xl font-bold">
                  {formatCurrency(product.price, product.currency, 'zh-CN')}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  ¥{(product.price * 1.22).toFixed(2)}
                </span>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded px-2 py-1 inline-block">
                <span className="text-xs text-yellow-800">💰 已省增值税 ¥{(product.price * 0.22).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-lg font-bold mb-1">{product.nameZh}</h2>
          <p className="text-sm text-gray-600">{product.descriptionZh}</p>
          
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span>⭐ {product.rating} 评分</span>
            <span>💬 {product.reviewCount} 评价</span>
            <span>📦 库存 {product.inventory}</span>
          </div>
        </CardContent>
      </Card>

      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <Card className="mt-2">
          <CardContent className="pt-4">
            <p className="text-sm font-semibold mb-3">选择颜色</p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm ${
                    selectedColor === color
                      ? 'border-[#FF0066] bg-pink-50 text-[#FF0066]'
                      : 'border-gray-200'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <Card className="mt-2">
          <CardContent className="pt-4">
            <p className="text-sm font-semibold mb-3">选择尺码</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm ${
                    selectedSize === size
                      ? 'border-[#FF0066] bg-pink-50 text-[#FF0066]'
                      : 'border-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quantity */}
      <Card className="mt-2">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">数量</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.inventory, quantity + 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card className="mt-2">
        <CardContent className="pt-4">
          <h3 className="font-bold mb-2">商品详情</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{product.descriptionZh}</p>
          
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-semibold mb-2 text-sm">产品特点</h4>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Proof */}
      <Card className="mt-2">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>👥</span>
            <span>已有 {currentUser?.nameZh} 和其他 23 位好友购买</span>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 flex gap-3">
        <button className="flex flex-col items-center text-gray-600">
          <span className="text-xl">💬</span>
          <span className="text-xs">客服</span>
        </button>
        <button className="flex flex-col items-center text-gray-600" onClick={() => router.push('/wechat/cart')}>
          <span className="text-xl">🛒</span>
          <span className="text-xs">购物车</span>
        </button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={handleAddToCart}
        >
          加入购物车
        </Button>
        <Button 
          variant="primary" 
          className="flex-1"
          onClick={handleBuyNow}
        >
          立即购买
        </Button>
      </div>
    </div>
  );
}