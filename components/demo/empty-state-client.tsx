"use client";

import React from 'react';
import { EmptyState } from '@/components/ui/empty-state';

interface EmptyStateClientProps {
  type: 'generic' | 'search' | 'favorites' | 'filter' | 'history' | 'cart';
  title: string;
  description: string;
  actionLabel?: string;
  actionVariant?: string;
  actionRounded?: string;
}

export function EmptyStateClient({
  type,
  title,
  description,
  actionLabel,
  actionVariant = 'default',
  actionRounded = 'default'
}: EmptyStateClientProps) {
  const handleAction = () => {
    alert(`${type} action triggered`);
  };

  return (
    <EmptyState
      type={type}
      title={title}
      description={description}
      actionLabel={actionLabel}
      actionProps={{ 
        variant: actionVariant as any, 
        rounded: actionRounded as any 
      }}
      onAction={handleAction}
    />
  );
} 