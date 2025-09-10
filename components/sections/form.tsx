

"use client"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Form() {
    const [isVisible, setIsVisible] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const [name, setName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [address, setAddress] = useState("")


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Format the message for WhatsApp
        const message = `Name: ${name}%0AContact Number: ${contactNumber}%0AAddress: ${address}`

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/+919566383338?text=${message}`, '_blank')
    }

    useEffect(() => {
        // Show after page load (1s)
        const showTimer = setTimeout(() => {
            setIsVisible(true)
            // Start animation on next frame
            requestAnimationFrame(() => {
                setIsAnimating(true)
            })
        }, 5000)

        return () => {
            clearTimeout(showTimer)
        }
    }, [])

    const handleClose = () => {
        // Trigger exit animation
        setIsAnimating(false)
        // Remove from DOM after animation ends
        setTimeout(() => {
            setIsVisible(false)
        }, 800)
    }

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-[800ms] ${isAnimating ? "opacity-100" : "opacity-0"
                    }`}
                onClick={handleClose}
            />

            {/* Modal Container */}
            <div
                className={`relative w-full max-w-md transform transition-all duration-[800ms] ease-out ${isAnimating ? "scale-100 opacity-100" : "scale-75 opacity-0"
                    }`}
            >
                {/* Modal Content */}
                <div className="relative bg-gradient-to-br from-blue-800 to-purple-900 border-2 border-amber-200 rounded-xl shadow-2xl overflow-hidden">
                    {/* Header with close button */}
                    <div className="bg-gradient-to-r from-blue-800 to-purple-900 text-amber-50 p-4 relative">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg tracking-wide">CONTACT US</h3>
                                <p className="text-xs opacity-90">We'll get back to you shortly</p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                                aria-label="Close form"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
                    </div>

                    {/* Form Content */}
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-amber-100 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 bg-blue-700/50 border border-amber-200/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contactNumber" className="block text-sm font-medium text-amber-100 mb-2">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    className="w-full px-4 py-3 bg-blue-700/50 border border-amber-200/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                    placeholder="Enter your contact number"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-amber-100 mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full px-4 py-3 bg-blue-700/50 border border-amber-200/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                    placeholder="Enter your address"
                                    required
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg mt-2"
                            >
                                Submit via WhatsApp
                            </button>
                        </form>

                        <div className="flex justify-center space-x-2 pt-4 mt-4 border-t border-amber-200/20">
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            <div className="w-2 h-2 bg-amber-500 rounded-full" />
                            <div className="w-2 h-2 bg-amber-600 rounded-full" />
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