export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e42ebf4e1976101757aaec4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wed9intd',
                  apiId: '5e0b2972-df98-46ec-ad65-17f18b43da67'
                },
                {
                  buildHookId: '5e42ebf52adbd2017984e323',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rnct33rc',
                  apiId: '9734c631-af1f-4fb9-a9a1-ebb908f950e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinayvinu9876/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rnct33rc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
