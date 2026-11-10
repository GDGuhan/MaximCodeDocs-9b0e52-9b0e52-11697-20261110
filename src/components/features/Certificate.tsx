import { forwardRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CertificateData } from '@/types';
import maximLogo from '@/assets/maxim-logo.png';
import msmeSeal from '@/assets/msme-seal.png';

interface Props {
  data: CertificateData;
}

const Certificate = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  return (
    <div
      ref={ref}
      id="certificate-doc"
      style={{
        width: '1122px',
        minHeight: '794px',
        background: '#fff',
        position: 'relative',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Outer border frame */}
      <div style={{
        position: 'absolute', inset: '10px',
        border: '3px solid #1a3a6e',
        borderRadius: '4px',
        pointerEvents: 'none', zIndex: 1
      }} />
      <div style={{
        position: 'absolute', inset: '16px',
        border: '1.5px solid #c9a227',
        borderRadius: '2px',
        pointerEvents: 'none', zIndex: 1
      }} />

      {/* Corner ornaments */}
      {[
        { top: '14px', left: '14px' },
        { top: '14px', right: '14px' },
        { bottom: '14px', left: '14px' },
        { bottom: '14px', right: '14px' },
      ].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute', ...pos,
          width: '36px', height: '36px',
          background: 'linear-gradient(135deg, #c9a227 50%, transparent 50%)',
          opacity: 0.7,
          zIndex: 2,
          transform: i === 1 ? 'rotate(90deg)' : i === 2 ? 'rotate(270deg)' : i === 3 ? 'rotate(180deg)' : 'rotate(0)',
        }} />
      ))}

      {/* Blue top banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3a6e 0%, #1e4080 60%, #0f1f47 100%)',
        padding: '20px 40px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative', zIndex: 3,
      }}>
        {/* Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={maximLogo}
            alt="Maxim Code"
            style={{ height: '52px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div>
            <div style={{ color: '#fff', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '20px', letterSpacing: '2px' }}>MAXIM CODE</div>
            <div style={{ color: '#c9a227', fontSize: '10px', letterSpacing: '3px', fontWeight: 500, textTransform: 'uppercase', marginTop: '2px' }}>Building Future Innovators</div>
          </div>
        </div>

        {/* QR Code */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            background: '#fff', padding: '6px', borderRadius: '6px',
            border: '2px solid #c9a227', display: 'inline-block'
          }}>
            <QRCodeSVG value={data.qrUrl} size={68} level="M" />
          </div>
          <div style={{ color: '#c9a227', fontSize: '9px', marginTop: '4px', letterSpacing: '1px' }}>SCAN TO VERIFY</div>
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #1a3a6e, #c9a227 30%, #f0d060 50%, #c9a227 70%, #1a3a6e)', marginBottom: '0' }} />

      {/* Main content */}
      <div style={{ padding: '24px 60px 0', textAlign: 'center', position: 'relative', zIndex: 3 }}>
        {/* Certificate title */}
        <div style={{
          fontSize: '28px', fontFamily: '"Playfair Display", serif', fontWeight: 700,
          color: '#1a3a6e', letterSpacing: '6px', textTransform: 'uppercase',
          textShadow: '0 1px 3px rgba(26,58,110,0.1)',
        }}>
          Certificate of Completion
        </div>

        {/* Decorative line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '8px 0' }}>
          <div style={{ height: '1px', width: '120px', background: 'linear-gradient(90deg, transparent, #c9a227)' }} />
          <div style={{ width: '8px', height: '8px', background: '#c9a227', transform: 'rotate(45deg)' }} />
          <div style={{ width: '5px', height: '5px', background: '#1a3a6e', transform: 'rotate(45deg)' }} />
          <div style={{ width: '8px', height: '8px', background: '#c9a227', transform: 'rotate(45deg)' }} />
          <div style={{ height: '1px', width: '120px', background: 'linear-gradient(90deg, #c9a227, transparent)' }} />
        </div>

        <div style={{ fontSize: '12px', color: '#5a6a8a', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
          This Certificate is Proudly Presented To
        </div>

        {/* Candidate Name */}
        <div style={{
          fontSize: '42px', fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 700,
          color: '#1a3a6e', letterSpacing: '1px', lineHeight: 1.1, marginBottom: '8px',
          textShadow: '0 2px 4px rgba(26,58,110,0.12)',
        }}>
          {data.name || 'Candidate Name'}
        </div>

        {/* Gold underline under name */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <div style={{ height: '2px', width: '300px', background: 'linear-gradient(90deg, transparent, #c9a227 20%, #f0d060 50%, #c9a227 80%, transparent)' }} />
        </div>

        {/* Description */}
        <div style={{ fontSize: '13px', color: '#2d3a55', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 10px' }}>
          For successfully completing the{' '}
          <span style={{ fontWeight: 700, color: '#1a3a6e' }}>{data.internship || 'Internship Program'}</span>
          {' '}in the domain of{' '}
          <span style={{ fontWeight: 700, color: '#c9a227' }}>{data.domain || 'Technology'}</span>
          {' '}at{' '}
          <span style={{ fontWeight: 700, color: '#1a3a6e' }}>Maxim Code</span>
          , demonstrating exceptional dedication, hard work, and professional growth during the internship period from{' '}
          <span style={{ fontWeight: 700 }}>{data.startDate ? new Date(data.startDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Start Date'}</span>
          {' '}to{' '}
          <span style={{ fontWeight: 700 }}>{data.endDate ? new Date(data.endDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }) : 'End Date'}</span>.
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#8a92a8', textTransform: 'uppercase', marginBottom: '6px' }}>
            Skills Acquired
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '6px' }}>
            {data.skills.map((skill, i) => (
              <span key={i} style={{
                background: 'linear-gradient(135deg, #1a3a6e, #1e4080)',
                color: '#fff', fontSize: '10px', padding: '3px 10px',
                borderRadius: '20px', fontWeight: 500,
                border: '1px solid rgba(201,162,39,0.4)',
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div style={{
        position: 'absolute', bottom: '26px', left: '40px', right: '40px',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        zIndex: 3,
      }}>
        {/* MSME section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
          <img
            src={msmeSeal}
            alt="MSME"
            style={{ width: '52px', height: '52px', objectFit: 'contain', opacity: 0.85 }}
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = 'none';
            }}
          />
          <div>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#1a3a6e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Ministry of Micro, Small &amp; Medium Enterprises
            </div>
            <div style={{ fontSize: '7.5px', color: '#5a6a8a', marginTop: '2px' }}>Government of India — Aligned with MSME Guidelines</div>
          </div>
        </div>

        {/* Signatures */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-end', flex: 1, justifyContent: 'center' }}>
          {/* CEO Signature */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: '"Dancing Script", cursive', fontSize: '28px', fontWeight: 700,
              color: '#1a3a6e', lineHeight: 1, marginBottom: '2px',
              letterSpacing: '1px',
            }}>
              B. Guhan
            </div>
            <div style={{ height: '1px', background: '#1a3a6e', marginBottom: '4px' }} />
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a3a6e', letterSpacing: '0.5px' }}>B. GUHAN</div>
            <div style={{ fontSize: '9px', color: '#5a6a8a' }}>CEO &amp; Founder, Maxim Code</div>
          </div>

          {/* Program Director */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: '"Dancing Script", cursive', fontSize: '28px', fontWeight: 700,
              color: '#1a3a6e', lineHeight: 1, marginBottom: '2px',
              letterSpacing: '1px',
            }}>
              Program Director
            </div>
            <div style={{ height: '1px', background: '#1a3a6e', marginBottom: '4px' }} />
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a3a6e', letterSpacing: '0.5px' }}>PROGRAM DIRECTOR</div>
            <div style={{ fontSize: '9px', color: '#5a6a8a' }}>Maxim Code</div>
          </div>
        </div>

        {/* Cert ID + Date */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          <div style={{ display: 'inline-block', background: '#f8f9fc', border: '1px solid #c9a227', borderRadius: '6px', padding: '8px 12px' }}>
            <div style={{ fontSize: '8px', color: '#8a92a8', letterSpacing: '2px', textTransform: 'uppercase' }}>Certificate ID</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a3a6e', letterSpacing: '1px', marginTop: '2px' }}>{data.certificateId}</div>
            <div style={{ fontSize: '8px', color: '#8a92a8', marginTop: '4px' }}>Date of Issue</div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#2d3a55', marginTop: '2px' }}>{data.issueDate}</div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 2, opacity: 0.035,
      }}>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontSize: '120px', fontWeight: 700, color: '#1a3a6e',
          transform: 'rotate(-30deg)', letterSpacing: '10px', whiteSpace: 'nowrap',
        }}>
          MAXIM CODE
        </div>
      </div>

      {/* Bottom gold bar */}
      <div style={{
        position: 'absolute', bottom: '10px', left: '10px', right: '10px', height: '5px',
        background: 'linear-gradient(90deg, #1a3a6e, #c9a227 30%, #f0d060 50%, #c9a227 70%, #1a3a6e)',
        zIndex: 3,
      }} />
    </div>
  );
});

Certificate.displayName = 'Certificate';
export default Certificate;
