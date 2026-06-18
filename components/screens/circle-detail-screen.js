"use client";

import Link from "next/link";
import {
  ArrowRight2,
  Book1,
  Chart,
  Profile2User,
  ShieldTick,
  TickCircle,
  Timer1,
  Ranking,
} from "iconsax-react";
import { useStudyCircle } from "@/components/study-circle-provider";
import { LearnerRow, SubjectBadge } from "@/components/screen-parts";
import { Card, MobileShell, PageHeader } from "@/components/ui";
import {
  activityFeed,
  circleProgress,
  labelMap,
  leaderboard,
  subjectMaterials,
  weeklyPlan,
} from "@/components/mock-data";

function bnNumber(value) {
  return String(value ?? 0).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

export function CircleDetailScreen({ circleId }) {
  const { circles, state, toggleCircle } = useStudyCircle();
  const circle = circles.find((entry) => entry.id === circleId);

  if (!circle) {
    return (
      <MobileShell showTopBar={false}>
        <PageHeader title="সার্কেল পাওয়া যায়নি" subtitle="StudyCircle" backHref="/" />

        <div className="flex flex-1 items-center justify-center px-5 py-10 text-center">
          <Card className="w-full rounded-[22px] p-5">
            <p className="text-[15px] font-medium leading-[24px] text-[#6B7280]">
              এই সার্কেলটি পাওয়া যায়নি। আবার StudyCircle থেকে চেষ্টা করুন।
            </p>

            <Link
              href="/"
              className="mt-5 flex h-12 w-full items-center justify-center rounded-[14px] bg-[#2563EB] text-[14px] font-bold text-white"
            >
              StudyCircle-এ ফিরে যান
            </Link>
          </Card>
        </div>
      </MobileShell>
    );
  }

  const joined = state.joinedCircles.includes(circle.id);

  const progressData = circleProgress[circle.id] ?? {
    completionRate: circle.completionRate ?? 0,
    completed: 0,
    inProgress: 0,
    notStarted: 0,
    averageAccuracy: 0,
    topRank: 0,
    totalMcqsToday: 0,
  };

  const activities = activityFeed.filter((item) => item.circleId === circle.id);
  const leaderRows = leaderboard[circle.id] ?? [];

  const classLabel = labelMap.classLevel?.[circle.classLevel] ?? circle.classLevel;
  const groupLabel = labelMap.group?.[circle.group] ?? circle.group;
  const subjectLabel = labelMap.subject?.[circle.subject] ?? circle.subject;
  const courseMaterials = subjectMaterials[circle.subject] ?? weeklyPlan;

  const members = circle.members ?? 0;
  const activeStudents = circle.activeStudents ?? circle.activeNow ?? 0;
  const completionRate = progressData.completionRate ?? circle.completionRate ?? 0;

  return (
    <MobileShell showTopBar={false}>
      <PageHeader
        title={circle.titleBn ?? circle.title}
        subtitle={`${bnNumber(activeStudents)} জন এখন পড়ছে • ${bnNumber(members)} জন সদস্য`}
        backHref="/"
        rightSlot={
          <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-white/15">
            <SubjectBadge subject={circle.subject} />
          </div>
        }
      />

      <div className="-mt-5 flex-1 space-y-4 px-5 pb-4">
        {/* Status card */}
        <Card className="rounded-[22px] border-[#D9E7FF] bg-white p-4 shadow-[0_10px_28px_rgba(37,99,235,0.08)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#EFF6FF]">
                <Profile2User size="24" variant="Bold" color="#2563EB" />
              </div>

              <div className="min-w-0">
                <p className="text-[14px] font-extrabold leading-5 text-[#111827]">
                  {joined ? "আপনি এই সার্কেলে আছেন" : "আপনার জন্য সাজেস্টেড"}
                </p>
                <p className="mt-0.5 text-[12px] font-medium leading-[18px] text-[#6B7280]">
                  {classLabel} • {groupLabel} • {subjectLabel}
                </p>
              </div>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-bold ${
                joined
                  ? "bg-[#ECFDF5] text-[#16A34A]"
                  : "bg-[#EFF6FF] text-[#2563EB]"
              }`}
            >
              {joined ? "Joined" : "New"}
            </span>
          </div>
        </Card>

        {/* Today's goal */}
        <Card className="rounded-[24px] border-[#BFDBFE] bg-[#EFF6FF] p-5 shadow-[0_8px_24px_rgba(37,99,235,0.06)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white">
              <Book1 size="24" variant="Bold" color="#2563EB" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#2563EB]">
                আজকের লক্ষ্য
              </p>

              <h2 className="mt-1 text-[20px] font-extrabold leading-[28px] tracking-[-0.01em] text-[#111827]">
                {circle.todayGoalBn ?? circle.todayGoal}
              </h2>

              <p className="mt-2 text-[14px] leading-[22px] text-[#374151]">
                {circle.goalDescriptionBn ?? "আজকের learning goal শেষ করুন।"}
              </p>

              <div className="mt-4 flex flex-wrap ">
                <InfoChip
                  icon={<Timer1 size="15" variant="Bold" color="#2563EB" />}
                  text={circle.estimatedTime ?? "১৫ মিনিট"}
                />
                <InfoChip
                  icon={<Chart size="15" variant="Bold" color="#2563EB" />}
                  text={circle.difficulty ?? "Medium"}
                />
                <InfoChip
                  icon={<Book1 size="15" variant="Bold" color="#2563EB" />}
                  text={circle.chapterBn ?? circle.chapter ?? "আজকের অধ্যায়"}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Outcomes */}
        {circle.outcomesBn?.length ? (
          <Card className="rounded-[22px] bg-white p-5">
            <h3 className="text-[18px] font-extrabold leading-[26px] text-[#111827]">
              এই সার্কেলে কী পাবেন
            </h3>

            <div className="mt-4 space-y-3">
              {circle.outcomesBn.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <TickCircle size="20" variant="Bold" color="#16A34A" />
                  <p className="text-[14px] font-medium leading-[22px] text-[#374151]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ) : null}

        {/* Active learners */}
        <Card className="rounded-[22px] bg-white p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-extrabold leading-[26px] text-[#111827]">
                এখন পড়ছে
              </h3>
              <p className="mt-1 text-[13px] font-medium leading-5 text-[#6B7280]">
                আপনার মতো শিক্ষার্থীরা আজকের লক্ষ্য করছে
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-[#EFF6FF] px-3 py-1.5 text-[13px] font-bold text-[#2563EB]">
              {bnNumber(activeStudents)} জন
            </span>
          </div>

          <LearnerRow />
        </Card>

        {/* Circle progress */}
        <Card className="rounded-[22px] bg-white p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-extrabold leading-[26px] text-[#111827]">
                সার্কেল প্রগ্রেস
              </h3>
              <p className="mt-1 text-[13px] font-medium leading-5 text-[#6B7280]">
                আজকের লক্ষ্য কতদূর এগিয়েছে
              </p>
            </div>

            <span className="rounded-full bg-[#ECFDF5] px-3 py-1.5 text-[13px] font-bold text-[#16A34A]">
              {bnNumber(completionRate)}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-[#DBEAFE]">
            <div
              className="h-full rounded-full bg-[#2563EB]"
              style={{ width: `${completionRate}%` }}
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <ProgressBox label="সম্পন্ন" value={`${bnNumber(progressData.completed)} জন`} />
            <ProgressBox label="চেষ্টা করছে" value={`${bnNumber(progressData.inProgress)} জন`} />
            <ProgressBox label="শুরু করেনি" value={`${bnNumber(progressData.notStarted)} জন`} />
          </div>
        </Card>

        {/* Weekly plan */}
        <Card className="rounded-[22px] bg-white p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-extrabold leading-[26px] text-[#111827]">
                ক্লাস মেটেরিয়াল
              </h3>
              <p className="mt-1 text-[13px] font-medium leading-5 text-[#6B7280]">
                {courseMaterials.map((item) => item.titleBn).join(" • ")}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {courseMaterials.map((item) => (
              <WeeklyPlanRow key={item.id} item={item} />
            ))}
          </div>
        </Card>

        {/* Leaderboard */}
        {leaderRows.length ? (
          <Card className="rounded-[22px] bg-white p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[18px] font-extrabold leading-[26px] text-[#111827]">
                  আজকের লিডারবোর্ড
                </h3>
                <p className="mt-1 text-[13px] font-medium leading-5 text-[#6B7280]">
                  Goal completion ও accuracy অনুযায়ী
                </p>
              </div>

              <Ranking size="24" variant="Bold" color="#F59E0B" />
            </div>

            <div className="space-y-3">
              {leaderRows.slice(0, 4).map((learner) => (
                <LeaderboardRow key={`${learner.rank}-${learner.name}`} learner={learner} />
              ))}
            </div>
          </Card>
        ) : null}

        {/* Activity feed */}
        {activities.length ? (
          <Card className="rounded-[22px] bg-white p-5">
            <h3 className="text-[18px] font-extrabold leading-[26px] text-[#111827]">
              সাম্প্রতিক অ্যাক্টিভিটি
            </h3>

            <div className="mt-4 space-y-4">
              {activities.map((activity) => (
                <ActivityRow key={activity.id} activity={activity} />
              ))}
            </div>
          </Card>
        ) : null}

        {/* Study tip */}
        <Card className="rounded-[22px] border-[#E5E7EB] bg-[#F9FAFB] p-5">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-white">
              <ShieldTick size="22" variant="Bold" color="#2563EB" />
            </div>

            <div>
              <p className="text-[14px] font-extrabold leading-[22px] text-[#111827]">
                স্টাডি টিপস
              </p>
              <p className="mt-1 text-[14px] leading-[22px] text-[#6B7280]">
                একবারে সব শেষ করার চেষ্টা না করে আজকের goal শেষ করুন। ছোট progress-ই retention তৈরি করে।
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Sticky CTA */}
      <div className=" w-full max-w-[430px]  border-t border-[#E5E7EB] bg-white/95 px-5 py-3 backdrop-blur">
        {!joined ? (
          <button
            type="button"
            onClick={() => toggleCircle(circle.id)}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#2563EB] px-4 text-[15px] font-extrabold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] active:scale-[0.98]"
          >
            <Profile2User size="20" variant="Bold" color="#FFFFFF" />
            <span>সার্কেলে যোগ দিন</span>
          </button>
        ) : (
          <Link
            href={`/practice/${circle.id}`}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#2563EB] px-4 text-[15px] font-extrabold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] active:scale-[0.98]"
          >
            <span className="text-white">MCQ Practice শুরু করুন</span>
            <ArrowRight2 size="18" variant="Bold" color="#FFFFFF" />
          </Link>
        )}

        {joined ? (
          <button
            type="button"
            onClick={() => toggleCircle(circle.id)}
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-[14px] border border-[#E5E7EB] bg-white px-4 text-[13px] font-bold text-[#6B7280]"
          >
            <TickCircle size="18" variant="Bold" color="#16A34A" />
            <span>আপনি এই সার্কেলে আছেন</span>
          </button>
        ) : null}
      </div>
    </MobileShell>
  );
}

function InfoChip({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1.5 text-[12px] font-medium text-[#2563EB]">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function ProgressBox({ label, value }) {
  return (
    <div className="rounded-[16px] bg-[#F9FAFB] px-2 py-3 text-center">
      <p className="text-[11px] font-medium leading-[16px] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-1 text-[13px] font-extrabold leading-[18px] text-[#111827]">
        {value}
      </p>
    </div>
  );
}

function WeeklyPlanRow({ item }) {
  const isDone = item.status === "done";
  const isActive = item.status === "active";

  return (
    <div
      className={`flex items-center gap-3 rounded-[16px] border px-3 py-3 ${
        isActive
          ? "border-[#BFDBFE] bg-[#EFF6FF]"
          : isDone
            ? "border-[#DCFCE7] bg-[#F0FDF4]"
            : "border-[#E5E7EB] bg-white"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] text-[13px] font-extrabold ${
          isActive
            ? "bg-[#2563EB] text-white"
            : isDone
              ? "bg-[#16A34A] text-white"
              : "bg-[#F3F4F6] text-[#6B7280]"
        }`}
      >
        {item.day}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-extrabold leading-[20px] text-[#111827]">
          {item.titleBn}
        </p>
        <p className="mt-0.5 text-[12px] font-medium leading-[18px] text-[#6B7280]">
          {item.taskBn}
        </p>
      </div>

      {isDone ? (
        <TickCircle size="20" variant="Bold" color="#16A34A" />
      ) : isActive ? (
        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#2563EB]">
          Today
        </span>
      ) : null}
    </div>
  );
}

function LeaderboardRow({ learner }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[16px] px-3 py-3 ${
        learner.isCurrentUser ? "bg-[#EFF6FF]" : "bg-[#F9FAFB]"
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-extrabold text-[#111827]">
        #{bnNumber(learner.rank)}
      </div>

      <img
        src={learner.avatar}
        alt={learner.name}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-extrabold leading-5 text-[#111827]">
          {learner.name}
          {learner.isCurrentUser ? " (আপনি)" : ""}
        </p>
        <p className="mt-0.5 text-[12px] font-medium leading-[18px] text-[#6B7280]">
          {bnNumber(learner.solved)} MCQ • {bnNumber(learner.accuracy)}% correct
        </p>
      </div>
    </div>
  );
}

function ActivityRow({ activity }) {
  return (
    <div className="flex items-start gap-3">
      <img
        src={activity.avatar}
        alt={activity.user}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-semibold leading-[22px] text-[#111827]">
          {activity.user}
        </p>
        <p className="text-[13px] leading-5 text-[#6B7280]">
          {activity.textBn}
        </p>
      </div>

      <span className="shrink-0 text-[11px] font-medium text-[#9CA3AF]">
        {activity.time}
      </span>
    </div>
  );
}
