module.exports = {
  title: "Hello GulanAI",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `gulan.png` }]],
  dest: "./dist",
  base: "/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" }
    ],
    lastUpdated: 'Last Updated'
  },

  markdown: {
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

