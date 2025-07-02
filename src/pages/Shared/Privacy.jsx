import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#f9f8f7]  dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          At <strong className='text-blue-800'>Athlofy</strong>, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Personal information (e.g., name, email) when you sign up or contact us</li>
          <li>Event participation and booking history</li>
          <li>Technical information like IP address and browser type</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>To manage your account and bookings</li>
          <li>To improve user experience and personalize content</li>
          <li>To send you important notifications and updates</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
          3. Sharing Your Data
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We do not sell or share your data with third parties without your consent, except when legally required.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
          4. Your Rights
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:nusrathum31@gmail.com" className="text-blue-600 hover:underline">nusrathum31@gmail.com</a> for assistance.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
          5. Changes to This Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may update this policy from time to time. You’ll be notified of significant changes through our platform or via email.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          Last updated: July 2, 2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
