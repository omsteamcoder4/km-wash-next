"use client"

export default function Disclaimer() {
  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden border-t border-b border-amber-500/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-amber-50 p-4 sm:p-5 relative">
        <div className="flex items-center justify-between">
          <div className="text-center w-full">
            <h4 className="font-bold text-4xl md:text-5xl text-yellow-400 tracking-wide py-4 md:py-4 font-serif">DISCLAIMER</h4>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/5 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8 space-y-4">
        <div className="text-white leading-relaxed space-y-4 text-lg sm:text-xl md:text-2xl py-8 font-sans">
          <p className="font-medium">
            <span className="font-bold text-yellow-400 text-2xl md:text-3xl mr-2">*</span> 
            We are an independent service provider and we are not authorized associate partners of any brands. All service calls and repairs are performed by local repair vendors (note: we don't hold any authorization of them).
            <span className="font-bold text-yellow-400 text-2xl md:text-3xl ml-2">*</span> 
          </p>
        </div>

        <div className="flex justify-center space-x-2 pt-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-600 rounded-full" />
        </div>
      </div>

      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-900/5 to-transparent" />
      </div>
    </div>
  )
}