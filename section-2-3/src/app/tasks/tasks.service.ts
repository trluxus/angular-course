import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      sumary: 'Learn Angular',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master Angular',
      sumary: 'Learn Angular',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Master Angular',
      sumary: 'Learn Angular',
      dueDate: '2025-12-31'
    }
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(userId: string, task: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: task.title,
      sumary: task.summary,
      dueDate: task.date,
      userId: userId
    });
    this.saveTask()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id)
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
