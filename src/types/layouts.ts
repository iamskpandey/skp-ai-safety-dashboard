import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
  title: string;
  rightAction?: ReactNode;
} 