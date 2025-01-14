import React, { useState } from "react";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";
import { FoodCard } from "./FoodCard";
import { Fetch } from "../../Hooks/Fetch";
import { Typography, Grid, Container, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavigationButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

function LatestFood() {
  const { data, loading, error } = Fetch({
    url: "http://localhost:3500/food/all",
    method: "GET",
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  if (error)
    return (
      <ErrorComponent error={error || "Foods are not available at the moment."} />
    );
  if (loading) return <LoadingComponent />;

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);
  const displayedData = data?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) || [];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="latestfood">
      <Container maxWidth="lg" sx={{ my: 4 }} >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Discounted Meals
        </Typography>
      
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {displayedData.length > 0 ? (
            displayedData.map((foodElement) => (
              <Grid item xs={12} sm={6} md={3} key={foodElement._id}>
                <FoodCard
                  id={foodElement._id}
                  name={foodElement.name}
                  price={19}
                  imageUrl={foodElement?.imageId?.imageUrl}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box textAlign="center" sx={{ width: "100%", mt: 4 }}>
                <Typography variant="body1" color="text.secondary">
                  No food items available at the moment.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      
        {data && data.length > itemsPerPage && (
          <Box display="flex" justifyContent="flex-end">
          <NavigationButton
            sx={{
              backgroundColor: "#c27803",
              "&:hover": {
                backgroundColor: "#a36402", // Optional: Slightly darker color for hover effect
              },
            }}
            onClick={prevPage}
            variant="contained"
            disabled={currentPage === 0}
          >
            Previous
          </NavigationButton>
          <NavigationButton
            sx={{
              backgroundColor: "#c27803",
              "&:hover": {
                backgroundColor: "#a36402", // Optional: Slightly darker color for hover effect
              },
            }}
            onClick={nextPage}
            variant="contained"
            disabled={currentPage === totalPages - 1}
          >
            Next
          </NavigationButton>
        </Box>
        
        )}
      </Container>
    </div>
  );
}

export { LatestFood };

