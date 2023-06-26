import * as yup from 'yup';

export const renamedclassValidationSchema = yup.object().shape({
  name: yup.string().required(),
  teacher_id: yup.string().nullable(),
});
