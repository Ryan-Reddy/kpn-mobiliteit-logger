export class reisDTO {
    // DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:ss");
    constructor(reisId: string, username: string, type: string, project: string, beginTijd: string, eindTijd: string, beginLocatie: string, eindLocatie: string, km: string, kosten: string, uitstoot: string, totaleUitstoot: string, zakelijk: boolean, klasse: any) {
        this._reisId = reisId;
        this._username = username;
        this._type = type;
        this._project = project;
        this._beginTijd = beginTijd;
        this._eindTijd = eindTijd;
        this._beginLocatie = beginLocatie;
        this._eindLocatie = eindLocatie;
        this._km = km;
        this._kosten = kosten;
        this._uitstoot = uitstoot;
        this._totaleUitstoot = totaleUitstoot;
        this._zakelijk = zakelijk;
        this._klasse = klasse;
    }

    // String nowEndTime = dtf.format(LocalTime.now());
    private _reisId!: string;

    get reisId(): string {
        return this._reisId;
    }

    set reisId(value: string) {
        this._reisId = value;
    }

    private _username!: string;

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    private _type!: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    private _project!: string;

    get project(): string {
        return this._project;
    }

    set project(value: string) {
        this._project = value;
    }

    private _beginTijd!: string;

    get beginTijd(): string {
        return this._beginTijd;
    }

    set beginTijd(value: string) {
        this._beginTijd = value;
    }

    private _eindTijd!: string;

    get eindTijd(): string {
        return this._eindTijd;
    }

    set eindTijd(value: string) {
        this._eindTijd = value;
    }

    private _beginLocatie!: string;

    get beginLocatie(): string {
        return this._beginLocatie;
    }

    set beginLocatie(value: string) {
        this._beginLocatie = value;
    }

    private _eindLocatie!: string;

    get eindLocatie(): string {
        return this._eindLocatie;
    }

    set eindLocatie(value: string) {
        this._eindLocatie = value;
    }

    private _km!: string;

    get km(): string {
        return this._km;
    }

    set km(value: string) {
        this._km = value;
    }

    private _klasse!: string;

    get klasse(): string {
        return this._klasse;
    }

    set klasse(value: string) {
        this._klasse = value;
    }

    private _kosten!: string;

    get kosten(): string {
        return this._kosten;
    }

    set kosten(value: string) {
        this._kosten = value;
    }

    private _uitstoot!: string;

    get uitstoot(): string {
        return this._uitstoot;
    }

    set uitstoot(value: string) {
        this._uitstoot = value;
    }

    private _totaleUitstoot!: string;

    get totaleUitstoot(): string {
        return this._totaleUitstoot;
    }

    set totaleUitstoot(value: string) {
        this._totaleUitstoot = value;
    }

    private _zakelijk!: boolean;

    get zakelijk(): boolean {
        return this._zakelijk;
    }

    set zakelijk(value: boolean) {
        this._zakelijk = value;
    }

    // toString() {
    //     // let s=
    //     //     'reisId: ' + this._reisId +
    //     //         'username' + this._username +
    //     //         'type' + this._type
    //     // // this._project = project;
    //     // // this._beginTijd = beginTijd;
    //     // // this._eindTijd = eindTijd;
    //     // // this._beginLocatie = beginLocatie;
    //     // // this._eindLocatie = eindLocatie;
    //     // // this._km = km;
    //     // // this._kosten = kosten;
    //     // // this._uitstoot = uitstoot;
    //     // // this._totaleUitstoot = totaleUitstoot;
    //     // // this._zakelijk = zakelijk;
    //     // // this._klasse = klasse;
    //     // return s;
    //     return ;
    // }
}
