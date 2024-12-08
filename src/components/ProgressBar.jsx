import { useState, useEffect } from "react";

// 因为状态改变很频繁，会导致组件重新渲染很频繁，所以单独封装这个进度条
export default function ProgressBar({ timer }) {
  const [remainingTime, seRemainingTime] = useState(timer);
  useEffect(() => {
    console.log("Interval SET");
    const interval = setInterval(() => {
      console.log("Interval excuting...");
      seRemainingTime((prev) => prev - 10);
    }, 10);

    // 组件卸载时清除定时器，否则它会一直运行
    return () => {
      console.log("Cleaning up interval");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>;
}
