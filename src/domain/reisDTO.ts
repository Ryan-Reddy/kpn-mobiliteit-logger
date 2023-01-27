export class reisDTO {
    // DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:ss");
    // String nowEndTime = dtf.format(LocalTime.now());
    private _reisId!: string;
    private _username!: string;
    private _type!: string;
    private _project!: string;
    private _beginTijd!: string;
    private _eindTijd!: string;
    private _beginLocatie!: string;
    private _eindLocatie!: string;
    private _km!: string;
    private _klasse!: string;
    private _kosten!: string;
    private _uitstoot!: string;
    private _totaleUitstoot!: string;
    private _zakelijk!: boolean;


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

    set reisId(value: string) {
        this._reisId = value;
    }

    set username(value: string) {
        this._username = value;
    }

    set type(value: string) {
        this._type = value;
    }

    set project(value: string) {
        this._project = value;
    }

    set beginTijd(value: string) {
        this._beginTijd = value;
    }

    set eindTijd(value: string) {
        this._eindTijd = value;
    }

    set beginLocatie(value: string) {
        this._beginLocatie = value;
    }

    set eindLocatie(value: string) {
        this._eindLocatie = value;
    }

    set km(value: string) {
        this._km = value;
    }

    set klasse(value: string) {
        this._klasse = value;
    }

    set kosten(value: string) {
        this._kosten = value;
    }

    set uitstoot(value: string) {
        this._uitstoot = value;
    }

    set totaleUitstoot(value: string) {
        this._totaleUitstoot = value;
    }

    set zakelijk(value: boolean) {
        this._zakelijk = value;
    }

    get klasse(): string {
        return this._klasse;
    }

    get reisId(): string {
        return this._reisId;
    }

    get username(): string {
        return this._username;
    }

    get type(): string {
        return this._type;
    }

    get project(): string {
        return this._project;
    }

    get beginTijd(): string {
        return this._beginTijd;
    }

    get eindTijd(): string {
        return this._eindTijd;
    }

    get beginLocatie(): string {
        return this._beginLocatie;
    }

    get eindLocatie(): string {
        return this._eindLocatie;
    }

    get km(): string {
        return this._km;
    }

    get kosten(): string {
        return this._kosten;
    }

    get uitstoot(): string {
        return this._uitstoot;
    }

    get totaleUitstoot(): string {
        return this._totaleUitstoot;
    }

    get zakelijk(): boolean {
        return this._zakelijk;
    }


}
