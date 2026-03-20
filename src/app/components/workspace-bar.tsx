import { Bell, Settings, User } from "lucide-react";
import { Button } from "./ui/button";

interface WorkspaceBarProps {
  channelName: string;
  channelIcon?: React.ReactNode;
}

export function WorkspaceBar({ channelName, channelIcon }: WorkspaceBarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
      {/* Left - Channel Info */}
      <div className="flex items-center gap-3">
        {channelIcon && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-semibold">
            {channelIcon}
          </div>
        )}
        <div>
          <h2 className="text-sm font-semibold text-gray-900">{channelName}</h2>
          <p className="text-xs text-gray-500">채널 워크스페이스</p>
        </div>
      </div>

      {/* Center - Current Status */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-sm text-gray-700">작업 준비 완료</span>
      </div>

      {/* Right - User Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Settings className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
