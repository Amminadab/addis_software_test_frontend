import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Grid } from "../emotion/manage.style";
import { ChangeEvent, FormEvent, useState } from "react";
import { state } from "../interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { setSongSlice } from "../redux/slice/song";
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../redux/sagas/types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { nanoid } from "@reduxjs/toolkit";

interface FormProps {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}

const initialSongState = {
  title: "",
  artist: "",
  album: "",
  genre: "jazz",
  index: "0",
};

const Form: React.FC<FormProps> = ({ open, handleClickOpen, handleClose }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    title: false,
    artist: false,
    album: false,
  });
  const song = useSelector((state: state) => state.song);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let validationError = false;

    // Check if the value is empty
    if (value === "") {
      validationError = true;
    }

    // Update the song state
    dispatch(
      setSongSlice({
        ...song,
        [name]: value,
      })
    );

    // Update the error state
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationError,
    }));
  };

  const handleGenreChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    dispatch(
      setSongSlice({
        ...song,
        genre: value,
      })
    );
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let validationError = false;

    // Check if the value is empty
    if (value === "") {
      validationError = true;
    }

    // Update the error state
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationError,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    song.index == "0"
      ? dispatch({
          type: CREATE_SONG,
          song: { ...song, index: `${nanoid(8)}` },
        })
      : dispatch({ type: UPDATE_SONG_BY_ID, song });

    dispatch(setSongSlice(initialSongState));
    handleClose();
  };

  return (
    <>
      <Button
        size="large"
        className="mra"
        onClick={() => {
          handleClickOpen();
          dispatch(
            setSongSlice({
              title: "",
              artist: "",
              album: "",
              genre: "jazz",
              index: 0,
            })
          );
        }}
        variant="contained"
      >
        Add New Song
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Song</DialogTitle>
        <DialogContent>
          <DialogContentText>You can add songs that you want</DialogContentText>
          <Grid>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              onBlur={handleBlur}
              value={song.title}
              onChange={handleChange}
              error={errors.title}
              helperText={errors.title && "Title is required"}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Artist"
              name="artist"
              variant="outlined"
              value={song.artist}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.artist}
              helperText={errors.artist && "Artist is required"}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Album"
              name="album"
              variant="outlined"
              value={song.album}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.album}
              helperText={errors.album && "Album is required"}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Genre</InputLabel>
              <Select
                fullWidth
                id="demo-simple-select"
                label="Genre"
                name="genre"
                value={song.genre}
                onChange={handleGenreChange}
              >
                <MenuItem value="jazz">Jazz</MenuItem>
                <MenuItem value="rock">Rock</MenuItem>
                <MenuItem value="pop">Pop</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={(e: any) => {
              handleSubmit(e);
            }}
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Form;
