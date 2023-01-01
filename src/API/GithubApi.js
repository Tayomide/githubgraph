export const getCommitGraph = async (user, year) => {
  const query = `
    query User($login: String!, $from: DateTime, $to: DateTime) {
      user(login: $login) {
        login
        contributionsCollection(from: $from, to: $to){
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
              }
            }
          }
        }
      }
    }
  `
  const variables = `
    {
      "login": "${user}",
      "from": "${year}-01-01T00:00:00.000Z",
      "to": "${year+1}-01-01T00:00:00.000Z"
    }
  `

  const Authorization = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`

  const body = {
    query,
    variables
  }
  return fetch('https://api.github.com/graphql', {method: "POST", body: JSON.stringify(body), headers: {
    "Authorization": Authorization
  }
  })
}