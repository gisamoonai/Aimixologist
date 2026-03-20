import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { X, Edit } from "lucide-react";

interface Script {
  id: string;
  title: string;
  hook: string;
  content: string;
  preview: string;
  createdDate: string;
}

const MOCK_SCRIPTS: Script[] = [
  {
    id: "1",
    title: "스마트폰 숨겨진 기능 10가지",
    hook: "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다.",
    preview: "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다. 오늘은 당신의 기기 사용법을 완전히 바꿀...",
    content:
      "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다. 오늘은 당신의 기기 사용법을 완전히 바꿀 10가지 숨은 기능을 공개합니다. 먼저 배터리 최적화부터 시작하죠. 스마트폰이 충전 패턴을 학습해서 배터리 수명을 보호할 수 있다는 거 아셨나요? 설정 > 배터리로 가서 최적화 충전을 켜세요. 다음은 접근성 기능인데요, 이건 접근성만을 위한 게 아닙니다. 생산성의 황금 도구죠. 음성 제어로 앱 없이도 반복 작업을 자동화할 수 있어요. 그리고 가장 중요한 건 보안 설정입니다. 대부분의 사람들이 개인정보 보고서 기능을 건너뛰는데, 이건 어떤 앱이 당신을 추적하고 있는지 정확히 보여줍니다. 매주 확인하세요. 이 세 가지만으로도 스마트폰 경험이 완전히 달라질 겁니다. 어떤 기능이 가장 놀라웠나요?",
    createdDate: "2024-03-10",
  },
  {
    id: "2",
    title: "클라우드 스토리지 완벽 가이드",
    hook: "클라우드 스토리지 헷갈리시죠? 60초 안에 정리해드릴게요.",
    preview: "클라우드 스토리지 헷갈리시죠? 60초 안에 정리해드릴게요. 구글 드라이브, 드롭박스, 아이클라우드...",
    content:
      "클라우드 스토리지 헷갈리시죠? 60초 안에 정리해드릴게요. 구글 드라이브는 무료로 15GB를 주지만 Gmail과 공유됩니다. 드롭박스는 2GB로 시작하지만 동기화가 최고죠. 아이클라우드는 애플 생태계에 올인하셨다면 완벽합니다. 개인정보 보호가 걱정이시면 Proton Drive를 쓰세요. 협업은 Google Workspace가 압도적입니다. 제 전략은 이래요: 기기 백업은 아이클라우드, 공유는 구글 드라이브, 민감한 파일은 암호화된 서비스. 모든 걸 한 곳에 넣지 마세요. 조합을 선택하고 안심하세요.",
    createdDate: "2024-03-09",
  },
  {
    id: "3",
    title: "시간을 아껴주는 단축키 모음",
    hook: "이 단축키들로 컴퓨터 마법사처럼 보일 수 있습니다.",
    preview: "이 단축키들로 컴퓨터 마법사처럼 보일 수 있습니다. Ctrl+Shift+T는 닫힌 탭을 복구합니다...",
    content:
      "이 단축키들로 컴퓨터 마법사처럼 보일 수 있습니다. Ctrl+Shift+T는 모든 브라우저에서 닫힌 탭을 복구합니다. 저한테 무수히 많은 시간을 절약해줬어요. Windows+V는 클립보드 히스토리를 열어줘서 여러 개를 한 번에 복사할 수 있습니다. Alt+Tab은 다들 아시지만, Shift를 더하면 뒤로 갑니다. 문서 작업할 때는 Ctrl+Shift+V로 서식 없이 붙여넣기 하세요. 이메일에 완전 게임 체인저예요. 그리고 비밀 무기: OS 검색 단축키를 배우세요. PC는 윈도우 키, Mac은 Cmd+Space. 메뉴를 클릭하는 것보다 훨씬 빠릅니다. 매일 쓰면 주당 몇 시간을 절약할 수 있어요. 믿어보세요.",
    createdDate: "2024-03-08",
  },
];

export default function ScriptBinder() {
  const navigate = useNavigate();
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const handleScriptClick = (script: Script) => {
    setSelectedScript(script);
    setEditedContent(script.content);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save the edited content
  };

  const handleNext = () => {
    navigate("../persona");
  };

  return (
    <div className="flex-1 flex gap-6 bg-gray-50 p-8 overflow-hidden">
      {/* Script List */}
      <div className="w-1/2 space-y-4 overflow-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">스크립트 보관함</h1>
        
        {MOCK_SCRIPTS.map((script) => (
          <Card
            key={script.id}
            className={`cursor-pointer transition-all border-none shadow-md hover:shadow-lg ${
              selectedScript?.id === script.id
                ? "ring-2 ring-indigo-500 bg-indigo-50"
                : ""
            }`}
            onClick={() => handleScriptClick(script)}
          >
            <CardContent className="p-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {script.title}
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-2">
                훅: "{script.hook}"
              </p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {script.preview}
              </p>
              <p className="text-xs text-gray-500">
                생성일: {new Date(script.createdDate).toLocaleDateString('ko-KR')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Script Preview/Edit Panel */}
      <div className="flex-1 flex flex-col">
        {selectedScript ? (
          <Card className="flex-1 flex flex-col border-none shadow-md">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {selectedScript.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    생성일: {new Date(selectedScript.createdDate).toLocaleDateString('ko-KR')}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedScript(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 mb-4">
                {isEditing ? (
                  <Textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="h-full min-h-[400px] font-mono text-sm"
                  />
                ) : (
                  <div className="bg-gray-50 rounded-lg p-4 h-full overflow-auto">
                    <p className="text-sm text-gray-800 whitespace-pre-wrap">
                      {editedContent}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                {isEditing ? (
                  <Button onClick={handleSave}>변경사항 저장</Button>
                ) : (
                  <Button variant="outline" onClick={handleEdit}>
                    <Edit className="w-4 h-4 mr-2" />
                    스크립트 수정
                  </Button>
                )}
                <Button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-700">
                  페르소나로 이동
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <p>미리볼 스크립트를 선택하세요</p>
          </div>
        )}
      </div>
    </div>
  );
}