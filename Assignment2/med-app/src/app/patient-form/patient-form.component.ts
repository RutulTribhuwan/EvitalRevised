import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      this.apiService.addPatient(this.patientForm.value).subscribe(response => {
        this.router.navigate(['/checkout'], { state: { patient: response.data } });
      }, error => {
        console.error(error);
      });
    }
  }
}
