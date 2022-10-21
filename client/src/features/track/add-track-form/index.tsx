import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import VStack from "components/v-stack";
import Typography from "components/typography";
import TextInput from "components/text-input";
import FileInput from "components/file-input";
import Button from "components/button";
import { tracksService } from "../service";
import validationSchema from "./validation-schema";

const initalValues = {
  title: "",
  author: "",
  track: "",
  cover: "",
};

function AddTrackForm() {
  const navigate = useNavigate();
  const [track, setTrack] = useState<File>();
  const [cover, setCover] = useState<File>();

  function submitHandler(values: typeof initalValues) {
    tracksService
      .create({
        ...values,
        track: track!,
        cover: cover!,
      })
      .then(() => navigate("/"));
  }

  return (
    <VStack gap="1rem">
      <Typography variant="h1">Add Track</Typography>
      <Formik
        initialValues={initalValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form>
          <VStack gap="1rem">
            <TextInput
              name="title"
              label="Title"
              placeholder="Starboy, As It Was, Rockstar..."
            />

            <TextInput
              name="author"
              label="Author"
              placeholder="Imagine Dragons, Post Malone..."
            />

            <FileInput
              name="track"
              label="Track"
              accept="audio/mpeg"
              setFile={setTrack}
            />

            <FileInput
              name="cover"
              label="Cover"
              accept="image/jpeg"
              setFile={setCover}
            />

            <Button type="submit" variant="brand" size="lg">
              Add Track
            </Button>
          </VStack>
        </Form>
      </Formik>
    </VStack>
  );
}

export default AddTrackForm;
