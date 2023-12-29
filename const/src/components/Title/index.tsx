import React from "react";

interface TitleProps {
  type: "light" | "dark";
  title: string;
  subtitle: string;
}

export const Title: React.FC<TitleProps> = ({ type, title, subtitle }) => {
  const titleStyles = `
        .section-title {
            margin-bottom: 40px;
        }
        .section-title h4:after {
            content: '';
            display: inline-block;
            position: absolute;
            right: 15px;
            bottom: 8px;
            width: 100px;
            height: 4px;
            background: #b8b8b8;
        }
    `;
  return (
    <div className={`row section-title ${type}`}>
      <style>{titleStyles}</style>
      <div className="col">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};
