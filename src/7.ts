
export class SchoolProject {
  constructor(private readonly _projects: Project[]) {}

  get projects(): Project[] {
    return this._projects;
  }

  addProject(project: Project): void {
    this._projects.push(project);
  }

  removeProject(name: string): void {
    const projectIndex = this._projects.findIndex((p) => p.name === name);
    if (projectIndex !== -1) {
      this._projects.splice(projectIndex, 1);
    }
  }
}

interface Project {
  name: string;
  description: string;
  tasks?: Task[];
}

interface Task {
  name: string;
  deadline: Date;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN,
  IN_PROGRESS,
  DONE,
}