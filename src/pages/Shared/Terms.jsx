import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#f9f8f7]  dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-6">
          Terms of Service
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to <strong>Athlofy</strong>. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-blue-900 dark:text-gray-200 mt-6 mb-2">
          1. Use of Platform
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You may use Athlofy only in compliance with these terms and all applicable laws. Misuse of the platform, including fraud, abuse, or illegal activity, is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold text-blue-900 dark:text-gray-200 mt-6 mb-2">
          2. User Accounts
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2 className="text-xl font-semibold text-blue-900 dark:text-gray-200 mt-6 mb-2">
          3. Event Participation
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          All bookings made through Athlofy are subject to availability and organizer approval. We are not liable for cancellations or changes made by event organizers.
        </p>

        <h2 className="text-xl font-semibold text-blue-900 dark:text-gray-200 mt-6 mb-2">
          4. Content Ownership
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Any content you upload (like tips, feedback, or event details) remains yours. However, you grant Athlofy a license to display and distribute that content as part of our service.
        </p>

        <h2 className="text-xl font-semibold text-blue-900 dark:text-gray-200 mt-6 mb-2">
          5. Changes to Terms
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Athlofy reserves the right to update these terms at any time. We will notify users of major changes, and your continued use of the platform constitutes acceptance of those changes.
        </p>

        <h2 className="text-xl font-semibold text-blue-900 dark:text-gray-200 mt-6 mb-2">
          6. Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you have questions or concerns regarding these terms, please contact us at: <a href="mailto:nusrathum31@gmail.com" className="text-blue-600 hover:underline">nusrathum31@gmail.com</a>
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          Last updated: July 2, 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
