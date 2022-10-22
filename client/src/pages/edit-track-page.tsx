import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "components/container";
import TrackForm from "features/track/track-form";
import { IUpdateTrack, ITrackFormInitialValues } from "features/track/types";
import { tracksService } from "features/track/service";
import Button from "components/button";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
});

function EditTrackPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<ITrackFormInitialValues>();

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
      <TrackForm
        title="Edit Track"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        buttonText="Edit"
        extraButton={
          <Button size="lg" onClick={deleteHandler}>
            Delete
          </Button>
        }
      />
    </Container>
  );
}

export default EditTrackPage;
