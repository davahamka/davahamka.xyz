export type VariablesPrevFetch = {
    variables?: Object
    preview?: boolean
}

type Asset = {
    fileName: string
    url: string
}

export type TechStacksObj = {
    name: string
    url: string | null
    img: Asset
}