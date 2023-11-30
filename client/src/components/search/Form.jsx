import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form({ setScholarships }) {
  const [disabled, setDisabled] = useState(false);
  const validations = yup.object({
    studentof: yup.string().required("Please select the student type!"),
    minMarks: yup
      .number("Marks should be in numbers!")
      .required("Marks is required!"),
    maxIncome: yup
      .number("Income should be in numbers!")
      .required("Income is required!"),
    caste: yup.string().required("Please select your caste!"),
    religion: yup.string().required("Please select your religion!"),
  });
  const formik = useFormik({
    initialValues: {
      studentof: "",
      minMarks: "",
      maxIncome: "",
      caste: "",
      religion: "",
    },
    onSubmit: (values) => searchScholarships(values),
    validationSchema: validations,
  });
  async function searchScholarships(values) {
    setDisabled(true);
    const formdata = new FormData();
    for (let value in values) {
      formdata.append(value, values[value]);
    }
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_BACKEND_URL}/check-eligibility`,
      data: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setScholarships(res.data);
        setDisabled(false);
      })
      .catch((err) => {
        console.log(err.message);
        setDisabled(false);
      });
  }
  return (
    <>
      <Stack
        spacing={5}
        sx={{ width: "80%" }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <FormControl>
          <InputLabel id="studentOf">Student type</InputLabel>
          <Select
            id="studentOf"
            label="Student type"
            name="studentof"
            value={formik.values.studentof}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.studentof) &&
              Boolean(formik.touched.studentof)
            }
          >
            <MenuItem value="pre-matric">Pre Matric</MenuItem>
            <MenuItem value="post-matric">Post Matric</MenuItem>
            <MenuItem value="merit-cum-means">Merit Cum Means</MenuItem>
          </Select>
          <Typography variant="caption" color="error">
            {Boolean(formik.touched.studentof) && formik.errors.studentof}
          </Typography>
        </FormControl>
        <FormControl>
          <InputLabel id="marks">Marks</InputLabel>
          <OutlinedInput
            id="marks"
            label="Marks"
            name="minMarks"
            value={formik.values.minMarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.minMarks) &&
              Boolean(formik.touched.minMarks)
            }
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
          <Typography variant="caption" color="error">
            {Boolean(formik.touched.minMarks) && formik.errors.minMarks}
          </Typography>
        </FormControl>
        <FormControl>
          <InputLabel id="maxIncome">Family Income</InputLabel>
          <OutlinedInput
            label="Family Income"
            id="maxIncome"
            name="maxIncome"
            value={formik.values.maxIncome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.maxIncome) &&
              Boolean(formik.touched.maxIncome)
            }
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
          />
          <Typography variant="caption" color="error">
            {Boolean(formik.touched.maxIncome) && formik.errors.maxIncome}
          </Typography>
        </FormControl>
        <FormControl>
          <InputLabel id="caste">Caste</InputLabel>
          <Select
            id="caste"
            label="Caste"
            name="caste"
            value={formik.values.caste}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.caste) && Boolean(formik.touched.caste)
            }
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="OBC">OBC</MenuItem>
            <MenuItem value="ST">ST</MenuItem>
            <MenuItem value="SC">SC</MenuItem>
          </Select>
          <Typography variant="caption" color="error">
            {Boolean(formik.touched.caste) && formik.errors.caste}
          </Typography>
        </FormControl>
        <FormControl>
          <InputLabel id="religion">Religion</InputLabel>
          <Select
            id="religion"
            label="Religion"
            name="religion"
            value={formik.values.religion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.religion) &&
              Boolean(formik.touched.religion)
            }
          >
            <MenuItem value="Hindu">Hindu</MenuItem>
            <MenuItem value="Minority">Minority</MenuItem>
          </Select>
          <Typography variant="caption" color="error">
            {Boolean(formik.touched.religion) && formik.errors.religion}
          </Typography>
        </FormControl>
        <Button variant="contained" type="submit" disabled={disabled}>
          Search
        </Button>
      </Stack>
    </>
  );
}
