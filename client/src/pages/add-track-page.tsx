import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Container from "components/container";
import Form, { IFormInputs } from "components/form";
import { tracksService } from "features/track/service";
import { ICrateTrack } from "features/track/types";

const initialValues = {
  title: "",
  author: "",
  track: null,
  cover: null,
};

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  track: yup.mixed().required(),
  cover: yup.mixed().required(),
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
  track: { label: "Track", type: "file", accept: "audio/mpeg" },
  cover: { label: "Cover", type: "file", accept: "image/jpeg" },
};

function AddTrackPage() {
  const navigate = useNavigate();

  function submitHandler(values: ICrateTrack) {
    tracksService.create(values).then(() => navigate("/"));
  }

  return (
    <Container>
      <Form
        title="Add Track"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        inputs={inputs}
        buttonText="Add"
      />
    </Container>
  );
}

export default AddTrackPage;
