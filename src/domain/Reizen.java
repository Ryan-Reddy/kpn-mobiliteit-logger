package services;

import java.util.Date;
import java.util.Objects;

import javax.annotation.Nonnull;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties; // hidden-source-line
@JsonIgnoreProperties(ignoreUnknown = true) // hidden-source-line
// tag::snippet[]
public class Reizen {
    @NotNull
    private String Project;
    @NotNull
    private String zakelijkOfPrive;
    @NotNull
    private String type;
    @NotNull
    private String klasse;

    @NotNull
    private String vertrekLocatie;
    @NotNull
    private String aankomstLocatie;


    @NotNull
    private String beginTijd;
    @NotNull
    private String eindTijd;
    @NotNull
    private String km;
    @NotNull
    private String userID;

    @NotNull
    private String travelID;


    @NotNull
    private String tijdvanopslaan;

    @NotNull
    private String C02;
    @NotNull
    private String Kosten;


    public String getProject() {
        return Project;
    }

    public void setProject(String project) {
        Project = project;
    }

    public String getZakelijkOfPrive() {
        return zakelijkOfPrive;
    }

    public void setZakelijkOfPrive(String zakelijkOfPrive) {
        this.zakelijkOfPrive = zakelijkOfPrive;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getKlasse() {
        return klasse;
    }

    public void setKlasse(String klasse) {
        this.klasse = klasse;
    }

    public String getVertrekLocatie() {
        return vertrekLocatie;
    }

    public void setVertrekLocatie(String vertrekLocatie) {
        this.vertrekLocatie = vertrekLocatie;
    }

    public String getAankomstLocatie() {
        return aankomstLocatie;
    }

    public void setAankomstLocatie(String aankomstLocatie) {
        this.aankomstLocatie = aankomstLocatie;
    }

    public String getBeginTijd() {
        return beginTijd;
    }

    public void setBeginTijd(String beginTijd) {
        this.beginTijd = beginTijd;
    }

    public String getEindTijd() {
        return eindTijd;
    }

    public void setEindTijd(String eindTijd) {
        this.eindTijd = eindTijd;
    }

    public String getKm() {
        return km;
    }

    public void setKm(String km) {
        this.km = km;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getTravelID() {
        return travelID;
    }

    public void setTravelID(String travelID) {
        this.travelID = travelID;
    }

    public String getTijdvanopslaan() {
        return tijdvanopslaan;
    }

    public void setTijdvanopslaan(String tijdvanopslaan) {
        this.tijdvanopslaan = tijdvanopslaan;
    }

    public String getC02() {
        return C02;
    }

    public void setC02(String c02) {
        C02 = c02;
    }

    public String getKosten() {
        return Kosten;
    }

    public void setKosten(String kosten) {
        Kosten = kosten;
    }

    public Reizen(String project,
                  String zakelijkOfPrive,
                  String type,
                  String klasse,
                  String vertrekLocatie,
                  String aankomstLocatie,
                  String beginTijd,
                  String eindTijd,
                  String km,
                  String userID,
                  String travelID,
                  String tijdvanopslaan,
                  String c02,
                  String kosten) {
        Project = project;
        this.zakelijkOfPrive = zakelijkOfPrive;
        this.type = type;
        this.klasse = klasse;
        this.vertrekLocatie = vertrekLocatie;
        this.aankomstLocatie = aankomstLocatie;
        this.beginTijd = beginTijd;
        this.eindTijd = eindTijd;
        this.km = km;
        this.userID = userID;
        this.travelID = travelID;
        this.tijdvanopslaan = tijdvanopslaan;
        C02 = c02;
        Kosten = kosten;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Reizen)) return false;
        Reizen reizen = (Reizen) o;
        return Objects.equals(getProject(),
                              reizen.getProject()) && Objects.equals(getZakelijkOfPrive(),
                                                                     reizen.getZakelijkOfPrive()) && Objects.equals(getType(),
                                                                                                                    reizen.getType()) && Objects.equals(getKlasse(),
                                                                                                                                                        reizen.getKlasse()) && Objects.equals(getVertrekLocatie(),
                                                                                                                                                                                              reizen.getVertrekLocatie()) && Objects.equals(getAankomstLocatie(),
                                                                                                                                                                                                                                            reizen.getAankomstLocatie()) && Objects.equals(getBeginTijd(),
                                                                                                                                                                                                                                                                                           reizen.getBeginTijd()) && Objects.equals(getEindTijd(),
                                                                                                                                                                                                                                                                                                                                    reizen.getEindTijd()) && Objects.equals(getKm(),
                                                                                                                                                                                                                                                                                                                                                                            reizen.getKm()) && Objects.equals(getUserID(),
                                                                                                                                                                                                                                                                                                                                                                                                              reizen.getUserID()) && Objects.equals(getTravelID(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                    reizen.getTravelID()) && Objects.equals(getTijdvanopslaan(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            reizen.getTijdvanopslaan()) && Objects.equals(getC02(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          reizen.getC02()) && Objects.equals(getKosten(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             reizen.getKosten());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProject(),
                            getZakelijkOfPrive(),
                            getType(),
                            getKlasse(),
                            getVertrekLocatie(),
                            getAankomstLocatie(),
                            getBeginTijd(),
                            getEindTijd(),
                            getKm(),
                            getUserID(),
                            getTravelID(),
                            getTijdvanopslaan(),
                            getC02(),
                            getKosten());
    }

    @Override
    public String toString() {
        return "Reizen{" +
                "Project='" + Project + '\'' +
                ", zakelijkOfPrive='" + zakelijkOfPrive + '\'' +
                ", type='" + type + '\'' +
                ", klasse='" + klasse + '\'' +
                ", vertrekLocatie='" + vertrekLocatie + '\'' +
                ", aankomstLocatie='" + aankomstLocatie + '\'' +
                ", beginTijd='" + beginTijd + '\'' +
                ", eindTijd='" + eindTijd + '\'' +
                ", km='" + km + '\'' +
                ", userID='" + userID + '\'' +
                ", travelID='" + travelID + '\'' +
                ", tijdvanopslaan='" + tijdvanopslaan + '\'' +
                ", C02='" + C02 + '\'' +
                ", Kosten='" + Kosten + '\'' +
                '}';
    }
}

