import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Pet({ pet }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {pet.created_at}
        </Typography>
        <Typography variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {pet.type}
        </Typography>
        <Typography variant="body2">
          color: {pet.color}
          <br />
          age: {pet.age}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Pet;
