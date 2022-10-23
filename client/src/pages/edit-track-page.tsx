import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "components/container";
import Form, { IFormInputs } from "components/form";
import { IUpdateTrack } from "features/track/types";
import { tracksService } from "features/track/service";
import Button from "components/button";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
});

const inputs: IFormInputs = {
  title: {
    label: "Title",
    placeholder: "Rockstar, As It Was, Sharks...",
  },
  author: {
    label: "Author",
    placeholder: "Imagine Dragons, Post Malone...",
  },
  track: {
    label: "Track",
    type: "file",
    accept: "audio/mpeg",
    required: false,
  },
  cover: {
    label: "Cover",
    type: "file",
    accept: "image/jpeg",
    required: false,
  },
};

function EditTrackPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<{
    [key: string]: any;
  }>();

  useEffect(() => {
    tracksService
      .findOne(id!)
      .then(({ title, author }) => setInitialValues({ title, author }))
      .catch(() => navigate("/"));
  }, [setInitialValues, id, navigate]);

  function submitHandler(values: IUpdateTrack) {
    tracksService.update(id!, values).then(() => navigate("/"));
  }

  function deleteHandler() {
    tracksService.delete(id!).then(() => navigate("/"));
  }

  if (!initialValues) return null;

  return (
    <Container>
      <Form
        title="Edit Track"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        inputs={inputs}
        buttonText="Edit"
        extraButton={
          <Button type="button" size="lg" onClick={deleteHandler}>
            Delete
          </Button>
        }
      />
    </Container>
  );
}

export default EditTrackPage;
