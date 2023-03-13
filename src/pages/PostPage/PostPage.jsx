import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {H3, P, SMALL} from "../../styles";
import {Link, useParams} from "react-router-native";
import {useApi} from "../../hooks/useApi";
import {PostImg} from "../../components/Post/PostStyles";


const PostPage = () => {

    const postId = useParams().postId;
    const articlesList = useApi("country=us");
    const [postData,setPostData] = useState({});
    // console.log(postData,"postData in PostPage");

    useEffect(() => {
        const dataInner = articlesList.data?.articles;
        if (dataInner?.length) {
            setPostData(...dataInner.filter(elem => elem.publishedAt === postId))
        }
    },[postId, articlesList.data?.totalResults])

    if (postData && Object.values(postData).length)
    return (
        <View>
            <Link to={"/"}>
                <P>Вернуться назад</P>
            </Link>
            <PostImg source={{ uri: postData.urlToImage || "https://серебро.рф/img/placeholder.png" }} />
            <H3>{postData.title}</H3>
            <P>Автор: {postData.author}</P>
            <SMALL style={{opacity: .7}}>
                {postData.publishedAt}
            </SMALL>
            <P>{postData.content}</P>
        </View>
    );
};

export default PostPage;
