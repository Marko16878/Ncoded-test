/*This code defines a TypeScript class called Comment which represents a comment that can be made on a post*/
export class Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;

    constructor(
        id: number,
        postId: number,
        name: string,
        email: string,
        body: string
    ) {
        this.id = id;
        this.postId = postId;
        this.name = name;
        this.email = email;
        this.body = body;
    }
}