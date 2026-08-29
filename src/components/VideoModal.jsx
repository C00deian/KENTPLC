import React from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0c0a28]/90 z-[100] flex items-center justify-center p-4 md:p-10"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="bg-black w-full max-w-5xl rounded-lg overflow-hidden relative shadow-2xl z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[#11c5c2] hover:text-[#282554] transition z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Aspect Ratio Wrapper */}
            <div className="relative aspect-video w-full">
              <iframe
                title="Arkmont Purpose Video"
                src="https://player.vimeo.com/video/586326416?autoplay=1&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full border-none"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
