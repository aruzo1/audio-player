import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required(),
  track: yup.string().required(),
});
