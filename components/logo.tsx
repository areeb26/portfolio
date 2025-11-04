import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`font-heading text-xl font-bold ${className}`}>
      <svg
        width="180"
        height="32"
        viewBox="0 0 180 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
      >
        <text
          x="0"
          y="24"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="24"
          fontWeight="700"
          fill="currentColor"
        >
          Areeb Ahmed Khan
        </text>
      </svg>
    </Link>
  )
}
