"use client"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Show after page load (1s)
    const showTimer = setTimeout(() => {
      setIsVisible(true)
      // Flip on next paint so CSS transitions run
      requestAnimationFrame(() => {
        setIsAnimating(true)

        // Auto-hide 5s AFTER it starts animating in
        hideTimer = window.setTimeout(() => {
          handleClose()
        }, 5000)
      })
    }, 1000)

    // We keep a separate ref for the hide timer so we can clear it
    let hideTimer: number | undefined

    return () => {
      clearTimeout(showTimer)
      if (hideTimer) clearTimeout(hideTimer)
    }
  }, [])

  const handleClose = () => {
    // Trigger exit animation (to top-right)
    setIsAnimating(false)
    // Remove from DOM after animation ends
    setTimeout(() => {
      setIsVisible(false)
    }, 800) // must match the container's duration
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop (no outside-close) */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-[800ms] ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Newspaper Container */}
      <div
        className={`relative transform transition-transform  duration-[800ms] ease-out will-change-transform ${
          isAnimating
            // ENTERED (on-screen)
            ? "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100"
            // INITIAL / EXIT STATES:
            // initial: top-left; exit: we toggle back to this branch but we’ll override with top-right using a small trick:
            : "opacity-0"
        } ${isAnimating ? "" : "-translate-x-96 -translate-y-96 -rotate-45 scale-50"}`}
        // When closing, we want to go to top-right instead of initial top-left.
        // We can add a data-attribute toggle if you want two distinct branches,
        // but a simple trick is to wrap the content and animate that on exit:
      >
        {/* Shadow */}
        <div className={`absolute inset-0 bg-black/20 transform translate-x-2 translate-y-2 rounded-lg`} />

        {/* Main Newspaper (we'll steer exit direction here) */}
        <div
          className={`relative bg-gradient-to-br from-blue-800 to-primary-dark border-2 border-amber-200 rounded-lg shadow-2xl max-w-md mx-4 overflow-hidden
          transform transition-transform duration-[800ms] ease-out
          ${isAnimating ? "translate-x-0 -translate-y-0 rotate-0 scale-100 opacity-100" : "translate-x-96 -translate-y-96 rotate-45 scale-50 opacity-0"}`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-800 to-primary-dark text-amber-50 p-3 relative">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg tracking-wide">SERVICE NOTICE</h3>
                <p className="text-xs opacity-90">Important Information</p>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Close disclaimer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="text-center border-b-2 border-amber-300 pb-2">
              <h4 className="font-bold text-xl text-yellow-400 tracking-wide">DISCLAIMER</h4>
            </div>

            <div className="text-white leading-relaxed space-y-3">
              <p className="text-sm font-medium">
                <span className="font-bold text-yellow-400">*</span> We are an independent service provider and we are not
                authorized associate partners from any brands.
              </p>

              <p className="text-sm font-medium">
                All Service calls and repairs are performed by local repair vendors
                <span className="font-semibold text-white"> (note: We don't hold any authorization of them)</span>
              </p>
            </div>

            <div className="flex justify-center space-x-2 pt-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-200" />
            </div>

            {/* Auto-close indicator (5s) */}
            <div className="text-center">
              <p className="text-xs text-yellow-300 opacity-75">This notice will close automatically</p>
              <div className="w-full bg-amber-200 rounded-full h-1 mt-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-[5000ms] ease-linear ${
                    isAnimating ? "w-0" : "w-full"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-900/5 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
