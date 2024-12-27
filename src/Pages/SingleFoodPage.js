import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router";
import { cartContext } from "../Functions/Hooks/useContext/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { getSingleFoodData } from "../Functions/GetSingleFoodData/SingleFoodData";
import LoadingComponent from "../Components/Common/Loading + Error/LoadingComponent";
import ErrorComponent from "../Components/Common/Loading + Error/ErrorComponent";

async function SingleFoodPage() {
  const { addFoodToCart, checkIfFoodAlreadyInCart } = useContext(cartContext);
  const [error,setError] = useState(null)
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState(null) 

  let {FoodId} = useParams()

  useEffect(()=>{
    const fetchData = async()=>{
    try{
      const {data , loading , error} = await getSingleFoodData(FoodId)
      if(loading){setLoading(true)}
      else if(error){
        setError(error)
        setLoading(false)
      }else{
        setData(data)
        setLoading(false)
      }
    }catch(e){
      setError("failed to fetch data")
      setLoading(false)
    }
  }
  fetchData();
},[])
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
              image={""}
              alt="Food Image"
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {"aaaaaaaaaaaa"}
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph>
                {"aaaaaaaaaaaa"}
              </Typography>

              {/* Price */}
              <Typography
                variant="h5"
                color="error"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                Price: ${19}
              </Typography>

              <Box sx={{ mt: 4 }}>
                {checkIfFoodAlreadyInCart(1) ? (
                  <Typography variant="body1" color="text.primary">
                    This item is already in your cart.
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                  //  onClick={() => addFoodToCart(id, imageUrl, price, name)}
                  >
                    Add to Cart
                  </Button>
                )}
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Nutritional Info</Typography>
                <Typography variant="body2" color="text.secondary">
                  This section will be for comments.
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
