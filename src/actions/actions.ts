"use server"
import { db } from "@/db"
import { redirect, notFound } from "next/navigation"

export async function createSnippet(values: FormData) {
    const title = values.get("title") as string
    const code = values.get("code") as string
    const snippet = await db.snippets.create({
            data: {
                title,
                code        
            }
        })
        if(!snippet){
            return notFound()
        }
        redirect("/")
}
export async function findSnippetById(id: number) {
    const snippet = await db.snippets.findUnique({
        where: {
            id
        }
    })
    if(!snippet){
        return notFound()
    }
    return snippet
}
export async function updateSnippet(id: number, code: string) {
    await db.snippets.update({
        where: {
            id
        },
        data: {
            code
        }
    })
    redirect(`/snippets/${id}`)
}
export async function deleteSnippet(id: number) {
    await db.snippets.delete({
        where: {
            id
        }
    })
    redirect("/")
}
