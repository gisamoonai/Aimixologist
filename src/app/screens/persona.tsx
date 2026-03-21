import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Play, Volume2, Settings, Edit2, Check, Pause, RotateCcw, Loader2, Lock } from "lucide-react";
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
    text: "설정, 배터리로 가서 최적화 충전을 켜세요.",
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
  const [playingLineId, setPlayingLineId] = useState<string | null>(null);
  const [isFullPlaying, setIsFullPlaying] = useState(false);
  const [regeneratingLineId, setRegeneratingLineId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration] = useState(45); // Mock duration in seconds

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

  const handlePlayLine = (id: string) => {
    setPlayingLineId(id);
    setIsFullPlaying(false);
    // Mock: auto stop after 2 seconds
    setTimeout(() => setPlayingLineId(null), 2000);
  };

  const handlePauseLine = () => {
    setPlayingLineId(null);
  };

  const handleRegenerateLine = (id: string) => {
    setRegeneratingLineId(id);
    // Mock regeneration
    setTimeout(() => {
      setRegeneratingLineId(null);
      // Optional: pulse animation feedback
    }, 1500);
  };

  const handleFullPlay = () => {
    setIsFullPlaying(true);
    setPlayingLineId(scriptLines[0].id);
    
    // Mock progressive playback
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index < scriptLines.length) {
        setPlayingLineId(scriptLines[index].id);
        setCurrentTime((index / scriptLines.length) * totalDuration);
      } else {
        setIsFullPlaying(false);
        setPlayingLineId(null);
        clearInterval(interval);
      }
    }, 3000);
  };

  const handleFullPause = () => {
    setIsFullPlaying(false);
    setPlayingLineId(null);
  };

  const handleNext = () => {
    navigate("../storyboard");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            <div className="flex-1 overflow-auto mb-4 space-y-4">
              {scriptLines.map((line, index) => {
                const showDirection =
                  index === 0 || line.direction !== scriptLines[index - 1].direction;
                const isPlaying = playingLineId === line.id;
                const isRegenerating = regeneratingLineId === line.id;
                const isLocked = isFullPlaying && !isPlaying;

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
                            onClick={() => !isLocked && setEditingDirectionId(line.id)}
                          >
                            {line.direction}
                            {!isLocked && <Edit2 className="w-3 h-3 ml-1" />}
                            {isLocked && <Lock className="w-3 h-3 ml-1" />}
                          </Badge>
                        )}
                      </div>
                    )}
                    
                    {/* Sentence Block with Controls */}
                    <div
                      className={`group relative rounded-lg p-4 transition-all duration-300 ${
                        isPlaying
                          ? "bg-violet-50 border-l-4 border-indigo-600 shadow-lg scale-[1.01]"
                          : isRegenerating
                          ? "bg-gray-100 opacity-60"
                          : "bg-gray-50 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Text Area */}
                        <div className="flex-1 min-w-0">
                          {editingLineId === line.id ? (
                            <Input
                              value={line.text}
                              onChange={(e) => handleLineEdit(line.id, e.target.value)}
                              onBlur={() => setEditingLineId(null)}
                              autoFocus
                              disabled={isLocked}
                              className="text-sm"
                            />
                          ) : (
                            <p
                              className={`text-sm text-gray-800 cursor-pointer rounded p-1 transition-colors ${
                                !isLocked && "hover:bg-gray-100"
                              }`}
                              onClick={() => !isLocked && setEditingLineId(line.id)}
                            >
                              {line.text}
                            </p>
                          )}
                        </div>

                        {/* Audio Controls (show on hover or when active) */}
                        {hasGeneratedTTS && (
                          <div
                            className={`flex items-center gap-2 transition-opacity ${
                              isPlaying || isRegenerating
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            {/* Play/Pause Button */}
                            {isRegenerating ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                disabled
                              >
                                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                              </Button>
                            ) : isPlaying ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 hover:bg-indigo-100"
                                onClick={handlePauseLine}
                              >
                                <Pause className="w-4 h-4 text-indigo-600" />
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 hover:bg-indigo-100"
                                onClick={() => handlePlayLine(line.id)}
                              >
                                <Play className="w-4 h-4 text-indigo-600" />
                              </Button>
                            )}

                            {/* Regenerate Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 hover:bg-violet-100"
                              onClick={() => handleRegenerateLine(line.id)}
                              disabled={isRegenerating}
                            >
                              <RotateCcw className="w-4 h-4 text-violet-600" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom TTS Timeline */}
            <div className="border-t pt-4 space-y-3">
              {!hasGeneratedTTS ? (
                <Button onClick={handleGenerateTTS} className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                  TTS 생성
                </Button>
              ) : (
                <>
                  {/* Enhanced Audio Timeline */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-4 mb-3">
                      {/* Play/Pause */}
                      {isFullPlaying ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleFullPause}
                          className="h-10 w-10 rounded-full p-0 border-2 border-indigo-600 hover:bg-indigo-50"
                        >
                          <Pause className="w-5 h-5 text-indigo-600" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleFullPlay}
                          className="h-10 w-10 rounded-full p-0 border-2 border-indigo-600 hover:bg-indigo-50"
                        >
                          <Play className="w-5 h-5 text-indigo-600" />
                        </Button>
                      )}

                      {/* Progress Bar with Waveform Style */}
                      <div className="flex-1">
                        <div className="relative h-10 bg-gray-200 rounded-full overflow-hidden">
                          {/* Progress */}
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-300"
                            style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                          ></div>
                          
                          {/* Sentence Markers */}
                          {scriptLines.map((_, i) => (
                            <div
                              key={i}
                              className="absolute top-0 bottom-0 w-px bg-white/40"
                              style={{ left: `${((i + 1) / scriptLines.length) * 100}%` }}
                            ></div>
                          ))}
                        </div>

                        {/* Time Display */}
                        <div className="flex items-center justify-between mt-2 px-2">
                          <span className="text-xs font-medium text-gray-600">
                            {formatTime(currentTime)}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatTime(totalDuration)}
                          </span>
                        </div>
                      </div>

                      {/* Volume */}
                      <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                        <Volume2 className="w-5 h-5 text-gray-600" />
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      전체 TTS 다시 생성
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
