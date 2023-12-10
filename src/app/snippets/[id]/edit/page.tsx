import { findSnippetById } from "@/actions/actions"
import EditSnippet from "@/components/EditSnippet"

export default async function page({params}: {params: {id: string}}) {
    const snippet = await findSnippetById(parseInt(params.id))
    return (
        <div className="mt-7">
            <EditSnippet snippet={snippet} />
        </div>
    )
}
