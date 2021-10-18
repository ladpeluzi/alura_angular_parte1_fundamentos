export interface Photo {
    id: number;
    postDate:Date;
    description: string;
    allowComment: boolean;
    likes: number;
    comments: number;
    userId: number;
}