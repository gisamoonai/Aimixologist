import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import { Video, Download } from "lucide-react";

export default function CaptionField() {
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [openingTitleEnabled, setOpeningTitleEnabled] = useState(true);
  const [openingTitleText, setOpeningTitleText] = useState("스마트폰 숨겨진 기능 10가지");
  const [hideDuringTitle, setHideDuringTitle] = useState(false);

  // Spoken subtitle settings
  const [spokenFont, setSpokenFont] = useState("Inter");
  const [spokenSize, setSpokenSize] = useState("medium");
  const [spokenColor, setSpokenColor] = useState("#FFFFFF");
  const [spokenPosition, setSpokenPosition] = useState("bottom-center");
  const [spokenAlignment, setSpokenAlignment] = useState("centered");
  const [spokenMaxLines, setSpokenMaxLines] = useState("2");
  const [spokenBackground, setSpokenBackground] = useState("shadow");

  // Highlight word settings
  const [highlightFont, setHighlightFont] = useState("Inter");
  const [highlightSize, setHighlightSize] = useState("medium");
  const [highlightColor, setHighlightColor] = useState("#FFD700");

  // Opening title settings
  const [titleFont, setTitleFont] = useState("Inter");
  const [titleSize, setTitleSize] = useState("large");
  const [titleColor, setTitleColor] = useState("#FFFFFF");

  return (
    <div className="p-8 h-full flex gap-6">
      {/* Left Panel - Video Preview */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">자막 설정</h1>

        <Card className="flex-1 flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            {/* Video Preview with Subtitles */}
            <div className="flex-1 bg-black rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"></div>
              
              {/* Opening Title (if enabled) */}
              {openingTitleEnabled && (
                <div className="absolute top-1/3 left-0 right-0 text-center z-20">
                  <p
                    className="font-bold"
                    style={{
                      fontSize: titleSize === "large" ? "2rem" : titleSize === "medium" ? "1.5rem" : "1rem",
                      color: titleColor,
                    }}
                  >
                    {openingTitleText}
                  </p>
                </div>
              )}

              {/* Spoken Subtitle (if enabled and not hidden during title) */}
              {subtitlesEnabled && (!openingTitleEnabled || !hideDuringTitle) && (
                <div
                  className={`absolute left-0 right-0 px-8 z-10 ${
                    spokenPosition === "bottom-center"
                      ? "bottom-12"
                      : spokenPosition === "center"
                      ? "top-1/2 -translate-y-1/2"
                      : "top-12"
                  }`}
                >
                  <p
                    className={`${
                      spokenAlignment === "centered" ? "text-center" : "text-left"
                    } ${
                      spokenBackground === "semi-transparent"
                        ? "bg-black/60 px-4 py-2 rounded"
                        : spokenBackground === "shadow"
                        ? "drop-shadow-lg"
                        : ""
                    }`}
                    style={{
                      fontSize: spokenSize === "large" ? "1.5rem" : spokenSize === "medium" ? "1.25rem" : "1rem",
                      color: spokenColor,
                      fontFamily: spokenFont,
                    }}
                  >
                    당신의 스마트폰에 <span style={{ color: highlightColor, fontWeight: "bold" }}>슈퍼파워</span>가 있습니다.
                  </p>
                </div>
              )}

              <div className="relative z-0 text-center">
                <Video className="w-16 h-16 text-white/50 mx-auto mb-4" />
                <p className="text-white/70 text-sm">실시간 미리보기</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                최종 영상 생성
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                다운로드
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Subtitle Settings */}
      <div className="w-96 overflow-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">자막 설정</h2>

        <div className="space-y-6">
          {/* Subtitle On/Off */}
          <Card>
            <CardHeader>
              <CardTitle>자막 사용</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Label htmlFor="subtitles-toggle">자막 활성화</Label>
                <Switch
                  id="subtitles-toggle"
                  checked={subtitlesEnabled}
                  onCheckedChange={setSubtitlesEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Spoken Subtitle Style */}
          <Card>
            <CardHeader>
              <CardTitle>말자막 스타일</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>폰트</Label>
                <Select value={spokenFont} onValueChange={setSpokenFont}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Arial">Arial</SelectItem>
                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                    <SelectItem value="Georgia">Georgia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>크기</Label>
                <Select value={spokenSize} onValueChange={setSpokenSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">작게</SelectItem>
                    <SelectItem value="medium">중간</SelectItem>
                    <SelectItem value="large">크게</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>색상</Label>
                <Input
                  type="color"
                  value={spokenColor}
                  onChange={(e) => setSpokenColor(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>위치</Label>
                <Select value={spokenPosition} onValueChange={setSpokenPosition}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bottom-center">하단 중앙</SelectItem>
                    <SelectItem value="center">중앙</SelectItem>
                    <SelectItem value="top">상단</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>정렬</Label>
                <Select value={spokenAlignment} onValueChange={setSpokenAlignment}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="centered">가운데 정렬</SelectItem>
                    <SelectItem value="left">왼쪽 정렬</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>최대 줄 수</Label>
                <Select value={spokenMaxLines} onValueChange={setSpokenMaxLines}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1줄</SelectItem>
                    <SelectItem value="2">2줄</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>배경</Label>
                <Select value={spokenBackground} onValueChange={setSpokenBackground}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">없음</SelectItem>
                    <SelectItem value="semi-transparent">반투명 박스</SelectItem>
                    <SelectItem value="shadow">그림자</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Highlight Word Style */}
          <Card>
            <CardHeader>
              <CardTitle>강조 단어 스타일</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>폰트</Label>
                <Select value={highlightFont} onValueChange={setHighlightFont}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Arial">Arial</SelectItem>
                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                    <SelectItem value="Georgia">Georgia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>크기</Label>
                <Select value={highlightSize} onValueChange={setHighlightSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">작게</SelectItem>
                    <SelectItem value="medium">중간</SelectItem>
                    <SelectItem value="large">크게</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>색상</Label>
                <Input
                  type="color"
                  value={highlightColor}
                  onChange={(e) => setHighlightColor(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Opening Title Subtitle */}
          <Card>
            <CardHeader>
              <CardTitle>오프닝 제목</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="title-toggle">오프닝 제목 활성화</Label>
                <Switch
                  id="title-toggle"
                  checked={openingTitleEnabled}
                  onCheckedChange={setOpeningTitleEnabled}
                />
              </div>

              {openingTitleEnabled && (
                <>
                  <Separator />

                  <div className="space-y-2">
                    <Label>제목 텍스트</Label>
                    <Input
                      value={openingTitleText}
                      onChange={(e) => setOpeningTitleText(e.target.value)}
                      placeholder="제목을 입력하세요"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>폰트</Label>
                    <Select value={titleFont} onValueChange={setTitleFont}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inter">Inter</SelectItem>
                        <SelectItem value="Arial">Arial</SelectItem>
                        <SelectItem value="Helvetica">Helvetica</SelectItem>
                        <SelectItem value="Georgia">Georgia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>크기</Label>
                    <Select value={titleSize} onValueChange={setTitleSize}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">작게</SelectItem>
                        <SelectItem value="medium">중간</SelectItem>
                        <SelectItem value="large">크게</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>색상</Label>
                    <Input
                      type="color"
                      value={titleColor}
                      onChange={(e) => setTitleColor(e.target.value)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <Label htmlFor="hide-during-title">제목 표시 중 말자막 숨김</Label>
                    <Switch
                      id="hide-during-title"
                      checked={hideDuringTitle}
                      onCheckedChange={setHideDuringTitle}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}