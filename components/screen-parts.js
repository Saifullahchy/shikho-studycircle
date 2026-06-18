"use client";

import {
  Activity,
  ChemicalGlass,
  Math,
  Microscope
} from "iconsax-react";
import { activeLearners } from "@/components/mock-data";

const subjectStyles = {
  Physics: {
    bg: "bg-violet-100",
    fg: "#7C3AED",
    icon: Activity
  },
  Math: {
    bg: "bg-emerald-100",
    fg: "#047857",
    icon: Math
  },
  Chemistry: {
    bg: "bg-amber-100",
    fg: "#D97706",
    icon: ChemicalGlass
  },
  Biology: {
    bg: "bg-cyan-100",
    fg: "#0F766E",
    icon: Microscope
  }
};

export function SubjectBadge({ subject, size = "md" }) {
  const style = subjectStyles[subject] || subjectStyles.Physics;
  const Icon = style.icon;

  const sizeClass =
    size === "sm"
      ? "h-10 w-10 rounded-[14px]"
      : "h-12 w-12 rounded-2xl";

  const iconSize = size === "sm" ? "20" : "24";

  return (
    <div className={`flex ${sizeClass} items-center justify-center ${style.bg}`}>
      <Icon size={iconSize} variant="Linear" color={style.fg} />
    </div>
  );
}

export function AvatarStack({ showOverflow = true, overflowCount = 147 }) {
  return (
    <div className="isolate flex items-center">
      {activeLearners.slice(0, 4).map((learner, index) => (
        <div
          key={learner.id ?? learner.name}
          className="-ml-2 first:ml-0 h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm"
          style={{ zIndex: 5 - index }}
        >
          <img
            src={learner.avatar}
            alt={learner.name}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {showOverflow ? (
        <div className="-ml-2 flex h-8 items-center rounded-full border-2 border-white bg-[#111827] px-2 text-[10px] font-bold text-white">
          +{overflowCount}
        </div>
      ) : null}
    </div>
  );
}

export function LearnerRow({ learners = activeLearners }) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {learners.slice(0, 5).map((learner) => (
        <div key={learner.id ?? learner.name} className="text-center">
          <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_6px_14px_rgba(17,24,39,0.08)]">
            <img
              src={learner.avatar}
              alt={learner.name}
              className="h-full w-full object-cover"
            />

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#16A34A]" />
          </div>

          <p className="mt-2 truncate text-[12px] font-bold leading-4 text-[#374151]">
            {learner.name}
          </p>

          <p className="mt-0.5 text-[10px] font-medium leading-4 text-[#6B7280]">
            {learner.solvedToday ?? 0} MCQ
          </p>
        </div>
      ))}
    </div>
  );
}