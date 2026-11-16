"use client";

import { useEffect, useRef } from "react";

type LiquidChromeProps = {
  className?: string;
};

type Pointer = {
  x: number;
  y: number;
};

function resizeCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const bounds = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
  canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  return bounds;
}

function paintChrome(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  pointer: Pointer,
) {
  const phase = time * 0.00034;
  const driftX = Math.sin(phase) * width * 0.06;
  const driftY = Math.cos(phase * 0.8) * height * 0.045;
  const centerX = width * 0.56 + pointer.x * width * 0.06 + driftX;
  const centerY = height * 0.48 + pointer.y * height * 0.05 + driftY;
  const radius = Math.min(width, height) * 0.37;

  context.clearRect(0, 0, width, height);

  const atmosphere = context.createRadialGradient(
    centerX,
    centerY,
    radius * 0.08,
    centerX,
    centerY,
    radius * 1.35,
  );
  atmosphere.addColorStop(0, "rgba(240, 245, 240, 0.98)");
  atmosphere.addColorStop(0.15, "rgba(135, 151, 143, 0.95)");
  atmosphere.addColorStop(0.34, "rgba(54, 69, 64, 0.92)");
  atmosphere.addColorStop(0.62, "rgba(18, 28, 27, 0.86)");
  atmosphere.addColorStop(1, "rgba(1, 4, 4, 0)");
  context.fillStyle = atmosphere;
  context.fillRect(0, 0, width, height);

  context.save();
  context.translate(centerX, centerY);
  context.rotate(-0.16 + Math.sin(phase * 1.2) * 0.04);
  context.globalCompositeOperation = "screen";

  for (let index = 0; index < 7; index += 1) {
    const offset = (index - 3) * radius * 0.14;
    const band = context.createLinearGradient(-radius, offset, radius, offset + radius * 0.42);
    const opacity = 0.2 - Math.abs(index - 3) * 0.018;
    band.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.12})`);
    band.addColorStop(0.45, `rgba(224, 232, 226, ${opacity})`);
    band.addColorStop(0.53, `rgba(13, 28, 25, ${opacity * 0.76})`);
    band.addColorStop(1, "rgba(255, 255, 255, 0)");
    context.fillStyle = band;
    context.beginPath();
    context.ellipse(0, offset, radius * 0.78, radius * 0.13, 0, 0, Math.PI * 2);
    context.fill();
  }

  context.restore();

  const edge = context.createRadialGradient(
    centerX - radius * 0.2,
    centerY - radius * 0.26,
    radius * 0.08,
    centerX,
    centerY,
    radius,
  );
  edge.addColorStop(0, "rgba(255, 255, 255, 0.16)");
  edge.addColorStop(0.36, "rgba(255, 255, 255, 0.01)");
  edge.addColorStop(0.78, "rgba(0, 0, 0, 0.24)");
  edge.addColorStop(1, "rgba(0, 0, 0, 0.88)");
  context.fillStyle = edge;
  context.beginPath();
  context.ellipse(centerX, centerY, radius, radius * 0.96, 0, 0, Math.PI * 2);
  context.fill();
}

export default function LiquidChrome({ className = "" }: LiquidChromeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return undefined;

    let frameId = 0;
    let isVisible = true;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;
    let bounds = resizeCanvas(canvas, context);
    const pointer = { x: 0, y: 0 };

    const render = (time: number) => {
      if (isVisible) {
        paintChrome(context, bounds.width, bounds.height, isReducedMotion ? 0 : time, pointer);
      }
      frameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      bounds = resizeCanvas(canvas, context);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      isReducedMotion = event.matches;
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = Boolean(entry?.isIntersecting);
    });

    observer.observe(canvas);
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    motionQuery.addEventListener("change", handleMotionPreference);
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className={`liquid-chrome ${className}`} aria-hidden="true" />;
}
