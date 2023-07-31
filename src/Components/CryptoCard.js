import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CriptoCard({ name, img, price, link }) {
  var cardStyle = {
    width: "300px",
  };
  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="crypto logo"
          sx={{
            height: "80px",
            width: "80px",
            margin: "10px auto",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Price : ${price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={link}>
          <Button size="small" color="primary">
            Visit this cryptoSite
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
