import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Lightbulb,
  Archive,
  FileText,
  User,
  ImageIcon,
  Video,
  Subtitles,
  ChevronDown,
} from "lucide-react";

interface SidebarProps {
  channelId: string;
}

const navigation = [
  { name: "대시보드", href: "dashboard", icon: LayoutDashboard },
  { name: "아이디어 생성", href: "ideation", icon: Lightbulb },
  { name: "아이디어 보관함", href: "idea-archive", icon: Archive },
  { name: "스크립트 보관함", href: "script-binder", icon: FileText },
  { name: "페르소나", href: "persona", icon: User },
  { name: "스토리보드", href: "storyboard", icon: ImageIcon },
  { name: "영상 생성", href: "video-build", icon: Video },
  { name: "자막 설정", href: "caption-field", icon: Subtitles },
];

const CHANNEL_NAMES: Record<string, string> = {
  "tech-tips": "테크 팁스",
  "cooking-shorts": "쿠킹 쇼츠",
  "fitness-focus": "피트니스 포커스",
};

export default function ChannelSidebar({ channelId }: SidebarProps) {
  const channelName = CHANNEL_NAMES[channelId] || channelId;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">AI Mixologist</h1>
        
        {/* Channel Switcher */}
        <div className="space-y-1">
          <p className="text-xs text-gray-600">현재 채널</p>
          <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
            <span className="text-sm font-medium text-gray-900">{channelName}</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={`/channel/${channelId}/${item.href}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}