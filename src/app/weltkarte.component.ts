import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <- Wichtig für ngModel

@Component({
  selector: 'app-weltkarte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weltkarte.component.html',
  styleUrls: ['./weltkarte.component.css']
})
export class WeltkarteComponent implements OnInit {
  alleQuests: any[] = [];
  quests: any[] = [];
  regionen: string[] = [];
  ausgewaehlteRegion: string = 'alle';

  ausgewaehlteQuest: any = null;
  questPosX: number = 0;
  questPosY: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/quests.json').subscribe(data => {
      this.alleQuests = data;
      this.regionen = this.getRegionen(data);
      this.filternNachRegion('alle');
    });
  }

  getRegionen(quests: any[]): string[] {
    const regionenSet = new Set<string>();
    quests.forEach(q => {
      if (q.ort) regionenSet.add(q.ort);
    });
    return Array.from(regionenSet);
  }

  filternNachRegion(region: string): void {
    this.ausgewaehlteRegion = region;
    this.quests = region === 'alle'
      ? this.alleQuests
      : this.alleQuests.filter(q => q.ort === region);
    this.ausgewaehlteQuest = null;
  }

  zeigeQuestDetails(quest: any): void {
    this.ausgewaehlteQuest = quest;
    this.questPosX = quest.x;
    this.questPosY = quest.y;
  }

  schliesseDetails(): void {
    this.ausgewaehlteQuest = null;
  }

  getSymbol(status: string): string {
    switch (status) {
      case 'aktiv': return '🟢';
      case 'offen': return '🔵';
      case 'versteckt': return '🔒';
      case 'erledigt': return '✅';
      default: return '❔';
    }
  }
}
