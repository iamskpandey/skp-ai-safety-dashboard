export type SeverityType = 'Low' | 'Medium' | 'High';

export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: SeverityType;
  reported_at: string;
}

export type SortDirection = 'newest' | 'oldest';
