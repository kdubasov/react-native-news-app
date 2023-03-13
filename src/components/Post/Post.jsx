import { StatusBar } from 'expo-status-bar';
import {PostContent, PostImg, PostView} from "./PostStyles";
import {H5, P, SMALL} from "../../styles";
import {getCutWord} from "../../functions/getCutWord";
import {Link} from "react-router-native";


const Post = ({data}) => {

    // console.log(data);

    const { urlToImage,title,publishedAt,description } = data;

    return (
        <PostView>
            <PostImg source={{ uri: urlToImage || "https://серебро.рф/img/placeholder.png" }} />
            <PostContent>
                <Link to={`/post/${publishedAt}`}>
                    <H5>{getCutWord(title)}</H5>
                </Link>
                <P>{getCutWord(description,50)}</P>
                <SMALL style={{opacity: .5}}>
                    {publishedAt}
                </SMALL>
            </PostContent>
            <StatusBar style="auto" />
        </PostView>
    )
};

export default Post;
