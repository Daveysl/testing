// Generated by https://quicktype.io

export interface JSONRoot {
    samples: Sample[];
}

export interface Sample {
    id:          string;
    name:        string;
    description: string;
    url:         string;
    images:      Image[];
}

export interface Image {
    filename: string;
}