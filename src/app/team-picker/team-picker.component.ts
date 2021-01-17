import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.css']
})
export class TeamPickerComponent implements OnInit {

  teams;
  computedTeam;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

    this.teams = this.dataService.getTeams();

  }


  teamSelectorAlgorithm() {
    const calculatedTeam = this.teams[Math.floor(Math.random() * this.teams.length)];

    this.computedTeam = calculatedTeam;
    console.log(calculatedTeam)

  }

}
