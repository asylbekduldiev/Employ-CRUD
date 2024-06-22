export interface Task {
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
    status: string;
    iconUrl: string;
    dueDate: string;
    openingDate: string | null;
    showTimer: boolean;
    goalTasks: any | null;
    mindTask: Task | null;
    soulTask: Task | null;
    bodyTask: Task | null;
    subscriptionRequired: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Data {
    id: string | null;
    title: string;
    description: string | null;
    posterUrl: string | null;
    types: string | null;
    goals: Goal[];
    policyLink: string | null;
}
