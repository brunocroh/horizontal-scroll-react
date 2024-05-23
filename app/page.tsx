"use client";

import {
  HorizontalScroll,
  HorizontalScrollPanel,
} from "./components/HorizontalScroll";

const Green = () => (
  <div className="h-[100vh] w-[100vw] bg-green-500">green</div>
);

export default function Home() {
  return (
    <main className="size-full overflow-x-hidden">
      <HorizontalScroll name="panel">
        <HorizontalScrollPanel className="bg-red-500">
          red
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-blue-500">
          blue
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-pink-500">
          blue
        </HorizontalScrollPanel>
      </HorizontalScroll>
      <Green />
      <HorizontalScroll name="teste">
        <HorizontalScrollPanel className="bg-red-500">
          red
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-blue-500">
          blue
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-yellow-500">
          yellow
        </HorizontalScrollPanel>
        <HorizontalScrollPanel className="bg-pink-500">
          yellow
        </HorizontalScrollPanel>
      </HorizontalScroll>
    </main>
  );
}
