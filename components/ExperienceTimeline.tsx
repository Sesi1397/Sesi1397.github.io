
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-6 space-y-16">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="relative pl-10 group">
          {/* Timeline Dot */}
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-md transition-transform group-hover:scale-125 group-hover:bg-indigo-500" />
          
          <div className="bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
              {exp.period}
            </span>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {exp.role}
            </h3>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6 text-slate-500 dark:text-slate-400 font-semibold">
              <a 
                href={exp.companyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition underline underline-offset-4 decoration-slate-300 dark:decoration-slate-700"
              >
                {exp.company}
              </a>
              {exp.department && (
                <span className="hidden md:inline text-slate-300">|</span>
              )}
              {exp.department && (
                <span>{exp.department}</span>
              )}
            </div>
            
            <ul className="grid gap-3">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  <span className="text-blue-500 mt-1.5 shrink-0"><i className="fa-solid fa-circle-check text-[10px]" /></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
