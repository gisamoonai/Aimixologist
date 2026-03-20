import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Zap, ChefHat, Dumbbell } from "lucide-react";

const MOCK_CHANNELS = [
  {
    id: "tech-tips",
    name: "테크 팁스",
    description: "일상에서 바로 써먹는 기술 팁을 다루는 채널",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "cooking-shorts",
    name: "쿠킹 쇼츠",
    description: "60초 안에 빠르게 보는 요리 팁 채널",
    icon: <ChefHat className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "fitness-focus",
    name: "피트니스 포커스",
    description: "운동 루틴과 건강 정보를 다루는 채널",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
];

export default function ChannelSelect() {
  const navigate = useNavigate();

  const handleChannelClick = (channelId: string) => {
    navigate(`/channel/${channelId}/dashboard`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Mixologist</h1>
          <p className="text-lg text-gray-600">작업할 채널을 선택하세요</p>
        </div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {MOCK_CHANNELS.map((channel) => (
            <Card
              key={channel.id}
              className="group cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-indigo-400 overflow-hidden"
              onClick={() => handleChannelClick(channel.id)}
            >
              <CardContent className="p-0">
                {/* Icon Header */}
                <div
                  className={`bg-gradient-to-br ${channel.color} p-8 flex items-center justify-center`}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                    {channel.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* New Channel Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all px-8"
          >
            <Plus className="w-5 h-5 mr-2" />
            새 채널 생성
          </Button>
        </div>
      </div>
    </div>
  );
}
