import { queryTechStacks } from "~/contents/graphcms/tech-stacks"
import { TechStacksObj, VariablesPrevFetch } from "~/types/graphcms"

export async function fetchGraphCMS(query: string, { variables, preview }: VariablesPrevFetch = {}) {
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${preview ? process.env.GRAPHCMS_DEV_AUTH_TOKEN : process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
        },
        body: JSON.stringify({ query, variables })
    })
    const json = await res.json()

    if (json.errors) {
        throw new Error("Failed to fetch API")
    }

    return json.data
}

export async function getTechStacks(): Promise<TechStacksObj[]> {
    const data = await fetchGraphCMS(queryTechStacks, { preview: true })
    return data.techStacks as TechStacksObj[]
}