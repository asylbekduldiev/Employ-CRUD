import { Goal } from './Goal';

export interface Program {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  types: string[];
  goals: Goal[];
  type: string;
  locked: boolean;
  openDate: string;
  subscriptionRequired: boolean;
  policyLink: string;
}
