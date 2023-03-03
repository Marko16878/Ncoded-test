export class Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
    /*
    post: Post | null; 
    */

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