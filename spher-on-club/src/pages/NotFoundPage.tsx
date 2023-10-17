import { ReactElement } from "react";
import { GButton } from "../components/global";
// import back from "../../assets/back-404.svg";

export function NotFoundPage(): ReactElement {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="bg-[#6F3CD3] text-center rounded-lg p-20 text-white">
        <p className="font-spaceGrotesk text-3xl text-bold">
          Nothing Found here !
        </p>
        <p className="font-spaceGrotesk text-3xl mt-6 mb-11">
          Thre’s no club here <br /> please add some by
          invest
        </p>
        <div className="mb-20">
          <GButton
            value="take me to the Explore"
            // startIcon={<img src={back} alt="back" />}
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 16,
              borderRadius: 90,
              backgroundColor: "#fff",
              color: "black",
              paddingRight: 16,
              paddingLeft: 16,
              fontWeight: 700,
              paddingBottom: 10,
              paddingTop: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}
