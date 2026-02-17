export class Series {
    title: string;
    description: string;
    startYear: number;
    endYear: number;
    episodes: Episode[];

    constructor(title: string, description: string, startYear: number, endYear: number, episodes: Episode[]) {
        this.title = title;
        this.description = description;
        this.startYear = startYear;
        this.endYear = endYear; 
        this.episodes = episodes;
    }
}

export class Episode {
    title: string;
    length: number;
    description: string;
    actors: string[];

    constructor(title: string, length: number, description: string, actors: string[]) {
        this.title = title;
        this.length = length;
        this.description = description;
        this.actors = actors;
    }
}

export class Actors {
    firstName: string;
    lastName: string;
    birthday: Date;
    gender: string;
    constructor(firstName: string, lastName: string, birthday: Date, gender: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday
        this.gender = gender;
    }
}