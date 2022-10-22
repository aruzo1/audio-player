import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Container from "components/container";
import TrackForm from "features/track/track-form";
import { tracksService } from "features/track/service";
import { ICrateTrackDTO } from "features/track/types";

const initialValues = {
  title: "",
  author: "",
  track: undefined,
  cover: undefined,
};

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  track: yup.mixed().required(),
  cover: yup.mixed().required(),
});

function AddTrackPage() {
  const navigate = useNavigate();

  function submitHandler(values: ICrateTrackDTO) {
    tracksService.create(values).then(() => navigate("/"));
  }

  return (
    <Container>
      <TrackForm
        title="Add Track"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      />
    </Container>
  );
}

export default AddTrackPage;
