import { GoalTask } from './GoalTask';

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
