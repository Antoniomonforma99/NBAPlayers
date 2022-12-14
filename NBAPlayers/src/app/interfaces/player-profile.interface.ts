export interface PlayerProfileResponse {
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
    standard: Standard;
}

export interface Standard {
    teamId: string;
    stats:  Stats;
}

export interface Stats {
    latest:        CareerSummary;
    careerSummary: CareerSummary;
    regularSeason: RegularSeason;
}

export interface CareerSummary {
    tpp:            string;
    ftp:            string;
    fgp:            string;
    ppg:            string;
    rpg:            string;
    apg:            string;
    bpg:            string;
    mpg:            string;
    spg:            string;
    assists:        string;
    blocks:         string;
    steals:         string;
    turnovers:      string;
    offReb:         string;
    defReb:         string;
    totReb:         string;
    fgm:            string;
    fga:            string;
    tpm:            string;
    tpa:            string;
    ftm:            string;
    fta:            string;
    pFouls:         string;
    points:         string;
    gamesPlayed:    string;
    gamesStarted:   string;
    plusMinus:      string;
    min:            string;
    dd2:            string;
    td3:            string;
    seasonYear?:    number;
    seasonStageId?: number;
    topg?:          string;
    teamId?:        string;
}

export interface RegularSeason {
    season: Season[];
}

export interface Season {
    seasonYear: number;
    teams:      CareerSummary[];
    total:      CareerSummary;
}
