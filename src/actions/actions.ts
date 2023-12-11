"use server"
import { db } from "@/db"
import { revalidatePath } from "next/cache"
import { redirect, notFound } from "next/navigation"

export async function createSnippet(formState: {message: string}, values: FormData) {
    const title = values.get("title") 
    const code = values.get("code")
    if(!title || typeof title !== "string"){
        return {
            message: "please provide the title"
        }
    }
    if(!code || typeof code !== "string"){
        return {
            message: "please provide the code snippet"
        }
    }
    try{
    await db.snippets.create({
        data: {
            title,
            code        
        }
    })
    }
    catch(error: unknown){
        if(error instanceof Error){
            return {
                message: error.message
            }
        }
        else{
            return {
                message: "something went wrong!!"
            }
        }

    }
    revalidatePath("/")
    // putting redirect inside a try catch block will result an error
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
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)
}
export async function deleteSnippet(id: number) {
    await db.snippets.delete({
        where: {
            id
        }
    })
    revalidatePath("/")
    redirect("/")
}
