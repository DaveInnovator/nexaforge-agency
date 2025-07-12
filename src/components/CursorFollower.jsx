
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] bg-blue-500 opacity-100 blur-sm"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    />
  );
}
