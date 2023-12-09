import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function page({params}: {params: {id: string}}) {
    const snippet = await db.snippets.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    if(!snippet){
        return notFound()
    }
    
    return (
        <div>
            <div className="mt-8 flex flex-row space-x-52">
                <h3 className="capitalize"> {snippet.title} </h3>
                <div className="flex items-center justify-between gap-4">
                    <Link href={`/snippets/${params.id}/edit`} className="border border-gray-600 rounded py-2 px-3"> edit </Link>
                    <button className="border border-gray-600 rounded py-2 px-3"> delete </button>
                </div>
            </div>
            <pre className="mt-5 bg-slate-200 w-72 h-20 p-4 rounded">
                <code>
                    {snippet.code}
                </code>
            </pre>
        </div>
    )
}
