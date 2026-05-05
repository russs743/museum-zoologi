'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { Check, X, Award, Trophy, Footprints, ArrowRight, RefreshCcw, Share2, ChevronLeft, BookOpen, Camera, Layers } from 'lucide-react';
import { ZOOLOGY_QUIZ_DATA, QUIZ_CATEGORIES, QuizCategory } from '@/data/quiz';

type QuizType = 'knowledge' | 'visual' | 'mixed';

export default function ZoologyQuiz() {
  const [gameState, setGameState] = useState<'welcome' | 'types' | 'chapters' | 'playing' | 'result'>('welcome');
  const [selectedType, setSelectedType] = useState<QuizType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFact, setShowFact] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Filter questions based on TYPE and CATEGORY
  const filteredQuestions = useMemo(() => {
    let questions = [...ZOOLOGY_QUIZ_DATA];
    
    // Filter by Type
    if (selectedType === 'knowledge') {
      questions = questions.filter(q => q.type === 'image-guess');
    } else if (selectedType === 'visual') {
      questions = questions.filter(q => ['zoom-guess', 'blur-guess', 'silhouette-guess'].includes(q.type));
    }
    
    // Filter by Category (if selected)
    if (selectedCategory) {
      questions = questions.filter(q => q.categoryId === selectedCategory.id);
    }
    
    // If mixed or no specific category, just take a subset
    if (!selectedCategory) {
      questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    }

    return questions;
  }, [selectedCategory, selectedType]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // GSAP Animations
  useEffect(() => {
    if (['welcome', 'types', 'chapters'].includes(gameState) && containerRef.current) {
      const animElements = containerRef.current.querySelectorAll('.content-anim');
      gsap.fromTo(animElements, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          clearProps: 'all'
        }
      );
    }
  }, [gameState]);

  // Animate feedback popover
  useEffect(() => {
    if (showFact && selectedOption && feedbackRef.current) {
      gsap.fromTo(feedbackRef.current, 
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );
    } else if (feedbackRef.current) {
      gsap.to(feedbackRef.current, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' });
    }
  }, [showFact, selectedOption]);

  const goToTypes = () => setGameState('types');
  
  const selectType = (type: QuizType) => {
    setSelectedType(type);
    setGameState('chapters');
  };

  const startChapter = (category: QuizCategory | 'all') => {
    if (category === 'all') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    
    // If the filtered questions list is empty for this combination, we might need a fallback
    // But for this demo, we assume the data is sufficient
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowFact(false);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption) return;

    setSelectedOption(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);

    setTimeout(() => {
      setShowFact(true);
    }, 400);
  };

  const nextQuestion = () => {
    setShowFact(false);
    setSelectedOption(null);
    setIsCorrect(null);
    
    if (feedbackRef.current) {
      gsap.set(feedbackRef.current, { clearProps: 'all' });
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      gsap.to(questionRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        onComplete: () => {
          setCurrentQuestionIndex(prev => prev + 1);
          setImgLoaded(false); // Reset loading state for next image
          gsap.fromTo(questionRef.current, 
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        }
      });
    } else {
      setGameState('result');
    }
  };

  const getRank = () => {
    if (filteredQuestions.length === 0) return { title: 'Observer', color: '#8b877d' };
    const percentage = (score / filteredQuestions.length) * 100;
    const typeLabel = selectedType === 'knowledge' ? 'Scholar' : (selectedType === 'visual' ? 'Detective' : 'Explorer');
    if (percentage === 100) return { title: `Legendary ${typeLabel}`, color: '#4a5942' };
    if (percentage >= 50) return { title: `Expert ${typeLabel}`, color: '#c4843a' };
    return { title: `Apprentice ${typeLabel}`, color: '#8b877d' };
  };

  return (
    <div ref={containerRef} className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-[#f2eee3] border border-[#d6cebc] shadow-sm relative overflow-hidden transition-all duration-500">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a5942]/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c4843a]/5 rounded-full -ml-24 -mb-24 pointer-events-none" />

        {/* ── WELCOME SCREEN ── */}
        {gameState === 'welcome' && (
          <div className="relative z-10 py-24 px-8 text-center flex flex-col items-center">
            <div className="content-anim w-24 h-24 bg-[#4a5942] rounded-full flex items-center justify-center mb-8 shadow-xl">
              <Award className="text-[#f9f7f4] w-12 h-12" />
            </div>
            <h1 className="content-anim font-[--font-playfair] text-5xl md:text-7xl text-[#3E352B] mb-6">
              Misi Zoologi
            </h1>
            <p className="content-anim text-[#8b877d] text-xl max-w-xl mb-12 leading-relaxed">
              Selamat datang di pusat pelatihan peneliti MZB. Pilih jalur spesialisasimu.
            </p>
            <button 
              onClick={goToTypes}
              className="content-anim group relative px-16 py-5 bg-[#3E352B] text-[#f9f7f4] overflow-hidden transition-all hover:bg-[#4a5942] flex items-center justify-center"
            >
              <span className="relative z-10 font-bold tracking-[0.3em] uppercase text-sm">Masuk Laboratorium</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        )}

        {/* ── TYPE SELECTION SCREEN ── */}
        {gameState === 'types' && (
          <div className="relative z-10 p-12 text-center">
            <h2 className="content-anim font-[--font-playfair] text-4xl text-[#3E352B] mb-12">Pilih Jenis Tantangan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div 
                onClick={() => selectType('knowledge')}
                className="content-anim group cursor-pointer bg-[#f9f7f4] border border-[#d6cebc] p-8 hover:bg-[#4a5942] transition-all duration-500 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-[#eae4d3] group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <BookOpen className="text-[#4a5942] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-[--font-playfair] text-[#3E352B] group-hover:text-white mb-3">Kuis Pengetahuan</h3>
                <p className="text-[#8b877d] group-hover:text-white/80 text-xs mb-6">Uji wawasanmu tentang fakta unik satwa nusantara.</p>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#4a5942] group-hover:text-white">Pilih Jalur Ilmuwan</span>
              </div>
              <div 
                onClick={() => selectType('visual')}
                className="content-anim group cursor-pointer bg-[#f9f7f4] border border-[#d6cebc] p-8 hover:bg-[#c4843a] transition-all duration-500 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-[#eae4d3] group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <Camera className="text-[#c4843a] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-[--font-playfair] text-[#3E352B] group-hover:text-white mb-3">Tebak Gambar</h3>
                <p className="text-[#8b877d] group-hover:text-white/80 text-xs mb-6">Tantangan visual: Siluet, Blur, dan Tekstur Satwa.</p>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#c4843a] group-hover:text-white">Pilih Jalur Detektif</span>
              </div>
              <div 
                onClick={() => selectType('mixed')}
                className="content-anim group cursor-pointer bg-[#f9f7f4] border border-[#d6cebc] p-8 hover:bg-[#3E352B] transition-all duration-500 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-[#eae4d3] group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <Layers className="text-[#3E352B] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-[--font-playfair] text-[#3E352B] group-hover:text-white mb-3">Ekspedisi Campuran</h3>
                <p className="text-[#8b877d] group-hover:text-white/80 text-xs mb-6">Gabungan tantangan pengetahuan dan visual.</p>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#3E352B] group-hover:text-white">Mulai Petualangan</span>
              </div>
            </div>
            <button 
              onClick={() => setGameState('welcome')}
              className="content-anim mt-10 text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b877d] hover:text-[#3E352B] transition-colors"
            >
              Kembali
            </button>
          </div>
        )}

        {/* ── CHAPTER SELECTION SCREEN ── */}
        {gameState === 'chapters' && (
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-[#d6cebc] pb-8">
              <div className="content-anim text-left">
                <h2 className="font-[--font-playfair] text-3xl md:text-4xl text-[#3E352B] mb-2">Pilih Area Misi</h2>
                <p className="text-[#8b877d] text-sm italic">Mode: {selectedType === 'knowledge' ? 'Pengetahuan' : (selectedType === 'visual' ? 'Tebak Gambar' : 'Campuran')}</p>
              </div>
              <button 
                onClick={() => setGameState('types')}
                className="content-anim text-[10px] font-bold tracking-[0.2em] uppercase text-[#3E352B] hover:text-[#4a5942] transition-colors flex items-center gap-2"
              >
                <ChevronLeft size={14} /> Ganti Jenis Kuis
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Random / All option */}
              <div 
                onClick={() => startChapter('all')}
                className="content-anim group cursor-pointer relative bg-[#3E352B] border border-[#3E352B] p-6 hover:bg-[#4a5942] transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <span className="text-3xl mb-4 block">🌍</span>
                  <h3 className="text-xl font-[--font-playfair] text-white mb-2">Seluruh Area</h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-6">Misi acak dari seluruh penjuru museum.</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white">Mulai Acak <ArrowRight size={12} /></div>
                </div>
              </div>

              {QUIZ_CATEGORIES.map((cat, idx) => (
                <div 
                  key={cat.id}
                  onClick={() => startChapter(cat)}
                  className="content-anim group cursor-pointer relative bg-[#f9f7f4] border border-[#d6cebc] p-6 hover:bg-[#4a5942] transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10 text-left">
                    <span className="text-3xl mb-4 block">{cat.icon}</span>
                    <h3 className="text-xl font-[--font-playfair] text-[#3E352B] group-hover:text-white transition-colors mb-2">{cat.title}</h3>
                    <p className="text-[#8b877d] group-hover:text-white/80 transition-colors text-xs leading-relaxed mb-6">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#4a5942] group-hover:text-white transition-colors">
                      Mulai Misi <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PLAYING SCREEN ── */}
        {gameState === 'playing' && currentQuestion && (
          <div className="relative z-10">
            {/* Header info */}
            <div className="bg-[#eae4d3] px-8 py-4 border-b border-[#d6cebc] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setGameState('chapters')} className="p-2 hover:bg-[#d6cebc] rounded transition-colors text-[#3E352B]">
                  <ChevronLeft size={20} />
                </button>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#8b877d]">{selectedCategory?.title || 'Seluruh Area'}</p>
                  <h3 className="font-[--font-playfair] text-lg text-[#3E352B]">{selectedType === 'knowledge' ? 'Kuis Pengetahuan' : 'Tebak Gambar'}</h3>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#8b877d]">Skor</p>
                <p className="font-bold text-[#4a5942]">{score}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-[#d6cebc] w-full flex">
              <div 
                className="h-full bg-[#4a5942] transition-all duration-700 ease-out" 
                style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="mb-6 flex items-center gap-2 text-[#8b877d]">
                <Footprints size={16} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-left">
                  Misi {currentQuestionIndex + 1} / {filteredQuestions.length}
                </span>
              </div>

              <div ref={questionRef}>
                <h2 className="text-2xl md:text-3xl font-[--font-playfair] text-[#3E352B] mb-8 leading-tight text-left">
                  {currentQuestion.question}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className="relative aspect-square bg-[#eae4d3] border border-[#d6cebc] overflow-hidden group flex items-center justify-center shadow-inner">
                    {!imgLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#eae4d3]">
                        <div className="w-10 h-10 border-4 border-[#4a5942]/20 border-t-[#4a5942] rounded-full animate-spin" />
                      </div>
                    )}
                    <img 
                      src={currentQuestion.image}
                      alt="Challenge"
                      onLoad={() => setImgLoaded(true)}
                      onError={(e) => {
                        setImgLoaded(true);
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80';
                      }}
                      className={`w-full h-full object-cover transition-all duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0'}
                        ${currentQuestion.type === 'zoom-guess' && !selectedOption ? 'scale-[2.5] grayscale-[0.2]' : 'scale-100 grayscale-0'}
                        ${currentQuestion.type === 'blur-guess' && !selectedOption ? 'blur-2xl' : 'blur-0'}
                        ${currentQuestion.type === 'silhouette-guess' && !selectedOption ? 'brightness-0' : 'brightness-100'}
                      `}
                    />
                    {!selectedOption && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase bg-[#3E352B]/80 px-4 py-2 pointer-events-none">
                          {currentQuestion.type === 'zoom-guess' && 'Fokus: Tekstur'}
                          {currentQuestion.type === 'blur-guess' && 'Misi: Fokus'}
                          {currentQuestion.type === 'silhouette-guess' && 'Misi: Siluet'}
                          {currentQuestion.type === 'image-guess' && 'Misi: Identifikasi'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    {currentQuestion.options.map((option, idx) => {
                      let btnClass = "border-[#d6cebc] text-[#3E352B] hover:bg-[#eae4d3]";
                      if (selectedOption === option) {
                        btnClass = isCorrect ? "bg-[#4a5942] border-[#4a5942] text-white" : "bg-[#c43a3a] border-[#c43a3a] text-white";
                      } else if (selectedOption && option === currentQuestion.correctAnswer) {
                        btnClass = "bg-[#4a5942]/20 border-[#4a5942] text-[#4a5942]";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          disabled={!!selectedOption}
                          className={`w-full p-5 text-left border flex items-center justify-between transition-all duration-300 ${btnClass} ${selectedOption ? 'cursor-default' : 'hover:translate-x-2'}`}
                        >
                          <span className="font-medium text-sm md:text-base">{option}</span>
                          {selectedOption === option && (
                            isCorrect ? <Check size={20} /> : <X size={20} />
                          )}
                        </button>
                      );
                    })}

                    <div ref={feedbackRef} className={`mt-6 p-6 bg-[#f9f7f4] border-l-4 border-[#4a5942] shadow-sm opacity-0 ${showFact && selectedOption ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4a5942] mb-2">Tahukah Kamu?</p>
                      <p className="text-[#3E352B] text-sm leading-relaxed italic text-left">
                        "{currentQuestion.fact}"
                      </p>
                      <button 
                        onClick={nextQuestion}
                        className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-[#3E352B] text-[#f9f7f4] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#4a5942] transition-colors"
                      >
                        {currentQuestionIndex < filteredQuestions.length - 1 ? 'Soal Berikutnya' : 'Selesaikan Misi'}
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── RESULT SCREEN ── */}
        {gameState === 'result' && (
          <div className="relative z-10 p-8 md:p-16 text-center">
            <div className="mb-10 inline-block p-6 bg-[#fdfcfb] border border-[#d6cebc] shadow-xl transform rotate-1">
               <div className="border-10 border-[#f2eee3] p-8 flex flex-col items-center min-w-[300px]">
                  <div className="w-16 h-16 bg-[#4a5942] rounded-full flex items-center justify-center mb-6">
                    <Trophy className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#8b877d] mb-2">Laporan Akhir Misi</h3>
                  <h2 className="font-[--font-playfair] text-4xl text-[#3E352B] mb-6 whitespace-nowrap">{getRank().title}</h2>
                  <div className="h-px w-32 bg-[#d6cebc] mb-6" />
                  <p className="text-sm text-[#8b877d] mb-1">Telah menyelesaikan misi dengan skor</p>
                  <p className="text-3xl font-bold text-[#3E352B] mb-8">{score} / {filteredQuestions.length}</p>
                  <div className="flex gap-12 text-[9px] font-bold tracking-[0.2em] uppercase text-[#3E352B]/40">
                    <div className="flex flex-col items-center">
                      <span>{new Date().toLocaleDateString('id-ID')}</span>
                      <span className="mt-1 border-t border-current pt-1">Tanggal</span>
                    </div>
                    <div className="flex flex-col items-center italic">
                      <span className="font-[--font-playfair] text-base capitalize">MZB Admin</span>
                      <span className="mt-1 border-t border-current pt-1">Verifikasi</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button 
                onClick={() => setGameState('types')}
                className="flex items-center gap-2 px-8 py-3 border border-[#3E352B] text-[#3E352B] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#3E352B] hover:text-[#f9f7f4] transition-all"
              >
                <RefreshCcw size={14} /> Ganti Jenis Kuis
              </button>
              <button className="flex items-center gap-2 px-8 py-3 bg-[#4a5942] text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-all shadow-md">
                <Share2 size={14} /> Bagikan Hasil
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
