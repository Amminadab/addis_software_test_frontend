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
import { ChangeEvent, FormEvent } from "react";
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

const Form: React.FC<FormProps> = ({ open, handleClickOpen, handleClose }) => {
  const dispatch = useDispatch();

  const song = useSelector((state: state) => state.song);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }
    >
  ) => {
    const { name, value } = event.target;
    dispatch(
      setSongSlice({
        ...song,
        [name as string]: value as string,
      })
    );
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    song.index === "0"
      ? dispatch({
          type: CREATE_SONG,
          song: { ...song, index: `${nanoid(8)}` },
        })
      : dispatch({ type: UPDATE_SONG_BY_ID, song });

    dispatch(
      setSongSlice({ title: "", artist: "", album: "", genre: "", index: 0 })
    );
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
              genre: "",
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
              value={song.title}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Artist"
              name="artist"
              variant="outlined"
              value={song.artist}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Album"
              name="album"
              variant="outlined"
              value={song.album}
              onChange={handleChange}
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
            onClick={(e) => {
              handleSubmit(e);
              handleClose();
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
