import { Component } from '@angular/core';

@Component({
  selector: 'app-schoolproject',
  templateUrl: './schoolproject.component.html',
  styleUrls: ['./schoolproject.component.css']
})
export class SchoolProjectComponent {
  projects = [
    { name: 'Project 1', description: 'A comprehensive repository for all the school projects and assignments.' },
    { name: 'Project 2', description: 'Another cool project' }
  ];
}
