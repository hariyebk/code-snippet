"use client"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { db } from "@/db"
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

    return (
        <form>
            <Editor
            height="40vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue= {snippet.code}
            onChange={handleEditorChange}
            options={{minimap: {enabled: false}}}
            />
            <button type="submit" className="mt-4 border border-gray-400 rounded hover:bg-blue-400 px-4 py-2"> edit </button>
        </form>
    )
}
