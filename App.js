import { StatusBar } from 'expo-status-bar';
import {AppView} from "./src/styles";
import PostList from "./src/components/PostList/PostList";
import {NativeRouter, Route, Routes} from "react-router-native";
import PostPage from "./src/pages/PostPage/PostPage";
import {RefreshControl, SafeAreaView, ScrollView} from "react-native";
import {useCallback, useState} from "react";

const App = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, []);

  return (
      <NativeRouter basename={"/"}>
        <AppView>
            <SafeAreaView>
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

                    <Routes>
                        <Route exact path="/" element={<PostList />} />
                        <Route exact path="/post/:postId" element={<PostPage />} />
                    </Routes>

                    <StatusBar style="auto" />

                </ScrollView>
            </SafeAreaView>
        </AppView>
      </NativeRouter>
  );
}
export default App;
