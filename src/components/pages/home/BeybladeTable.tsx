import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Fragment, useState } from "react";
import { popupError } from "../../common/Popups";

const beybladePieceType = ["Blade", "Ratchet", "Bit"];

interface IBeybladePieces {
  name: string;
  type: string;
}

const BeybladeTable = () => {
  const [Pieces, setPieces] = useState<IBeybladePieces[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<IBeybladePieces | null>(
    null
  );
  const [newPieceName, setNewPieceName] = useState("");
  const [newPieceType, setNewPieceType] = useState(beybladePieceType[0]);
  const [combinedBeyblade, setCombinedBeyblade] = useState<IBeybladePieces[]>(
    []
  );

  // Add Piece to the list
  const handleAddPiece = () => {
    if (newPieceName) {
      const newPiece: IBeybladePieces = {
        name: newPieceName,
        type: newPieceType,
      };
      setPieces((prevPieces) => [...prevPieces, newPiece]);
      setNewPieceName("");
      setNewPieceType(beybladePieceType[0]);
    }
  };

  // Select Piece from the list
  const handleSelectPiece = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedPiece = Pieces.find(
      (Piece) => Piece.name === event.target.value
    );
    setSelectedPiece(selectedPiece || null);
  };

  // Combine selected Pieces with type validation
  const handleCombinePieces = () => {
    if (selectedPiece) {
      // Check if a Piece of the same type has already been added
      const existingPiece = combinedBeyblade.some(
        (Piece) => Piece.type === selectedPiece.type
      );

      if (!existingPiece) {
        setCombinedBeyblade([...combinedBeyblade, selectedPiece]);
      } else {
        popupError("Error: You cannot add the piece with the same Piece type");
      }
    }
  };

  // Remove Piece from "Added Pieces"
  const handleRemoveFromAddedPieces = (name: string) => {
    setPieces((prevPieces) =>
      prevPieces.filter((Piece) => Piece.name !== name)
    );
  };

  // Remove Piece from "Combined Beyblade"
  const handleRemoveFromCombinedBeyblade = (name: string) => {
    setCombinedBeyblade((prevBeyblade) =>
      prevBeyblade.filter((Piece) => Piece.name !== name)
    );
  };

  return (
    <Fragment>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ background: "red" }}>
          <TextField
            label="Piece Name"
            variant="outlined"
            color="primary"
            value={newPieceName}
            onChange={(e) => setNewPieceName(e.target.value)}
            sx={{ marginRight: 2 }}
          />
          <FormControl sx={{ marginRight: 2 }}>
            <InputLabel>Piece Type</InputLabel>
            <Select
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
          <Button variant="contained" onClick={handleAddPiece}>
            Add Piece
          </Button>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Box>
            <FormControl sx={{ marginRight: 2 }}>
              <InputLabel>Pick a Piece</InputLabel>
              <Select
                value={selectedPiece?.name || ""}
                onChange={handleSelectPiece}
                label="Pick a Piece"
              >
                {Pieces.map((Piece) => (
                  <MenuItem key={Piece.name} value={Piece.name}>
                    {Piece.name} ({Piece.type})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCombinePieces}
              disabled={!selectedPiece}
            >
              Combine Piece
            </Button>
          </Box>

          <Box sx={{ marginTop: 2 }}>
            <Box>
              <h3>Added Pieces</h3>
              <ul>
                {Pieces.map((Piece) => (
                  <li key={Piece.name}>
                    {Piece.name} ({Piece.type})
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ marginLeft: 2 }}
                      onClick={() => handleRemoveFromAddedPieces(Piece.name)}
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </Box>

            <Box>
              <h3>Combined Beyblade</h3>
              <ul>
                {combinedBeyblade.map((Piece) => (
                  <li key={Piece.name}>
                    {Piece.name} ({Piece.type})
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ marginLeft: 2 }}
                      onClick={() =>
                        handleRemoveFromCombinedBeyblade(Piece.name)
                      }
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default BeybladeTable;
