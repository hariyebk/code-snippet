import EditSnippet from "@/components/EditSnippet"
import { db } from "@/db"
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
        <EditSnippet />
    )
}
