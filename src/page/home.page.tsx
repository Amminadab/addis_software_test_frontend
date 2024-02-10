import bg from "../assets/bg_music.jpg";
import MusicIcon from "../assets/music.svg";
import { useEffect, useState, ChangeEvent } from "react";

const apiUrl = import.meta.env.VITE_APP_API_URL;

import { Music, Filter } from "../interface/interface";
import {
  Button,
  Flex,
  GridContainer,
  InputStyles,
  MusicCard,
  MusicImage,
  OptionStyles,
  Paragraph,
  SelectStyles,
  StyledImage,
  WrapperSection,
} from "../emotion/home.style";
import { Section, Wrapper } from "../emotion/global.style";

const Home = () => {
  const [error, setError] = useState("");
  const [songs, setSongs] = useState<Music[]>([]);
  const [filter, setFilter] = useState<Filter>({
    genre: "jazz",
    album: "",
    title: "",
    artist: "",
  });
  // console.log(filter);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`${apiUrl}/songs/`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        // console.log(data, "no");
        if (data?.data?.songs?.length === 0) {
          setError("noData");
        } else {
          setSongs(data?.data?.songs);
        }
      } catch (error) {
        setError("externalError");
      }
    };

    fetchSongs();
  }, []);

  const handleSearch = () => {
    const fetchSongs = async () => {
      try {
        const url = `${apiUrl}/songs/filter?genre=${filter.genre}${
          filter.album && `&album=${filter.album}`
        }${filter.title && `&title=${filter.title}`}${
          filter.artist && `&artist=${filter.artist}`
        }`;
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch songs");
        }
        const data = await response.json();
        if (data?.data?.song?.length === 0) {
          setError("noData");
        } else {
          setSongs(data?.data?.song);
        }
      } catch (error) {
        setError("externalError");
      }
    };
    fetchSongs();
  };

  return (
    <>
      <Wrapper>
        <Section>
          <StyledImage src={bg} alt="background image" />
          <WrapperSection>
            <Paragraph>
              Song Filter Application For Addis Software Technologies
            </Paragraph>
            <Flex>
              <InputStyles
                variant="primary"
                type="text"
                name="title"
                placeholder="song"
                value={filter.title}
                onChange={handleInputChange}
              />
              <InputStyles
                variant="primary"
                type="text"
                name="artist"
                placeholder="artist"
                value={filter.artist}
                onChange={handleInputChange}
              />
              <InputStyles
                variant="primary"
                type="text"
                name="album"
                placeholder="album"
                value={filter.album}
                onChange={handleInputChange}
              />
              <SelectStyles
                name="genre"
                id="genre"
                value={filter.genre}
                onChange={handleInputChange}
              >
                <OptionStyles value="jazz">jazz</OptionStyles>
                <OptionStyles value="dave">Dave</OptionStyles>
                <OptionStyles value="pumpernickel">Pumpernickel</OptionStyles>
                <OptionStyles value="reeses">Reeses</OptionStyles>
              </SelectStyles>
              <Button onClick={handleSearch}>Search</Button>
            </Flex>
          </WrapperSection>
        </Section>
        <Section>
          <GridContainer>
            {songs.length > 0 &&
              songs.map((music, index) => (
                <MusicCard key={index}>
                  <h3>{music.title}</h3>
                  <p>Artist: {music.artist}</p>
                  {music.album && <p>Album: {music.album}</p>}
                  <p>Genre: {music.genre}</p>
                  <MusicImage src={MusicIcon} />
                </MusicCard>
              ))}
          </GridContainer>
        </Section>
      </Wrapper>
    </>
  );
};

export default Home;
