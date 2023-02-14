import Map from '@/src/components/Map/MapWrapper';
import LoginModal from '../components/Modal/Login';

export default function Home() {
  return (
    <>
      <article>
        <Map>
          <LoginModal />
        </Map>
      </article>
    </>
  );
}
