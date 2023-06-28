import { Box, Button, PostItem, Screen, Text } from "@components";
import React, { useEffect, useState } from "react";
import { AppTabsScreenProps, Post } from "@types";
import { postService } from "@domain";
import { Dimensions, FlatList, Image, ListRenderItemInfo, StyleProp, ViewStyle } from "react-native";



export function HomeScreen({navigation}:AppTabsScreenProps<'HomeScreen'>){
    const [postList, setPostList] = useState<Post[]>([])
    
    useEffect(()=>{
        postService.getList().then(list => setPostList(list))
    },[])


    function renderItem({item}: ListRenderItemInfo<Post>){
        return (
            <PostItem post={item}/>
        )
    }

    return (
        <Screen
            style={$screen}
        >
           <FlatList
                data={postList}                
                keyExtractor={(item)=> item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    )
}

const $screen: StyleProp<ViewStyle> = {
    paddingBottom:0,
    paddingTop:0,
    paddingHorizontal:0
}