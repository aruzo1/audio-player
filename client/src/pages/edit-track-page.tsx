import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "components/container";
import TrackForm from "features/track/track-form";
import { IUpdateTrackDTO, ITrackFormInitialValues } from "features/track/types";
import { tracksService } from "features/track/service";

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
      .then(({ title, author }) => setInitialValues({ title, author }));
  }, [setInitialValues]);

  function submitHandler(values: IUpdateTrackDTO) {
    tracksService.update(id!, values).then(() => navigate("/"));
  }

  if (!initialValues) return null;

  return (
    <Container>
      <TrackForm
        title="Edit Track"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      />
    </Container>
  );
}

export default EditTrackPage;
