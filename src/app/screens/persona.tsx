import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Play, Volume2, Settings, Edit2, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface Persona {
  id: string;
  name: string;
  image: string;
  voiceStyle: string;
}

interface ScriptLine {
  id: string;
  text: string;
  direction: string;
}

const MOCK_PERSONAS: Persona[] = [
  {
    id: "1",
    name: "사라",
    image: "https://images.unsplash.com/photo-1701096351544-7de3c7fa0272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzE5NzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    voiceStyle: "따뜻하고 친근한 대화 톤",
  },
  {
    id: "2",
    name: "마커스",
    image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMxOTc3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    voiceStyle: "에너지 넘치고 활기찬 톤",
  },
  {
    id: "3",
    name: "마야",
    image: "https://images.unsplash.com/photo-1562904403-a5106bef8319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW58ZW58MXx8fHwxNzczMzAzNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    voiceStyle: "명확하고 전문적이며 권위 있는 톤",
  },
];

const DIRECTION_OPTIONS = [
  "강한 훅",
  "밝게 전달",
  "차분하게",
  "약한 강조",
  "강한 강조",
  "설명 톤",
  "주의 강조",
  "확실하게",
  "친근한 질문",
];

const MOCK_SCRIPT_LINES: ScriptLine[] = [
  {
    id: "1",
    text: "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다.",
    direction: "강한 훅",
  },
  {
    id: "2",
    text: "오늘은 당신의 기기 사용법을 완전히 바꿀 10가지 숨은 기능을 공개합니다.",
    direction: "밝게 전달",
  },
  {
    id: "3",
    text: "먼저 배터리 최적화부터 시작하죠.",
    direction: "차분하게",
  },
  {
    id: "4",
    text: "스마트폰이 충전 패턴을 학습해서 배터리 수명을 보호할 수 있다는 거 아셨나요?",
    direction: "약한 강조",
  },
  {
    id: "5",
    text: "설정, 배��리로 가서 최적화 충전을 켜세요.",
    direction: "설명 톤",
  },
  {
    id: "6",
    text: "다음은 접근성 기능인데요, 이건 접근성만을 위한 게 아닙니다. 생산성의 황금 도구죠.",
    direction: "밝게 전달",
  },
  {
    id: "7",
    text: "음성 제어로 앱 없이도 반복 작업을 자동화할 수 있어요.",
    direction: "약한 강조",
  },
  {
    id: "8",
    text: "그리고 가장 중요한 건 보안 설정입니다.",
    direction: "강한 강조",
  },
  {
    id: "9",
    text: "대부분의 사람들이 개인정보 보고서 기능을 건너뛰는데, 이건 어떤 앱이 당신을 추적하고 있는지 정확히 보여줍니다.",
    direction: "주의 강조",
  },
  {
    id: "10",
    text: "매주 확인하세요.",
    direction: "확실하게",
  },
  {
    id: "11",
    text: "이 세 가지만으로도 스마트폰 경험이 완전히 달라질 겁니다.",
    direction: "확실하게",
  },
  {
    id: "12",
    text: "어떤 기능이 가장 놀라웠나요?",
    direction: "친근한 질문",
  },
];

export default function Persona() {
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = useState<string>("1");
  const [scriptLines, setScriptLines] = useState(MOCK_SCRIPT_LINES);
  const [hasGeneratedTTS, setHasGeneratedTTS] = useState(false);
  const [editingLineId, setEditingLineId] = useState<string | null>(null);
  const [editingDirectionId, setEditingDirectionId] = useState<string | null>(null);

  const handleGenerateTTS = () => {
    setHasGeneratedTTS(true);
  };

  const handleLineEdit = (id: string, newText: string) => {
    setScriptLines((prev) =>
      prev.map((line) => (line.id === id ? { ...line, text: newText } : line))
    );
  };

  const handleDirectionChange = (id: string, newDirection: string) => {
    setScriptLines((prev) =>
      prev.map((line) => (line.id === id ? { ...line, direction: newDirection } : line))
    );
    setEditingDirectionId(null);
  };

  const handleNext = () => {
    navigate("../storyboard");
  };

  return (
    <div className="flex-1 flex gap-6 bg-gray-50 p-8 overflow-hidden">
      {/* Left Panel - Persona Selection */}
      <div className="w-80 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">페르소나 목록</h2>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {MOCK_PERSONAS.map((persona) => (
          <Card
            key={persona.id}
            className={`cursor-pointer transition-all border-none shadow-md hover:shadow-lg ${
              selectedPersona === persona.id
                ? "ring-2 ring-indigo-500 bg-indigo-50"
                : ""
            }`}
            onClick={() => setSelectedPersona(persona.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <ImageWithFallback
                  src={persona.image}
                  alt={persona.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{persona.name}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{persona.voiceStyle}</p>
              <Button variant="outline" size="sm" className="w-full">
                <Play className="w-3 h-3 mr-1" />
                샘플 듣기
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Panel - Script Direction & TTS */}
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">페르소나 & 낭독 디렉션</h1>
          <p className="text-gray-600">각 문장의 낭독 톤과 대본을 수정하세요</p>
        </div>

        <Card className="flex-1 mb-4 overflow-hidden flex flex-col border-none shadow-md">
          <CardContent className="p-6 flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-auto mb-4 space-y-3">
              {scriptLines.map((line, index) => {
                const showDirection =
                  index === 0 || line.direction !== scriptLines[index - 1].direction;

                return (
                  <div key={line.id} className="space-y-2">
                    {showDirection && (
                      <div className="flex items-center gap-2">
                        {editingDirectionId === line.id ? (
                          <div className="flex items-center gap-2">
                            <Select
                              value={line.direction}
                              onValueChange={(value) => handleDirectionChange(line.id, value)}
                            >
                              <SelectTrigger className="w-48 h-7 text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {DIRECTION_OPTIONS.map((option) => (
                                  <SelectItem key={option} value={option} className="text-xs">
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingDirectionId(null)}
                              className="h-7 px-2"
                            >
                              <Check className="w-3 h-3" />
                            </Button>
                          </div>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="text-xs cursor-pointer hover:bg-indigo-100 hover:text-indigo-700"
                            onClick={() => setEditingDirectionId(line.id)}
                          >
                            {line.direction}
                            <Edit2 className="w-3 h-3 ml-1" />
                          </Badge>
                        )}
                      </div>
                    )}
                    <div className="bg-gray-50 rounded-lg p-3">
                      {editingLineId === line.id ? (
                        <Input
                          value={line.text}
                          onChange={(e) => handleLineEdit(line.id, e.target.value)}
                          onBlur={() => setEditingLineId(null)}
                          autoFocus
                          className="text-sm"
                        />
                      ) : (
                        <p
                          className="text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded p-1"
                          onClick={() => setEditingLineId(line.id)}
                        >
                          {line.text}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4 space-y-3">
              {!hasGeneratedTTS ? (
                <Button onClick={handleGenerateTTS} className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                  TTS 생성
                </Button>
              ) : (
                <>
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-indigo-600"></div>
                    </div>
                    <Volume2 className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      TTS 다시 생성
                    </Button>
                    <Button onClick={handleNext} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      스토리보드로 이동
                    </Button>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}