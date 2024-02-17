import bg from "../assets/bg_music.webp";
import MusicIcon from "../assets/music.svg";
import { useEffect, useState, ChangeEvent } from "react";

import { Filter, state } from "../interface/interface";
import {
  Flex,
  GridContainer,
  InputStyles,
  MusicCard,
  MusicImage,
  OptionStyles,
  Paragraph,
  ParagraphSmall,
  SelectStyles,
  Skeleton,
  StyledImage,
  WrapperSection,
} from "../emotion/home.style";
import { Section, Wrapper } from "../emotion/global.style";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const [filter, setFilter] = useState<Filter>({
    genre: "",
    title: "",
    artist: "",
    album: "",
  });
  const [filteredSongs, setFilteredSongs] = useState<Filter[]>([]);

  const songs = useSelector((state: state) => state.songs.songs);
  const isLoading = useSelector((state: state) => state.songs.isLoading);

  useEffect(() => {
    setFilteredSongs(songs);
  }, [songs.length]);

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
    if (songs) {
    }
    const filtered = songs.filter((music) => {
      const { title, artist, album, genre } = filter;
      return (
        music.title.toLowerCase().includes(title.toLowerCase()) &&
        music.artist.toLowerCase().includes(artist.toLowerCase()) &&
        music.album.toLowerCase().includes(album.toLowerCase()) &&
        music.genre.toLowerCase().includes(genre.toLowerCase())
      );
    });
    setFilteredSongs(filtered);
  }, [filter, songs]);

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
                placeholder="Search by song, artist, or album"
                value={filter.title}
                onChange={handleInputChange}
              />
              <SelectStyles
                name="genre"
                id="genre"
                value={filter.genre}
                onChange={handleInputChange}
              >
                <OptionStyles value="">All Genres</OptionStyles>
                <OptionStyles value="jazz">Jazz</OptionStyles>
                <OptionStyles value="pop">Pop</OptionStyles>
                <OptionStyles value="rock">Rock</OptionStyles>
              </SelectStyles>
            </Flex>
          </WrapperSection>
        </Section>
        <Section>
          <GridContainer>
            {isLoading && new Array(6).fill(<Skeleton />)}
            {!isLoading && (
              <>
                {filteredSongs.length > 0 ? (
                  filteredSongs.map((music, index) => (
                    <MusicCard key={index}>
                      <h3>{music.title}</h3>
                      <p>Artist: {music.artist}</p>
                      {music.album && <p>Album: {music.album}</p>}
                      <p>Genre: {music.genre}</p>
                      <MusicImage src={MusicIcon} />
                    </MusicCard>
                  ))
                ) : (
                  <ParagraphSmall>No songs found.</ParagraphSmall>
                )}
              </>
            )}
          </GridContainer>
        </Section>
      </Wrapper>
    </>
  );
};

export default Home;
