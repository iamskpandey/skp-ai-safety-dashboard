import { ReactNode, MouseEvent } from 'react';
import { Incident } from './incident';

export interface ButtonProps {
  title: string;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  disabled?: boolean;
  backgroundColor?: string;
  className?: string;
  [key: string]: any;
}

export interface IncidentCardProps {
  incident: Incident;
}

export interface NewIncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id'>) => void;
  onCancel: () => void;
}

export interface SidebarProps {
  activeView: string;
}

export interface StatCardProps {
  value: number | string;
  label: string;
  headerColor?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
} 