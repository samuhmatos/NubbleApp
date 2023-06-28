import { Button, Screen, Text } from "@components";
import React, { useEffect, useState } from "react";
import { AppTabsScreenProps, Post } from "@types";
import { postService } from "@domain";



export function HomeScreen({navigation}:AppTabsScreenProps<'HomeScreen'>){
    const [postList, setPostList] = useState<Post[]>([])
    
    useEffect(()=>{
        postService.getList().then(list => setPostList(list))
    },[])


    return (
        <Screen scrollable>
           {
            postList.map(post => (<Text>{post.text}</Text>))
           }
        </Screen>
    )
}