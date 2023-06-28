import React from "react";
import { Post } from "@types";
import { Box, Text } from "@components";
import { PostHeader } from "./components/PostHeader";
import { PostImage } from "./components/PostImage";
import { PostActions } from "./components/PostActions";
import { PostBottom } from "./components/PostBottom";

interface Props{
    post: Post;
}

export function PostItem({post}:Props){
    return(
        <Box mb="s24" paddingHorizontal="s24">
            <PostHeader author={post.author}/>
            <PostImage imageURL={post.imageURL}/>
            <PostActions 
                commentCount={post.commentCount}
                favoriteCount={post.favoriteCount}
                reactionCount={post.reactionCount}
            />
            <PostBottom 
                author={post.author}
                commentCount={post.commentCount}
                text={post.text}
            />
        </Box>
    )
}