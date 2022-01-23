import { useState } from 'react';
import { uauth } from '../../config/unstoppableDomain';
import { Container } from '../TopContainer/TopContainer';
import { RandomNFTValues } from '../screenComponents/LoggedIn/index';

function Index() {
  const logout = () => uauth.logout();
  const [randomValue, setRandomValue] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generateRandomNFT = () => {
    setLoading(true);
    setRandomValue(Math.floor(Math.random() * 9) + 0);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Container pageTitle="WELCOME" title="Home Page">
      <>
        <div className="hero-overlay min-h-screen bg-black p-4">
          <div className="w-full text-center">
            <h1 className="text-2xl font-bold text-white">RANDOM NFT GENERATOR</h1>
            <button onClick={loading ? undefined : generateRandomNFT} className="btn mt-3">
              {loading ? 'Loading' : 'Generate NFT'}
            </button>
            {loading && <p className="text-xl animate-bounce text-white mt-16 font-bold">Generating your NFT ...</p>}
            {!loading && typeof randomValue === 'number' && <RandomNFTValues index={randomValue} />}
            <button onClick={logout} className="btn mt-3 bg-red-500 hover:bg-red-600 fixed bottom-3 right-3 px-10">
              Logout
            </button>
          </div>
        </div>
      </>
    </Container>
  );
}

export default Index;
