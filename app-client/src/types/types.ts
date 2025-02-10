export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Checkpoint {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tasks?: Task[];
}

export interface Goal {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  checkpoints?: Checkpoint[];
}
