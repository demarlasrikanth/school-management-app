import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
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
@Component({
  selector: 'app-student-management',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule, MatPaginatorModule
  ],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.scss',
})
export class StudentManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // Step-wise Form Groups
  basicInfoForm!: FormGroup;
  academicMappingForm!: FormGroup;
  guardianDetailsForm!: FormGroup;

  selectionForm!: FormGroup;
  // Data for Dropdowns
  genders = ['Male', 'Female', 'Other', 'Prefer not to say'];
  grades = ['Grade 1', 'Grade 2', 'Grade 3', 'High School', 'Undergraduate'];
  categories = ['General', 'International', 'Scholarship', 'Transfer'];
  showWizard = false;
  classList = ['Grade 10', 'Grade 11', 'Grade 12'];
  sections = ['A', 'B', 'C'];
  // To store uploaded file objects
  uploadedFiles: { [key: string]: File } = {};

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>([]);

  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForms();
    const data =studentdata
    this.dataSource=new MatTableDataSource<any>(data);
  }
  private initializeForms() {
    // Phase 1: Filter Selection
    this.selectionForm = this._formBuilder.group({
      class: ['', Validators.required],
      section: ['', Validators.required],
    });
    // 1. Basic Information
    this.basicInfoForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      age: [''], // Or set to disable if auto-generated
    });

    // 2. Academic Mapping
    this.academicMappingForm = this._formBuilder.group({
      totalFee: ['', Validators.required],
      admissionfee: ['', Validators.required],
      tuitionFee: ['', Validators.required],
      developmentfee: ['', Validators.required],
      transportfee: ['', Validators.required],
    });

    // 3. Guardian & Contact
    this.guardianDetailsForm = this._formBuilder.group({
      guardianName: ['', Validators.required],
      relationship: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }
  onAddStudentClick() {
    this.showWizard = true;
  }

  /**
   * Handles File selection from the 'Documents' step
   */
  onFileChange(event: any, controlName: string) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadedFiles[controlName] = file;
      console.log(`File uploaded for ${controlName}:`, file.name);
    }
  }

  /**
   * Final Submission
   */
  submitWizard() {
    if (
      this.basicInfoForm.valid &&
      this.academicMappingForm.valid &&
      this.guardianDetailsForm.valid
    ) {
      // Combine all form data into one object
      const studentData = {
        ...this.basicInfoForm.value,
        ...this.academicMappingForm.value,
        ...this.guardianDetailsForm.value,
      };

      console.log('Final Student Record Object:', studentData);
      console.log('Files to upload:', this.uploadedFiles);

      // Here you would typically use a FormData object if sending files to an API:
      // const formData = new FormData();
      // formData.append('data', JSON.stringify(studentData));
      // formData.append('profilePic', this.uploadedFiles['profilePic']);

      alert('Student Registration Successful!');
    } else {
      alert('Please fill all required fields in all steps.');
    }
  }
}
