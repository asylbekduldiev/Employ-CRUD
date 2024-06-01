// types.ts
export interface GoalTask {
  id: string;
  title: string;
  score: number;
  type: string;
  priority: number;
}

export interface Goal {
  id: string;
  number: number;
  title: string;
  description: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED';
  iconUrl: string;
  dueDate: string;
  openingDate: string;
  showTimer: boolean;
  goalTasks: GoalTask[];
  mindTask: GoalTask;
  soulTask: GoalTask;
  bodyTask: GoalTask;
  subscriptionRequired: boolean;
  createdAt: string;
  updatedAt: string;
}

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
