public class reisDTO {
    // DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:ss");
    // String nowEndTime = dtf.format(LocalTime.now());
    private _reisId!: string;
    private _username!: string;
    private _type!: string;
    private _project!: string;
    private _begin!: Date;
    private _eind!: Date;
    private _km!: string;
    private _kosten!: string;
    private _uitstoot!: string;
    private _totaleUitstoot!: string;

    public reisDTO(reisId: string, username: string, type: string, project: string, begin:Date,
    eind: Date, km: string, uitstoot: string, kosten: string, totaleUitstoot: string) {
        this._reisId = reisId;
        this._username = username;
        this._type = type;
        this._project = project;
        this._begin = begin;
        this._eind = eind;
        this._km = km;
        this._kosten = kosten;
        this._uitstoot = uitstoot;
        this._totaleUitstoot = totaleUitstoot;
}
public toString() {
    let s: string =
        "{ReisID: " + this._reisId +
        "; username= " + this._username +
        "; starttime= " + time +
        "; endtime= " + nowEndTime +
        "; ryan= " + ryan +
        //                    "; bayan= " + bayan +
        //                    "; oussama= " + oussama +
        //                    "; mees=" + mees +
        //                    "; mohamed= " + mohamed +
        //                    "; thijs= " + thijs +
        "; note= '";

    if (endTime.equals("<now>")) {
        return s + note.replace("\n","") + "'}";
    } else {
        return s + note + "'}";
    }

}
}
