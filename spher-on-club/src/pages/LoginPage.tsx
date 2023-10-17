import Header from "../components/Header";
import { GButton } from "../components/global";

const gradientTextStyle = {
  background:
    "linear-gradient(93.57deg, #E5E7EB 2.93%, rgba(255, 255, 255, 0.689446) 37.09%, rgba(141, 179, 255, 0.433555) 65.23%, rgba(255, 255, 255, 0.143419) 97.14%, rgba(229, 231, 235, 0) 112.92%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontSize: "48px",
  fontWeight: "bold",
  fontweight: "700",
  fontFamily: "Space Grotesk",
  lineHeight: 1.2,
};

const LoginPage = () => {
  return (
    <div className="bg-hearverse-bg bg-landing-page">
      <Header />
      <div className="flex font-bold justify-center items-center flex-col w-screen mt-20">
        <div className="flex-grow flex flex-col justify-center items-center mt-32">
          <div className="flex flex-col justify-center items-center">
            <p style={gradientTextStyle} className="font-grotesk text-center">
              Welcome to Spheron Club
            </p>
            <p className="mt-6 mb-10 text-2xl font-inter text-[#CAC5D3]">
              Your First investment Web3 Club
            </p>
            {/* <p style={gradientTextStyle} className="font-grotesk text-center font-lg">
              SpheronClub is a light web wallet and Investment Club platform to
              manage funds (treasury) in Celo Blockchain.
            </p> */}
          </div>
          <div className="h-64 w-10" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
