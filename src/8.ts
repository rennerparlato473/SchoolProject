export class SchoolProject {
  private readonly studentName: string;
  private readonly assignmentName: string;
  private readonly submissionDate: Date;

  constructor(studentName: string, assignmentName: string) {
    this.studentName = studentName;
    this.assignmentName = assignmentName;
    this.submissionDate = new Date();
  }

  public getStudentName(): string {
    return this.studentName;
  }

  public getAssignmentName(): string {
    return this.assignmentName;
  }

  public getSubmissionDate(): Date {
    return this.submissionDate;
  }
}
