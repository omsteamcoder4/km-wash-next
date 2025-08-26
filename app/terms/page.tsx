'use client'

import React from "react";

const TermsConditionsCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900/30 flex items-center justify-center p-6">
      <div className="relative w-full max-w-3xl rounded-3xl border-[3px] border-yellow-400/90 bg-gradient-to-br from-[#0d2b57] to-[#0b2041] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
        {/* top accent line */}
        {/* <div className="h-1.5 w-full bg-yellow-400/90 rounded-t-3xl" /> */}

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
            Terms &amp; Conditions
          </h1>

          <div className="mt-4 h-0.5 w-36 mx-auto bg-yellow-400/80 rounded-full" />

          <div className="mt-6 space-y-6 leading-relaxed">
            <section>
              <p className="text-slate-200">
                Welcome to <span className="font-semibold">KM Enterprises</span>. By using our services,
                you agree to comply with and be bound by the following terms and conditions.
                Please review them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">1. Services Provided</h2>
              <p className="text-slate-200 mt-2">
                KM Enterprises offers repair and maintenance services for washing machines, fridges, refrigerators,
                microwave ovens, and TVs. Our services are provided based on availability and the nature of the repair required.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">2. Appointment and Scheduling</h2>
              <p className="text-slate-200 mt-2">
                Appointments can be scheduled through our contact number or email. We strive to accommodate your
                preferred schedule, but availability may vary.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">3. Payment Terms</h2>
              <p className="text-slate-200 mt-2">
                All services are subject to charges as agreed upon during the service booking.
                Payments must be made upon completion of the service, unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">4. Customer Information</h2>
              <p className="text-slate-200 mt-2">
                We collect personal information from you for the purpose of providing our services and for follow-up purposes.
                Your information is stored securely and used solely for these purposes.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">5. Warranty and Liability</h2>
              <p className="text-slate-200 mt-2">
                We provide a limited warranty on parts and labor as specified at the time of service.
                KM Enterprises is not liable for any damages arising from the use of our services, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">6. Cancellation Policy</h2>
              <p className="text-slate-200 mt-2">
                Appointments can be canceled or rescheduled by contacting us at least 24 hours in advance.
                Late cancellations may incur a fee.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">7. Governing Law</h2>
              <p className="text-slate-200 mt-2">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which KM Enterprises operates.
              </p>
            </section>

            <section>
              <h2 className="text-yellow-300 font-semibold tracking-wide">Contact Us</h2>
              <p className="text-slate-200 mt-2">
                If you have any questions regarding these terms and conditions, you can contact us at:
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

export default TermsConditionsCard;
