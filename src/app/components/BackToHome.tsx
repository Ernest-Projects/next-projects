'use client'

import {useRouter} from "next/navigation";

interface BackToHomeProps {
    path: string;
}

export default function BackToHome({path}: BackToHomeProps) {
  const router = useRouter();

  return (
    <>
      <button className="mt-5 text-neutral-600 transition-colors hover:text-white" onClick={() => router.push(path)}>
        {" "}
        ← Back to home{" "}
      </button>
    </>
  );
}
