export class UserData {
    mainContractId: Number;
    vsnr: string;
    vnr: string;
    vertragsbeginn: string;
    vertragsPersonen: VertragsPersonen;
    versionen: Version[];
}

export class Person {
    vorname: string;
    nachname: string;
    geburtsdatum: string;
    strasse: string;
    hausnummer: string;
    plz: string;
    stadt: string;
    zusatz: string;
}

export class VertragsPersonen {
    vpEquals: boolean;
    vn: Person;
    vp: Person
}

export class Leistungen {
    LEISTUNGSDYNAMIK: string;
    EINMALLEISTUNG_UNFALL: string;
    AMBULANT1: string;
    AMBULANT2: string;
    AMBULANT3: string;
    AMBULANT4: string;
    AMBULANT5: string;
    STATIONAER1: string;
    STATIONAER2: string;
    STATIONAER3: string;
    STATIONAER4: string;
    STATIONAER5: Number;
}

export class Version {
    vertragVersionId: Number;
    versand: string;
    umsetzung: string;
    typ: string;
    ergaenzung: string;
    beitrag: Number;
    produkt: string;
    leistungen: Leistungen;
}