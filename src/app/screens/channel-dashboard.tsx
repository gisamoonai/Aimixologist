import { useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { WorkspaceBar } from "../components/workspace-bar";
import { WorkflowProgressBar } from "../components/workflow-progress-bar";
import {
  Archive,
  FileText,
  Video,
  Edit,
  Plus,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";

const CHANNEL_DATA: Record<string, any> = {
  "tech-tips": {
    name: "테크 팁스",
    description: "일상에서 바로 써먹는 기술 팁을 다루는 채널",
    icon: "⚡",
  },
  "cooking-shorts": {
    name: "쿠킹 쇼츠",
    description: "60초 안에 빠르게 보는 요리 팁 채널",
    icon: "👨‍🍳",
  },
  "fitness-focus": {
    name: "피트니스 포커스",
    description: "운동 루틴과 건강 정보를 다루는 채널",
    icon: "💪",
  },
};

export default function ChannelDashboard() {
  const { channelId } = useParams<{ channelId: string }>();
  const channel = channelId ? CHANNEL_DATA[channelId] : null;

  if (!channel) {
    return <div>채널을 찾을 수 없습니다</div>;
  }

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Workspace Bar */}
      <WorkspaceBar channelName={channel.name} channelIcon={channel.icon} />

      {/* Workflow Progress */}
      <WorkflowProgressBar currentStep="channel" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Hero Card */}
          <Card className="mb-8 overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium opacity-90">AI 영상 제작</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">오늘 생성된 영상 12개</h2>
                  <p className="text-indigo-100 text-lg mb-6">
                    최근 작업: 피트니스 채널 스토리보드 생성 완료
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-gray-100 shadow-lg"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    새 영상 만들기
                  </Button>
                </div>
                <div className="hidden md:flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Video className="w-16 h-16" />
                </div>
              </div>
            </div>
          </Card>

          {/* Production Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-md hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Archive className="w-6 h-6 text-blue-600" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm text-gray-600 mb-1">아이디어 보관함</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500 mt-2">+3 이번 주</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-md hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm text-gray-600 mb-1">스크립트 보관함</p>
                <p className="text-3xl font-bold text-gray-900">18</p>
                <p className="text-xs text-gray-500 mt-2">+5 이번 주</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-md hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-sm text-gray-600 mb-1">완성된 영상</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500 mt-2">+2 이번 주</p>
              </CardContent>
            </Card>
          </div>

          {/* Channel Bible and Style Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600">📖</span>
                    </div>
                    <CardTitle className="text-lg">채널 바이블</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-indigo-50 hover:text-indigo-600">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">콘텐츠 정체성</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    복잡한 주제를 60초 영상으로 쉽게 풀어내는 교육 콘텐츠
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">톤 & 화법</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    친근하고 열정적이며 정보 전달이 명확함. 시청자에게 지식 있는 친구처럼 말함
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">타겟 시청자</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    기술에 관심 있는 18-45세 시청자로, 부담 없이 정보를 얻고 싶어하는 사람들
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                      <span className="text-violet-600">🎨</span>
                    </div>
                    <CardTitle className="text-lg">스타일 가이드</CardTitle>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-violet-50 hover:text-violet-600">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">스크립트 스타일</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    강한 훅으로 시작, 3가지 핵심 포인트, 명확한 행동 유도
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">페르소나 스타일</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    에너지 넘치는 전달과 자연스러운 강조
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">비주얼 스타일</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    깔끔하고 현대적인 그래픽, 기술 중심 이미지
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-semibold text-gray-700 mb-2">보이스 스타일</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    명확하고 밝은 톤, 중간 속도, 핵심 단어 약한 강조
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Work */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <CardTitle className="text-lg">최근 작업</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {[
                  {
                    action: "스토리보드 생성",
                    item: "필수 크롬 확장 프로그램 5가지",
                    time: "2시간 전",
                    color: "bg-purple-100 text-purple-700",
                  },
                  {
                    action: "스크립트 생성",
                    item: "API 기초 이해하기",
                    time: "5시간 전",
                    color: "bg-green-100 text-green-700",
                  },
                  {
                    action: "아이디어 생성",
                    item: "생산성 도구 시리즈",
                    time: "1일 전",
                    color: "bg-blue-100 text-blue-700",
                  },
                  {
                    action: "영상 완료",
                    item: "알아야 할 Git 명령어",
                    time: "2일 전",
                    color: "bg-indigo-100 text-indigo-700",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className={`px-3 py-1 rounded-md text-xs font-medium ${activity.color}`}>
                      {activity.action}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {activity.item}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
