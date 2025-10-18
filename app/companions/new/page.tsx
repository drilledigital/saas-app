import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import CompanionForm from "@/components/CompanionForm";

const NewCompanion = async () => {
    const { userId } = await auth();
    if (!userId) redirect('/sign-in');

    return (
        <main className="min-h-screen w-full flex items-center justify-center">
            <article className="w-full max-w-2xl gap-4 flex flex-col p-4">
                <h1>Companion Builder</h1>
                <CompanionForm />
            </article>
        </main>
    )
}

export default NewCompanion