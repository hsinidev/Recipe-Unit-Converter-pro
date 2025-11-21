import React from 'react';
import { XMarkIcon } from './icons/XMarkIcon';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-2xl bg-[#1a1f2e] border border-white/10 rounded-2xl shadow-2xl p-8 text-gray-200 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 transition-all p-2 rounded-full"
            aria-label="Close modal"
          >
            <XMarkIcon />
          </button>
        </div>
        <div className="prose prose-invert prose-p:text-gray-300 prose-a:text-sky-400 max-w-none">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;