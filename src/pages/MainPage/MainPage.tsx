import { useEffect, useState } from "react";
import { useGetAllSongsQuery } from "../../store/api/songs.api";

const MainPage = () => {
  const { data } = useGetAllSongsQuery();

  return (
    <div className="container">
      {/* Заголовок Genius */}
      <h1 className="geniusTitle">GENIUS</h1>

      {/* Заголовок Charts */}
      <h2 className="chartsTitle">Charts</h2>

      <div className="songListContainer">
        {data &&
          data.chart_items.map((item: any, idx: number) => (
            <div key={idx} className="songList">
              <span className="songNumber">{idx + 1}</span>
              <img
                className="songImage"
                src={item.item.header_image_url}
                alt="song cover"
              />
              <div className="songDetails">
                <h3 className="songTitle">{item.item.full_title}</h3>
                <p className="songArtist">{item.item.artist_names}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
