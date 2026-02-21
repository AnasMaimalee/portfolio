import { useState, useEffect } from "react";

interface FormData {
  full_name: string;
  email: string;
  message: string;
}

export default function QuickRequest() {
  const [form, setForm] = useState<FormData>({ full_name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      const response = await fetch("https://celebs-barbie-dropped-contain.trycloudflare.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }

      setShowSuccess(true);
      setForm({ full_name: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg((err as Error).message || "Submission failed.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  // Auto-hide notifications
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => setShowError(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <>
      {/* TOP CENTER NOTIFICATION */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-emerald-600 max-w-md mx-auto animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Request sent successfully! I'll get back to you soon.</span>
            </div>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-red-600 max-w-md mx-auto animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-medium">{errorMsg}</span>
            </div>
          </div>
        </div>
      )}

      {/* FORM SECTION */}
      <section id="contact" className="py-32 bg-white dark:bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-subtitle mb-4">Get in touch</p>
          <h2 className="section-title mb-6">Have a project or idea?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Send a quick request and I'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-md mx-auto">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="full_name"
                required
                value={form.full_name}
                onChange={handleChange}
                placeholder="Your full name"
                disabled={loading}
                className="w-full rounded-xl px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={loading}
                className="w-full rounded-xl px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me briefly about your project or request..."
                disabled={loading}
                className="w-full rounded-xl px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl py-4 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Request →"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
