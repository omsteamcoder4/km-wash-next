


// "use client"
// import { useState } from "react"

// export default function Disclaimer() {
//   // const [name, setName] = useState("")
//   // const [contactNumber, setContactNumber] = useState("")

//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault()
    
//   //   // Format the message for WhatsApp
//   //   const message = `Name: ${name}%0AContact Number: ${contactNumber}`
    
//   //   // Open WhatsApp with pre-filled message
//   //   window.open(`https://wa.me/+919566383338?text=${message}`, '_blank')
//   // }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center p-4">
//       <div className="relative bg-gradient-to-br from-blue-800 to-primary-dark border-2 border-amber-200 rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-800 to-primary-dark text-amber-50 p-3 relative">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-bold text-lg tracking-wide">SERVICE NOTICE</h3>
//               <p className="text-xs opacity-90">Important Information</p>
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-4">
//           <div className="text-center border-b-2 border-amber-300 pb-2">
//             <h4 className="font-bold text-xl text-yellow-400 tracking-wide">DISCLAIMER</h4>
//           </div>

//           <div className="text-white leading-relaxed space-y-3">
//             <p className="text-sm font-medium">
//               <span className="font-bold text-yellow-400">*</span> We are an independent service provider and we are not
//               authorized associate partners from any brands.
//             </p>

//             <p className="text-sm font-medium">
//               All Service calls and repairs are performed by local repair vendors
//               <span className="font-semibold text-white"> (note: We don't hold any authorization of them)</span>
//             </p>
//           </div>

//           {/* Contact Form */}
//           {/* <form onSubmit={handleSubmit} className="pt-4 space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-amber-100 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-3 py-2 bg-blue-700 border border-amber-200 rounded-md text-white placeholder-blue-300"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
            
//             <div>
//               <label htmlFor="contactNumber" className="block text-sm font-medium text-amber-100 mb-1">
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 id="contactNumber"
//                 value={contactNumber}
//                 onChange={(e) => setContactNumber(e.target.value)}
//                 className="w-full px-3 py-2 bg-blue-700 border border-amber-200 rounded-md text-white placeholder-blue-300"
//                 placeholder="Enter your contact number"
//                 required
//               />
//             </div>
            
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-colors duration-200"
//             >
//               Submit via WhatsApp
//             </button>
//           </form> */}

//           <div className="flex justify-center space-x-2 pt-2">
//             <div className="w-2 h-2 bg-amber-400 rounded-full" />
//             <div className="w-2 h-2 bg-amber-500 rounded-full" />
//             <div className="w-2 h-2 bg-amber-600 rounded-full" />
//           </div>
//         </div>

//         {/* Paper texture overlay */}
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-900/5 to-transparent" />
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"
import { useState } from "react"

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-blue-800 to-indigo-900 border-2 border-amber-200 rounded-xl shadow-2xl w-full max-w-4xl mx-4 overflow-hidden" style={{ width: '80%' }}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-amber-50 p-5 relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-2xl tracking-wide">SERVICE NOTICE</h3>
              <p className="text-base opacity-90 mt-1">Important Information</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="text-center border-b-2 border-amber-300 pb-4">
            <h4 className="font-bold text-3xl text-yellow-400 tracking-wide">DISCLAIMER</h4>
          </div>

          <div className="text-white leading-relaxed space-y-5 text-lg">
            <p className="font-medium flex items-start">
              <span className="font-bold text-yellow-400 text-2xl mr-2">*</span> 
              We are an independent service provider and we are not authorized associate partners from any brands.
            </p>

            <p className="font-medium">
              All service calls and repairs are performed by local repair vendors
              <span className="font-semibold text-white block mt-2">(Note: We don't hold any authorization of them)</span>
            </p>
          </div>

          <div className="flex justify-center space-x-3 pt-4">
            <div className="w-3 h-3 bg-amber-400 rounded-full" />
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <div className="w-3 h-3 bg-amber-600 rounded-full" />
          </div>
        </div>

        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-900/5 to-transparent" />
        </div>
      </div>
    </div>
  )
}