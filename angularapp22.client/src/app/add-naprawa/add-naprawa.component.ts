import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Naprawa {
  repairId: number;
  description: string;
  repairDate: string;
  completionDate: string;
  partsUsed: string;
  laborHours: number;
  laborCost: number;
  partsCost: number;
  totalCost: number;
}

@Component({
  selector: 'app-add-naprawa',
  templateUrl: './add-naprawa.component.html',
  styleUrls: ['./add-naprawa.component.css']
})
export class AddNaprawaComponent {

  public naprawaForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.naprawaForm = this.fb.group({
      //repairId: [1, Validators.required],
      repairId: [0],
      description: ['Montaż kierunkowskazów w bmw', Validators.required],
      repairDate: ['2000-05-01', Validators.required],
      completionDate: ['2000-05-07', Validators.required],
      partsUsed: ['Kierunkowskazy', Validators.required],
      laborHours: [8, Validators.required],
      laborCost: [300, Validators.required],
      partsCost: [940, Validators.required],
      totalCost: [1240, Validators.required]
    });
  }

  addNaprawa() {
    const naprawa: Naprawa = this.naprawaForm.value;
    console.log('Adding Naprawa:', naprawa);
    this.http.post('/Naprawas', naprawa).subscribe(
      response => {
        console.log('Naprawa added successfully:', response);
      },
      error => {
        console.error('Error adding Naprawa:', error);
      }
    );
  }
}
