exports.onCreatePage = async({ page, actions }) => {
  const { createPage } = actions

  if(page.path.match(/^\/login/)){
    page.matchPath = "/login/*"
    createPage(page)
  }
}