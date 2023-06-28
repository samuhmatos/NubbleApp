import React from "react";
import { Box, Text } from "@components";
import { Post } from "@types";

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>

export function PostBottom({author, text, commentCount}:Props){
    const commentText = getCommentText(commentCount)

    return(
        <Box mt="s16">
            <Text bold>{author.userName}</Text>
            <Text>{text}</Text>
            {commentText && (
                <Text  mt="s8" preset="paragraphSmall" bold color="primary">{commentText}</Text>
            )}
        </Box>
    )
}

function getCommentText(commentCount: number): string | null{
    if(commentCount === 0){
        return ""
    }else if(commentCount === 1){
        return "Ver comentário"
    }else{
        return `Ver ${commentCount} comentários`
    }
}