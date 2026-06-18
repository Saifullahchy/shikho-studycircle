"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight2,
  AddCircle,
  TickCircle,
  Profile2User,
  Book1,
} from "iconsax-react";
import { activeLearners } from "@/components/mock-data";
import { SubjectBadge } from "@/components/screen-parts";

function bnNumber(value) {
  return String(value ?? 0).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

export function CircleCard({ circle, joined = false, onToggle }) {
  const router = useRouter();

  function handleClick() {
    if (joined) {
      router.push(`/circle/${circle.id}`);
      return;
    }

    onToggle?.(circle.id);
  }

  return (
    <article className="rounded-[22px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.05)]">
      {/* Top content */}
      <div className="flex items-start gap-4">
        <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[20px] bg-[#EFF6FF]">
          <SubjectBadge subject={circle.subject} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-[18px] font-extrabold leading-[26px] tracking-[-0.01em] text-[#111827]">
                {circle.title}
              </h3>

              <p className="mt-1 text-[13px] font-semibold leading-[20px] text-[#6B7280]">
                {bnNumber(circle.members ?? 0)} জন সদস্য
              </p>
            </div>

            {joined ? (
              <span className="shrink-0 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-bold text-[#16A34A]">
                Joined
              </span>
            ) : null}
          </div>

          <div className="mt-3 flex items-start gap-2">
            <Book1 size="18" variant="Bold" color="#2563EB" />
            <p className="text-[14px] font-medium leading-[22px] text-[#374151]">
              <span className="font-bold text-[#111827]">আজকের লেসন:</span>{" "}
              {circle.todayGoal}
            </p>
          </div>
        </div>
      </div>

      {/* Social proof */}
      <div className="mt-4 flex items-center justify-between rounded-[16px] bg-[#F9FAFB] px-3 py-3">
        <div className="flex items-center">
          {activeLearners.slice(0, 4).map((learner, index) => (
            <div
              key={learner.name}
              className={`relative ${index === 0 ? "" : "-ml-2"}`}
            >
              <img
                src={learner.avatar}
                alt={learner.name}
                className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-[0_3px_8px_rgba(17,24,39,0.08)]"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-[#16A34A]" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Profile2User size="16" variant="Bold" color="#6B7280" />
          <span className="text-[13px] font-extrabold text-[#111827]">
            +{bnNumber(circle.previewCount ?? circle.activeNow ?? 0)}
          </span>
        </div>
      </div>

      {/* Bottom CTA */}
      <button
        type="button"
        onClick={handleClick}
        className={`mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[16px] text-[15px] font-extrabold transition active:scale-[0.98] ${
          joined
            ? "border border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
            : "bg-[#2563EB] text-white shadow-[0_10px_22px_rgba(37,99,235,0.22)]"
        }`}
      >
        {joined ? (
          <>
            <TickCircle size="20" variant="Bold" color="#2563EB" />
            <span>সার্কেলে যান</span>
            <ArrowRight2 size="18" variant="Bold" color="#2563EB" />
          </>
        ) : (
          <>
            <AddCircle size="20" variant="Bold" color="#FFFFFF" />
            <span>যোগ দিন</span>
            <ArrowRight2 size="18" variant="Bold" color="#FFFFFF" />
          </>
        )}
      </button>
    </article>
  );
}