import React from "react";
import { Post } from "@types";
import { Image, Dimensions } from "react-native";
import { Box, Text } from "@components";
import { PostHeader } from "./components/PostHeader";
import { PostImage } from "./components/PostImage";

interface Props{
    post: Post;
}

export function PostItem({post}:Props){
    return(
        <Box mb="s24">
            <PostHeader author={post.author}/>
            <PostImage imageURL={post.imageURL}/>
        </Box>
    )
}