'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { useApp } from '@/contexts/AppContext';

export default function HomePage() {
  const router = useRouter();
  const { setViewMode, setLanguage } = useApp();

  const handleTouristDemo = () => {
    setViewMode('tourist');
    setLanguage('zh');
    router.push('/wechat');
  };

  const handleMerchantDemo = () => {
    setViewMode('merchant');
    setLanguage('en');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F3D] via-[#1a2f4d] to-[#0A1F3D] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="text-5xl">🏪</div>
            <h1 className="text-6xl font-bold text-white">STAMP</h1>
          </div>
          <h2 className="text-3xl font-bold text-[#FF0066] mb-3">
            Social Commerce Bridge
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Redefining Global Commerce through Technology
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Transforming tourist transactions into lifetime cross-border relationships
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tourist Experience */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all">
            <CardHeader className="border-white/10">
              <div className="text-4xl mb-2">👨‍💼</div>
              <h3 className="text-2xl font-bold text-white">Tourist Experience</h3>
              <p className="text-gray-300 text-sm">WeChat Mini-Program Demo</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Browse products from Milan store</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Join group-buy deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Watch live streams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Cross-border shopping to China</span>
                </li>
              </ul>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={handleTouristDemo}
              >
                Launch Tourist Demo (中文)
              </Button>
            </CardContent>
          </Card>

          {/* Merchant Dashboard */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all">
            <CardHeader className="border-white/10">
              <div className="text-4xl mb-2">📊</div>
              <h3 className="text-2xl font-bold text-white">Merchant Dashboard</h3>
              <p className="text-gray-300 text-sm">Analytics & Management</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Real-time sales analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Tourist customer insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Conversion tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF0066] mt-0.5">✓</span>
                  <span>Campaign management</span>
                </li>
              </ul>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={handleMerchantDemo}
              >
                Launch Merchant Demo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span className="text-[#FF0066]">●</span>
              <span>Interactive Prototype</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span className="text-green-400">●</span>
              <span>Simulated Data</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span className="text-blue-400">●</span>
              <span>Real UX Flow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}