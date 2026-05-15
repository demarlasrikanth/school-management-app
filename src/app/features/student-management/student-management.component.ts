import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

// Material Imports
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { studentdata } from '../../data/demodata/studentdata';
// Define an interface for type safety
interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  department: string;
  status: 'ACTIVE' | 'ON LEAVE' | 'WITHDRAWN';
  initials: string;
  color: string;
}
@Component({
  selector: 'app-student-management',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.scss',
})

export class StudentManagementComponent implements OnInit {
 // Array containing the student data
  students: Student[] = [
    {
      id: '#STU-88210',
      name: 'Adrian Chen',
      email: 'a.chen@educore.edu',
      grade: 'Senior',
      department: 'Computer Science',
      status: 'ACTIVE',
      initials: 'AC',
      color: '#1e75ff' // Blue
    },
    {
      id: '#STU-88211',
      name: 'Beatrix Miller',
      email: 'b.miller@educore.edu',
      grade: 'Junior',
      department: 'Applied Arts',
      status: 'ACTIVE',
      initials: 'BM',
      color: '#d1d5db' // Grey
    },
    {
      id: '#STU-88215',
      name: 'David Wilson',
      email: 'd.wilson@educore.edu',
      grade: 'Sophomore',
      department: 'Business Admin',
      status: 'ON LEAVE',
      initials: 'DW',
      color: '#9ca3af' // Dark Grey
    },
    {
      id: '#STU-88219',
      name: 'Elena Kozlova',
      email: 'e.kozlova@educore.edu',
      grade: 'Freshman',
      department: 'Engineering',
      status: 'ACTIVE',
      initials: 'EK',
      color: '#fecaca' // Light Red/Pink
    },
    {
      id: '#STU-88225',
      name: 'George Rivera',
      email: 'g.rivera@educore.edu',
      grade: 'Senior',
      department: 'Business Admin',
      status: 'WITHDRAWN',
      initials: 'GR',
      color: '#fca5a5' // Salmon
    }
  ];
  selectedStudent: Student | null = null;
  selectedIndex: number = -1;
  constructor() { }

  ngOnInit(): void {
    // Initialization logic like fetching data from an API would go here
  }

  /**
   * Returns the specific Bootstrap/CSS class based on student status
   * Matches the custom classes defined in the SCSS file
   */
  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'ACTIVE':
        return 'status-active';
      case 'ON LEAVE':
        return 'status-leave';
      case 'WITHDRAWN':
        return 'status-withdrawn';
      default:
        return 'bg-secondary text-white';
    }
  }

  // Placeholder functions for actions
  onView(student: Student) {
    console.log('Viewing student:', student.name);
  }

  onEdit(student: Student) {
    console.log('Editing student:', student.id);
  }

  onDelete(student: Student) {
    console.log('Deleting student:', student.id);
  }

  clearFilters() {
    console.log('Filters cleared');
    // Logic to reset search and dropdowns
  }
  selectStudent(student: Student) {
    this.selectedIndex = this.students.findIndex(s => s.id === student.id);
    this.selectedStudent = { ...student }; 
  }
  saveChanges() {
    if (this.selectedStudent && this.selectedIndex !== -1) {
      // Logic: Update the initials if the name changed
      this.selectedStudent.initials = this.selectedStudent.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();

      // Update the main array
      this.students[this.selectedIndex] = this.selectedStudent;
      
      // Reset
      this.selectedStudent = null;
      this.selectedIndex = -1;
      
      console.log('Student updated successfully!');
    }
  }
}
