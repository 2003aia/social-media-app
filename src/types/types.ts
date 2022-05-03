export type TPost = {
    avatar?: string,
    text?: string,
    likes: Array<string>,
    created: string,
    author_nickname: string,
    image_name?: string,
    image_url?: string,
    user_id: string,
    id: string, 
    totalMessages: number,
}

export type TUser = {
    email?: string | undefined,
    nickname?: string,
    age?: number | undefined,
    avatar?: string,

}

export type TComment = {
    created: string,
    message: string,
    likes?: Array<string>,
    dislikes?: Array<string>,
    author_avatar: string,
    author_id: string,
    author_nickname: string,
    id: string,
   
}