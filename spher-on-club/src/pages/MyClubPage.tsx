import { ClubTable } from "../components/ClubTable";

function MyClubPage() {
  return (
    <div>
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

export default MyClubPage;
