import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  track: yup.mixed().required(),
  cover: yup.mixed().required(),
});
