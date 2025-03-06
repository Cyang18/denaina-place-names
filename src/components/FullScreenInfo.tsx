import { DenainaLocation } from "..";

const FullScreenInfo = ({ location, isOpen, onClose }: {
  location: DenainaLocation | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (location === null || isOpen === false) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '90vw',
      height: '100vh',
      // backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <h1>{location.title}</h1>
      <p>{location.description ?? 'No description available.'}</p>
      {location.imageUrl && <img src={location.imageUrl} alt={location.title} style={{ width: '80%', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }} />}
      <button onClick={onClose} style={{
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}>
        Close
      </button>
    </div>
  );
};

export default FullScreenInfo;
