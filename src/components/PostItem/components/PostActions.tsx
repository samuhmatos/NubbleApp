import React from "react";
import { Box, TouchableOpacityBox, Icon, Text, IconProps } from "@components";
import { Post } from "@types";

type Props = Pick<Post, 'commentCount' | "favoriteCount" | "reactionCount">

export function PostActions({commentCount, favoriteCount, reactionCount}:Props){

    function likePost(){

    }

    function navigateToComments(){

    }

    function favoritePost(){

    }



    return (
        <Box flexDirection="row" mt="s16">
            <Item 
                onPress={likePost} 
                icon={{default:"heart",marked:'heartFill'}} 
                text={reactionCount} 
                marked
            />

            <Item 
                onPress={likePost} 
                icon={{default:"comment",marked:'comment'}} 
                text={commentCount} 
                marked={false}
            />

            <Item 
                onPress={likePost} 
                icon={{default:"bookmark",marked:'bookmarkFill'}} 
                text={favoriteCount} 
                marked={false}
            />
        </Box>
    )
}

interface ItemProps {
    onPress: ()=>void;
    marked: boolean;
    icon:{
        default: IconProps['name'],
        marked: IconProps['name']
    }
    text: number;
}

function Item({onPress, icon, text, marked}:ItemProps){


    return (
        <TouchableOpacityBox
            flexDirection="row"
            alignItems="center"
            mr="s24"
            onPress={onPress}
        >
            <Icon 
                color={marked ? "market" : undefined}
                name={marked ? icon.marked : icon.default}
            />
            {text > 0 && (
                <Text ml="s4" bold preset="paragraphSmall">{text}</Text>
            )}
        </TouchableOpacityBox>
    )
}