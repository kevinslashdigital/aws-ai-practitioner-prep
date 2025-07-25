import React, { useRef, useState } from "react";
export interface CertificateProps {
  userName?: string;
  date: string;
  quizTitle: string;
  score: number;
  total: number;
}

const Certificate: React.FC<CertificateProps> = ({ userName = "", date, quizTitle, score, total }) => {
  const certRef = useRef<HTMLDivElement>(null);
  const [userNameInput, setUserNameInput] = useState(userName);

  const handleDownload = () => {
    if (!certRef.current) return;
    const element = certRef.current;
    import('html2canvas').then(html2canvas => {
      html2canvas.default(element).then(canvas => {
        const link = document.createElement('a');
        link.download = `certificate-${userName.replace(/\s/g, "_")}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <div style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={userNameInput}
          onChange={e => setUserNameInput(e.target.value)}
          style={{ padding: 8, fontSize: 16, marginRight: 12, borderRadius: 4, border: "1px solid #ccc" }}
        />
      </div>
      <div
        ref={certRef}
        style={{
          display: "inline-block",
          padding: "2rem 3rem",
          border: "6px double #0070f3",
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          minWidth: 400,
        }}
      >
        
        <h2 style={{ color: "#0070f3", marginBottom: 0 }}>Certificate of Achievement</h2>
        <p style={{ fontSize: 18, margin: "8px 0 24px 0" }}>
          This is to certify that
        </p>
        <h3 style={{ margin: "0 0 16px 0", fontWeight: 700 }}>{userNameInput}</h3>
        <p style={{ fontSize: 17, margin: 0 }}>
          has successfully passed the quiz
        </p>
        <div style={{ fontWeight: 600, fontSize: 20, margin: "8px 0 16px 0" }}>{quizTitle}</div>
        <p style={{ fontSize: 16, margin: 0 }}>
          Score: <b>{score} / {total}</b>
        </p>
        <p style={{ marginTop: 24, fontSize: 14, color: "#888" }}>Date: {date}</p>
      </div>
      <br />
      
      <button
        className="button button--primary"
        style={{ marginTop: 20 }}
        onClick={handleDownload}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
