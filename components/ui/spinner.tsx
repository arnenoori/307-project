import { Loader2 } from "lucide-react"

export default function Spinner({
  className,
}: {
  className?: string
}) {
  return (
    <Loader2 className={`animate-spin h-5 w-5 ${className}`} />
  )
}