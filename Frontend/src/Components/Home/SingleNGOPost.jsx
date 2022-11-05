import { Box, Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleNGOPost = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Container
      backgroundColor={"white"}
      width={"100%"}
      height={"auto"}
      mt={"3rem"}
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Box display={"flex"} flexDirection={"column"} width={"70%"}>
          <Box>{post.title}</Box>
          <Box>{post.area}</Box>
          <Box>{post.workRequirement}</Box>
          <Box>{post.contact}</Box>
        </Box>
        <Box>image</Box>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Button
          onClick={() => {
            navigate(`/ShelterProfile/${post._id}`);
          }}
        >
          View More
        </Button>
      </Box>
    </Container>
  );
};

export default SingleNGOPost;
