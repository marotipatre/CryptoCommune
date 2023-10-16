import React, { useState } from "react";

interface ClubFormProps {
  // onCreateClub: (clubName: string, password: string) => void;
}

const ClubForm: React.FC<ClubFormProps> = () => {
  const [clubName, setClubName] = useState("");
  const [password, setPassword] = useState("");

  const handleClubNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClubName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onCreateClub(clubName, password);
    setClubName("");
    setPassword("");
  };

  return (
    <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      <div className="mb-4 ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="clubName"
        >
          Club Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="clubName"
          type="text"
          placeholder="Enter club name"
          value={clubName}
          onChange={handleClubNameChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Club
        </button>
      </div>
    </form>
  );
};

export default ClubForm;
