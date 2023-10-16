import Header from "../components/Header";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="flex font-bold justify-center items-center flex-col w-screen mt-20">
        <p className="text-3xl mb-10 text-blue">Welcome to Spheron Club</p>
        <p>Your First investment Web3 Club</p>
        <p>Connect your wallet to get started</p>
      </div>
    </div>
  );
};

export default LoginPage;
