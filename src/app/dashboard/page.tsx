'use client';

import { useRouter } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency, formatRelativeTime, abbreviateNumber } from '@/lib/utils';
import { mockTransactions } from '@/data/mockData';

export default function DashboardPage() {
  const router = useRouter();
  const { currentMerchant, products } = useApp();

  // Mock stats
  const stats = {
    totalSales: 125430,
    totalOrders: 342,
    touristCustomers: 3420,
    conversionRate: 23.5,
    avgOrderValue: 367,
    repeatPurchaseRate: 18.4,
  };

  const recentTransactions = mockTransactions.slice(0, 5);
  const topProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A1F3D] mb-2">
          {currentMerchant?.name}
        </h1>
        <p className="text-gray-600">{currentMerchant?.location}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Sales</p>
                <p className="text-3xl font-bold text-[#0A1F3D]">
                  €{abbreviateNumber(stats.totalSales)}
                </p>
                <p className="text-sm text-green-600 mt-2">↑ 24% vs last month</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tourist Customers</p>
                <p className="text-3xl font-bold text-[#FF0066]">
                  {abbreviateNumber(stats.touristCustomers)}
                </p>
                <p className="text-sm text-green-600 mt-2">↑ 38% vs last month</p>
              </div>
              <div className="text-4xl">🌍</div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-3xl font-bold text-[#0A1F3D]">
                  {stats.conversionRate}%
                </p>
                <p className="text-sm text-green-600 mt-2">↑ 5.2% vs last month</p>
              </div>
              <div className="text-4xl">📈</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-[#0A1F3D]">{stats.totalOrders}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Avg. Order Value</p>
            <p className="text-2xl font-bold text-[#0A1F3D]">€{stats.avgOrderValue}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Repeat Purchase Rate</p>
            <p className="text-2xl font-bold text-[#0A1F3D]">{stats.repeatPurchaseRate}%</p>
          </CardContent>
        </Card>
      </div>

      {/* STAMP Feature Highlight */}
      <Card className="mb-8 bg-gradient-to-r from-[#FF0066] to-[#E6005C] border-0">
        <CardContent className="pt-6 text-white">
          <h3 className="text-xl font-bold mb-3">🚀 STAMP Social Commerce Impact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm opacity-90 mb-1">WeChat Mini-Program Active Users</p>
              <p className="text-3xl font-bold">2,847</p>
              <p className="text-sm opacity-80 mt-1">Connected after in-store purchase</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">Tourist → Online Conversion</p>
              <p className="text-3xl font-bold">23.5%</p>
              <p className="text-sm opacity-80 mt-1">Shoppers who return online</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold text-[#0A1F3D]">Recent Transactions</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((txn) => (
                <div key={txn.id} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={txn.paymentMethod === 'wechat' ? 'success' : 'info'}>
                        {txn.paymentMethod === 'wechat' ? '💬 WeChat' : '💳 Alipay'}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {formatRelativeTime(txn.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{txn.location}</p>
                    <p className="text-xs text-gray-600">{txn.items.length} items</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#0A1F3D]">
                      {formatCurrency(txn.amount, txn.currency)}
                    </p>
                    <p className="text-xs text-green-600">
                      VAT: {formatCurrency(txn.vatSaved, txn.currency)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold text-[#0A1F3D]">Top Products</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topProducts.map((product, idx) => (
                <div key={product.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-400">#{idx + 1}</div>
                  <img src={product.images[0]} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{product.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">⭐ {product.rating}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{product.reviewCount} reviews</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#0A1F3D]">
                      {formatCurrency(product.price, product.currency)}
                    </p>
                    <p className="text-xs text-gray-600">{product.inventory} in stock</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}