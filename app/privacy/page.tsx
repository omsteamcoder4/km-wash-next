'use client'

import React from "react";

const PrivacyPolicyCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900/20 flex items-center justify-center p-6">
      <div className="relative w-full max-w-3xl rounded-3xl border-[3px] border-yellow-400/90 bg-gradient-to-br from-[#0d2b57] to-[#0b2041] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
        {/* top accent line */}

        {/* Home button */}
        <div className="absolute top-3 left-3">
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center gap-1 rounded-full bg-yellow-400 text-[#0b1d38] px-3 py-1 text-xs font-semibold hover:bg-yellow-300 transition"
            aria-label="Go to home"
            type="button"
          >
            <span className="-ml-1">←</span> Home
          </button>
        </div>

        {/* content */}
        <div className="px-6 sm:px-10 py-7 sm:py-9 text-slate-100 mt-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300/90">
            Important Information
          </p>

          <h1 className="text-center mt-2 text-2xl sm:text-3xl font-extrabold text-yellow-300">
            Privacy Policy
          </h1>

          <div className="mt-4 h-0.5 w-28 mx-auto bg-yellow-400/80 rounded-full" />

          <div className="mt-6 space-y-6 leading-relaxed">
            <section>
              <p className="text-slate-200">
                At <span className="font-semibold">KM Enterprises</span>, we are committed to protecting your privacy.
                This privacy policy explains how we collect, use, and safeguard your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Information Collection</h2>
              <p className="text-slate-200 mt-2">
                We collect personal information from you when you use our services.
                This may include your name, contact details, and service preferences.
                This information is collected solely for the purpose of providing you with the best possible service
                and for follow-up purposes.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Use of Information</h2>
              <p className="text-slate-200 mt-2">
                Your personal information is used to provide, improve, and personalize our services.
                We do not sell, trade, or otherwise transfer your personal information to outside parties.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Data Protection</h2>
              <p className="text-slate-200 mt-2">
                We implement a variety of security measures to maintain the safety of your personal information.
                Your information is stored in a secure manner, and we take necessary steps to ensure it is protected
                against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Third-Party Services</h2>
              <p className="text-slate-200 mt-2">
                We do not share your personal information with third parties.
                Your information is used solely by KM Enterprises for follow-up and service improvement purposes.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Consent</h2>
              <p className="text-slate-200 mt-2">
                By using our services, you consent to our privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Contact Us</h2>
              <p className="text-slate-200 mt-2">
                If you have any questions regarding this privacy policy, you can contact us at:
              </p>

              <div className="mt-3 rounded-2xl bg-[#0b1d38]/70 ring-1 ring-white/10 p-4 sm:p-5">
                <p className="text-sm mt-1"><span className="font-semibold">Phone:</span> +91 95663 83338</p>
                <p className="text-sm mt-1"><span className="font-semibold">Website:</span> KM Enterprises</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyCard;
