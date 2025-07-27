import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weltkarte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weltkarte.component.html',
  styleUrls: ['./weltkarte.component.css']
})
export class WeltkarteComponent implements OnInit {
  quests: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/quests.json').subscribe(data => {
      this.quests = data;
      console.log('Quests geladen:', data);
    });
  }

  zeigeQuestDetails(quest: any): void {
    alert(`📜 ${quest.name}\nStatus: ${quest.status}`);
  }

  getSymbol(status: string): string {
    switch (status) {
      case 'aktiv': return '🟢';
      case 'offen': return '🔵';
      case 'versteckt': return '🔴🔒';
      case 'erledigt': return '✅';
      default: return '❔';
    }
  }
}
