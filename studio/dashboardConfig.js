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
                  buildHookId: '5da82390daff2db48dc7bb96',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cdnnxvg5',
                  apiId: '548d40c5-9fe0-495a-a8a7-13bc41da31ab'
                },
                {
                  buildHookId: '5da8239087fcff2f7bd733d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v4uhh9zp',
                  apiId: '3cde8699-95cd-479b-a242-38bde58ccc71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thorchr/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-v4uhh9zp.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
