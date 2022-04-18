export class Course {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];

    constructor(
        id: string,
        title: string,
        description: string,
        creationDate: string,
        duration: number,
        authors: string[],
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creationDate = creationDate;
        this.duration = duration;
        this.authors = authors;
    }
}
