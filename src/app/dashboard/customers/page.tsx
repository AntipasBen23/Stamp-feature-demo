'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency, formatRelativeTime, getCountryFlag } from '@/lib/utils';
import { mockCustomers } from '@/data/mockData';

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A1F3D] mb-2">Customer Insights</h1>
        <p className="text-gray-600">Tourist customers connected via STAMP</p>
      </div>

      {/* Customer Segments */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-purple-700 mb-1">VIP Customers</p>
                <p className="text-3xl font-bold text-purple-900">142</p>
                <p className="text-sm text-purple-600 mt-2">Avg. spend: €2,340</p>
              </div>
              <div className="text-4xl">👑</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-blue-700 mb-1">Repeat Customers</p>
                <p className="text-3xl font-bold text-blue-900">487</p>
                <p className="text-sm text-blue-600 mt-2">2+ purchases</p>
              </div>
              <div className="text-4xl">🔄</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-green-700 mb-1">WeChat Connected</p>
                <p className="text-3xl font-bold text-green-900">2,847</p>
                <p className="text-sm text-green-600 mt-2">Active in mini-program</p>
              </div>
              <div className="text-4xl">💬</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-bold text-[#0A1F3D]">Recent Tourist Customers</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCustomers.map((customer) => (
              <div key={customer.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl">{customer.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold">{customer.name}</h4>
                    <span className="text-lg">{getCountryFlag(customer.country)}</span>
                    {customer.wechatId && (
                      <Badge variant="success" className="text-xs">💬 WeChat</Badge>
                    )}
                    {customer.alipayId && (
                      <Badge variant="info" className="text-xs">💳 Alipay</Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mt-2">
                    <div>
                      <p className="text-gray-600 text-xs">Total Spent</p>
                      <p className="font-semibold text-[#0A1F3D]">
                        {formatCurrency(customer.totalSpent, 'EUR')}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Visits</p>
                      <p className="font-semibold">{customer.visitCount}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Loyalty Points</p>
                      <p className="font-semibold text-[#FF0066]">{customer.loyaltyPoints}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Last Visit</p>
                      <p className="font-semibold">{formatRelativeTime(customer.lastVisit)}</p>
                    </div>
                  </div>

                  {customer.preferences.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {customer.preferences.map((pref) => (
                        <Badge key={pref} variant="default" className="text-xs">
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}