import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

interface ScriptVersion {
  id: string;
  version: string;
  hook: string;
  content: string;
}

const MOCK_TOPIC = {
  title: "스마트폰 숨겨진 기능 10가지",
  keyPoints: [
    "대부분이 모르는 배터리 최적화 방법",
    "생산성 도구로 활용 가능한 접근성 기능",
    "오늘 바로 켜야 할 보안 설정",
  ],
};

const MOCK_SCRIPTS: ScriptVersion[] = [
  {
    id: "a",
    version: "A",
    hook: "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다.",
    content:
      "당신의 스마트폰에 숨겨진 슈퍼파워가 있습니다. 오늘은 당신의 기기 사용법을 완전히 바꿀 10가지 숨은 기능을 공개합니다. 먼저 배터리 최적화부터 시작하죠. 스마트폰이 충전 패턴을 학습해서 배터리 수명을 보호할 수 있다는 거 아셨나요? 설정 > 배터리로 가서 최적화 충전을 켜세요. 다음은 접근성 기능인데요, 이건 접근성만을 위한 게 아닙니다. 생산성의 황금 도구죠. 음성 제어로 앱 없이도 반복 작업을 자동화할 수 있어요. 그리고 가장 중요한 건 보안 설정입니다. 대부분의 사람들이 개인정보 보고서 기능을 건너뛰는데, 이건 어떤 앱이 당신을 추적하고 있는지 정확히 보여줍니다. 매주 확인하세요. 이 세 가지만으로도 스마트폰 경험이 완전히 달라질 겁니다. 어떤 기능이 가장 놀라웠나요?",
  },
  {
    id: "b",
    version: "B",
    hook: "2015년처럼 스마트폰 쓰지 마세요.",
    content:
      "2015년처럼 스마트폰 쓰지 마세요. 지금 당장 놓치고 있는 10가지 기능이 있습니다. 배터리 수명부터 시작하죠. 설정에서 적응형 배터리를 켜세요. 실제로 사용하는 앱만 구분해서 나머지는 백그라운드 소모를 제한합니다. 게임 체인저예요. 이제 접근성 단축키 얘기해볼게요. 이건 단순히 접근성만을 위한 게 아니라 강력한 도구입니다. 뒷면 탭으로 단축키를 실행하도록 설정해보세요. 정말 마법 같아요. 그리고 제발 앱 권한 확인 좀 하세요. 설정 > 개인정보로 가서 어떤 앱이 24시간 내내 위치, 카메라, 마이크에 접근하는지 보세요. 충격 받으실 겁니다. 오늘 밤 이 세 가지만 시도해보세요. 댓글로 후기 남겨주세요!",
  },
  {
    id: "c",
    version: "C",
    hook: "15년간 스마트폰을 써왔지만, 이 기능들은 아직도 놀랍습니다.",
    content:
      "15년간 스마트폰을 써왔지만, 이 기능들은 아직도 놀랍습니다. 첫 번째: 스마트 충전. 스마트폰이 실제로 당신이 일어날 때까지 충전을 완료하도록 스케줄을 잡아서 배터리 수명을 보호합니다. 배터리 설정에 있어요. 켜세요. 두 번째: 숨겨진 생산성 도구. 스위치 제어와 음성 제어는 접근성만을 위한 게 아닙니다. 서드파티 앱 없이 복잡한 작업을 자동화할 수 있어요. 정말 과소평가된 기능이죠. 세 번째: 개인정보 체크업. 스마트폰에 추적기를 추적하는 기능이 내장되어 있습니다. 설정에서 개인정보 보고서를 통해 어떤 앱이 실시간으로 당신을 모니터링하는지 확인하세요. 아는 것이 힘입니다. 이 세 가지부터 시작하면 이것들 없이 어떻게 살았나 싶을 거예요. 여러분의 숨은 기능은 뭔가요? 댓글로 알려주세요!",
  },
];

export default function ScriptGenerator() {
  const navigate = useNavigate();
  const [hasGenerated, setHasGenerated] = useState(false);
  const [selectedScript, setSelectedScript] = useState<string | null>(null);

  const handleGenerate = () => {
    setHasGenerated(true);
    setSelectedScript(null);
  };

  const handleRegenerate = () => {
    setSelectedScript(null);
  };

  const handleSelectScript = (id: string) => {
    setSelectedScript(id);
  };

  const handleSendToBinder = () => {
    if (selectedScript) {
      navigate("../script-binder");
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">스크립트 생성</h1>

        {/* Selected Topic */}
        <Card className="mb-8 border-none shadow-md">
          <CardHeader>
            <CardTitle>선택한 주제</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {MOCK_TOPIC.title}
            </h3>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">핵심 포인트:</p>
              <ul className="space-y-1">
                {MOCK_TOPIC.keyPoints.map((point, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Generate Button */}
        {!hasGenerated ? (
          <div className="flex justify-center">
            <Button onClick={handleGenerate} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              스크립트 생성
            </Button>
          </div>
        ) : (
          <>
            {/* Script Versions - 3 Column Layout */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">생성된 스크립트</h2>
                <Button onClick={handleRegenerate} variant="outline">
                  전체 다시 생성
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {MOCK_SCRIPTS.map((script) => (
                  <Card
                    key={script.id}
                    className={`transition-all border-none shadow-md hover:shadow-lg ${
                      selectedScript === script.id
                        ? "ring-2 ring-indigo-500"
                        : ""
                    }`}
                  >
                    <CardContent className="p-5 h-full flex flex-col">
                      <div className="mb-3">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {script.version}
                        </Badge>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">훅:</p>
                        <p className="font-medium text-gray-900 text-sm">
                          "{script.hook}"
                        </p>
                      </div>

                      <div className="flex-1 mb-4">
                        <p className="text-xs text-gray-500 mb-2">스크립트 미리보기:</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {script.content}
                        </p>
                      </div>

                      <Button
                        onClick={() => handleSelectScript(script.id)}
                        variant={selectedScript === script.id ? "default" : "outline"}
                        className={selectedScript === script.id ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                        size="sm"
                      >
                        {selectedScript === script.id ? "선택됨" : "이 버전 선택"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleSendToBinder}
                disabled={!selectedScript}
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                스크립트 보관함으로 이동
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}