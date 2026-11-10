import { forwardRef } from 'react';
import { CertificateData } from '@/types';
import { getResponsibilitiesForDomain } from '@/lib/documentUtils';
import maximLogo from '@/assets/maxim-logo.png';
import msmeSeal from '@/assets/msme-seal.png';

interface Props {
  data: CertificateData;
}

const OfferLetter = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const responsibilities = getResponsibilitiesForDomain(data.domain);
  const formatDate = (d: string) =>
    d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }) : '—';

  return (
    <div
      ref={ref}
      id="offer-letter-doc"
      style={{
        width: '794px',
        minHeight: '1122px',
        background: '#fff',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Header band */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3a6e 0%, #1e4080 70%, #0f1f47 100%)',
        padding: '20px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src={maximLogo} alt="Maxim Code"
            style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div>
            <div style={{ color: '#fff', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '18px', letterSpacing: '2px' }}>MAXIM CODE</div>
            <div style={{ color: '#c9a227', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Building Future Innovators</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: '#c9a2274', fontSize: '11px', color: '#a0b8d8' }}>www.maximcode.in</div>
          <div style={{ color: '#a0b8d8', fontSize: '10px', marginTop: '3px' }}>info@maximcode.in</div>
        </div>
      </div>

      {/* Gold stripe */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #1a3a6e, #c9a227 30%, #f0d060 50%, #c9a227 70%, #1a3a6e)' }} />

      {/* Document body */}
      <div style={{ padding: '28px 48px 20px' }}>
        {/* Title + Ref */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{
              fontSize: '18px', fontFamily: '"Playfair Display", serif', fontWeight: 700,
              color: '#1a3a6e', letterSpacing: '2px', textDecoration: 'underline',
              textDecorationColor: '#c9a227', textUnderlineOffset: '4px'
            }}>
              INTERNSHIP OFFER LETTER
            </div>
            <div style={{ fontSize: '10px', color: '#8a92a8', marginTop: '4px', letterSpacing: '1px' }}>
              REF: MC-OL-{data.certificateId?.split('-')[2] || '0001'}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: '#5a6a8a', fontWeight: 600 }}>Date of Issue:</div>
            <div style={{ fontSize: '12px', color: '#1a3a6e', fontWeight: 700 }}>{data.issueDate}</div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, #c9a227, #1a3a6e)', marginBottom: '18px' }} />

        {/* Greeting */}
        <p style={{ fontSize: '12.5px', color: '#2d3a55', marginBottom: '6px' }}>
          <strong>Dear {data.name || '[Name]'},</strong>
        </p>
        <p style={{ fontSize: '12px', color: '#5a6a8a', fontStyle: 'italic', marginBottom: '14px' }}>
          Greetings from Maxim Code!
        </p>

        {/* Opening paragraph */}
        <p style={{ fontSize: '12px', color: '#2d3a55', lineHeight: 1.75, marginBottom: '14px' }}>
          We are pleased to offer you the position of{' '}
          <strong style={{ color: '#1a3a6e' }}>{data.role || '[Role]'}</strong>{' '}
          in the domain of{' '}
          <strong style={{ color: '#c9a227' }}>{data.domain || '[Domain]'}</strong>{' '}
          at <strong style={{ color: '#1a3a6e' }}>Maxim Code</strong>. After careful consideration of your profile and interests,
          we believe you are an excellent fit for our internship program. We warmly welcome you to the Maxim Code family.
        </p>

        {/* Internship Details Box */}
        <div style={{
          background: '#f3f6fb', border: '1px solid #c9a227', borderLeft: '4px solid #1a3a6e',
          borderRadius: '4px', padding: '14px 18px', marginBottom: '14px'
        }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a3a6e', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Internship Details
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }}>
            {[
              { label: 'Position / Role', value: data.role },
              { label: 'Domain', value: data.domain },
              { label: 'Program', value: data.internship },
              { label: 'Work Mode', value: 'Remote / Hybrid' },
              { label: 'Start Date', value: formatDate(data.startDate) },
              { label: 'End Date', value: formatDate(data.endDate) },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '10px', color: '#8a92a8', minWidth: '90px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}:</span>
                <span style={{ fontSize: '11.5px', color: '#1a3a6e', fontWeight: 600 }}>{value || '—'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a3a6e', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Key Responsibilities
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {responsibilities.slice(0, 5).map((r, i) => (
              <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '5px' }}>
                <span style={{ color: '#c9a227', fontWeight: 700, fontSize: '11px', marginTop: '1px', flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: '11.5px', color: '#2d3a55', lineHeight: 1.6 }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a3a6e', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Benefits &amp; Perquisites
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
            {[
              'Internship Completion Certificate',
              'Live Project Experience',
              'Professional Mentorship',
              'Skill Development',
              'Career Growth Opportunities',
              'Portfolio Building',
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: '#1a3a6e', fontSize: '10px' }}>✓</span>
                <span style={{ fontSize: '10.5px', color: '#2d3a55', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <p style={{ fontSize: '12px', color: '#2d3a55', lineHeight: 1.75, marginBottom: '10px' }}>
          We are confident that this internship will be a valuable and enriching experience for your professional journey.
          We welcome you to the <strong style={{ color: '#1a3a6e' }}>Maxim Code</strong> team and wish you great success throughout your internship program.
        </p>
        <p style={{ fontSize: '12px', color: '#2d3a55', marginBottom: '6px' }}>
          Please confirm your acceptance by signing and returning this letter.
        </p>
        <p style={{ fontSize: '12px', color: '#2d3a55', marginBottom: '18px' }}>
          Yours sincerely,
        </p>

        {/* Signature */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{
              fontFamily: '"Dancing Script", cursive', fontSize: '32px', fontWeight: 700,
              color: '#1a3a6e', lineHeight: 1, marginBottom: '3px',
            }}>
              B. Guhan
            </div>
            <div style={{ height: '1px', background: '#1a3a6e', width: '180px', marginBottom: '5px' }} />
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a3a6e' }}>B. GUHAN</div>
            <div style={{ fontSize: '10px', color: '#5a6a8a' }}>CEO &amp; Founder</div>
            <div style={{ fontSize: '10px', color: '#5a6a8a', fontWeight: 600 }}>Maxim Code</div>
          </div>

          {/* MSME */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={msmeSeal} alt="MSME"
              style={{ width: '48px', height: '48px', objectFit: 'contain', opacity: 0.8 }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <div>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#1a3a6e', textTransform: 'uppercase' }}>Ministry of MSME</div>
              <div style={{ fontSize: '7.5px', color: '#5a6a8a' }}>Government of India</div>
              <div style={{ fontSize: '7.5px', color: '#5a6a8a' }}>Aligned with MSME Guidelines</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(135deg, #1a3a6e, #0f1f47)',
        padding: '8px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span style={{ color: '#a0b8d8', fontSize: '9px', letterSpacing: '1px' }}>MAXIM CODE — BUILDING FUTURE INNOVATORS</span>
        <span style={{ color: '#c9a227', fontSize: '9px', fontWeight: 600 }}>www.maximcode.in</span>
        <span style={{ color: '#a0b8d8', fontSize: '9px' }}>Ref: {data.certificateId}</span>
      </div>
    </div>
  );
});

OfferLetter.displayName = 'OfferLetter';
export default OfferLetter;
