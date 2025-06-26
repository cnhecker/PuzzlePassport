import { createBrowserRouter } from "react-router";
import App from "../App";
import VisitedEscapeRooms from "../Components/VisitedEscapeRooms";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/VisitedEscapeRooms",
        element: <VisitedEscapeRooms />
    }
])