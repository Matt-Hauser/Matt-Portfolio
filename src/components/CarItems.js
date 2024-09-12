import { Typography } from "@mui/material";

function Item({ item }) {
  return (
    <>
      <img height={200} src={item.image} alt={item.title} />
      <Typography fontFamily={"Kanit"} fontWeight={500} color="white">
        {item.title}
      </Typography>
    </>
  );
}

export default Item;
