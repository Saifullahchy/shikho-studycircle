"use client";

import { useStudyCircle } from "@/components/study-circle-provider";
import { JoinStudyCircleCard } from "@/components/study-circle/join-study-circle-card";
import { Card, MobileShell, SectionTitle } from "@/components/ui";
import { CircleCard } from "../study-circle/circle-card";

function bnNumber(value) {
  return String(value ?? 0).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

export function HomeScreen() {
  const { filteredCircles, joinCircle, state, toggleCircle } = useStudyCircle();

  const { studentProfile, joinedCircles, progress } = state;
  const hasJoinedCircle = joinedCircles.length > 0;

  const activeCircle =
    filteredCircles.find((circle) => joinedCircles.includes(circle.id)) ??
    filteredCircles[0];

  const isActiveCircleJoined =
    Boolean(activeCircle && joinedCircles.includes(activeCircle.id));

  const otherSuggestedCircles = filteredCircles.filter(
    (circle) => circle.id !== activeCircle?.id
  );

  return (
    <MobileShell>
      <div className="flex-1 bg-white  pb-6">
        {/* Page title */}
        <section className="pt-2">
          <h1 className="text-[28px] font-extrabold leading-[36px] tracking-[-0.02em] text-[#111827]">
            StudyCircle
          </h1>

          <p className="mt-2 text-[15px] font-medium leading-[24px] text-[#6B7280]">
            একসাথেই পড়ি, এগিয়ে যাই
          </p>
        </section>

        {/* Student profile */}
        <StudentProfileCard
          studentProfile={studentProfile}
          hasJoinedCircle={hasJoinedCircle}
          progress={progress}
        />

        {/* One primary card only */}
        <section className="mt-8">
          <SectionTitle
            title={hasJoinedCircle ? "আপনার StudyCircle" : "আপনার জন্য সাজেস্টেড"}
          />

          <JoinStudyCircleCard
            circle={activeCircle}
            studentProfile={studentProfile}
            progress={progress}
            isJoined={isActiveCircleJoined}
            onJoin={joinCircle}
          />
        </section>

        {/* Secondary suggestions only */}
        {otherSuggestedCircles.length > 0 ? (
          <section className="mt-8">
            <SectionTitle title="আরও প্রাসঙ্গিক সার্কেল" action="সব দেখুন" />

            <div className="mt-4 space-y-3">
              {otherSuggestedCircles.slice(0, 3).map((circle) => (
                <CircleCard
                  key={circle.id}
                  circle={circle}
                  joined={joinedCircles.includes(circle.id)}
                  onToggle={toggleCircle}
                  variant="study-circle-home"
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </MobileShell>
  );
}

function StudentProfileCard({ studentProfile, hasJoinedCircle, progress }) {
  return (
    <Card className="mt-7 rounded-[20px] border-[#D9E7FF] bg-white  py-5 shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
      <div className="flex items-center gap-4">
        <img
          src="/avatars/ahmed.svg"
          alt={studentProfile.name}
          className="h-[92px] w-[92px] shrink-0 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] object-cover"
        />

        <div className="min-w-0 flex-1">
          <h2 className="text-[20px] font-bold leading-[28px] text-[#111827]">
            {studentProfile.name}
          </h2>

          <p className="mt-1 text-[13px] font-semibold leading-[20px] text-[#6B7280]">
            {studentProfile.classLevel} • {studentProfile.group} •{" "}
            {studentProfile.version}
          </p>

          {hasJoinedCircle ? (
            <div className="mt-4 grid grid-cols-3 gap-2">
              <ProfileMiniStat
                label="স্ট্রিক"
                value={`${bnNumber(progress.streak)} দিন`}
              />
              <ProfileMiniStat
                label="MCQ"
                value={bnNumber(progress.solvedMcqs)}
              />
              <ProfileMiniStat
                label="সঠিকতা"
                value={`${bnNumber(progress.correctRate)}%`}
              />
            </div>
          ) : (
            <div className="mt-4 flex min-h-11 items-center gap-3 rounded-[14px] border border-[#D5DDE8] bg-white px-4 py-3 text-[14px] font-semibold leading-[20px] text-[#374151]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#94A3B8] text-xs">
                ○
              </span>
              <span>এখনও কোনো সার্কেলে যোগ দেইনি</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProfileMiniStat({ label, value }) {
  return (
    <div className="rounded-[12px] bg-[#EFF6FF] px-2 py-2 text-center">
      <p className="text-[11px] font-medium leading-[16px] text-[#6B7280]">
        {label}
      </p>

      <p className="mt-0.5 text-[13px] font-bold leading-[18px] text-[#2563EB]">
        {value}
      </p>
    </div>
  );
}