"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { twMerge } from "tailwind-merge";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollContext = createContext<string | null>(null);

type HorizontalScroll = {
  children: ReactNode[];
  name: string;
};

function HorizontalScroll({ children, name }: HorizontalScroll) {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray("." + name);
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current?.offsetWidth!,
        },
      });
    }, container);
    return () => ctx.revert();
  });

  const size = useMemo(() => {
    return children.length;
  }, [children]);

  return (
    <div ref={container}>
      <div
        style={{ width: `${size}00vw` }}
        ref={slider}
        className="flex flex-wrap h-[100vh]"
      >
        <HorizontalScrollContext.Provider value={name}>
          {children}
        </HorizontalScrollContext.Provider>
      </div>
    </div>
  );
}

type HorizontalScrollPanel = {
  children: ReactNode;
  className: string;
};
const HorizontalScrollPanel = ({
  children,
  className,
}: HorizontalScrollPanel) => {
  const name = useContext(HorizontalScrollContext);
  return (
    <div className={twMerge(`${name} h-[100vh] w-[100vw]`, className)}>
      {children}
    </div>
  );
};

export { HorizontalScroll, HorizontalScrollPanel };
