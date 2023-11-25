export type TaskProps = {
  title: string
  isDone: boolean
  onRemove: () => void
  onFinished: () => void
}
