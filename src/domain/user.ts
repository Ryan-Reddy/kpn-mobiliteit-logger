export default class User {
    private _id: number;
    private naam: string;
    private _team: string;
    private _reizen: any[];
    constructor(id: number, naam: string, team: string, reizen: any[] ){
        this._id = id;
        this.naam = naam;
        this._team = team;
        this._reizen = reizen;
        // TODO setup DTO for service layer
    }
}