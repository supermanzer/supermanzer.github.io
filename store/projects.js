export const state = () => ({
  all: [
    {
      id: 'todo-cla',
      api_url: 'https://api.github.com/repos/supermanzer/todo-cla',
      readme_url:
        'https://raw.githubusercontent.com/supermanzer/todo-cla/master/README.md',
    },
    // {
    //   id: 'buoy-reader',
    //   title: 'NDBC Data Reader',
    //   summary: `A Python package to automate the gathering and organizing of NDBC standard meteorological data.`,
    //   content: `I conceived of, and initially built, this project as part of my thesis research for my M.Sc.
    //         Originally written in MATLAB, it seeks to automate the collection of standard meterological data from NDBC data buoys for any given span of time.
    //         The current implementation is in Python and it loads the data into a pandas dataframe to ensure it is suitable for analysis afterwards.`,
    // },
    // {
    //   id: 'fetch-js',
    //   title: 'Fetch JS Module',
    //   summary: `A simple AJAX integration module written in vanilla JS using the Fetch API.`,
    //   content: `After seeing a lot of back and forth on the internet about whether to use tools like jQuery, axios,
    //    or vanilla JS I decided to try my hand at replacing jQeuy with my own vanilla JS module used to
    //    get/send/display data via asynchoronous requests.  I used the native Fetch API and incorporated global event
    //    listening to allow to link these actions to html elements via class names and use of the data- DOMString object.`,
    // },
  ],
})
