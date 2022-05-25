export const modelData = (results=[]) => {
   return results?.map((data) => ({
      id: data.id,
      user: data.user,
      urls: data.urls,
      likes: data.likes,
      description: data.description,
      tags: data.tags,
    }))
}