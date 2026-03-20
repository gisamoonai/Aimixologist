You are updating the UI of an internal production tool called AI Mixologist.
The design already exists. You must revise the existing UI, not redesign it.

Your task is to localize the entire interface to Korean and adjust several workflow layouts.

Follow these instructions carefully.

1. Global Rule

Apply these rules across ALL screens.

Language

All UI text must be Korean.

This includes:

page titles

sidebar navigation

buttons

placeholders

labels

dropdown options

helper text

status labels

section headers

timestamps

Do NOT leave English text anywhere.

2. Sidebar Structure

The sidebar currently contains:

Dashboard
Ideation
Idea Archive
Script Binder
Persona
Storyboard
Video Build
Caption Field

Convert these to Korean.

Dashboard → 대시보드
Ideation → 아이디어 생성
Idea Archive → 아이디어 보관함
Script Binder → 스크립트 보관함
Persona → 페르소나
Storyboard → 스토리보드
Video Build → 영상 생성
Caption Field → 자막 설정
3. Add Channel Switching

Users must be able to switch channels at any time.

Add this under the app name in the sidebar.

Structure:

AI Mixologist

현재 채널
쿠킹 쇼츠 ▼

Clicking this should open the channel selection screen.

This is only a UI element for now.
A dropdown or clickable label is enough.

4. Login Screen

Translate all UI.

Title stays:

AI Mixologist

Subtitle:

Internal Production Tool
→ 내부 제작 도구

Fields:

Email → 이메일
Password → 비밀번호
Login → 로그인

Placeholder text:

your@email.com → 이메일을 입력하세요
password → 비밀번호를 입력하세요
5. Channel Selection Screen

Title:

Select a channel profile
→ 작업할 채널을 선택하세요

Button:

Create New Channel
→ 새 채널 생성

Channel card descriptions should also be Korean.

Examples:

Tech channel:

일상에서 바로 써먹는 기술 팁을 다루는 채널

Cooking channel:

60초 안에 빠르게 보는 요리 팁 채널

Fitness channel:

운동 루틴과 건강 정보를 다루는 채널
6. Dashboard Screen

Convert all labels.

Stats cards:

Idea Archive → 아이디어 보관함
Script Binder → 스크립트 보관함
Finished Videos → 완성된 영상

Section titles:

Channel Bible → 채널 바이블
Style Guide → 스타일 가이드
Recent Work → 최근 작업

Inside Channel Bible:

Content Identity → 콘텐츠 정체성
Tone & Voice → 톤 & 화법
Target Audience → 타겟 시청자

Inside Style Guide:

Script Style → 스크립트 스타일
Persona Style → 페르소나 스타일
Visual Style → 비주얼 스타일
Voice Style → 보이스 스타일

Recent work labels:

Generated storyboard → 스토리보드 생성
Created script → 스크립트 생성
Generated ideas → 아이디어 생성

Time labels:

2 hours ago → 2시간 전
5 hours ago → 5시간 전
1 day ago → 1일 전
7. Ideation Screen

Page title:

Ideation → 아이디어 생성

Input label:

Direction Hints (Optional)
→ 생성 방향 입력 (선택)

Placeholder:

Enter topic direction or theme...
→ 원하는 주제 방향이나 키워드를 입력하세요

Buttons:

Generate Ideas → 아이디어 생성
Regenerate → 다시 생성

Idea card buttons:

Keep → 보관
Discard → 삭제
8. Idea Archive Screen

Title:

Idea Archive → 아이디어 보관함

Search field:

Search topics...
→ 주제를 검색하세요

Card date label:

Saved on → 저장일

Button:

Generate Script
→ 스크립트 생성
9. Script Generator Layout Change

This screen must be changed structurally.

Currently:

Scripts A, B, C are stacked vertically.

This must be changed.

New layout

Scripts must be displayed as 3 columns side by side.

Structure:

| Script A | Script B | Script C |

Each column contains:

hook

script preview

select button

Reason:

Scripts are long and vertical stacking makes the page too long.

UI Translation

Title:

Script Generator → 스크립트 생성

Section:

Selected Topic → 선택한 주제
Key Points → 핵심 포인트
Generated Scripts → 생성된 스크립트

Buttons:

Generate Scripts → 스크립트 생성
Regenerate All → 전체 다시 생성
Select This Version → 이 버전 선택
10. Script Binder Screen

Translate UI.

Script Binder → 스크립트 보관함

Right panel message:

Select a script to preview
→ 미리볼 스크립트를 선택하세요

Buttons:

Edit Script → 스크립트 수정
Continue to Persona → 페르소나로 이동
11. Persona & Direction Screen

Title:

Persona Library → 페르소나 목록
Persona & Direction → 페르소나 & 낭독 디렉션

Description:

Review and edit narration direction for each line
→ 각 문장의 낭독 톤과 대본을 수정하세요

Buttons:

Play Sample → 샘플 듣기
Generate TTS → TTS 생성
Important Behavior Change

Currently:

Narration direction tags are not editable.

This must change.

Direction tags must support editing.

Examples:

strong hook → 강한 훅
enthusiastic delivery → 밝게 전달
calm delivery → 차분하게
slight emphasis → 약한 강조
instructional tone → 설명 톤

These must be editable chips or dropdowns.

Users must be able to modify them.

12. Storyboard Screen

Translate UI.

Storyboard → 스토리보드
Total cuts → 총 컷 수

Buttons:

Generate All Images → 전체 이미지 생성
Regenerate All → 전체 다시 생성
Generate → 생성
Regenerate → 재생성

Labels:

Generated Image → 생성된 이미지
Image Pending → 이미지 생성 대기
Scene Type → 장면 유형

Dropdown values:

Character Shot → 캐릭터 장면
Reference/Information Shot → 정보 장면
13. Video Build Screen

Title:

Video Build → 영상 생성

Right panel:

Video Cuts → 영상 컷 목록

Preview label:

Video Preview → 영상 미리보기

Buttons:

Regenerate → 재생성
Continue to Caption Field → 자막 설정으로 이동
14. Caption Field Screen

Title:

Caption Field → 자막 설정

Right panel:

Subtitle Settings → 자막 설정

Sections:

Subtitle Control → 자막 사용
Spoken Subtitle Style → 말자막 스타일
Highlight Word Style → 강조 단어 스타일
Opening Title → 오프닝 제목

Fields:

Font → 폰트
Size → 크기
Color → 색상
Position → 위치
Alignment → 정렬
Max Line Count → 최대 줄 수
Background → 배경

Options:

Bottom Center → 하단 중앙
Centered → 가운데 정렬
2 Lines → 2줄
Shadow → 그림자

Buttons:

Final Render → 최종 영상 생성
Download → 다운로드
15. Do NOT Redesign

Important rule:

Do not redesign the product.

Keep the same layout and structure.

This task is focused on:

Korean localization

minor workflow improvements

script layout adjustment

editable direction tags