import React from "react";
import { useFormik } from "formik";
import { RegisterPageValidator } from "../register/RegisterPageValidator";
import TextField from "@mui/material/TextField/TextField";
import {
  Box,
  Paper,
  Grid,
  styled,
  Button,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      confirmpassword: "",
    },
    validationSchema: RegisterPageValidator,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 400,
  }));

  return (
    <Item>
      <Grid container spacing={2} justifyContent="center" direction="column">
        <Grid item md={8}>
          <Typography variant="h6">Create account</Typography>
        </Grid>
        <Grid item md={6} xs={2}>
          <TextField
            fullWidth
            id="firstname"
            name="firstname"
            label="First Name"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
        </Grid>
        <Grid item md={8}>
          <TextField
            fullWidth
            id="middlename"
            name="middlename"
            label="Middle Name"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.middlename}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="lastname"
            name="lastname"
            label="Last Name"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="mobilenumber"
            name="mobilenumber"
            label="Mobile Number"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
          />
        </Grid>
        <Grid item>
          <Button fullWidth color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Item>
  );
};

export default RegisterPage;
