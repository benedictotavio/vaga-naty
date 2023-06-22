import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Arrow from "@mui/icons-material/ArrowRightAltOutlined";
import Link from "next/link";

type IPropCard = {
  title: string;
  text: string;
};

export default function MediaCard({ title, text }: IPropCard) {
  return (
    <Card sx={{ minWidth: 350, minHeight: 100, marginTop: "10px" }}>
      <CardMedia sx={{ minHeight: 100 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={`/${title.toLowerCase()}`}>
            <Arrow sx={{ color: "#b469ff", fontSize: "2.3em" }} />
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
