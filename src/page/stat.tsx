import axios from "axios";

import { Section } from "../emotion/global.style";
import { useEffect, useState } from "react";
import {
  StatBox,
  StatContainer,
  StatHeading,
  StatItem,
  StatWrapper,
} from "../emotion/stat.style";
import {
  ArtistStat,
  GenreStat,
  StatType,
  individual,
} from "../interface/interface";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const Stat = () => {
  const [stat, setStat] = useState<StatType>({
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
  });

  const [genreStat, setGenreStat] = useState<GenreStat[]>([]);
  const [artistStat, setArtistStat] = useState<ArtistStat[]>([]);

  useEffect(() => {
    fetchStats();
    fetchGenreStats();
    fetchArtistStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${apiUrl}/songs/numbers`);
      const { totalSongs, totalArtists, totalAlbums, totalGenres } =
        response.data.data.songs;
      setStat({
        totalSongs,
        totalArtists,
        totalAlbums,
        totalGenres,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchGenreStats = async () => {
    try {
      const response = await axios.get(`${apiUrl}/songs/genresongs`);
      setGenreStat(response.data.data.songs);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchArtistStats = async () => {
    try {
      const response = await axios.get(`${apiUrl}/songs/artitssongs`);
      setArtistStat(response.data.data.songs);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <StatWrapper>
      <Section>
        <StatBox>
          <StatHeading>Statistics</StatHeading>
          <StatContainer>
            <StatItem>Total Songs: {stat.totalSongs}</StatItem>
            <StatItem>Total Artists: {stat.totalArtists}</StatItem>
            <StatItem>Total Albums: {stat.totalAlbums}</StatItem>
            <StatItem>Total Genres: {stat.totalGenres}</StatItem>
          </StatContainer>
        </StatBox>
        <StatBox>
          <StatHeading>Statistics for Genre</StatHeading>
          <StatContainer>
            {genreStat.map((genre) => (
              <StatItem key={genre._id}>
                {genre._id}: {genre.totalSongs}
              </StatItem>
            ))}
          </StatContainer>
        </StatBox>
        <StatBox>
          <StatHeading>Statistics for Artist</StatHeading>
          <StatContainer>
            {artistStat.map((artistArr, index) => {
              return (
                <div key={index}>
                  <h4>artist : {artistArr._id}</h4>
                  <div>
                    {artistArr.artists.map((a: individual, i) => (
                      <p key={i}>
                        album {i + 1} : {a.album} songs: {a.totalSongs}
                      </p>
                    ))}
                  </div>
                  <p>total song : {artistArr.totalSongs}</p>
                </div>
              );
            })}
          </StatContainer>
        </StatBox>
      </Section>
    </StatWrapper>
  );
};

export default Stat;
