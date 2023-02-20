import Map from '../components/Map/MapWrapper';
import Navbar from '../components/Navbar/TopNav';
import LoginModal from '../components/Modal/Login';
import newStore from '../components/Store/module';

export default function Home() {
  return (
    <>
      <article>
        {newStore.getState().persist.globalModal.modal && true ? (
          <LoginModal />
        ) : null}

        <Navbar />
        <Map />
      </article>
    </>
  );
}
