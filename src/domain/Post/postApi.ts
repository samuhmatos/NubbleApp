import { Post } from "@types";
import { postListMock } from "./postListMock";


async function getList(): Promise<Post[]> {
    // TODO: simular delay na API
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        }, 2000);
    })
    return postListMock;
}

export const postApi = {
    getList
}