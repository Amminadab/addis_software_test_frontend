export interface InputProps {
  variant: "primary" | "secondary";
}
export interface ToggleButtonProps {
  isActive: boolean;
}
export interface Music {
  title: string;
  artist: string;
  album?: string;
  genre: string;
}

export interface Filter {
  genre: string | "";
  album: string;
  title: string;
  artist: string;
  _id?: any;
}

export interface FormValues {
  title: string;
  artist: string;
  album: string;
  genre: string;
  index?: string;
  _id?: string;
}
export interface state {
  song: FormValues;
  songs: FormValues[];
}

export interface GenreStat {
  _id: string;
  totalSongs: number;
}

export interface StatType {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}

export interface ArtistStat {
  artists: individual[];
  album: string;
  totalSongs: number;
  _id?: string;
}

export interface individual {
  album: string;
  totalSongs: number;
}
