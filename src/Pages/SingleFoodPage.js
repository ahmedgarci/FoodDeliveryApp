import React, { useContext} from "react";
import {  useParams } from "react-router";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import LoadingComponent from "../Components/Common/LoadingComponent";
import ErrorComponent from "../Components/Common/ErrorComponent";
import {Fetch} from "../Hooks/Fetch";
import { cartContext } from "../Context/CartContext";
import { FoodComments } from "../Components/Food/FoodComments";

function SingleFoodPage() {
  const { addFoodToCart, checkIfFoodAlreadyInCart } = useContext(cartContext);
  let {id} = useParams()

  const { data, loading, error } =  Fetch({url:`http://localhost:3500/food/${id}`,method:"GET"})
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={data._imageUrl}
              alt="Food Image"
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className=" overflow-y-scroll overflow-x-hidden max-h-screen">
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {data._name}
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph>
                Category : {data._categoryName}
              </Typography>

              <Typography
                variant="h5"
                color="error"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                Price: ${data._price}
              </Typography>

              <Box sx={{ mt: 4 }}>
                {checkIfFoodAlreadyInCart(data._id) ? (
                  <Typography variant="body1" color="text.primary">
                    This item is already in your cart.
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={async() => await addFoodToCart(data._id, data._imageUrl, data._price, data._name)}
                  >
                    Add to Cart
                  </Button>
                )}
              </Box>
                  <h3>{data._description}</h3>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  <FoodComments comments={data._comments} />
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export { SingleFoodPage };
