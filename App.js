import { StatusBar } from 'expo-status-bar';
import {AppView} from "./src/styles";
import PostList from "./src/components/PostList/PostList";
import {NativeRouter, Route, Routes} from "react-router-native";
import PostPage from "./src/pages/PostPage/PostPage";

const App = () => {

  return (
      <NativeRouter basename={"/"}>
        <AppView>
            <Routes>
                <Route exact path="/" element={<PostList />} />
                <Route exact path="/post/:postId" element={<PostPage />} />
            </Routes>

            <StatusBar style="auto" />
        </AppView>
      </NativeRouter>
  );
}
export default App;
