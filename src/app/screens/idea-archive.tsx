import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

interface ArchivedIdea {
  id: string;
  title: string;
  summary: string;
  date: string;
}

const MOCK_ARCHIVED: ArchivedIdea[] = [
  {
    id: "1",
    title: "스마트폰 숨겨진 기능 10가지",
    summary: "배터리 최적화, 접근성 도구, 보안 설정",
    date: "2024-03-10",
  },
  {
    id: "2",
    title: "클라우드 스토리지 완벽 가이드",
    summary: "서비스 비교, 개인정보 보호, 비용 전략",
    date: "2024-03-09",
  },
  {
    id: "3",
    title: "시간을 아껴주는 단축키 모음",
    summary: "범용 단축키, 브라우저 팁, 문서 편집",
    date: "2024-03-08",
  },
  {
    id: "4",
    title: "디지털 웰빙: 스크린 타임 관리법",
    summary: "기본 제공 도구, 알림 경계, 유용한 앱",
    date: "2024-03-07",
  },
  {
    id: "5",
    title: "비밀번호 관리자 입문 가이드",
    summary: "필요성, 주요 관리자 비교, 이전 팁",
    date: "2024-03-06",
  },
];

export default function IdeaArchive() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIdeas = MOCK_ARCHIVED.filter((idea) =>
    idea.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGenerateScript = () => {
    if (selectedId) {
      navigate("../script-generator", { state: { ideaId: selectedId } });
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">아이디어 보관함</h1>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="주제를 검색하세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {filteredIdeas.map((idea) => (
            <Card
              key={idea.id}
              className={`cursor-pointer transition-all border-none shadow-md hover:shadow-lg ${
                selectedId === idea.id
                  ? "ring-2 ring-indigo-500 bg-indigo-50"
                  : "hover:border-gray-300"
              }`}
              onClick={() => setSelectedId(idea.id)}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {idea.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{idea.summary}</p>
                    <p className="text-xs text-gray-500">
                      저장일: {new Date(idea.date).toLocaleDateString('ko-KR')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleGenerateScript}
            disabled={!selectedId}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            스크립트 생성
          </Button>
        </div>
      </div>
    </div>
  );
}