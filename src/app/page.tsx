import { Introduction } from "@/components/comn/main/Introduction";
import { JSLists } from "@/components/comn/main/JSLists";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col gap-5">
      <Introduction />
      <JSLists />
    </div>
  );
}
