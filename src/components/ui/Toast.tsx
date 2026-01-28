'use client';

import React, { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

export function ToastContainer() {
  const { notifications } = useApp();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <Toast key={notification.id} {...notification} />
      ))}
    </div>
  );
}

interface ToastProps {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

function Toast({ type, title, message }: ToastProps) {
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  const iconColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border shadow-lg animate-slide-in-right',
        colors[type]
      )}
    >
      <div className={cn('flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold', iconColors[type])}>
        {icons[type]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs mt-0.5 opacity-90">{message}</p>
      </div>
    </div>
  );
}