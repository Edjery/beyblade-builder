import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import theme from "../../../values/theme";
import CustomButton from "../../common/CustomButton";
import { popupError, popupSuccess } from "../../common/Popups";

const beybladePieceType = ["Blade", "Ratchet", "Bit"];

interface IBeybladePieces {
  id: string;
  name: string;
  type: string;
}

interface IBeyblade {
  id: string;
  name: string;
  pieces: IBeybladePieces[];
}

const Builder = () => {
  const [pieces, setPieces] = useState<IBeybladePieces[]>([]);
  const [newPieceName, setNewPieceName] = useState("");
  const [isSavingPiece, setSavingPiece] = useState(false);
  const [newPieceType, setNewPieceType] = useState(beybladePieceType[0]);
  const [newCombinedBeyblade, setNewCombinedBeyblade] = useState<
    IBeybladePieces[]
  >([]);
  const [newBeybladeName, setNewBeybladeName] = useState("");
  const [isSavingBeyblade, setSavingBeyblade] = useState(false);
  const [beyblades, setBeyblades] = useState<IBeyblade[]>([]);

  // Add Piece to the list
  const handleAddPiece = () => {
    setSavingPiece(true);

    if (newPieceName) {
      const newPiece: IBeybladePieces = {
        id: Date.now().toString(),
        name: newPieceName.trim(),
        type: newPieceType,
      };
      setPieces((prevPieces) => [...prevPieces, newPiece]);
      setNewPieceName("");
      setNewPieceType(beybladePieceType[0]);
      popupSuccess("Success: Piece added");
    }

    setTimeout(() => {
      setSavingPiece(false);
    }, 500);
  };

  // Remove Piece from "Added Pieces"
  const handleRemoveFromAddedPieces = (id: string) => {
    setPieces((prevPieces) => prevPieces.filter((item) => item.id !== id));
  };

  // Remove Piece from "Combined Beyblade"
  const handleRemoveFromCombinedBeyblade = (id: string) => {
    setNewCombinedBeyblade((prevBeyblade) =>
      prevBeyblade.filter((item) => item.id !== id)
    );
  };

  // Combine selected Pieces with type validation
  const handleCombinePieces = (id: string) => {
    const selectedPiece = pieces.find((item) => item.id === id);
    if (selectedPiece) {
      // Check if a Piece of the same type has already been added
      const existingPiece = newCombinedBeyblade.some(
        (Piece) => Piece.type === selectedPiece.type
      );

      if (!existingPiece) {
        setNewCombinedBeyblade([...newCombinedBeyblade, selectedPiece]);
      } else {
        popupError("Error: You cannot add the piece with the same Piece type");
      }
    }
  };

  // Save combined selected pieces
  const handleSaveBeyblade = () => {
    setSavingBeyblade(true);

    if (newBeybladeName && newCombinedBeyblade.length > 0) {
      const newBeyblade: IBeyblade = {
        id: new Date().toISOString(),
        name: newBeybladeName,
        pieces: newCombinedBeyblade,
      };
      setBeyblades((prevBeyblades) => [...prevBeyblades, newBeyblade]);
      setNewCombinedBeyblade([]);
      setNewBeybladeName("");
    }

    setTimeout(() => {
      setSavingBeyblade(false);
    }, 500);
  };

  return (
    <Fragment>
      <Box>
        <Box
          sx={{
            p: "10px",
            m: "10px",

            background: theme.palette.secondary.main,
            borderRadius: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ textAlign: "center", fontStyle: "italic" }}
              color="primary"
              variant="h6"
            >
              Add you Piece below:
            </Typography>
            <Grid container spacing={2} sx={{ textAlign: "center", m: "10px" }}>
              <Grid size={6}>
                <TextField
                  label="Piece Name"
                  variant="outlined"
                  value={newPieceName}
                  onChange={(e) => setNewPieceName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid size={6}>
                <FormControl fullWidth>
                  <InputLabel>Piece Type</InputLabel>
                  <Select
                    variant="outlined"
                    value={newPieceType}
                    onChange={(e) => setNewPieceType(e.target.value as string)}
                    label="Piece Type"
                  >
                    {beybladePieceType.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={12}>
                <CustomButton
                  color="primary"
                  buttonLabel="Add Piece"
                  onClick={handleAddPiece}
                  isLoading={isSavingPiece}
                  isDisabled={newPieceName === ""}
                />
              </Grid>
              <Grid size={12} />
              <Grid size={12}>
                <Box>
                  <Typography
                    sx={{ textAlign: "center" }}
                    color="primary"
                    variant="h6"
                  >
                    Piece List:
                  </Typography>
                  <ul>
                    {pieces.map((item) => (
                      <li key={item.name}>
                        <Typography color="primary" component={"span"}>
                          {item.name} ({item.type})
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ marginLeft: 2 }}
                          onClick={() => handleCombinePieces(item.id)}
                        >
                          Combine
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ marginLeft: 2 }}
                          onClick={() => handleRemoveFromAddedPieces(item.id)}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box>
                  <Typography
                    sx={{ textAlign: "center" }}
                    color="primary"
                    variant="h6"
                  >
                    Combine List:
                  </Typography>
                  <ul>
                    {newCombinedBeyblade.map((item) => (
                      <li key={item.name}>
                        <Typography color="primary" component={"span"}>
                          {item.name} ({item.type})
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ marginLeft: 2 }}
                          onClick={() =>
                            handleRemoveFromCombinedBeyblade(item.id)
                          }
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
              <Grid size={12} />
              <Grid size={12}>
                <TextField
                  label="Beyblade Name"
                  variant="outlined"
                  value={newBeybladeName}
                  onChange={(e) => setNewBeybladeName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <CustomButton
                  color="primary"
                  buttonLabel="Add beyblade"
                  onClick={handleSaveBeyblade}
                  isLoading={isSavingBeyblade}
                  isDisabled={
                    newBeybladeName === "" || newCombinedBeyblade.length <= 0
                  }
                />
              </Grid>
              <Grid size={12}>
                <Box>
                  <Typography
                    sx={{ textAlign: "center" }}
                    color="primary"
                    variant="h6"
                  >
                    Beyblade List:
                  </Typography>
                  <ul>
                    {beyblades.map((item) => (
                      <li key={item.name}>
                        <Typography
                          color="primary"
                          component={"span"}
                          fontWeight={"bold"}
                        >
                          {item.name}
                        </Typography>
                        <ul>
                          {item.pieces.map((piece) => (
                            <li key={piece.name}>
                              <Typography color="primary" component={"span"}>
                                {piece.name} {piece.type}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ marginLeft: 2 }}
                          onClick={() =>
                            handleRemoveFromCombinedBeyblade(item.id)
                          }
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Builder;
