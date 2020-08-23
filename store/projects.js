const state = () => ({
  // prettier-ignore
  all: [{
      id: 'todo-cla',
      title: 'TODO Catalog: Command Line Application',
      github_url: 'https://github.com/supermanzer/todo-cla',
      summary: 'A command line application that scans a code base and generates a TODO.md that logs all TOOO comments in project directory, written in Python',
      description: [{
        text: 'After working through many coding tutorials in Python, JavaScript, and HTML I had picked up the practice of creating TODO comments to highlight where I had left the state of my code and my intent for what should come next.  This has proved rather helpful in keeping track of what I thought was needed and whwere my code was going.  However, as my projects grew more modular and spread across more files, tracking down these comments was not always easy.',
        class: 'problem-statement'
      }, {
        text: 'After using the `os` module in Python and particularly the `os.walk()` method to traverse all files and subdirectories in a directory, it occurred to me that one could very easily write a program to scan all files in a directory for TODO comments, so that is what I did.  As with many projects, what started out laughably simple quickly got more complex as I realized what little tweaks would make it more functional.  However, I am pleased to have created something that does the job in just over 100 lines of code (including length doc strings and comments).',
        class: 'solution'
      }, {
        text: 'While many current IDEs have features to collect and catalog these comments, my goal with this project was to produce something that would be part of a public (or private) repository and work to improve collaboration.  I envisioned this being used by teams to communicate where one coder had to call it quits and where the next one to pick up the project could get started.  Also it would be useful if a solo developer had to walk away from a project for a while and wanted to pick it up again later, from a hosted repository.',
        class: 'goal'
      }]
    },
    // TODO: Replace with API calls once back-end set up
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
  ]
})

const getters = {
  getProject: (state) => (id) => {
    return state.all.find((project) => project.id === id)
  },
}

// prettier-ignore
export {
  state,
  getters
}
