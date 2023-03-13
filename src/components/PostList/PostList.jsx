import {ContainerColumn} from "../../styles";
import {useApi} from "../../hooks/useApi";
import Post from "../Post/Post";
import AlertError from "../AlertError/AlertError";

const PostList = () => {

    const articlesList = useApi("country=us");

    if (articlesList.error) {
        return (
            <AlertError error={articlesList.error} />
        )
    }

    if (articlesList.data?.totalResults){
        return (
            <ContainerColumn>
                {
                    articlesList.data.articles.map(elem => (
                        <Post key={elem.title} data={elem}/>
                    ))
                }
            </ContainerColumn>
        );
    }
};

export default PostList;
