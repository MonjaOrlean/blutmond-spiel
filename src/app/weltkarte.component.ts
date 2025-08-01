import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weltkarte',
  standalone: true,
  templateUrl: './weltkarte.component.html',
  styleUrls: ['./weltkarte.component.css'],
  imports: [
    NgIf,
    NgFor,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    FormsModule
  ]
})
export class WeltkarteComponent implements OnInit {
  quests: any[] = [];
  regionen: any[] = [];
  gebiete: any[] = [];
  gefiltertesGebiet: string = '';
  ausgewaehlteQuest: any = null;
  questPosX: number = 0;
  questPosY: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/quests.json').subscribe(data => this.quests = data);
    this.http.get<any[]>('assets/regionen.json').subscribe(data => this.regionen = data);
    this.http.get<any[]>('assets/gebiete.json').subscribe(data => this.gebiete = data);
  }

  gefilterteQuests(): any[] {
    if (!this.gefiltertesGebiet) return this.quests;
    return this.quests.filter(q => q.ort === this.gefiltertesGebiet);
  }

  zeigeQuestDetails(quest: any): void {
    this.ausgewaehlteQuest = quest;
    this.questPosX = quest.x;
    this.questPosY = quest.y;
  }

  schliesseDetails(): void {
    this.ausgewaehlteQuest = null;
  }
}
