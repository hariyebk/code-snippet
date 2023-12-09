
export default function Error({error}: {error: ErrorEvent}) {
    return (
        <div className="flex items-center justify-center w-full min-h-screen text-2xl">
            <p>404:</p>
            <p className="ml-3"> sorry, we couldn't find this snippet</p>
        </div>
    )
}
