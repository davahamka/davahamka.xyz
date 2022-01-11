export const queryTechStacks = `
  {
    techStacks{
        name
        url
        img{
          fileName
          url
        }
    }
  }
`