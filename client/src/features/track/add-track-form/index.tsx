import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { tracksService } from "../service";
import { ICrateTrackDTO } from "../types";
import VStack from "components/v-stack";
import Typography from "components/typography";
import TextInput from "components/text-input";
import FileInput from "components/file-input";
import Button from "components/button";
import validationSchema from "./validation-schema";

const initalValues = {
  title: "",
  author: "",
  track: null,
  cover: null,
};

function AddTrackForm() {
  const navigate = useNavigate();

  function submitHandler(values: ICrateTrackDTO) {
    tracksService.create(values).then(() => navigate("/"));
  }

  return (
    <VStack gap="1rem">
      <Typography as="h1" variant="h1">Add Track</Typography>
      <Formik
        initialValues={initalValues as any}
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

            <FileInput name="track" label="Track" accept="audio/mpeg" />

            <FileInput name="cover" label="Cover" accept="image/jpeg" />

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
