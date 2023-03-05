import { joinTeamSchema } from '@/lib/form-validation/join-team-validation'
import * as yup from 'yup'
import { ErrorMsg } from '../enums/error-messages'

const topicSchema = yup.object({
  Topic: yup.string().required(ErrorMsg.required).min(3, ErrorMsg.length),
  Message: yup.string().required(ErrorMsg.required).min(3, ErrorMsg.length),
})

export const feedbackSchema = joinTeamSchema.concat(topicSchema)
