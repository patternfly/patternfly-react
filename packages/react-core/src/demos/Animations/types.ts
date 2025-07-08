import { AlertVariant } from '../..';
import { ReactNode } from 'react';

export interface NotificationType {
  id: string;
  title: string;
  message: string;
  variant: AlertVariant;
  timeout: number;
  timeoutAnimation: number;
  isNew: boolean;
  isRead: boolean;
}

export interface Application {
  name: string;
  header: string;
  branch: string;
  status: string;
  details?: ReactNode;
}

export interface GuidedTourStep {
  stepId: string;
  header: React.ReactNode;
  content: React.ReactNode;
  position?:
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  spotlightSelector?: string;
  spotlightResizeSelector?: string;
  deskTopOnly?: boolean;
  mobileOnly?: boolean;
  popoverWidth?: string;
  mobilePopoverWidth?: string;
}
