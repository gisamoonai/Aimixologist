import { Check } from "lucide-react";

interface WorkflowStep {
  id: string;
  label: string;
  status: "completed" | "current" | "upcoming";
}

interface WorkflowProgressBarProps {
  currentStep?: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  { id: "channel", label: "채널 선택", status: "upcoming" },
  { id: "persona", label: "페르소나", status: "upcoming" },
  { id: "script", label: "스크립트", status: "upcoming" },
  { id: "caption", label: "자막", status: "upcoming" },
  { id: "video", label: "영상 생성", status: "upcoming" },
];

export function WorkflowProgressBar({ currentStep = "script" }: WorkflowProgressBarProps) {
  const steps = WORKFLOW_STEPS.map((step, index) => {
    const currentIndex = WORKFLOW_STEPS.findIndex((s) => s.id === currentStep);
    if (index < currentIndex) {
      return { ...step, status: "completed" as const };
    } else if (index === currentIndex) {
      return { ...step, status: "current" as const };
    }
    return step;
  });

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all ${
                    step.status === "completed"
                      ? "bg-indigo-600 text-white"
                      : step.status === "current"
                      ? "bg-indigo-600 text-white ring-4 ring-indigo-100"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.status === "completed" ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    step.status === "current"
                      ? "text-indigo-600"
                      : step.status === "completed"
                      ? "text-gray-700"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-2 mt-[-24px]">
                  <div
                    className={`h-full rounded transition-all ${
                      steps[index + 1].status === "completed" ||
                      steps[index].status === "completed"
                        ? "bg-indigo-600"
                        : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
