import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
  },
  card: {
    maxWidth: 345,
    [theme.breakpoints.up("md")]: {
      margin: "20px 40px",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  cardMedia: {
    height: "200px",
    width: "100%",
  },
  productName: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  productDescription: {
    marginTop: "10px",
    textAlign: "center",
  },
}));

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product",
    image: "../img/s1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a sample product",
    image: "../img/s2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a sample product",
    image: "../img/s3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is a sample product",
    image: "../img/s4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is a sample product",
    image: "../img/s5.jpg",
  },
];

const ProductList = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <Grid container spacing={3} className={classes.root}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Zoom in={!trigger}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.image}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.productName}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.productDescription}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
