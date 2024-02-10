import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../interface/interface";
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { Img } from "../emotion/manage.style";
import { setSongSlice } from "../redux/slice/song";
// import { deleteSongSlice } from "../redux/slice/songs";
import { useEffect } from "react";
import { DELETE_SONG_BY_ID, GET_SONGS } from "../redux/sagas/types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#05525f",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface FormProps {
  handleClickOpen: () => void;
}

const ManageTable: React.FC<FormProps> = ({ handleClickOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);
  const rows = useSelector((state: state) => state.songs);
  // console.log(rows);

  //   console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Artist</StyledTableCell>
            <StyledTableCell align="right">Album</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.artist}</StyledTableCell>
              <StyledTableCell align="right">{row.album}</StyledTableCell>
              <StyledTableCell align="right">{row.genre}</StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <img
                    onClick={() => {
                      handleClickOpen();
                      dispatch(setSongSlice(row));
                    }}
                    src={edit}
                    alt="edit"
                  />
                  <Img
                    src={deleteIcon}
                    onClick={() => {
                      dispatch({ type: DELETE_SONG_BY_ID, id: row.index });
                    }}
                    alt="delete"
                  />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageTable;
