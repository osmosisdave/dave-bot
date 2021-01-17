import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams;
  selectedTeam;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.teams = this.dataService.getTeams();
  }

  public selectTeam(team){
    this.selectedTeam = team;
  }

}
