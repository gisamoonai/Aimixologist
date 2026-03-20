import { createBrowserRouter, Navigate } from "react-router";
import Login from "./screens/login";
import ChannelSelect from "./screens/channel-select";
import ChannelLayout from "./components/channel-layout";
import ChannelDashboard from "./screens/channel-dashboard";
import Ideation from "./screens/ideation";
import IdeaArchive from "./screens/idea-archive";
import ScriptGenerator from "./screens/script-generator";
import ScriptBinder from "./screens/script-binder";
import Persona from "./screens/persona";
import Storyboard from "./screens/storyboard";
import VideoBuild from "./screens/video-build";
import CaptionField from "./screens/caption-field";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/channels",
    element: <ChannelSelect />,
  },
  {
    path: "/channel/:channelId",
    element: <ChannelLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <ChannelDashboard />,
      },
      {
        path: "ideation",
        element: <Ideation />,
      },
      {
        path: "idea-archive",
        element: <IdeaArchive />,
      },
      {
        path: "script-generator",
        element: <ScriptGenerator />,
      },
      {
        path: "script-binder",
        element: <ScriptBinder />,
      },
      {
        path: "persona",
        element: <Persona />,
      },
      {
        path: "storyboard",
        element: <Storyboard />,
      },
      {
        path: "video-build",
        element: <VideoBuild />,
      },
      {
        path: "caption-field",
        element: <CaptionField />,
      },
    ],
  },
]);
