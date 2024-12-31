import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

function FoodCard({ id, name, price, imageUrl }) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea
        component={NavLink}
        to={`/food/${id}`}
        state={{ id, name, price, imageUrl }}
        sx={{ textDecoration: "none", height: "100%" }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={`${name} image`}
          sx={{
            height: "240px", 
            objectFit: "cover", 
            borderRadius: "8px 8px 0 0", 
          }}
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="p" color="text.primary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { FoodCard };
