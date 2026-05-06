export interface BasicInfo {
  rollNumber: string;
  firstName: string;
  middleName?: string; // Optional field
  lastName: string;
  dob: string | Date;
  gender: string;
  age: number;
}

export interface AcademicMapping {
  totalFee: number;
  admissionfee: number;
  tuitionFee: number;
  developmentfee: number;
  transportfee: number;
}

export interface GuardianDetails {
  guardianName: string;
  relationship: string;
  phone: string;
  email: string;
  address: string;
}

export interface Student {
  basicInfo: BasicInfo;
  academicMapping: AcademicMapping;
  guardianDetails: GuardianDetails;
}