import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import StartLearning from "../components/StartLearning";
import LessonDetails from "../components/LessonDetails";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";
export const routes = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout></HomeLayout>
    }, {
        path : '/start-learning',
        element : <StartLearning></StartLearning>,
        loader : () => fetch('/image.json')
    }, {
        path : '/explore/:id',
        element : <PrivateRoute>
            <LessonDetails></LessonDetails>
        </PrivateRoute>,
        loader : () => fetch('/german_vocabulary.json')

    }, {
        path : "/register",
        element : <Register></Register>
    }, {
        path : "/login",
        element : <Login></Login>
    }, {
        path : '/profile',
        element : <PrivateRoute>
            <Profile></Profile>
        </PrivateRoute>
    }
])