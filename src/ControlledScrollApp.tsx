import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";

// 메인 앱 컴포넌트
export default function ControlledScrollApp() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { title: "Section 1" },
    { title: "Section 2" },
    { title: "Section 3" },
    { title: "Section 4" },
  ];

  useEffect(() => {
    // 스크롤 발생시 막는 이벤트 핸들러
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, sections.length]);

  // 이게 핵심. 섹션 변경시 스크롤 이동, 강제로 하단 100vh씩 이동
  useEffect(() => {
    if (sectionsRef.current) {
      sectionsRef.current.style.transform = `translateY(-${currentSection * 100}vh)`;
    }
  }, [currentSection]);

  const handleComplete = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div ref={sectionsRef} className="transition-transform duration-500 ease-in-out">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} onComplete={handleComplete} />
        ))}
      </div>
    </div>
  );
}
