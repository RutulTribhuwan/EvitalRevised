// dashboard.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchQuery: string = '';
  medicines: any[] = [];

  constructor(private apiService: ApiService) {}



  onSearch() {
    if (this.searchQuery.length > 2) {
      this.apiService.searchMedicines(this.searchQuery).subscribe(response => {
        if (response.status_code === "1" && response.data.result) {
          this.medicines = response.data.result;
        } else {
          console.error('Error in response:', response.status_message);
        }
      }, error => {
        console.error('Error occurred:', error);
      });
    }
  }
}
