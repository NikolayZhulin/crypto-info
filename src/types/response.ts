export type ResponseType<D> = {
  data: D
  meta?: {
    count: number
  }
  status?: StatusType
}

type StatusType = {
  code: number
  creditsCost: number
  message: string
  responseTime: number
  success: boolean
  time: string
}
