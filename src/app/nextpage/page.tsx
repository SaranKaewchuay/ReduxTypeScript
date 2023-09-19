"use client"

import Link from "next/link";
import { useAppSelector } from "../redux/store";


export default function Home() {

    const username = useAppSelector((state) => state.authReducer.value.username)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1> Username : {username}</h1>
            <div>
                <Link href={`/`} > Click To Next Page</Link>
            </div>
        </main>
    )
}
