import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { RefreshCw, ImageIcon } from "lucide-react";

interface StoryboardCut {
  id: string;
  cutNumber: number;
  scriptText: string;
  sceneType: "character" | "reference";
  imageState: "pending" | "generating" | "generated";
  imageUrl?: string;
}

const MOCK_CUTS: StoryboardCut[] = [
  {
    id: "1",
    cutNumber: 1,
    scriptText: "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다.",
    sceneType: "character",
    imageState: "pending",
  },
  {
    id: "2",
    cutNumber: 2,
    scriptText: "오늘은 당신의 기기 사용법을 완전히 바꿀 10가지 숨은 기능을 공개합니다.",
    sceneType: "character",
    imageState: "pending",
  },
  {
    id: "3",
    cutNumber: 3,
    scriptText: "먼저 배터리 최적화부터 시작하죠.",
    sceneType: "reference",
    imageState: "pending",
  },
  {
    id: "4",
    cutNumber: 4,
    scriptText: "스마트폰이 충전 패턴을 학습해서 배터리 수명을 보호할 수 있다는 거 아셨나요?",
    sceneType: "character",
    imageState: "pending",
  },
  {
    id: "5",
    cutNumber: 5,
    scriptText: "설정, 배터리로 가서 최적화 충전을 켜세요.",
    sceneType: "reference",
    imageState: "pending",
  },
  {
    id: "6",
    cutNumber: 6,
    scriptText: "다음은 접근성 기능인데요, 이건 접근성만을 위한 게 아닙니다. 생산성의 황금 도구죠.",
    sceneType: "character",
    imageState: "pending",
  },
  {
    id: "7",
    cutNumber: 7,
    scriptText: "음성 제어로 앱 없이도 반복 작업을 자동화할 수 있어요.",
    sceneType: "reference",
    imageState: "pending",
  },
  {
    id: "8",
    cutNumber: 8,
    scriptText: "그리고 가장 중요한 건 보안 설정입니다.",
    sceneType: "character",
    imageState: "pending",
  },
];

export default function Storyboard() {
  const navigate = useNavigate();
  const [cuts, setCuts] = useState<StoryboardCut[]>(MOCK_CUTS);

  const handleGenerateAll = () => {
    setCuts((prev) =>
      prev.map((cut) => ({ ...cut, imageState: "generated" as const }))
    );
  };

  const handleRegenerateAll = () => {
    setCuts((prev) =>
      prev.map((cut) => ({ ...cut, imageState: "pending" as const }))
    );
  };

  const handleGenerateCut = (cutId: string) => {
    setCuts((prev) =>
      prev.map((cut) =>
        cut.id === cutId ? { ...cut, imageState: "generated" as const } : cut
      )
    );
  };

  const handleRegenerateCut = (cutId: string) => {
    setCuts((prev) =>
      prev.map((cut) =>
        cut.id === cutId ? { ...cut, imageState: "pending" as const } : cut
      )
    );
  };

  const handleSceneTypeChange = (cutId: string, sceneType: "character" | "reference") => {
    setCuts((prev) =>
      prev.map((cut) => (cut.id === cutId ? { ...cut, sceneType } : cut))
    );
  };

  const handleNext = () => {
    navigate("../video-build");
  };

  const allGenerated = cuts.every((cut) => cut.imageState === "generated");

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-1">스토리보드</h1>
            <p className="text-gray-600">총 컷 수: {cuts.length}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleGenerateAll} variant="default">
              전체 이미지 생성
            </Button>
            <Button onClick={handleRegenerateAll} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              전체 다시 생성
            </Button>
          </div>
        </div>
      </div>

      {/* Cut List */}
      <div className="space-y-4 mb-6">
        {cuts.map((cut) => (
          <Card key={cut.id}>
            <CardContent className="p-5">
              <div className="flex gap-4">
                {/* Cut Number */}
                <div className="flex-shrink-0 w-12 text-center">
                  <Badge variant="outline" className="text-sm">
                    #{cut.cutNumber}
                  </Badge>
                </div>

                {/* Image Area */}
                <div className="flex-shrink-0 w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  {cut.imageState === "pending" && (
                    <div className="text-center">
                      <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">이미지 생성 대기</p>
                    </div>
                  )}
                  {cut.imageState === "generating" && (
                    <div className="text-center">
                      <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-2" />
                      <p className="text-xs text-gray-600">생성 중...</p>
                    </div>
                  )}
                  {cut.imageState === "generated" && (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <p className="text-white text-xs">생성된 이미지</p>
                    </div>
                  )}
                </div>

                {/* Script and Controls */}
                <div className="flex-1 space-y-3">
                  <p className="text-sm text-gray-800">{cut.scriptText}</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-600 mb-1 block">장면 유형</label>
                      <Select
                        value={cut.sceneType}
                        onValueChange={(value) =>
                          handleSceneTypeChange(cut.id, value as "character" | "reference")
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="character">캐릭터 장면</SelectItem>
                          <SelectItem value="reference">정보 장면</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-5">
                      {cut.imageState === "generated" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleRegenerateCut(cut.id)}
                        >
                          <RefreshCw className="w-3 h-3 mr-1" />
                          재생성
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handleGenerateCut(cut.id)}
                        >
                          생성
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Next Step */}
      <div className="flex justify-end">
        <Button onClick={handleNext} size="lg" disabled={!allGenerated}>
          영상 생성으로 이동
        </Button>
      </div>
    </div>
  );
}