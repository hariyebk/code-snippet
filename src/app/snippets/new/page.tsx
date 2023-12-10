import { createSnippet } from "@/actions/actions"

export default function SnippetCreatePage() {
    return (
        <form action={createSnippet}>
            <h3 className="mt-3"> Create a snippet </h3>
            <div className="flex flex-col gap-3 mt-5">
                <div>
                    <label htmlFor="title"> Title </label>
                    <input type="text" name="title" className="border border-slate-300 w-56 rounded ml-4 outline-none p-3 h-10"/>
                </div>
                <div className="flex flex-col gap-4 mt-3">
                    <label htmlFor="code"> Code </label>
                    <textarea name="code" className="border border-slate-300 w-80 rounded ml-4 outline-none p-3 h-auto" />
                </div>
            </div>
            <button type="submit" className="py-2 px-6 border border-slate-300 rounded hover:bg-blue-400 mt-7 justify-start"> Save </button>
        </form>
    )
}
