export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2c67358dc8dab775003974',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gbabzosa',
                  apiId: 'd3380d64-250c-4644-8ec4-50a38f200691'
                },
                {
                  buildHookId: '5e2c6736b956f6ba17627cbb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s2ayv8ux',
                  apiId: '6d89b5c4-2b82-42b4-9c10-632cda16a8e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarozauArtsiom/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s2ayv8ux.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
