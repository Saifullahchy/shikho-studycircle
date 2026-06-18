"use client";

import Link from "next/link";
import {
  ArrowRight2,
  Book1,
  Chart,
  Ranking,
  TickCircle,
  Timer1,
} from "iconsax-react";
import { useStudyCircle } from "@/components/study-circle-provider";
import { SubjectBadge } from "@/components/screen-parts";
import { Card, MobileShell, PageHeader } from "@/components/ui";

function bnNumber(value) {
  return String(value ?? 0).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

export function ProgressScreen() {
  const { filteredCircles, joinedCircleDetails, state } = useStudyCircle();
  const { progress, studentProfile } = state;

  const activeCircle =
    joinedCircleDetails[0] ??
    filteredCircles.find((circle) => circle.id === progress.lastActiveCircleId) ??
    filteredCircles[0];

  const hasJoinedCircle = joinedCircleDetails.length > 0;

  const weeklyGoalCompleted = progress.weeklyGoalCompleted ?? 0;
  const weeklyGoalTotal = progress.weeklyGoalTotal ?? 5;
  const weeklyPercent =
    weeklyGoalTotal > 0
      ? Math.round((weeklyGoalCompleted / weeklyGoalTotal) * 100)
      : 0;

  return (
    <MobileShell showTopBar={false}>
      <PageHeader
        title="আমার প্রগ্রেস"
        subtitle={`${studentProfile.classLevel} • ${studentProfile.group} • ${
          studentProfile.targetExam ?? "SSC 2026"
        }`}
        backHref="/"
      />

      <div className="mt-12  space-y-3 px-4 pb-6">
        {/* Hero */}
        <Card className="overflow-hidden rounded-[22px] border-0 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-4 text-white shadow-[0_10px_26px_rgba(37,99,235,0.18)]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[13px] font-bold leading-5 text-white/75">
                শেখার ধারাবাহিকতা
              </p>

              <h2 className="mt-1 text-[34px] font-extrabold leading-[40px] tracking-[-0.04em]">
                {bnNumber(progress.streak)} দিন
              </h2>

              <p className="mt-1 max-w-[240px] text-[13px] font-medium leading-[21px] text-white/85">
                প্রতিদিন ছোট progress ধরে রাখাই StudyCircle-এর মূল goal.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white/15">
              <Timer1 size="26" variant="Bold" color="#FFFFFF" />
            </div>
          </div>

          <div className="mt-4 rounded-[16px] bg-white/12 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[13px] font-bold text-white/85">
                সাপ্তাহিক goal
              </span>

              <span className="text-[13px] font-extrabold text-white">
                {bnNumber(weeklyGoalCompleted)}/{bnNumber(weeklyGoalTotal)}
              </span>
            </div>

            <div className="h-2.5 mt-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full  rounded-full bg-white transition-all duration-500"
                style={{ width: `${weeklyPercent}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Metrics */}
        <div className="grid grid-cols-2 ">
          <MetricCard
            icon={<Book1 size="21" variant="Bold" color="#2563EB" />}
            label="মোট MCQ"
            value={bnNumber(progress.solvedMcqs)}
            subtext="সমাধান হয়েছে"
            tone="blue"
          />

          <MetricCard
            icon={<TickCircle size="21" variant="Bold" color="#16A34A" />}
            label="সঠিকতা"
            value={`${bnNumber(progress.correctRate)}%`}
            subtext="গড় accuracy"
            tone="green"
          />

          <MetricCard
            icon={<Ranking size="21" variant="Bold" color="#F59E0B" />}
            label="র‍্যাঙ্ক"
            value={`#${bnNumber(progress.circleRank)}`}
            subtext="সার্কেলে অবস্থান"
            tone="amber"
          />

          <MetricCard
            icon={<Chart size="21" variant="Bold" color="#7C3AED" />}
            label="স্টাডি টাইম"
            value={bnNumber(progress.studyTime)}
            subtext="মোট সময়"
            tone="purple"
          />
        </div>

        {/* Active circle */}
        <Card className="rounded-[22px] bg-white p-4">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[17px] font-extrabold leading-[24px] text-[#111827]">
                আমার StudyCircle
              </h3>

              <p className="mt-0.5 text-[13px] font-medium leading-5 text-[#6B7280]">
                {hasJoinedCircle
                  ? "আপনার current learning path"
                  : "আপনার জন্য সাজেস্টেড circle"}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-bold ${
                hasJoinedCircle
                  ? "bg-[#ECFDF5] text-[#16A34A]"
                  : "bg-[#EFF6FF] text-[#2563EB]"
              }`}
            >
              {hasJoinedCircle ? "Active" : "Suggested"}
            </span>
          </div>

          {activeCircle ? (
            <Link
              href={`/circle/${activeCircle.id}`}
              className="block rounded-[18px]  bg-[#F9FAFB] p-3.5 transition active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <SubjectBadge subject={activeCircle.subject} />

                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-extrabold leading-[22px] text-[#111827]">
                    {activeCircle.titleBn ?? activeCircle.title}
                  </p>

                  <p className="mt-0.5 text-[12px] font-medium leading-[18px] text-[#6B7280]">
                    {bnNumber(activeCircle.members ?? 0)} জন সদস্য •{" "}
                    {bnNumber(activeCircle.activeStudents ?? 0)} জন এখন পড়ছে
                  </p>
                </div>

                <ArrowRight2 size="18" variant="Bold" color="#2563EB" />
              </div>

              <div className="mt-3 rounded-[14px] bg-white px-3 py-2.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.04em] text-[#2563EB]">
                  পরবর্তী goal
                </p>

                <p className="mt-0.5 text-[13px] font-semibold leading-[20px] text-[#374151]">
                  {activeCircle.todayGoalBn ?? activeCircle.todayGoal}
                </p>
              </div>
            </Link>
          ) : null}
        </Card>

        {/* Joined circles */}
        {joinedCircleDetails.length > 1 ? (
          <Card className="rounded-[22px] bg-white p-4">
            <h3 className="text-[17px] font-extrabold leading-[24px] text-[#111827]">
              Joined Circles
            </h3>

            <div className="mt-3 gap-2 flex flex-col space-y-2.5">
              {joinedCircleDetails.map((circle) => (
                <Link
                  key={circle.id}
                  href={`/circle/${circle.id}`}
                  className="flex items-center gap-2 justify-between rounded-[16px] border border-[#E5E7EB] bg-white px-3 py-3 transition active:scale-[0.99]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <SubjectBadge subject={circle.subject} size="sm" />

                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-bold leading-5 text-[#111827]">
                        {circle.titleBn ?? circle.title}
                      </p>

                      <p className="truncate text-[12px] font-medium leading-[18px] text-[#6B7280]">
                        {circle.todayGoalBn ?? circle.todayGoal}
                      </p>
                    </div>
                  </div>

                  <ArrowRight2 size="17" variant="Bold" color="#2563EB" />
                </Link>
              ))}
            </div>
          </Card>
        ) : null}

        {/* Encouragement */}
        <Card className="rounded-[22px] border-[#DCFCE7] bg-[#F0FDF4] p-4">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-white">
              <TickCircle size="23" variant="Bold" color="#16A34A" />
            </div>

            <div>
              <p className="text-[15px] font-extrabold leading-[22px] text-[#111827]">
                চমৎকার কাজ!
              </p>

              <p className="mt-1 text-[13px] leading-[21px] text-[#374151]">
                আপনি এখন পর্যন্ত {bnNumber(progress.solvedMcqs)}টি MCQ solve করেছেন।
                আজকের goal শেষ করলে streak আরও শক্ত হবে।
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        {activeCircle ? (
          <Link
            href={
              hasJoinedCircle
                ? `/practice/${activeCircle.id}`
                : `/circle/${activeCircle.id}`
            }
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#2563EB] px-4 text-[15px] font-extrabold text-white shadow-[0_10px_22px_rgba(37,99,235,0.22)] transition active:scale-[0.98]"
          >
            <span className="text-white">
              {hasJoinedCircle ? "Practice চালিয়ে যান" : "StudyCircle শুরু করুন"}
            </span>
            <ArrowRight2 size="18" variant="Bold" color="#FFFFFF" />
          </Link>
        ) : null}
      </div>
    </MobileShell>
  );
}

function MetricCard({ icon, label, value, subtext, tone }) {
  const toneClass = {
    blue: "bg-[#EFF6FF]",
    green: "bg-[#ECFDF5]",
    amber: "bg-[#FFFBEB]",
    purple: "bg-[#F5F3FF]",
  }[tone];

  return (
    <Card className="rounded bg-white p-3.5">
      <div className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${toneClass}`}>
        {icon}
      </div>

      <p className="mt-3 text-[12px] font-medium leading-[18px] text-[#6B7280]">
        {label}
      </p>

      <p className="mt-0.5 text-[22px] font-medium   leading-[28px] tracking-[-0.02em] text-[#111827]">
        {value}
      </p>

      <p className="mt-0.5 text-[11px] font-medium leading-[16px] text-[#9CA3AF]">
        {subtext}
      </p>
    </Card>
  );
}