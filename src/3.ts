export interface SchoolProject {
  id: number;
  name: string;
  description: string;
  projects: Project[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  assignments: Assignment[];
}

interface Assignment {
  id: number;
  name: string;
  description: string;
  dueDate: Date;
}
