const state = () => ({
  page: {
    title: 'About Me',
    avatar: '/images/supermanzer.jpeg',
    sections: [
      {
        heading: 'About the site name',
        image: '/images/about1.jpeg',
        text_sections: [
          {
            class: '',
            subheading: 'Why Supermanzer?',
            text:
              'Well my last name is Manzer and I have done the whole Clark Kent -> Superman costume for Halloween a few times.  Some of my friends called me Supermanzer and it kind of stuck in my head.',
          },
        ],
      },
      {
        heading: 'About Me',
        image: '/images/about2.jpeg',
        text_sections: [
          {
            class: '',
            text:
              'I got into coding due to my love of and education in marine sciences.  Specifically I took a course on Modeling Methods in Marine Sciences that taught how to construct mathematical models in `MATLAB` and after that I was hooked.  After seeing the lincensing costs (and almost not completing my thesis due to a licensing issue),  I decided open source was the way to go.  I continue to build tools in Python that automate some of the more tedious parts of the oceanographic data analyses that were my main focus for the final 2 years of grad school.',
          },
          {
            class: '',
            text:
              'I have also got into fullstack application development because, following that open source model, I think it is the easiest way to provide a user interface to some nifty application and there are so many great tools to work with (like Vue and Nuxt which I use to make this site).',
          },
        ],
      },
      {
        heading: 'Other Interests',
        image: 'about3.jpeg',
        text_sections: [
          {
            class: '',
            subheading: 'Data Systems',
            text:
              'I actually think properly designed data systems can help make information more transparent and widely available.  I enjoy designing data systems and databases that facilitate reporting and try to faithfully represent the physical and logcial concepts they seek to model.',
          },
        ],
      },
    ],
  },
})

// prettier-ignore
export {
  state
}
