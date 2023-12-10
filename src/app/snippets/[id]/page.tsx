import * as actions from "@/actions/actions"
import Link from "next/link"

export default async function page({params}: {params: {id: string}}) {
    const id = parseInt(params.id)
    const snippet = await actions.findSnippetById(id)
    const handleDelete = actions.deleteSnippet.bind(null, snippet.id)
    return (
        <div>
            <div className="mt-8 flex flex-row space-x-52">
                <h3 className="capitalize"> {snippet.title} </h3>
                <div className="flex items-center justify-between gap-4">
                    <Link href={`/snippets/${params.id}/edit`} className="border border-gray-600 rounded py-2 px-3"> edit </Link>
                    <form action={handleDelete}>
                        <button className="border border-gray-600 rounded py-2 px-3"> delete </button>  
                    </form>
                </div>
            </div>
            <pre className="mt-5 bg-slate-200 w-fit h-auto p-6 rounded">
                <code>
                    {snippet.code}
                </code>
            </pre>
        </div>
    )
}
