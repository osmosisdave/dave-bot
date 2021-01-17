import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  teams = [
    {id: 1, name: "Tottenham Hotspur", description: "The best team in the world"},
    {id: 2, name: "Raith Rovers", description: "The second best team in the world"},
    {id: 3, name: "Test3", description: "The second best team in the world"},
    {id: 4, name: "Test4", description: "The second best team in the world"},
    {id: 5, name: "Test5", description: "The second best team in the world"},
    {id: 6, name: "Test6", description: "The second best team in the world"},
    {id: 7, name: "Test7", description: "The second best team in the world"},
    {id: 8, name: "Test8", description: "The second best team in the world"}

  ]

  constructor() { }

  public getTeams():Array<{id, name, description}>{
    return this.teams;
  }

}
