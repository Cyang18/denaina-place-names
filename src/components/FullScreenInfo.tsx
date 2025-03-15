import { useState } from "react";

const FullScreenInfo = ({
  location,
  isOpen,
  onClose,
}: {
  location: any;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (location === null || isOpen === false) return null;

  const [showVideo, setShowVideo] = useState(false); 
  const [playAudio, setPlayAudio] = useState(false); 

  const handleImageClick = () => {
    setShowVideo(true);
  };

  const toggleAudio = () => {
    setPlayAudio((prev) => !prev);
  };

 
  const getYouTubeThumbnail = (videoUrl: string) => {
    const videoId = videoUrl.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };


  const getYouTubeEmbedUrl = (videoUrl: string) => {
    const videoId = videoUrl.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "90vw",
        height: "100vh",
        backgroundColor: "#FFF1DB",
        color: "#543310",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <h1>{location.title}</h1>
      <h2>
        {location.denainaName ?? "No Dena'ina Name available."} -{" "}
        {location.denainaMeaning ?? "No Dena'ina Meaning available."}
        {location.videoUrl && (
          <button
            onClick={toggleAudio}
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              fontSize: "16px",
              backgroundColor: "#E18AAA",
              color: "White",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {playAudio ? "Pause Audio" : "Play Audio"}
          </button>
        )}
      </h2>
      <p>{location.description ?? "No description available."}</p>

      {playAudio && location.audioUrl && (
        <iframe
          width="0"
          height="0"
          src={getYouTubeEmbedUrl(location.audioUrl)}
          title={`${location.title} Audio`}
          frameBorder="0"
          allow="autoplay"
          style={{ display: "none" }} 
        />
      )}

      {showVideo ? (
        <iframe
          width="80%"
          height="300"
          src={getYouTubeEmbedUrl(location.videoUrl)}
          title={location.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : location.videoUrl ? (
        <img
          src={getYouTubeThumbnail(location.videoUrl)}
          alt={location.title}
          style={{
            width: "80%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        />
      ) : location.imageUrl ? (
        <img
          src={location.imageUrl}
          alt={location.title}
          style={{
            width: "80%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        />
      ) : (
        <p>No media available.</p>
      )}

      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: "10px",
          right: "10pt",
          marginTop: "1px",
          padding: "5px 10px",
          fontSize: "20px",
          borderRadius: "90%",
          backgroundColor: "#E18AAA",
          color: "White",
          border: "none",
          cursor: "pointer",
        }}
      >
        &#x2715;
      </button>
    </div>
  );
};

export default FullScreenInfo;

