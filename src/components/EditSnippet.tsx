"use client"
import * as action from "@/actions/actions"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"

interface SnippetProps {
    id: number,
    title: string,
    code: string
}
export default function EditSnippet({snippet}: {snippet: SnippetProps}) {
    const [code, setCode] = useState(snippet.code)
    function handleEditorChange(value: string = ""){
        setCode(value)
    }
    // pre-loading the server action with the up-to-date state
    const updateSnippet = action.updateSnippet.bind(null, snippet.id, code)
    return (
        <div>
            <Editor
            height="40vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue= {snippet.code}
            onChange={handleEditorChange}
            options={{minimap: {enabled: false}}}
            />
            <form action={updateSnippet}>
                <button type="submit" className="mt-4 border border-gray-400 rounded hover:bg-blue-400 px-4 py-2"> edit </button>
            </form>
        </div>
    )
}
