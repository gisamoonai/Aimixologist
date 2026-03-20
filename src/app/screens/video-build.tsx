import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Play, Pause, RefreshCw, Video } from "lucide-react";

interface VideoCut {
  id: string;
  cutNumber: number;
  scriptText: string;
  videoState: "pending" | "generating" | "generated";
  thumbnail?: string;
}

const MOCK_VIDEO_CUTS: VideoCut[] = [
  {
    id: "1",
    cutNumber: 1,
    scriptText: "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다.",
    videoState: "generated",
  },
  {
    id: "2",
    cutNumber: 2,
    scriptText: "오늘은 당신의 기기 사용법을 완전히 바꿀 10가지 숨은 기능을 공개합니다.",
    videoState: "generated",
  },
  {
    id: "3",
    cutNumber: 3,
    scriptText: "먼저 배터리 최적화부터 시작하죠.",
    videoState: "generated",
  },
  {
    id: "4",
    cutNumber: 4,
    scriptText: "스마트폰이 충전 패턴을 학습해서 배터리 수명을 보호할 수 있다는 거 아셨나요?",
    videoState: "generated",
  },
  {
    id: "5",
    cutNumber: 5,
    scriptText: "설정, 배터리로 가서 최적화 충전을 켜세요.",
    videoState: "generated",
  },
  {
    id: "6",
    cutNumber: 6,
    scriptText: "다음은 접근성 기능인데요, 이건 접근성만을 위한 게 아닙니다. 생산성의 황금 도구죠.",
    videoState: "generated",
  },
  {
    id: "7",
    cutNumber: 7,
    scriptText: "음성 제어로 앱 없이도 반복 작업을 자동화할 수 있어요.",
    videoState: "generated",
  },
  {
    id: "8",
    cutNumber: 8,
    scriptText: "그리고 가장 중요한 건 보안 설정입니다.",
    videoState: "generated",
  },
];

export default function VideoBuild() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCut, setCurrentCut] = useState<string>("1");
  const [cuts, setCuts] = useState<VideoCut[]>(MOCK_VIDEO_CUTS);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCutClick = (cutId: string) => {
    setCurrentCut(cutId);
    setIsPlaying(false);
  };

  const handleRegenerateCut = (cutId: string) => {
    setCuts((prev) =>
      prev.map((cut) =>
        cut.id === cutId ? { ...cut, videoState: "pending" as const } : cut
      )
    );
    setTimeout(() => {
      setCuts((prev) =>
        prev.map((cut) =>
          cut.id === cutId ? { ...cut, videoState: "generated" as const } : cut
        )
      );
    }, 2000);
  };

  const handleNext = () => {
    navigate("../caption-field");
  };

  const allGenerated = cuts.every((cut) => cut.videoState === "generated");

  return (
    <div className="p-8 h-full flex gap-6">
      {/* Left Panel - Video Preview */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">영상 생성</h1>

        <Card className="flex-1 flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            {/* Video Player */}
            <div className="flex-1 bg-black rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"></div>
              <div className="relative z-10 text-center">
                <Video className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-white text-sm">영상 미리보기</p>
                <p className="text-white/70 text-xs mt-1">컷 #{currentCut}</p>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{ width: isPlaying ? "65%" : "30%" }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleNext} size="lg" disabled={!allGenerated}>
                  자막 설정으로 이동
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Cut List */}
      <div className="w-96 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">영상 컷 목록</h2>

        <div className="flex-1 overflow-auto space-y-2">
          {cuts.map((cut) => (
            <Card
              key={cut.id}
              className={`cursor-pointer transition-all ${
                currentCut === cut.id
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-300"
              }`}
              onClick={() => handleCutClick(cut.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="flex-shrink-0 mt-1">
                    #{cut.cutNumber}
                  </Badge>
                  
                  <div className="flex-1 min-w-0">
                    {/* Video Thumbnail */}
                    <div className="w-full h-16 bg-gray-200 rounded mb-2 overflow-hidden">
                      {cut.videoState === "generated" ? (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                      ) : cut.videoState === "generating" ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-xs text-gray-500">대기 중</p>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-gray-800 line-clamp-2 mb-2">
                      {cut.scriptText}
                    </p>

                    {cut.videoState === "generated" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRegenerateCut(cut.id);
                        }}
                        className="text-xs h-7"
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        재생성
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}