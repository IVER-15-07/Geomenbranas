export function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-gray-600">{subtitle}</p> : null}
    </header>
  )
}
