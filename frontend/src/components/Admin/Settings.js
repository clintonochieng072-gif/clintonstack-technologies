import React from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Settings = ({
  profile,
  logo,
  toggleProfilePicture,
  toggleLogo,
  handleLogoUpload,
  handleProfileUpload,
}) => {
  return (
    <div className="space-y-6">
      {/* Profile Picture Settings */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Profile Picture Settings
        </h2>
        <div className="mb-4">
          <label htmlFor="profile-upload" className="sr-only">
            Upload new profile picture
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleProfileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            onClick={toggleProfilePicture}
            aria-label={
              profile.showProfilePicture
                ? "Hide profile picture from public view"
                : "Show profile picture in public view"
            }
            className={`px-4 py-2 rounded font-medium transition-colors duration-300 w-full sm:w-auto ${
              profile.showProfilePicture
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-500 hover:bg-gray-600 text-white"
            }`}
          >
            {profile.showProfilePicture
              ? "Hide Profile Picture"
              : "Show Profile Picture"}
          </button>
          <span className="text-sm text-gray-600">
            Current Status:{" "}
            <span
              className={`font-semibold ${
                profile.showProfilePicture ? "text-green-700" : "text-gray-700"
              }`}
            >
              {profile.showProfilePicture ? "Visible" : "Hidden"}
            </span>
          </span>
        </div>
        {profile.photo && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <p className="text-sm font-medium text-gray-600 mb-2">
              Current Profile Picture:
            </p>
            <img
              src={`${API_URL}${profile.photo}`}
              alt="Current Profile Picture"
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Logo Upload and Toggle */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Company Logo Settings
        </h2>
        <div className="mb-4">
          <label htmlFor="logo-upload" className="sr-only">
            Upload new logo
          </label>
          <input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            onClick={toggleLogo}
            aria-label={
              logo.showLogo
                ? "Hide company logo from public view"
                : "Show company logo in public view"
            }
            className={`px-4 py-2 rounded font-medium transition-colors duration-300 w-full sm:w-auto ${
              logo.showLogo
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-500 hover:bg-gray-600 text-white"
            }`}
          >
            {logo.showLogo ? "Hide Logo" : "Show Logo"}
          </button>
          <span className="text-sm text-gray-600">
            Current Status:{" "}
            <span
              className={`font-semibold ${
                logo.showLogo ? "text-green-700" : "text-gray-700"
              }`}
            >
              {logo.showLogo ? "Visible" : "Hidden"}
            </span>
          </span>
        </div>
        {logo.url && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <p className="text-sm font-medium text-gray-600 mb-2">
              Current Logo:
            </p>
            <img
              src={`${API_URL}${logo.url}`}
              alt="Current Logo"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
