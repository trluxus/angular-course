export interface Task {
  id: string,
  userId: string,
  title: string,
  sumary: string,
  dueDate: string
}
export interface NewTaskData {
  title: string;
  summary: string;
  date: string
}
