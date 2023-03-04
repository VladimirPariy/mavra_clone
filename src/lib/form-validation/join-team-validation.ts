import * as yup from 'yup'
import { ErrorMsg } from '@/lib/enums/error-messages'

export const joinTeamSchema = yup.object({
  Name: yup.string().required(ErrorMsg.required).min(3, ErrorMsg.length),
  Mail: yup.string().required(ErrorMsg.required).email(ErrorMsg.email),
  Phone: yup
    .string()
    .required(ErrorMsg.required)
    .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, ErrorMsg.phone),
  Message: yup.string(),
})
