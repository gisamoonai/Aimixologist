import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Check, X } from "lucide-react";
import { WorkspaceBar } from "../components/workspace-bar";
import { WorkflowProgressBar } from "../components/workflow-progress-bar";

interface TopicIdea {
  id: string;
  title: string;
  keyPoints: string[];
  status: "active" | "kept" | "discarded";
}

const MOCK_IDEAS: TopicIdea[] = [
  {
    id: "1",
    title: "스마트폰 숨겨진 기능 10가지",
    keyPoints: [
      "대부분이 모르는 배터리 최적화 방법",
      "생산성 도구로 활용 가능한 접근성 기능",
      "오늘 바로 켜야 할 보안 설정",
    ],
    status: "active",
  },
  {
    id: "2",
    title: "클라우드 스토리지 완벽 가이드",
    keyPoints: [
      "인기 클라우드 서비스 비교",
      "개인정보 보호와 보안 고려사항",
      "개인 사용자를 위한 비용 절감 전략",
    ],
    status: "active",
  },
  {
    id: "3",
    title: "시간을 아껴주는 단축키 모음",
    keyPoints: [
      "모든 플랫폼에서 쓸 수 있는 범용 단축키",
      "브라우저별 시간 절약 팁",
      "문서 편집 파워 단축키",
    ],
    status: "active",
  },
  {
    id: "4",
    title: "디지털 웰빙: 스크린 타임 관리법",
    keyPoints: [
      "iOS와 안드로이드 기본 제공 도구",
      "알림으로부터 건강한 경계 설정하기",
      "디지털 과부하를 줄이는 앱",
    ],
    status: "active",
  },
  {
    id: "5",
    title: "비밀번호 관리자 입문 가이드",
    keyPoints: [
      "왜 필요한가 (생각보다 어렵지 않아요)",
      "주요 비밀번호 관리자 3가지 비교",
      "안전하게 비밀번호 이전하는 방법",
    ],
    status: "active",
  },
];

export default function Ideation() {
  const [direction, setDirection] = useState("");
  const [ideas, setIdeas] = useState<TopicIdea[]>(MOCK_IDEAS);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    setIdeas(MOCK_IDEAS.map((idea) => ({ ...idea, status: "active" })));
    setHasGenerated(true);
  };

  const handleRegenerate = () => {
    // In a real app, this would call the API again
    handleGenerate();
  };

  const handleKeep = (id: string) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, status: "kept" as const } : idea
      )
    );
  };

  const handleDiscard = (id: string) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, status: "discarded" as const } : idea
      )
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">아이디어 생성</h1>

        {/* Input Area */}
        <Card className="mb-8 border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  생성 방향 입력 (선택)
                </label>
                <Textarea
                  placeholder="원하는 주제 방향이나 키워드를 입력하세요"
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  rows={3}
                  className="w-full"
                />
              </div>
              <div className="flex gap-3">
                {!hasGenerated ? (
                  <Button onClick={handleGenerate} className="bg-indigo-600 hover:bg-indigo-700">
                    아이디어 생성
                  </Button>
                ) : (
                  <Button onClick={handleRegenerate} variant="outline">
                    다시 생성
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Results */}
        {hasGenerated && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">생성된 주제</h2>
            <div className="space-y-4">
              {ideas.map((idea) => (
                <Card
                  key={idea.id}
                  className={`transition-all duration-300 border-none shadow-md hover:shadow-lg ${
                    idea.status === "kept"
                      ? "opacity-50 bg-green-50"
                      : idea.status === "discarded"
                      ? "opacity-30 blur-sm"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                          {idea.title}
                        </h3>
                        <ul className="space-y-2">
                          {idea.keyPoints.map((point, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {idea.status === "active" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleKeep(idea.id)}
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Check className="w-4 h-4 mr-1" />
                            보관
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDiscard(idea.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="w-4 h-4 mr-1" />
                            삭제
                          </Button>
                        </div>
                      )}
                      {idea.status === "kept" && (
                        <div className="text-sm font-medium text-green-600">저장됨</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}