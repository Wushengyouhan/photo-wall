import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, seRemainingTime] = useState(TIMER);

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

  useEffect(() => {
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
