export interface PlayersResponse {
    _internal: Internal;
    league:    League;
}

export interface Internal {
    pubDateTime:             string;
    igorPath:                string;
    xslt:                    string;
    xsltForceRecompile:      string;
    xsltInCache:             string;
    xsltCompileTimeMillis:   string;
    xsltTransformTimeMillis: string;
    consolidatedDomKey:      string;
    endToEndTimeMillis:      string;
}

export interface League {
    standard:   Player[];
    africa:     Player[];
    sacramento: Player[];
    vegas:      Player[];
    utah:       Player[];
}

export interface Player {
    firstName:             string;
    lastName:              string;
    temporaryDisplayName?: string;
    personId:              string;
    teamId:                string;
    jersey:                string;
    isActive:              boolean;
    pos:                   Pos;
    heightFeet:            Height;
    heightInches:          Height;
    heightMeters:          string;
    weightPounds:          string;
    weightKilograms:       string;
    dateOfBirthUTC:        string;
    teamSitesOnly?:        TeamSitesOnly;
    teams:                 any[];
    draft:                 Draft;
    nbaDebutYear:          string;
    yearsPro:              string;
    collegeName:           string;
    lastAffiliation:       string;
    country:               string;
    isallStar?:            boolean;
}

export interface Draft {
    teamId:     string;
    pickNum:    string;
    roundNum:   string;
    seasonYear: string;
}

export enum Height {
    Empty = "-",
}

export enum Pos {
    C = "C",
    CF = "C-F",
    Empty = "",
    F = "F",
    FC = "F-C",
    FG = "F-G",
    G = "G",
    GF = "G-F",
    PF = "P-F",
    PG = "P-G",
    SF = "S-F",
    SG = "S-G",
}

export interface TeamSitesOnly {
    playerCode:         string;
    posFull:            PosFull;
    displayAffiliation: string;
    freeAgentCode:      string;
}

export enum PosFull {
    Center = "Center",
    CenterForward = "Center-Forward",
    Empty = "",
    Forward = "Forward",
    ForwardCenter = "Forward-Center",
    ForwardGuard = "Forward-Guard",
    Guard = "Guard",
    GuardForward = "Guard-Forward",
}
