export default function AnimatedBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/30 font-semibold text-sm">
      <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
      {text}
    </div>
  )
}
