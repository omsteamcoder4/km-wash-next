// "use client"
// import { useState, useEffect } from "react"
// import { X } from "lucide-react"

// export default function Form() {
//     const [isVisible, setIsVisible] = useState(false)
//     const [isAnimating, setIsAnimating] = useState(false)

//     const [name, setName] = useState("")
//     const [contactNumber, setContactNumber] = useState("")

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()

//         // Format the message for WhatsApp
//         const message = `Name: ${name}%0AContact Number: ${contactNumber}`

//         // Open WhatsApp with pre-filled message
//         window.open(`https://wa.me/+919566383338?text=${message}`, '_blank')
//     }


//     useEffect(() => {
//         // Show after page load (1s)
//         const showTimer = setTimeout(() => {
//             setIsVisible(true)
//             // Flip on next paint so CSS transitions run
//             requestAnimationFrame(() => {
//                 setIsAnimating(true)

//                 // Auto-hide 5s AFTER it starts animating in

//                 // hideTimer = window.setTimeout(() => {
//                 //     handleClose()
//                 // }, 5000)
//             })
//         }, 1000)

//         // We keep a separate ref for the hide timer so we can clear it
//         let hideTimer: number | undefined

//         return () => {
//             clearTimeout(showTimer)
//             if (hideTimer) clearTimeout(hideTimer)
//         }
//     }, [])

//     const handleClose = () => {
//         // Trigger exit animation (to top-right)
//         setIsAnimating(false)
//         // Remove from DOM after animation ends
//         setTimeout(() => {
//             setIsVisible(false)
//         }, 800) // must match the container's duration
//     }

//     if (!isVisible) return null

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             {/* Backdrop (no outside-close) */}
//             <div
//                 className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-[800ms] ${isAnimating ? "opacity-100" : "opacity-0"
//                     }`}
//             />

//             {/* Newspaper Container */}
//             <div
//                 className={`relative transform transition-transform  duration-[800ms] ease-out will-change-transform ${isAnimating
//                     // ENTERED (on-screen)
//                     ? "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100"
//                     // INITIAL / EXIT STATES:
//                     // initial: top-left; exit: we toggle back to this branch but we’ll override with top-right using a small trick:
//                     : "opacity-0"
//                     } ${isAnimating ? "" : "-translate-x-96 -translate-y-96 -rotate-45 scale-50"}`}
//             // When closing, we want to go to top-right instead of initial top-left.
//             // We can add a data-attribute toggle if you want two distinct branches,
//             // but a simple trick is to wrap the content and animate that on exit:
//             >
//                 {/* Shadow */}
//                 <div className={`absolute inset-0 bg-black/20 transform translate-x-2 translate-y-2 rounded-lg`} />

//                 {/* Main Newspaper (we'll steer exit direction here) */}
//                 <div
//                     className={`relative bg-gradient-to-br from-blue-800 to-primary-dark border-2 border-amber-200 rounded-lg shadow-2xl max-w-md mx-4 overflow-hidden
//           transform transition-transform duration-[800ms] ease-out
//           ${isAnimating ? "translate-x-0 -translate-y-0 rotate-0 scale-100 opacity-100" : "translate-x-96 -translate-y-96 rotate-45 scale-50 opacity-0"}`}
//                 >
//                     <form onSubmit={handleSubmit} className="pt-4 space-y-4">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-amber-100 mb-1">
//                                 Your Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full px-3 py-2 bg-blue-700 border border-amber-200 rounded-md text-white placeholder-blue-300"
//                                 placeholder="Enter your name"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="contactNumber" className="block text-sm font-medium text-amber-100 mb-1">
//                                 Contact Number
//                             </label>
//                             <input
//                                 type="tel"
//                                 id="contactNumber"
//                                 value={contactNumber}
//                                 onChange={(e) => setContactNumber(e.target.value)}
//                                 className="w-full px-3 py-2 bg-blue-700 border border-amber-200 rounded-md text-white placeholder-blue-300"
//                                 placeholder="Enter your contact number"
//                                 required
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-colors duration-200"
//                         >
//                             Submit via WhatsApp
//                         </button>
//                     </form>


//                     {/* Paper texture overlay */}
//                     <div className="absolute inset-0 opacity-10 pointer-events-none">
//                         <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-900/5 to-transparent" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


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