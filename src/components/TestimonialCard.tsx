import { Quote } from 'lucide-react';

interface Props {
  message: string;
  name: string;
  role: string;
}

export function TestimonialCard({ message, name, role }: Props) {
  return (
    <div className="relative rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-100 hover:shadow-lg">
      <Quote className="absolute right-4 top-4 h-8 w-8 text-yellow-400 opacity-20" />
      <p className="mb-6 text-gray-700 leading-relaxed">“{message}”</p>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 ring-1 ring-yellow-100">
          <Quote className="h-6 w-6 text-yellow-500" />
        </span>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
