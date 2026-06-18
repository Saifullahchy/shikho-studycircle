"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft2,
  BookSaved,
  Home2,
  Notification,
  Profile,
  Profile2User,
  VideoPlay
} from "iconsax-react";
import Image from "next/image";

export function MobileShell({ children, showTopBar = true }) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-white">
      {showTopBar ? <TopBar /> : null}

      <div className="flex min-h-screen flex-col pb-[100px] px-4">
        {children}
      </div>

      <BottomNav />
    </main>
  );
}

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-white px-3 pb-3 pt-4">
      <div className="flex items-center justify-between">
        <Image
          src="/avatars/shikho-logo.svg"
          alt="Shikho"
          width={124}
          height={32}
          className="h-auto w-[124px]"
          priority
        />

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white"
          aria-label="Notifications"
        >
          <Notification size="26" variant="Linear" color="#111827" />
          <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF3B30] px-1 text-[11px] font-bold leading-none text-white">
            3
          </span>
        </button>
      </div>
    </header>
  );
}

export function Header({ title, subtitle, rightSlot }) {
  return (
    <header className="bg-white px-5 pb-5 ">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-[28px] font-extrabold leading-[36px] tracking-[-0.02em] text-[#111827]">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-1 text-[15px] font-medium leading-[24px] text-[#6B7280]">
              {subtitle}
            </p>
          ) : null}
        </div>

        {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
      </div>
    </header>
  );
}

export function PageHeader({ title, subtitle, backHref = "/", rightSlot }) {
  return (
    <header className="rounded-b-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-5 pb-8 pt-5 text-white shadow-[0_12px_28px_rgba(37,99,235,0.20)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          {backHref ? (
            <Link
              href={backHref}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur"
              aria-label="Back"
            >
              <ArrowLeft2 size="22" variant="Linear" color="#FFFFFF" />
            </Link>
          ) : null}

          <div className="min-w-0 pt-1">
            <h1 className="text-[20px] font-medium leading-[28px] text-white">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-1 text-[13px] font-medium leading-[20px] text-white/80">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
      </div>
    </header>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  const isStudyCircleRoute =
    pathname === "/" ||
    pathname.startsWith("/circle") ||
    pathname.startsWith("/practice");

  const items = [
    { href: "#", label: "হোম", icon: Home2, active: false },
    { href: "#", label: "কোর্স", icon: BookSaved, active: false },
    { href: "#", label: "লাইভ ক্লাস", icon: VideoPlay, active: false },
    { href: "/", label: "StudyCircle", icon: Profile2User, active: isStudyCircleRoute },
    { href: "/progress", label: "প্রোফাইল", icon: Profile, active: pathname === "/progress" }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 border-t border-[#E5E7EB] bg-white px-3 pb-3 pt-2 shadow-[0_-8px_24px_rgba(17,24,39,0.06)]">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.active;

          return (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={`flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-[14px] px-1 py-1 text-[11px] transition ${
                isActive
                  ? "font-bold text-[#2563EB]"
                  : "font-medium text-[#6B7280]"
              }`}
            >
              <Icon
                size="22"
                variant={isActive ? "Bold" : "Linear"}
                color={isActive ? "#2563EB" : "#6B7280"}
              />

              <span className="text-[11px] leading-[14px]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ title, action, onAction }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-[18px] font-bold leading-[26px] text-[#111827]">
        {title}
      </h2>

      {action ? (
        <button
          type="button"
          onClick={onAction}
          className="shrink-0 text-[14px] font-bold leading-5 text-[#2563EB]"
        >
          {action}
        </button>
      ) : null}
    </div>
  );
}