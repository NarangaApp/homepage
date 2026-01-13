
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black tracking-widest uppercase text-xs">The Visionaries</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">혁신을 이끄는 사람들</h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            전 세계 최고의 엔지니어와 전문가들이 모여 더 나은 미래를 설계하고 있습니다.
            우리는 기술을 통해 인류의 가능성을 확장합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <p className="text-white text-lg font-medium leading-relaxed italic">"{member.bio}"</p>
                  <div className="flex gap-4 mt-6">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                      <div className="w-3 h-3 rounded-sm border-2 border-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                      <div className="w-3 h-3 rounded-full border-2 border-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center transition-transform duration-500 group-hover:translate-y-2">
                <h4 className="text-2xl font-black text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
