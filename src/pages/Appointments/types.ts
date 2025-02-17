
export interface AppointmentFormData {
  specialty: string;
  procedure: string;
  location: string;
  desiredDate: string;
  isStandardProcedure: boolean;
  isNextAvailable: boolean;
}

export interface DoctorAvailability {
  date: string;
  doctor: string;
  specialty: string;
  schedule: string[];
}
