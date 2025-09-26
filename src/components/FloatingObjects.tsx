import React from 'react';

const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating dune shapes */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-dune-amber/10 to-desert-sand/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-oasis-green/5 to-dune-amber/10 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-desert-sand/15 to-dune-amber/20 rounded-full blur-2xl animate-float" />
      
      {/* Small floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-dune-amber/30 rounded-full animate-float animate-stagger-1" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-desert-sand/40 rounded-full animate-float animate-stagger-2" />
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-oasis-green/20 rounded-full animate-float-reverse animate-stagger-3" />
      <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-dune-amber/25 rounded-full animate-float animate-stagger-4" />
      <div className="absolute top-1/6 right-1/3 w-2.5 h-2.5 bg-desert-sand/30 rounded-full animate-float-reverse animate-stagger-1" />
      
      {/* Rotating decorative elements */}
      <div className="absolute top-1/5 right-1/6 w-8 h-8 border border-dune-amber/20 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-1/5 left-1/6 w-6 h-6 border border-desert-sand/25 rounded-full animate-rotate-slow" />
      
      {/* Desert-themed shapes */}
      <div className="absolute top-2/3 right-1/5 w-12 h-1 bg-gradient-to-r from-transparent via-dune-amber/30 to-transparent animate-float" />
      <div className="absolute top-1/3 left-1/6 w-1 h-8 bg-gradient-to-b from-transparent via-desert-sand/25 to-transparent animate-float-reverse" />
    </div>
  );
};

export default FloatingObjects;