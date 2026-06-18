"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight2,
  Book1,
  Chart,
  Profile2User,
  ShieldTick,
  TickCircle,
  Timer1,
} from "iconsax-react";
import { activeLearners, labelMap } from "@/components/mock-data";
import { SubjectBadge } from "@/components/screen-parts";
import { Card } from "@/components/ui";

const bnNumber = (value) =>
  String(value ?? 0).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

export function JoinStudyCircleCard({
  circle,
  studentProfile,
  progress = {},
  isJoined,
  onJoin,
  onJoinedStateChange,
}) {
  const router = useRouter();
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    onJoinedStateChange?.(isJoined ? circle?.id ?? null : null);
  }, [circle?.id, isJoined, onJoinedStateChange]);

  useEffect(() => {
    if (!toastVisible) return undefined;

    const timeoutId = window.setTimeout(() => {
      setToastVisible(false);
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [toastVisible]);

  if (!circle) {
    return <EmptyCircleCard />;
  }

  const classLabel =
    labelMap.classLevel?.[studentProfile.classLevel] ??
    studentProfile.classLevel;

  const groupLabel =
    labelMap.group?.[studentProfile.group] ?? studentProfile.group;

  const memberCount = circle.members ?? 162;
  const activeNow = circle.activeNow ?? 38;
  const previewCount = circle.previewCount ?? 157;

  function handlePrimaryAction() {
    if (isJoined) {
      router.push(`/circle/${circle.id}`);
      return;
    }

    onJoin(circle.id);
    setToastVisible(true);
    onJoinedStateChange?.(circle.id);
  }

  return (
    <>
      <Card className="overflow-hidden rounded-[24px] border-[#D9E7FF] bg-white p-0 shadow-[0_14px_36px_rgba(37,99,235,0.10)]">
        {/* Top recommendation strip */}
        <div className="border-b border-[#E5E7EB] bg-[#F8FBFF] px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2563EB]">
                Suggested Circle
              </p>
              <h2 className="mt-1 text-[18px] font-extrabold leading-[26px] text-[#111827]">
                আপনার জন্য সেরা ম্যাচ
              </h2>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-bold leading-[18px] ${
                isJoined
                  ? "bg-[#ECFDF5] text-[#16A34A]"
                  : "bg-[#EFF6FF] text-[#2563EB]"
              }`}
            >
              {isJoined ? "সক্রিয়" : "নতুন"}
            </span>
          </div>
        </div>

        <div className="p-5">
          {/* Circle identity */}
          <div className="flex items-start gap-4">
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[24px] bg-[#2563EB] shadow-[0_10px_24px_rgba(37,99,235,0.22)]">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[18px] bg-white/15">
                <SubjectBadge subject={circle.subject} />
              </div>
            </div>

            <div className="min-w-0 flex-1 pt-1">
              <h3 className="text-[20px] font-extrabold leading-[28px] tracking-[-0.01em] text-[#111827]">
                {circle.title}
              </h3>

              <p className="mt-1 text-[13px] font-semibold leading-[20px] text-[#6B7280]">
                {bnNumber(memberCount)} জন সদস্য
              </p>

              <div className="mt-3 inline-flex rounded-full bg-[#EFF6FF] px-3 py-1.5">
                <p className="text-[12px] font-bold leading-[18px] text-[#2563EB]">
                  {classLabel} • {groupLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Why suggested */}
          <div className="mt-5 rounded-[18px] border border-[#BFDBFE] bg-[#EFF6FF] p-4">
            <p className="text-[14px] font-bold leading-[22px] text-[#1D4ED8]">
              কেন সাজেস্টেড?
            </p>
            <p className="mt-1 text-[14px] leading-[22px] text-[#374151]">
              আপনার ক্লাস, গ্রুপ এবং enrolled subject অনুযায়ী এই সার্কেলটি সবচেয়ে relevant.
            </p>
          </div>

          {/* Today goal */}
          <div className="mt-4 rounded-[18px] border border-[#E5E7EB] bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#EFF6FF]">
                <Book1 size="20" variant="Bold" color="#2563EB" />
              </div>

              <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#6B7280]">
                  আজকের লক্ষ্য
                </p>
                <p className="mt-1 text-[15px] font-bold leading-[23px] text-[#111827]">
                  {circle.todayGoal}
                </p>
                <p className="mt-1 text-[13px] leading-5 text-[#6B7280]">
                  সার্কেলে যোগ দিয়ে আজকের MCQ goal শুরু করুন।
                </p>
              </div>
            </div>
          </div>

          {/* Status area */}
          {!isJoined ? (
            <div className="mt-4 grid grid-cols-3 gap-2">
              <MiniStat
                icon={<Profile2User size="19" variant="Bold" color="#2563EB" />}
                label="এখন পড়ছে"
                value={`${bnNumber(activeNow)} জন`}
              />
              <MiniStat
                icon={<Timer1 size="19" variant="Bold" color="#2563EB" />}
                label="লক্ষ্য"
                value="আজকের"
              />
              <MiniStat
                icon={<Chart size="19" variant="Bold" color="#2563EB" />}
                label="প্রগ্রেস"
                value="ট্র্যাকিং"
              />
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-[20px] border border-[#BFDBFE] bg-[#EFF6FF] p-3">
              <JoinedStat label="স্ট্রিক" value={`${bnNumber(progress.streak ?? 7)} দিন`} />
              <JoinedStat label="MCQ" value={bnNumber(progress.solvedMcqs ?? 120)} />
              <JoinedStat label="সঠিকতা" value={`${bnNumber(progress.correctRate ?? 85)}%`} />
            </div>
          )}

          {/* Social proof */}
          <div className="mt-5 rounded-[18px] bg-[#F9FAFB] p-4">
            <div className="flex items-center justify-between gap-3">
              <AvatarPresence />

              <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[13px] font-extrabold text-[#111827] shadow-[0_4px_12px_rgba(17,24,39,0.06)]">
                +{bnNumber(previewCount)}
              </span>
            </div>

            <p className="mt-3 text-[13px] font-medium leading-5 text-[#6B7280]">
              আপনার মতো শিক্ষার্থীরা একসাথে আজকের লক্ষ্য শেষ করছে।
            </p>
          </div>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#2563EB] px-4 text-[15px] font-extrabold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition active:scale-[0.98]"
          >
            <span>{isJoined ? "সার্কেলে যান" : "Join Circle"}</span>
            <ArrowRight2 size="18" variant="Bold" color="#FFFFFF" />
          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-center text-[12px] font-medium leading-[18px] text-[#6B7280]">
            <ShieldTick size="16" variant="Linear" color="#6B7280" />
            <span>নিরাপদ ও সহায়ক পরিবেশে একসাথে পড়াশোনা</span>
          </div>
        </div>
      </Card>

      {toastVisible ? (
        <div className="fixed left-1/2 top-5 z-[60] w-[calc(100%-32px)] max-w-[430px] -translate-x-1/2 rounded-[16px] bg-[#111827] px-4 py-3 text-white shadow-[0_12px_32px_rgba(17,24,39,0.18)]">
          <div className="flex items-center gap-3">
            <TickCircle size="20" variant="Bold" color="#22C55E" />
            <p className="text-[13px] font-medium leading-5">
              আপনি {circle.title}-এ যোগ দিয়েছেন
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function EmptyCircleCard() {
  return (
    <Card className="rounded-[24px] border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
      <h2 className="text-[18px] font-bold leading-[26px] text-[#111827]">
        আপনার জন্য সার্কেল প্রস্তুত হচ্ছে
      </h2>

      <p className="mt-2 text-[14px] leading-[22px] text-[#6B7280]">
        আপনার ক্লাসের জন্য নতুন StudyCircle তৈরি হলে জানানো হবে।
      </p>

      <button
        disabled
        className="mt-5 h-12 w-full rounded-[14px] bg-[#F3F4F6] text-[14px] font-bold text-[#9CA3AF]"
      >
        শীঘ্রই আসছে
      </button>
    </Card>
  );
}

function MiniStat({ icon, label, value }) {
  return (
    <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-3 text-center shadow-[0_4px_12px_rgba(17,24,39,0.03)]">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#EFF6FF]">
        {icon}
      </div>

      <p className="mt-2 text-[11px] font-medium leading-[16px] text-[#6B7280]">
        {label}
      </p>

      <p className="mt-1 text-[12px] font-extrabold leading-[18px] text-[#111827]">
        {value}
      </p>
    </div>
  );
}

function JoinedStat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-[11px] font-medium leading-[16px] text-[#6B7280]">
        {label}
      </p>

      <p className="mt-1 text-[15px] font-extrabold leading-5 text-[#111827]">
        {value}
      </p>
    </div>
  );
}

function AvatarPresence() {
  return (
    <div className="flex items-center">
      {activeLearners.slice(0, 5).map((learner, index) => (
        <div
          key={learner.name}
          className={`relative ${index === 0 ? "" : "-ml-2"}`}
        >
          <img
            src={learner.avatar}
            alt={learner.name}
            className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-[0_4px_10px_rgba(17,24,39,0.08)]"
          />

          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-[#16A34A]" />
        </div>
      ))}
    </div>
  );
}