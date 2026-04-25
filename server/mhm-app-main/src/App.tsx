/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  MoreVertical, 
  Bolt, 
  LayoutGrid, 
  Dumbbell, 
  BarChart3, 
  Settings as SettingsIcon,
  CheckCircle2,
  Lock,
  TrendingUp,
  Info,
  ChevronRight,
  X
} from 'lucide-react';
import { Screen, AppState } from './types';

// --- Components ---

const Header = ({ title, onBack, step }: { title: string; onBack?: () => void; step?: string }) => (
  <header className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
    <div className="flex items-center gap-4">
      {onBack && (
        <button onClick={onBack} className="text-primary active:scale-95 transition-transform">
          <ArrowLeft size={24} />
        </button>
      )}
      <h1 className="font-headline font-black tracking-tighter text-primary text-xl uppercase">
        {title}
      </h1>
    </div>
    {step && (
      <div className="font-mono text-[10px] tracking-widest text-outline uppercase">
        {step}
      </div>
    )}
    <button className="text-primary active:scale-95 transition-transform">
      <MoreVertical size={24} />
    </button>
  </header>
);

const BottomNav = ({ active, onNavigate }: { active: Screen; onNavigate: (s: Screen) => void }) => (
  <nav className="fixed bottom-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/15 flex justify-around items-center h-20 px-4">
    {[
      { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
      { id: 'training', icon: Dumbbell, label: 'Training' },
      { id: 'social', icon: BarChart3, label: 'Social' },
      { id: 'settings', icon: SettingsIcon, label: 'Settings' },
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => onNavigate(item.id as Screen)}
        className={`flex flex-col items-center justify-center transition-all duration-300 ${
          active === item.id ? 'text-primary scale-110' : 'text-outline hover:text-primary/80'
        }`}
      >
        <item.icon size={24} className={active === item.id ? 'fill-primary/20' : ''} />
        <span className="font-mono text-[10px] uppercase tracking-widest mt-1">{item.label}</span>
      </button>
    ))}
  </nav>
);

// --- Screens ---

const Onboarding = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col pt-24 pb-12 px-6 max-w-4xl mx-auto w-full relative">
    <div className="flex-grow flex flex-col justify-center space-y-12">
      <div className="space-y-4">
        <span className="font-mono text-secondary text-sm tracking-[0.3em] uppercase">MOTIVATION_QUERY_01</span>
        <h2 className="font-headline font-bold text-5xl md:text-8xl leading-[0.95] tracking-tight editorial-text-shadow">
          Do you want to improve <span className="text-primary italic font-light">your</span> social status?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full md:w-fit">
        <button 
          onClick={onNext}
          className="group relative flex items-center justify-between md:justify-start md:gap-12 px-8 py-6 md:px-12 md:py-8 bg-kinetic-gradient text-on-primary-fixed rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(36,226,141,0.2)]"
        >
          <span className="font-headline font-black text-4xl md:text-6xl tracking-tighter">YES</span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-widest uppercase opacity-60">Proceed</span>
            <ChevronRight size={24} />
          </div>
        </button>

        <button className="group flex items-center justify-between md:justify-start md:gap-12 px-8 py-6 md:px-12 md:py-8 bg-surface-container-low border border-outline-variant/15 text-on-surface rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-surface-container-high active:scale-95">
          <span className="font-headline font-medium text-4xl md:text-6xl tracking-tighter opacity-80">NO</span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-widest uppercase opacity-40">Decline</span>
            <X size={24} className="opacity-40" />
          </div>
        </button>
      </div>
    </div>

    <footer className="mt-auto pt-8">
      <p className="font-mono text-[9px] leading-relaxed text-outline/60 uppercase tracking-tighter">
        LEGAL DISCLAIMER: PARTICIPATION IN THE KINETIC GROWTH PROTOCOL IS VOLUNTARY. DATA COLLECTED IS SUBJECT TO ANONYMIZED PSYCHOMETRIC ANALYSIS. RESULTS ARE FOR OPTIMIZATION PURPOSES ONLY. NO GUARANTEES OF SPECIFIC SOCIAL OR MATERIAL OUTCOMES ARE IMPLIED BY THE SYSTEM ARCHITECTURE.
      </p>
    </footer>
  </div>
);

const Baseline = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col pt-24 pb-12 px-6 max-w-lg mx-auto w-full">
    <div className="mb-10">
      <div className="flex justify-between items-end mb-2">
        <span className="font-mono text-xs text-primary uppercase tracking-tighter">Step 04 / 06</span>
        <span className="font-mono text-[10px] text-outline">Progress 66%</span>
      </div>
      <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
        <div className="h-full w-2/3 kinetic-gradient"></div>
      </div>
    </div>

    <section className="mb-12">
      <h2 className="font-headline font-bold text-4xl leading-tight mb-4 tracking-tight uppercase">Physical Baseline</h2>
      <p className="text-on-surface-variant leading-relaxed">Precision metrics drive optimization. Define your current vertical displacement for accurate metabolic tracking.</p>
    </section>

    <div className="grid grid-cols-2 gap-3 mb-12">
      <button className="bg-surface-container-high border-l-2 border-primary p-4 flex flex-col items-start transition-all">
        <span className="font-mono text-[10px] text-primary mb-1 uppercase">Metric</span>
        <span className="font-headline font-bold text-lg">CM</span>
      </button>
      <button className="bg-surface-container-low p-4 flex flex-col items-start opacity-50">
        <span className="font-mono text-[10px] text-outline mb-1 uppercase">Imperial</span>
        <span className="font-headline font-bold text-lg text-outline">FT / IN</span>
      </button>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center mb-12">
      <div className="mb-8 flex items-baseline gap-2">
        <span className="font-headline font-black text-7xl tracking-tighter text-on-surface">182</span>
        <span className="font-mono text-2xl text-primary font-bold">cm</span>
      </div>
      
      <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
        <div className="absolute w-1 h-full bg-primary z-10 shadow-[0_0_15px_rgba(127,255,181,0.4)]"></div>
        <div className="flex items-end gap-4 opacity-30">
          {[175, 180, 185, 190].map(val => (
            <div key={val} className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] text-outline">{val}</span>
              <div className="h-12 w-0.5 bg-outline"></div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <button 
      onClick={onNext}
      className="w-full kinetic-gradient py-5 rounded-xl text-on-primary-fixed font-bold text-lg tracking-tight active:scale-95 transition-all"
    >
      CONTINUE
    </button>
  </div>
);

const Psychology = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen pt-24 pb-48 px-6 flex flex-col items-center max-w-2xl mx-auto w-full">
    <header className="w-full mb-12">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-mono text-primary text-xs tracking-widest uppercase">Phase 01</span>
        <div className="h-[1px] flex-grow bg-outline-variant/15"></div>
      </div>
      <h1 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none mb-4">
        Psychology <br/> <span className="text-primary">of Growth</span>
      </h1>
      <p className="text-on-surface-variant text-sm font-medium max-w-md border-l-2 border-primary pl-4 py-1">
        Acknowledge your current state to begin the biological recalibration. Truth precedes evolution.
      </p>
    </header>

    <section className="w-full space-y-6">
      {[
        { id: '01', q: 'Do you want to improve your social status?' },
        { id: '02', q: 'Do you want more satisfactory relationships?' },
        { id: '03', q: 'Do you want to stop feeling inferior?' },
      ].map(query => (
        <div key={query.id} className="group relative bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container-high border-l-4 border-transparent hover:border-primary">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs text-outline tracking-widest uppercase">Query_{query.id}</span>
            <h2 className="font-headline font-bold text-xl md:text-2xl leading-tight">{query.q}</h2>
            <div className="flex gap-3 mt-2">
              <button className="flex-1 py-3 bg-surface-container-highest rounded-lg font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                YES
              </button>
              <button className="flex-1 py-3 bg-surface-container-highest rounded-lg font-mono text-xs tracking-widest uppercase hover:bg-error/20 hover:text-error transition-all active:scale-95">
                NO
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>

    <footer className="w-full mt-12 pb-12 flex flex-col items-center">
      <button 
        onClick={onNext}
        className="w-full max-w-sm kinetic-gradient text-on-primary-fixed py-5 rounded-xl font-headline font-black text-lg tracking-widest uppercase shadow-[0_20px_40px_rgba(44,230,145,0.2)] active:scale-95 transition-transform mb-6"
      >
        PROCEED TO PROTOCOL
      </button>
      <div className="flex items-center gap-2 text-on-surface-variant text-[10px] tracking-widest uppercase font-mono">
        <span>IDENTITY VERIFIED</span>
        <span className="w-1 h-1 bg-primary rounded-full"></span>
        <span>SECURE SYNC</span>
      </div>
    </footer>
  </div>
);

const Target = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen pt-24 pb-32 px-6 max-w-lg mx-auto w-full">
    <div className="mb-12">
      <div className="flex justify-between items-end mb-4">
        <span className="font-mono text-primary text-sm tracking-tighter uppercase">Step 05 / 06</span>
        <span className="font-mono text-on-surface-variant text-[10px] tracking-widest uppercase">Targeting Optimization</span>
      </div>
      <div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
        <div className="h-full kinetic-gradient w-5/6"></div>
      </div>
    </div>

    <section className="mb-12">
      <h2 className="font-headline font-black text-5xl leading-tight tracking-tighter text-on-surface mb-2">
        GROWTH <br/>TARGET
      </h2>
      <p className="text-on-surface-variant font-mono text-xs leading-relaxed max-w-[280px]">
        Define the precision-engineered increment for your skeletal expansion protocol.
      </p>
    </section>

    <div className="grid grid-cols-2 gap-4">
      <button className="col-span-2 group relative p-6 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/20 transition-all duration-300 text-left overflow-hidden">
        <div className="absolute right-[-10px] top-[-10px] opacity-10 font-headline text-8xl font-black text-on-surface select-none">0</div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] text-primary mb-1 tracking-widest">STASIS</div>
            <div className="font-headline text-3xl font-bold">+0cm</div>
          </div>
          <div className="h-12 w-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
            <X size={20} />
          </div>
        </div>
      </button>

      <button className="col-span-1 group p-6 bg-surface-container-high rounded-xl border-l-4 border-l-primary/10 hover:border-l-primary transition-all text-left">
        <div className="font-mono text-[10px] text-on-surface-variant mb-2 uppercase">Baseline</div>
        <div className="font-headline text-4xl font-black text-on-surface mb-4">+3cm</div>
        <p className="text-[10px] font-mono leading-tight text-on-surface-variant">Standard metabolic alignment.</p>
      </button>

      <button className="col-span-1 group p-6 bg-surface-container-high rounded-xl border-l-4 border-l-primary/10 hover:border-l-primary transition-all text-left">
        <div className="font-mono text-[10px] text-on-surface-variant mb-2 uppercase">Advanced</div>
        <div className="font-headline text-4xl font-black text-on-surface mb-4">+6cm</div>
        <p className="text-[10px] font-mono leading-tight text-on-surface-variant">Accelerated kinetic adaptation.</p>
      </button>

      <button 
        onClick={onNext}
        className="col-span-2 relative p-8 bg-surface-container-highest rounded-xl border-l-4 border-l-primary transition-all text-left overflow-hidden group"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 bg-gradient-to-l from-primary to-transparent"></div>
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <div className="inline-block px-2 py-0.5 bg-primary text-on-primary font-mono text-[9px] font-bold tracking-tighter rounded mb-3 uppercase">Elite Protocol</div>
            <div className="font-headline text-5xl font-black text-on-surface">+10cm</div>
            <div className="mt-2 font-mono text-xs text-secondary italic">Peak architectural threshold.</div>
          </div>
          <Bolt size={40} className="text-primary fill-primary" />
        </div>
      </button>
    </div>

    <footer className="fixed bottom-0 left-0 w-full p-6 bg-surface/80 backdrop-blur-xl z-50">
      <div className="max-w-lg mx-auto">
        <button 
          onClick={onNext}
          className="w-full kinetic-gradient h-14 rounded-lg flex items-center justify-center font-headline font-black text-on-primary tracking-widest uppercase active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(127,255,181,0.2)]"
        >
          CONFIRM TARGET
        </button>
      </div>
    </footer>
  </div>
);

const Potential = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen pt-24 pb-12 px-6 max-w-lg mx-auto w-full flex flex-col">
    <div className="mb-12">
      <div className="flex justify-between items-end mb-4">
        <span className="font-mono text-primary text-sm tracking-tighter uppercase">Step 06 / 06</span>
        <span className="font-mono text-on-surface-variant text-[10px] tracking-widest uppercase">Final Assessment</span>
      </div>
      <div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
        <div className="h-full kinetic-gradient w-full"></div>
      </div>
    </div>

    <section className="mb-12">
      <h2 className="font-headline font-black text-5xl leading-tight tracking-tighter text-on-surface mb-2">
        POTENTIAL <br/>UNLOCKED
      </h2>
      <p className="text-on-surface-variant font-mono text-xs leading-relaxed max-w-[280px]">
        Biological constraints identified. Structural recalibration initialized.
      </p>
    </section>

    <div className="flex-grow flex flex-col justify-center items-center space-y-12">
      <div className="relative">
        <div className="absolute inset-0 kinetic-gradient blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="font-mono text-xs text-primary tracking-[0.5em] uppercase mb-4">Projected_Height</div>
          <div className="flex items-baseline gap-2">
            <span className="font-headline font-black text-9xl tracking-tighter text-on-surface">192</span>
            <span className="font-mono text-3xl text-primary font-bold">cm</span>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
        <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <div className="font-mono text-[9px] text-outline uppercase mb-1">Metabolic_Rate</div>
          <div className="font-headline text-xl font-bold">+14.2%</div>
        </div>
        <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <div className="font-mono text-[9px] text-outline uppercase mb-1">Kinetic_Output</div>
          <div className="font-headline text-xl font-bold">OPTIMAL</div>
        </div>
      </div>
    </div>

    <footer className="mt-12">
      <button 
        onClick={onNext}
        className="w-full kinetic-gradient h-16 rounded-xl flex items-center justify-center font-headline font-black text-on-primary tracking-widest uppercase active:scale-[0.98] transition-all shadow-[0_20px_50px_rgba(44,230,145,0.3)]"
      >
        INITIALIZE DASHBOARD
      </button>
      <p className="text-center mt-6 font-mono text-[9px] text-outline uppercase tracking-widest">
        System ready for biological synchronization
      </p>
    </footer>
  </div>
);

const Social = () => (
  <div className="min-h-screen pt-24 pb-32 px-6 max-w-lg mx-auto w-full">
    <header className="mb-12">
      <h2 className="font-headline font-black text-4xl tracking-tighter uppercase mb-2">Network</h2>
      <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest">Global Optimization Collective</p>
    </header>

    <div className="space-y-4">
      {[
        { name: 'X_Protocol', status: 'Active', growth: '+4.2cm', color: 'primary' },
        { name: 'Cyber_Kinetic', status: 'Syncing', growth: '+2.8cm', color: 'secondary' },
        { name: 'Bio_Hacker_99', status: 'Active', growth: '+5.1cm', color: 'primary' },
        { name: 'Neural_Link', status: 'Offline', growth: '+1.5cm', color: 'outline' },
      ].map((user, i) => (
        <div key={i} className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between border-l-2 border-primary/20 hover:border-primary transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-headline font-bold text-lg text-${user.color}`}>
              {user.name[0]}
            </div>
            <div>
              <div className="font-headline font-bold text-on-surface">{user.name}</div>
              <div className="font-mono text-[10px] text-outline uppercase tracking-widest">{user.status}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-headline font-black text-primary">{user.growth}</div>
            <div className="font-mono text-[9px] text-outline uppercase">Growth_Delta</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Settings = () => (
  <div className="min-h-screen pt-24 pb-32 px-6 max-w-lg mx-auto w-full">
    <header className="mb-12">
      <h2 className="font-headline font-black text-4xl tracking-tighter uppercase mb-2">Settings</h2>
      <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest">System Configuration</p>
    </header>

    <div className="space-y-6">
      <section>
        <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Biometric_Data</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all">
            <span className="font-headline font-bold">Profile Calibration</span>
            <ChevronRight size={20} className="text-outline" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all">
            <span className="font-headline font-bold">Metric Preferences</span>
            <ChevronRight size={20} className="text-outline" />
          </button>
        </div>
      </section>

      <section>
        <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Security</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all">
            <span className="font-headline font-bold">Identity Verification</span>
            <Lock size={20} className="text-outline" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all">
            <span className="font-headline font-bold">Data Encryption</span>
            <CheckCircle2 size={20} className="text-primary" />
          </button>
        </div>
      </section>

      <button className="w-full py-4 mt-8 border border-error/20 text-error rounded-xl font-headline font-black tracking-widest uppercase hover:bg-error/10 transition-all">
        TERMINATE PROTOCOL
      </button>
    </div>
  </div>
);

const Training = () => (
  <div className="min-h-screen pt-24 pb-32 px-6 max-w-lg mx-auto w-full">
    <header className="mb-12">
      <h2 className="font-headline font-black text-4xl tracking-tighter uppercase mb-2">Training</h2>
      <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest">Active Protocol Execution</p>
    </header>

    <div className="space-y-6">
      <div className="bg-surface-container-high p-6 rounded-xl border-l-4 border-primary">
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-[10px] text-primary uppercase">Current_Session</span>
          <span className="font-mono text-[10px] text-outline">00:42:15</span>
        </div>
        <h3 className="text-2xl font-headline font-bold mb-4 uppercase">Deadlift Hypertrophy</h3>
        <div className="space-y-4">
          {[
            { set: 1, reps: 12, weight: 110, status: 'Completed' },
            { set: 2, reps: 12, weight: 110, status: 'Active' },
            { set: 3, reps: 12, weight: 110, status: 'Pending' },
            { set: 4, reps: 12, weight: 110, status: 'Pending' },
          ].map((set, i) => (
            <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${set.status === 'Active' ? 'bg-primary/10 border border-primary/20' : 'bg-surface-container-low'}`}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-outline">SET_{set.set}</span>
                <span className="font-headline font-bold">{set.reps} x {set.weight}kg</span>
              </div>
              <span className={`font-mono text-[9px] uppercase tracking-widest ${set.status === 'Completed' ? 'text-primary' : set.status === 'Active' ? 'text-secondary animate-pulse' : 'text-outline'}`}>
                {set.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full kinetic-gradient py-4 rounded-xl font-headline font-black tracking-widest uppercase shadow-lg active:scale-95 transition-all">
        LOG CURRENT SET
      </button>
    </div>
  </div>
);

const Dashboard = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="min-h-screen pt-24 pb-32 px-6 max-w-5xl mx-auto w-full">
    <section className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="font-mono text-secondary uppercase tracking-[0.3em] text-sm">Today's Protocol</span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface leading-none">
            KINETIC <br/><span className="text-primary">PHASE 04</span>
          </h2>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary flex items-center gap-8">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-surface-container-highest rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent -rotate-45"></div>
            <div className="font-mono font-bold text-xl text-primary">70%</div>
          </div>
          <div>
            <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Daily Yield</div>
            <div className="text-2xl font-headline font-bold">5 / 7 Tasks</div>
            <div className="text-xs text-primary mt-1 flex items-center gap-1">
              <TrendingUp size={14} />
              +12% vs Yesterday
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div 
        onClick={() => onNavigate('training')}
        className="md:col-span-8 bg-surface-container-high rounded-xl p-8 cursor-pointer hover:bg-surface-container-highest transition-all group"
      >
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-xs bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">Strength Protocol</span>
          <span className="font-mono text-on-surface-variant text-xs">14:00 - 15:30</span>
        </div>
        <h3 className="text-3xl font-headline font-bold mb-2 uppercase italic tracking-tight group-hover:text-primary transition-colors">Deadlift Hypertrophy</h3>
        <p className="text-on-surface-variant max-w-md mb-8">Focus on posterior chain engagement. Maintain neutral spine during the concentric phase.</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Target Reps', val: '12', sub: 'x 4' },
            { label: 'Load', val: '110', sub: 'kg' },
            { label: 'Rest', val: '90', sub: 'sec' },
          ].map(stat => (
            <div key={stat.label} className="bg-surface-container-low p-4 rounded-lg">
              <div className="font-mono text-[10px] text-on-surface-variant uppercase">{stat.label}</div>
              <div className="text-xl font-bold font-mono">{stat.val} <span className="text-xs font-normal">{stat.sub}</span></div>
            </div>
          ))}
        </div>

        <button className="w-full md:w-auto kinetic-gradient text-on-primary-fixed px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
          <Bolt size={20} />
          RECORD FOR AI VALIDATION
        </button>
      </div>

      <div className="md:col-span-4 bg-surface-container-low border-l border-primary/20 rounded-xl p-8">
        <span className="font-mono text-xs text-secondary uppercase tracking-widest">Nutritional Window</span>
        <h3 className="text-2xl font-headline font-bold mt-2">Post-Load Recovery</h3>
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">🍽️</div>
            <div>
              <div className="font-bold">Anabolic Meal</div>
              <div className="text-sm text-on-surface-variant">200g Lean Protein + Complex Carbs</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">💧</div>
            <div>
              <div className="font-bold">Hydration Level</div>
              <div className="text-sm text-on-surface-variant">750ml Electrolyte Solution</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [state, setState] = useState<AppState>({
    screen: 'onboarding',
    responses: {},
    height: 182,
    target: 6,
  });

  const navigate = (screen: Screen) => setState(prev => ({ ...prev, screen }));

  const renderScreen = () => {
    switch (state.screen) {
      case 'onboarding':
        return <Onboarding onNext={() => navigate('psychology')} />;
      case 'psychology':
        return <Psychology onNext={() => navigate('baseline')} />;
      case 'baseline':
        return <Baseline onNext={() => navigate('target')} />;
      case 'target':
        return <Target onNext={() => navigate('potential')} />;
      case 'potential':
        return <Potential onNext={() => navigate('dashboard')} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} />;
      case 'training':
        return <Training />;
      case 'social':
        return <Social />;
      case 'settings':
        return <Settings />;
      default:
        return <Onboarding onNext={() => navigate('psychology')} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden">
      <div className="fixed inset-0 grainy-overlay z-0"></div>
      
      <Header 
        title="KINETIC" 
        onBack={state.screen !== 'onboarding' ? () => {
          const prevMap: Record<Screen, Screen> = {
            onboarding: 'onboarding',
            psychology: 'onboarding',
            baseline: 'psychology',
            target: 'baseline',
            potential: 'target',
            dashboard: 'onboarding',
            settings: 'dashboard',
            social: 'dashboard',
            training: 'dashboard'
          };
          navigate(prevMap[state.screen]);
        } : undefined}
        step={
          state.screen === 'psychology' ? 'Step 01 / 06' :
          state.screen === 'baseline' ? 'Step 04 / 06' : 
          state.screen === 'target' ? 'Step 05 / 06' :
          state.screen === 'potential' ? 'Step 06 / 06' :
          undefined
        }
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.screen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {['dashboard', 'settings', 'social'].includes(state.screen) && (
        <BottomNav active={state.screen} onNavigate={navigate} />
      )}
    </div>
  );
}
