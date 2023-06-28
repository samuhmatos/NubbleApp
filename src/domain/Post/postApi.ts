import { Post } from "@types";
import { postListMock } from "./postListMock";


async function getList(): Promise<Post[]> {
    // TODO: simular delay na API
    return postListMock;
}

export const postApi = {
    getList
}