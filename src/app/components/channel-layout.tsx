import { Outlet, useParams } from "react-router";
import ChannelSidebar from "./channel-sidebar";

export default function ChannelLayout() {
  const { channelId } = useParams<{ channelId: string }>();

  if (!channelId) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <ChannelSidebar channelId={channelId} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}