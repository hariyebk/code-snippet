import { db } from "@/db"
import Link from "next/link"
export default async function Home() {
  const snippets = await db.snippets.findMany()
  return (
    <div>
        <div className="mt-4 flex flex-row space-x-52">
            <p> Snippets </p>
            <Link href="/snippets/new" className="border border-gray-500 px-3 rounded"> New </Link>
        </div>
        {snippets.map((code) => {
          return (
            <div key={code.id} className="mt-5 p-2 border border-gray-500 flex items-center justify-between w-80">
                <p> {code.title} </p>
                <Link href={`/snippets/${code.id}`}> View </Link>
            </div>
          )
        })}
    </div>
  )
}
