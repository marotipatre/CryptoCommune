import { ClubTable } from "../components/ClubTable";

function AllClubPage() {
  return (
    <div>
      <p className="text-center mt-10 text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text hover:scale-110 transition duration-300">
        Join to available clubs
      </p>
      <div className="flex justify-center items-center mt-10">
        <ClubTable
          data={[
            {
              id: 1,
              name: "web3",
              members: 1,
              proposals: 2,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default AllClubPage;
