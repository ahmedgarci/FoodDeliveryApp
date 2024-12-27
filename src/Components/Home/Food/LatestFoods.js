import React from "react";
import FetchDataComponent from "../../../Functions/Hooks/useEffect/GetDataFromBackend";
import ErrorComponent from "../../Common/Loading + Error/ErrorComponent";
import LoadingComponent from "../../Common/Loading + Error/LoadingComponent";
import { FoodCard } from "./FoodCard";
import { Typography, Grid, Container, Box } from "@mui/material";

function LatestFoods() {
  const { data, loading, error } = FetchDataComponent({
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

export { LatestFoods };
