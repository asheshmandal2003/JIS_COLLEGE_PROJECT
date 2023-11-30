import { Alert, Card, Divider, Link, Typography } from "@mui/material";

export default function Scholarships({ scholarships }) {
  return (
    <>
      {scholarships.length !== 0 ? (
        <>
          <Typography variant="h5" mb={4}>
            Scholarships
          </Typography>
          {scholarships.map((scholarship) => (
            <Card key={scholarship._id} sx={{ width: 480, p: 4, mb: 3 }}>
              <Typography variant="h6" mb={1}>
                {scholarship.name}
              </Typography>
              <Typography variant="subtitle1" mb={2}>
                {" "}
                {scholarship.residence === "India"
                  ? "Applicable for every Indian students"
                  : `Applicable for only ${scholarship.residence} students`}
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Typography variant="subtitle2" mb={3}>
                {scholarship.description}
              </Typography>
              <Link underline="hover" sx={{ cursor: "pointer" }}>
                {scholarship.website}
              </Link>
            </Card>
          ))}
        </>
      ) : (
        <>
          <Alert severity="warning" sx={{ width: 480 }}>
            No sholarship is available!
          </Alert>
        </>
      )}
    </>
  );
}
