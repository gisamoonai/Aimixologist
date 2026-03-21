Modify the "페르소나 & 낭독 디렉션" page to transform it into a TTS editing interface with sentence-level control.

IMPORTANT: Do NOT change the overall layout structure (left persona panel + right script panel). Only enhance interaction and components inside the script area.

---

# 1. Sentence-Level Audio Control (핵심 기능)

Each script line must become an interactive audio block.

For every sentence block:
- Add a small control bar on the right side
- Include the following buttons:

1. ▶ Play (해당 문장만 재생)
2. ⏸ Pause (재생 중일 때)
3. 🔁 Regenerate (해당 문장만 TTS 재생성)

Layout:
[톤 태그] [✏️] 텍스트 입력 영역 ---------------------- [▶] [🔁]

Constraints:
- Buttons must be minimal (icon-only)
- Show buttons only on hover (clean UI 유지)
- Active playing line must be visually highlighted

---

# 2. Active Line Highlight (전체 재생 연동)

When playing full TTS (bottom timeline):

- The currently playing sentence must:
  → have a soft violet background highlight
  → have a left accent bar (indigo/violet)
  → slightly elevated shadow

- Smooth transition between lines (no jump)

Optional:
- Auto scroll to keep active line in view

---

# 3. Timeline Sync Behavior

Bottom TTS timeline should control top script:

- Play full → highlight moves line by line
- Clicking a sentence:
  → moves playhead to that sentence
  → starts playback from there

---

# 4. Regenerate Per Sentence UX

When clicking 🔁 on a sentence:

- Show loading state:
  → spinner replaces button
  → 해당 문장만 dim 처리

- After generation:
  → subtle pulse animation
  → highlight briefly (feedback)

DO NOT regenerate entire script.

---

# 5. Edit Mode Behavior

- Text remains editable (current behavior 유지)
- Tone tag editable (current 유지)

But:
- While playing → editing disabled (conflict 방지)
- Show small lock icon when disabled

---

# 6. Improve Sentence Block Design (디자인 보강)

Current UI is too flat. Improve it:

Each sentence block:
- Rounded card (8px radius)
- Subtle background (gray-50)
- Hover:
  → elevate shadow
  → reveal controls

Spacing:
- 12–16px vertical gap between sentences

---

# 7. Audio Timeline Upgrade

Enhance bottom player:

- Show waveform-style progress (not just bar)
- Add:
  → current time
  → total duration

Optional:
- small markers for each sentence

---

# 8. Visual Language (워크스페이스 느낌 유지)

Use:
- Accent: Indigo / Violet gradient
- Active elements: stronger contrast
- Hover: soft shadow + slight scale (1.01)

Avoid:
- heavy colors
- cluttered UI

---

# 9. Maintain System Identity

This is NOT a media player.

This is:
→ AI production tool
→ TTS editing stage

So UI must feel:
- precise
- controllable
- production-oriented

NOT playful or entertainment-focused.

---

# 10. Do NOT change

- Left persona panel layout
- Top title structure
- Overall page grid

Only enhance interaction inside script + TTS area.