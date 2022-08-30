import { ISODateString } from 'next-auth'

export interface MySession {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    uid?: string | null
  }
  expires: ISODateString
}
