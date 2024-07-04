import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-naprawa',
  templateUrl: './delete-naprawa.component.html',
  styleUrls: ['./delete-naprawa.component.css']
})
export class DeleteNaprawaComponent {

  public deleteForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      repairId: [null, Validators.required]
    });
  }

  deleteNaprawa() {
    const repairId = this.deleteForm.get('repairId')?.value;
    console.log('Deleting Naprawa with ID:', repairId);
    this.http.delete(`/Naprawas/${repairId}`).subscribe(
      response => {
        console.log('Naprawa deleted successfully:', response);
      },
      error => {
        console.error('Error deleting Naprawa:', error);
      }
    );
  }
}
