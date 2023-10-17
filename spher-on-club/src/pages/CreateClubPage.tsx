import ClubForm from "../components/ClubForm";

function CreateClubPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center mt-10 text-4xl font-bold bg-gradient-to-r from-blue-500 to-yellow-500 text-transparent bg-clip-text hover:scale-110 transition duration-300">
        Create your own investment club
      </p>
      <div className="m-10">
        <ClubForm />
      </div>
    </div>
  );
}

export default CreateClubPage;
