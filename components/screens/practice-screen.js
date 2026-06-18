"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight2,
  Book1,
  CloseCircle,
  Refresh,
  ShieldTick,
  TickCircle,
} from "iconsax-react";
import { mcq as fallbackMcq, mcqBank } from "@/components/mock-data";
import { useStudyCircle } from "@/components/study-circle-provider";
import { Card, MobileShell, PageHeader } from "@/components/ui";

function bnNumber(value) {
  return String(value ?? 0).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

export function PracticeScreen({ circleId }) {
  const { circles, resetMcq, showExplanation, submitAnswer } = useStudyCircle();

  const circle = circles?.find((entry) => entry.id === circleId);

  const questions = useMemo(() => {
    return mcqBank?.[circleId]?.length ? mcqBank[circleId] : [fallbackMcq];
  }, [circleId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [explanationViewed, setExplanationViewed] = useState(false);

  const currentMcq = questions[currentIndex] ?? fallbackMcq;
  const totalQuestions = questions.length;
  const questionNumber = currentIndex + 1;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isCorrect = selectedAnswer === currentMcq.correctAnswer;
  const progressPercent = Math.round((questionNumber / totalQuestions) * 100);

  useEffect(() => {
    resetLocalAttempt();
    resetMcq();
  }, [circleId]);

  function resetLocalAttempt() {
    setSelectedAnswer(null);
    setAnswered(false);
    setExplanationViewed(false);
  }

  function handleAnswer(optionId) {
    if (answered) return;

    const correct = optionId === currentMcq.correctAnswer;

    setSelectedAnswer(optionId);
    setAnswered(true);
    setExplanationViewed(false);

    submitAnswer(optionId, correct);
  }

  function handleShowExplanation() {
    setExplanationViewed(true);
    showExplanation();
  }

  function handleResetQuestion() {
    resetLocalAttempt();
    resetMcq();
  }

  function handleNextQuestion() {
    if (isLastQuestion) return;

    resetLocalAttempt();
    resetMcq();
    setCurrentIndex((current) => current + 1);
  }

  return (
    <MobileShell showTopBar={false}>
      <PageHeader
        title="MCQ Practice"
        subtitle={`${circle?.titleBn ?? "StudyCircle"} • ${bnNumber(
          questionNumber
        )}/${bnNumber(totalQuestions)}`}
        backHref={`/circle/${circleId}`}
        rightSlot={
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Book1 size="22" variant="Bold" color="#FFFFFF" />
          </div>
        }
      />

      <div className="-mt-6 flex-1 space-y-3 px-4 pb-6">
        {/* Progress */}
        <Card className="rounded-[22px] border-[#D9E7FF] bg-white p-4 shadow-[0_8px_22px_rgba(37,99,235,0.08)]">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-bold leading-5 text-[#111827]">
                আজকের Practice
              </p>
              <p className="mt-0.5 text-[12px] font-medium leading-[18px] text-[#6B7280]">
                {currentMcq.examTag ?? "SSC-style MCQ"}
              </p>
            </div>

            <span className="rounded-full bg-[#EFF6FF] px-3 py-1.5 text-[12px] font-bold text-[#2563EB]">
              {bnNumber(questionNumber)}/{bnNumber(totalQuestions)}
            </span>
          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-[#DBEAFE]">
            <div
              className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </Card>

        {/* Question */}
        <Card className="rounded-[24px] bg-white p-4">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#EFF6FF] px-3 py-1.5 text-[12px] font-bold text-[#2563EB]">
              প্রশ্ন {bnNumber(questionNumber)}
            </span>

            <span className="rounded-full bg-[#F9FAFB] px-3 py-1.5 text-[12px] font-bold text-[#6B7280]">
              {currentMcq.difficulty ?? "Medium"}
            </span>

            {currentMcq.topicBn ? (
              <span className="rounded-full bg-[#F9FAFB] px-3 py-1.5 text-[12px] font-bold text-[#6B7280]">
                {currentMcq.topicBn}
              </span>
            ) : null}
          </div>

          <h1 className="text-[21px] font-extrabold leading-[32px] tracking-[-0.01em] text-[#111827]">
            {currentMcq.question}
          </h1>

          <div className="mt-5 space-y-3">
            {currentMcq.options.map((option) => (
              <OptionButton
                key={option.id}
                option={option}
                selected={selectedAnswer === option.id}
                correct={option.id === currentMcq.correctAnswer}
                answered={answered}
                onClick={() => handleAnswer(option.id)}
              />
            ))}
          </div>
        </Card>

        {answered ? (
          <ResultCard
            isCorrect={isCorrect}
            correctAnswer={currentMcq.correctAnswer}
            explanationViewed={explanationViewed}
            onShowExplanation={handleShowExplanation}
          />
        ) : null}

        {explanationViewed ? (
          <ExplanationCard
            explanation={currentMcq.explanation}
            commonMistake={currentMcq.commonMistakeBn}
            source={currentMcq.source}
          />
        ) : null}

        {answered ? (
          <PracticeActionPanel
            isLastQuestion={isLastQuestion}
            isCorrect={isCorrect}
            onReset={handleResetQuestion}
            onNext={handleNextQuestion}
          />
        ) : (
          <div className="rounded-[18px] border border-dashed border-[#D5DDE8] bg-[#F9FAFB] px-4 py-4 text-center text-[14px] font-bold text-[#6B7280]">
            উত্তর নির্বাচন করলে সাথে সাথে feedback দেখাবে
          </div>
        )}
      </div>
    </MobileShell>
  );
}

function OptionButton({ option, selected, correct, answered, onClick }) {
  let cardClass =
    "border-[#E5E7EB] bg-white text-[#374151] active:scale-[0.99]";
  let circleClass = "bg-[#F3F4F6] text-[#374151]";
  let icon = null;

  if (answered && correct) {
    cardClass = "border-[#86EFAC] bg-[#F0FDF4] text-[#166534]";
    circleClass = "bg-[#16A34A] text-white";
    icon = <TickCircle size="22" variant="Bold" color="#16A34A" />;
  } else if (answered && selected && !correct) {
    cardClass = "border-[#FCA5A5] bg-[#FEF2F2] text-[#991B1B]";
    circleClass = "bg-[#DC2626] text-white";
    icon = <CloseCircle size="22" variant="Bold" color="#DC2626" />;
  } else if (selected) {
    cardClass = "border-[#2563EB] bg-[#EFF6FF] text-[#1D4ED8]";
    circleClass = "bg-[#2563EB] text-white";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={answered}
      className={`flex w-full items-center gap-3 rounded-[18px] border p-4 text-left transition ${cardClass}`}
    >
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold ${circleClass}`}
      >
        {option.id}
      </span>

      <span className="min-w-0 flex-1 text-[15px] font-semibold leading-[24px]">
        {option.text}
      </span>

      {icon ? <span className="shrink-0 pt-1">{icon}</span> : null}
    </button>
  );
}

function ResultCard({
  isCorrect,
  correctAnswer,
  explanationViewed,
  onShowExplanation,
}) {
  return (
    <Card
      className={`rounded-[22px] p-4 ${
        isCorrect
          ? "border-[#86EFAC] bg-[#F0FDF4]"
          : "border-[#FDE68A] bg-[#FFFBEB]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] ${
            isCorrect ? "bg-[#DCFCE7]" : "bg-[#FEF3C7]"
          }`}
        >
          {isCorrect ? (
            <TickCircle size="23" variant="Bold" color="#16A34A" />
          ) : (
            <CloseCircle size="23" variant="Bold" color="#F59E0B" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`text-[15px] font-extrabold leading-[22px] ${
              isCorrect ? "text-[#166534]" : "text-[#92400E]"
            }`}
          >
            {isCorrect ? "সঠিক হয়েছে!" : "ভুল হয়েছে — শেখার সুযোগ"}
          </p>

          <p className="mt-1 text-[13px] font-semibold leading-[20px] text-[#374151]">
            সঠিক উত্তর: {correctAnswer}
          </p>

          {!isCorrect && !explanationViewed ? (
            <button
              type="button"
              onClick={onShowExplanation}
              className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-[14px] border border-[#2563EB] bg-white px-4 text-[14px] font-bold text-[#2563EB]"
            >
              <ShieldTick size="18" variant="Bold" color="#2563EB" />
              <span>কেন ভুল হলো?</span>
            </button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function ExplanationCard({ explanation, commonMistake, source }) {
  return (
    <Card className="rounded-[22px] border-[#BFDBFE] bg-[#EFF6FF] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-white">
          <ShieldTick size="23" variant="Bold" color="#2563EB" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[16px] font-extrabold leading-[24px] text-[#111827]">
            কেন ভুল হলো?
          </p>

          <p className="mt-2 text-[14px] font-medium leading-[24px] text-[#374151]">
            {explanation}
          </p>

          {commonMistake ? (
            <div className="mt-3 rounded-[14px] bg-white px-3 py-3">
              <p className="text-[12px] font-bold text-[#2563EB]">
                Common mistake
              </p>
              <p className="mt-1 text-[13px] font-medium leading-[21px] text-[#374151]">
                {commonMistake}
              </p>
            </div>
          ) : null}

          <div className="mt-3 inline-flex rounded-full bg-white px-3 py-2 text-[11px] font-bold leading-[16px] text-[#6B7280]">
            {source}
          </div>
        </div>
      </div>
    </Card>
  );
}

function PracticeActionPanel({ isLastQuestion, isCorrect, onReset, onNext }) {
  return (
    <Card className="rounded-[22px] bg-white p-4">
      <div className="mb-3">
        <p className="text-[15px] font-extrabold leading-[22px] text-[#111827]">
          {isCorrect ? "ভালো হয়েছে!" : "এই ভুলটাই শেখার জায়গা"}
        </p>
        <p className="mt-1 text-[13px] font-medium leading-5 text-[#6B7280]">
          {isLastQuestion
            ? "এই practice set শেষ। এখন আপনার progress দেখতে পারেন।"
            : "এবার পরের প্রশ্নে যান এবং practice চালিয়ে যান।"}
        </p>
      </div>

      <div className="grid grid-cols-[1fr_1.45fr] gap-3">
        <button
          type="button"
          onClick={onReset}
          className="flex h-[52px] items-center justify-center gap-2 rounded-[16px] border border-[#D5DDE8] bg-white px-4 text-[14px] font-bold text-[#374151] transition active:scale-[0.98]"
        >
          <Refresh size="18" variant="Bold" color="#374151" />
          <span>আবার চেষ্টা</span>
        </button>

        {isLastQuestion ? (
          <Link
            href="/progress"
            className="flex h-[52px] items-center justify-center gap-2 rounded-[16px] bg-[#16A34A] px-4 text-[15px] font-extrabold text-white shadow-[0_10px_22px_rgba(22,163,74,0.22)] transition active:scale-[0.98]"
          >
            <span>প্রগ্রেস দেখুন</span>
            <ArrowRight2 size="18" variant="Bold" color="#FFFFFF" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="flex h-[52px] items-center justify-center gap-2 rounded-[16px] bg-[#2563EB] px-4 text-[15px] font-extrabold text-white shadow-[0_10px_22px_rgba(37,99,235,0.22)] transition active:scale-[0.98]"
          >
            <span className="text-white">পরবর্তী প্রশ্ন</span>
            <ArrowRight2 size="18" variant="Bold" color="#FFFFFF" />
          </button>
        )}
      </div>
    </Card>
  );
}