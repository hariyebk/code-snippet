"use client"

interface ErrorProps {
    error: Error,
    reset: () => void
}
export default function error({error}: ErrorProps) {
    return (
        <div>{error.message}</div>
    )
}
