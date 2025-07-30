import { createBrowserRouter } from "react-router";
import App from "../App";
import VisitedEscapeRooms from "../Components/VisitedEscapeRooms";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <GoogleOAuthProvider clientId='206764919342-v8ccblsvg6okgoiqsif8ni7hudamptb0.apps.googleusercontent.com'> <App /></GoogleOAuthProvider>
    },
    {
        path: "/VisitedEscapeRooms",
        element: <VisitedEscapeRooms />
    }
])