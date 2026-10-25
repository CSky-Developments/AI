"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function InteractiveMotionController() {
  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;

    // 1. Passive Cursor Spotlight on .card-premium and .card-spotlight
    const handlePointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        ".card-premium, .card-spotlight"
      ) as HTMLElement | null;

      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // 2. GSAP Magnetic Physics on [data-magnetic] elements
    const activeMagneticElements = new Set<HTMLElement>();

    const bindMagneticElement = (el: HTMLElement) => {
      if (!supportsHover || activeMagneticElements.has(el)) return;
      activeMagneticElements.add(el);

      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.32;
        const deltaY = (e.clientY - centerY) * 0.32;

        gsap.to(el, {
          x: deltaX,
          y: deltaY,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const onMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: "elastic.out(1.1, 0.4)",
          overwrite: "auto",
        });
      };

      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);

      (el as unknown as { _unbindMagnetic?: () => void })._unbindMagnetic = () => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
        gsap.killTweensOf(el);
      };
    };

    const initMagnetic = () => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach(bindMagneticElement);
    };

    initMagnetic();

    // 3. GSAP Floating Physics for .constellation-tile elements
    const constellationTweens: gsap.core.Tween[] = [];

    const initConstellation = () => {
      const tiles = document.querySelectorAll<HTMLElement>(".constellation-tile");
      tiles.forEach((tile, index) => {
        const deltaY = index % 2 === 0 ? -7 : 7;
        const deltaRot = index % 3 === 0 ? 1.8 : -1.8;
        const duration = 2.4 + (index % 4) * 0.35;
        const delay = (index * 0.18) % 1.2;

        const tween = gsap.to(tile, {
          y: deltaY,
          rotation: deltaRot,
          duration,
          delay,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        constellationTweens.push(tween);
      });
    };

    initConstellation();

    // 4. MutationObserver to handle dynamic page changes / tab switches
    const observer = new MutationObserver(() => {
      initMagnetic();
      initConstellation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      observer.disconnect();

      activeMagneticElements.forEach((el) => {
        const customEl = el as unknown as { _unbindMagnetic?: () => void };
        if (customEl._unbindMagnetic) {
          customEl._unbindMagnetic();
        }
      });
      activeMagneticElements.clear();

      constellationTweens.forEach((tw) => tw.kill());
    };
  }, []);

  return null;
}
