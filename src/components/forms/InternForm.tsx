import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InternDetails } from '@/types';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  domain: z.string().min(2, 'Domain is required'),
  role: z.string().min(2, 'Role is required'),
  internship: z.string().min(2, 'Internship/Course name is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
});

interface Props {
  onGenerate: (data: InternDetails) => void;
  isGenerated: boolean;
}

const DOMAIN_OPTIONS = [
  'Web Development',
  'App Development',
  'Python',
  'Digital Marketing',
  'AI / ML',
  'Data Science',
  'UI/UX Design',
  'Cybersecurity',
  'Cloud Computing',
  'Machine Learning',
];

const ROLE_OPTIONS = [
  'Web Development Intern',
  'App Development Intern',
  'Python Developer Intern',
  'Digital Marketing Intern',
  'AI/ML Intern',
  'Data Science Intern',
  'UI/UX Design Intern',
  'Full Stack Developer Intern',
  'Backend Developer Intern',
  'Frontend Developer Intern',
];

export default function InternForm({ onGenerate, isGenerated }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InternDetails>({ resolver: zodResolver(schema) });

  const selectedDomain = watch('domain');

  return (
    <div className="bg-white rounded-2xl shadow-card border border-navy-100 p-6">
      <div className="mb-5">
        <h2 className="text-navy-900 font-playfair font-bold text-xl">Intern Details</h2>
        <p className="text-muted-foreground text-sm font-inter mt-1">
          Fill in the details to generate professional documents
        </p>
      </div>

      <form onSubmit={handleSubmit(onGenerate)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-navy-900 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            placeholder="e.g. Priya Sharma"
            className="w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm font-inter text-navy-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Domain */}
        <div>
          <label className="block text-sm font-semibold text-navy-900 mb-1">
            Domain <span className="text-red-500">*</span>
          </label>
          <select
            {...register('domain')}
            className="w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm font-inter text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition bg-white"
          >
            <option value="">Select Domain</option>
            {DOMAIN_OPTIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {errors.domain && <p className="text-red-500 text-xs mt-1">{errors.domain.message}</p>}
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-semibold text-navy-900 mb-1">
            Role / Position <span className="text-red-500">*</span>
          </label>
          <input
            {...register('role')}
            list="role-suggestions"
            placeholder="e.g. Web Development Intern"
            className="w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm font-inter text-navy-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition"
          />
          <datalist id="role-suggestions">
            {ROLE_OPTIONS.map((r) => <option key={r} value={r} />)}
          </datalist>
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
        </div>

        {/* Internship/Course */}
        <div>
          <label className="block text-sm font-semibold text-navy-900 mb-1">
            Internship / Course Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('internship')}
            placeholder="e.g. Full Stack Web Development Internship"
            className="w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm font-inter text-navy-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition"
          />
          {errors.internship && <p className="text-red-500 text-xs mt-1">{errors.internship.message}</p>}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-1">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register('startDate')}
              className="w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm font-inter text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition"
            />
            {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-1">
              End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register('endDate')}
              className="w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm font-inter text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition"
            />
            {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>}
          </div>
        </div>

        {/* Auto-detected skills preview */}
        {selectedDomain && (
          <div className="bg-navy-50 border border-navy-100 rounded-lg p-3">
            <p className="text-xs font-semibold text-navy-700 mb-1.5">Auto-detected Skills for <span className="text-gold-700">{selectedDomain}</span>:</p>
            <div className="flex flex-wrap gap-1.5">
              {['Web Development'].includes(selectedDomain) && ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'].map(s => (
                <span key={s} className="bg-navy-900 text-white text-xs px-2 py-0.5 rounded-full">{s}</span>
              ))}
              {selectedDomain === 'App Development' && ['Flutter', 'Firebase', 'REST APIs', 'UI Development'].map(s => (
                <span key={s} className="bg-navy-900 text-white text-xs px-2 py-0.5 rounded-full">{s}</span>
              ))}
              {selectedDomain === 'Python' && ['Python', 'Automation', 'Data Processing', 'Scripting'].map(s => (
                <span key={s} className="bg-navy-900 text-white text-xs px-2 py-0.5 rounded-full">{s}</span>
              ))}
              {selectedDomain === 'Digital Marketing' && ['SEO', 'Social Media Marketing', 'Campaign Management', 'Content Strategy'].map(s => (
                <span key={s} className="bg-navy-900 text-white text-xs px-2 py-0.5 rounded-full">{s}</span>
              ))}
              {['AI / ML', 'Machine Learning', 'Artificial Intelligence'].includes(selectedDomain) && ['Python', 'Machine Learning', 'Data Analytics', 'Model Development'].map(s => (
                <span key={s} className="bg-navy-900 text-white text-xs px-2 py-0.5 rounded-full">{s}</span>
              ))}
              {!['Web Development', 'App Development', 'Python', 'Digital Marketing', 'AI / ML', 'Machine Learning', 'Artificial Intelligence'].includes(selectedDomain) && (
                <span className="text-navy-600 text-xs italic">Skills will be auto-generated based on domain</span>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold font-inter py-3 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] border-2 border-gold-700/40 mt-2"
        >
          {isGenerated ? '✦ Regenerate Documents' : '✦ Generate Documents'}
        </button>
      </form>
    </div>
  );
}
