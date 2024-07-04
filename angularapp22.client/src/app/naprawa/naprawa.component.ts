import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface naprawa {
  repairId: number;
  description: string;
  repairDate: string;
  completionDate: string;
  partsUsed: string;
  laborHours: string;
  laborCost: string;
  partsCost: string;
  totalCost: string;
}

@Component({
  selector: 'app-naprawa',
  templateUrl: './naprawa.component.html',
  styleUrl: './naprawa.component.css'
})
export class NaprawaComponent implements OnInit {

  public naprawy: naprawa[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNaprawa();
  }

  getNaprawa() {
    console.log("Attempting to fetch naprawa...");
    this.http.get<naprawa[]>('/Naprawas').subscribe(
      (result) => {
        this.naprawy = result;
        console.log("Naprawa :", result);
      },
      (error) => {
        console.error("Error fetching Naprawa:", error);
      }
    );
  }

  title = 'angularapp22.client';

}

