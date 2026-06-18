"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { circles, defaultMcqState, defaultState } from "@/components/mock-data";

const STORAGE_KEY = "study-circle-v1";

const StudyCircleContext = createContext(null);

function getStoredState() {
  if (typeof window === "undefined") {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultState;
    }

    return {
      ...defaultState,
      ...JSON.parse(raw),
      progress: {
        ...defaultState.progress,
        ...JSON.parse(raw).progress
      },
      studentProfile: {
        ...defaultState.studentProfile,
        ...JSON.parse(raw).studentProfile
      },
      mcqState: {
        ...defaultState.mcqState,
        ...JSON.parse(raw).mcqState
      }
    };
  } catch {
    return defaultState;
  }
}

export function StudyCircleProvider({ children }) {
  const [state, setState] = useState(defaultState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(getStoredState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, state]);

  const value = useMemo(() => {
    const filteredCircles = circles.filter((circle) => {
      const { classLevel, group, enrolledSubjects } = state.studentProfile;

      return (
        circle.classLevel === classLevel &&
        circle.group === group &&
        enrolledSubjects.includes(circle.subject)
      );
    });

    const joinedCircleDetails = circles.filter((circle) =>
      state.joinedCircles.includes(circle.id)
    );

    return {
      hydrated,
      circles,
      filteredCircles,
      joinedCircleDetails,
      state,
      setClassLevel(classLevel) {
        setState((current) => ({
          ...current,
          studentProfile: {
            ...current.studentProfile,
            classLevel
          }
        }));
      },
      joinCircle(circleId) {
        setState((current) => {
          if (current.joinedCircles.includes(circleId)) {
            return current;
          }

          return {
            ...current,
            joinedCircles: [...current.joinedCircles, circleId]
          };
        });
      },
      toggleCircle(circleId) {
        setState((current) => {
          const joined = current.joinedCircles.includes(circleId);

          return {
            ...current,
            joinedCircles: joined
              ? current.joinedCircles.filter((id) => id !== circleId)
              : [...current.joinedCircles, circleId]
          };
        });
      },
      submitAnswer(answerId, isCorrect) {
        setState((current) => {
          const solvedMcqs = current.progress.solvedMcqs + 1;
          const correctCount = Math.round(
            (current.progress.correctRate / 100) * current.progress.solvedMcqs
          );
          const updatedCorrect = isCorrect ? correctCount + 1 : correctCount;
          const correctRate = Math.round((updatedCorrect / solvedMcqs) * 100);

          return {
            ...current,
            mcqState: {
              selectedAnswer: answerId,
              answered: true,
              explanationViewed: false
            },
            progress: {
              ...current.progress,
              solvedMcqs,
              correctRate,
              completedGoals: isCorrect
                ? Array.from(
                    new Set([...current.progress.completedGoals, "physics-chapter-4"])
                  )
                : current.progress.completedGoals
            }
          };
        });
      },
      showExplanation() {
        setState((current) => ({
          ...current,
          mcqState: {
            ...current.mcqState,
            explanationViewed: true
          }
        }));
      },
      resetMcq() {
        setState((current) => ({
          ...current,
          mcqState: defaultMcqState
        }));
      }
    };
  }, [hydrated, state]);

  return (
    <StudyCircleContext.Provider value={value}>
      {children}
    </StudyCircleContext.Provider>
  );
}

export function useStudyCircle() {
  const context = useContext(StudyCircleContext);

  if (!context) {
    throw new Error("useStudyCircle must be used within StudyCircleProvider");
  }

  return context;
}
