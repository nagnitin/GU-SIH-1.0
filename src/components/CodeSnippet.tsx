import React from 'react';

interface CodeSnippetProps {
  className?: string;
  delay?: number;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ className, delay = 0 }) => {
  const codeLines = [
    "function innovation() {",
    "  const hackathon = 'Assam Tech Fest';",
    "  return buildTheFuture();",
    "}"
  ];

  return (
    <div 
      className={`bg-gray-900 rounded-lg p-4 font-mono text-sm text-yellow-400 shadow-lg animate-slideInUp ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {codeLines.map((line, index) => (
        <div key={index} className="opacity-80">
          {line}
        </div>
      ))}
    </div>
  );
};

export default CodeSnippet;