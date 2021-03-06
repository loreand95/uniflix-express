import { useState } from "react";
import { DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch } from "react-redux";
import { buyMovieAction } from "../redux/reducers/userSlice";
import CircularProgress from '@mui/material/CircularProgress';

BuyButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  film: PropTypes.object.isRequired,
};

export default function BuyButton(props) {
  const { onClose, open, film, setFilm } = props;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClickPay = () => {
    setLoading(true);
    dispatch(buyMovieAction(film.movieId))
      .then((res) => {
        setFilm((prevState) => ({
          ...prevState,
          isPurchased: true,
        }));
        onClose();
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        //TODO Error
      });
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ textAlign: "center" }}>{film.title}</DialogTitle>
      <DialogContent>
        <Box
          component="div"
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={film.posterPath}
            alt={film.title}
            style={{
              borderRadius: "3%",
              width: 200,
            }}
          />
          <Button
            onClick={handleClickPay}
            sx={{ width: "200px", marginTop: "15px" }}
            variant="contained"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} style={{ color: "white" }} />
            ) : (
              `PAY ${film.price}`
            )}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
