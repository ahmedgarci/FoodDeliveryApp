import React from "react";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";
import { FoodCard } from "./FoodCard";
import { Typography, Grid, Container, Box } from "@mui/material";
import { Fetch } from "../../Hooks/Fetch";

function LatestFood() {
  const { data, loading, error } = Fetch({
    url: "http://localhost:3500/food/all",
    method: "GET",
  });

  if (error)
    return (
      <ErrorComponent error={error || "Foods are not available at the moment."} />
    );
  if (loading) return <LoadingComponent />;

  return (
    <Container sx={{ my: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Discounted Meals
      </Typography>

      <Grid container spacing={4}>
        {data && data.length > 0 ? (
          data.map((foodElement) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={foodElement._id}>
              <FoodCard
                id={foodElement._id}
                name={foodElement.name}
                price={19} 
                imageUrl={foodElement?.imageId?.imageUrl}
              />
            </Grid>
          ))
        ) : (
          <Box textAlign="center" sx={{ width: "100%", mt: 4 }}>
            <Typography variant="body1" color="text.secondary">
              No food items available at the moment.
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
}

export { LatestFood };
