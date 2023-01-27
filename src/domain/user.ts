import {reisDTO} from "./reisDTO";

export default class User {
    private _id: number;
    private naam: string;
    private _team: string;
    private _reizen: any[];
    private _projecten: any[];

    constructor(id: number, naam: string, team: string, reizen: reisDTO[], projecten: string[]) {
        this._id = id;
        this.naam = naam;
        this._team = team;
        this._projecten = projecten;
        this._reizen = reizen;
        // TODO setup DTO for service layer
    }
}
