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
  genre: string;
  album: string;
  title: string;
  artist: string;
}
