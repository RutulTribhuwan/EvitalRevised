import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  patient: any;
  medicines: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.patient = navigation?.extras.state?.['patient'];
  }

  ngOnInit() {
    // Get medicines from previous state or another service if needed
  }

  placeOrder() {
    const orderData = {
      patientId: this.patient.id,
      medicines: this.medicines.map(med => med.id)
    };

    this.apiService.placeOrder(orderData).subscribe(response => {
      // handle successful order placement
      console.log('Order placed successfully');
    }, error => {
      // handle error
      console.error(error);
    });
  }
}
