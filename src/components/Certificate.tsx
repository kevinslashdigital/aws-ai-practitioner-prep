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
        element.style.margin = "40px";
        const link = document.createElement('a');
        link.download = `certificate-${userName.replace(/\s/g, "_")}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, sans-serif',
      padding: '2rem 1rem',
    }}>
      {/* Google Fonts link for Montserrat */}
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet" />
      <div style={{ marginBottom: 32, width: '100%', maxWidth: 420 }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={userNameInput}
          onChange={e => setUserNameInput(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: 18,
            borderRadius: 8,
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            outline: 'none',
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: 8,
            transition: 'border 0.2s',
          }}
        />
      </div>
      <div
        ref={certRef}
        style={{
          padding: '2.5rem 2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2.5rem 2.5rem',
            border: '2.5px solid #6366f1',
            borderRadius: 24,
            background: 'rgba(255,255,255,0.98)',
            boxShadow: '0 8px 40px rgba(99,102,241,0.12)',
            minWidth: 450,
            maxWidth: 650,
            position: 'relative',
          }}
        >
          {/* Badge icon */}
          <div style={{
            position: 'absolute',
            top: -36,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #6366f1 60%, #a5b4fc 100%)',
            borderRadius: '50%',
            width: 72,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(99,102,241,0.18)',
            border: '4px solid #fff',
            zIndex: 2,
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" /><path d="M7 13l3 3 7-7" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h2 style={{
            color: '#6366f1',
            fontWeight: 700,
            fontSize: 28,
            marginTop: 48,
            marginBottom: 0,
            letterSpacing: 1,
          }}>Certificate of Achievement</h2>
          <p style={{ fontSize: 18, margin: '12px 0 28px 0', color: '#64748b', fontWeight: 500 }}>
            This is to certify that
          </p>
          <h3 style={{
            margin: '0 0 18px 0',
            fontWeight: 700,
            fontSize: 24,
            color: '#1e293b',
            letterSpacing: 0.5,
            borderBottom: '2px dashed #a5b4fc',
            paddingBottom: 4,
            minWidth: 210,
            textAlign: 'center',
          }}>{userNameInput || <span style={{ color: '#cbd5e1' }}>Your Name</span>}</h3>
          <p style={{ fontSize: 17, margin: 0, color: '#475569' }}>
            has successfully passed the quiz
          </p>
          <div style={{ fontWeight: 600, fontSize: 20, margin: '10px 0 18px 0', color: '#6366f1' }}>{quizTitle}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, margin: '16px 0 8px 0' }}>
            <span style={{
              background: '#f1f5f9',
              color: '#334155',
              borderRadius: 8,
              padding: '8px 18px',
              fontWeight: 600,
              fontSize: 16,
            }}>Score: {score} / {total}</span>
            <span style={{
              background: '#f1f5f9',
              color: '#334155',
              borderRadius: 8,
              padding: '8px 18px',
              fontWeight: 600,
              fontSize: 16,
            }}>{date}</span>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={handleDownload}
          style={{
            marginTop: 28,
            background: 'linear-gradient(90deg, #6366f1 60%, #818cf8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 32px',
            fontSize: 18,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #818cf8 60%, #6366f1 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #6366f1 60%, #818cf8 100%)')}
        >
          Download Certificate
        </button>
      </div>
    </div>
  )
};

export default Certificate;
