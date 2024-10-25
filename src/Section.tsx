
// 각 섹션 컴포넌트
const Section: React.FC<{ title: string; onComplete: () => void }> = ({
  title,
  onComplete,
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <button
        onClick={onComplete}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Complete Section
      </button>
    </div>
  );
};

export default Section;