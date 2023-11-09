import {Component} from 'react'

import RepoComponentItem from '../RepoComponentItem'

class Folder extends Component {
  state = {
    isLoading: true,
    reposList: [],
  }

  componentDidMount() {
    this.getReposList()
  }

  getReposList = async () => {
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
    const response = await fetch(url)
    const data = await response.json()
    const {items} = data
    console.log(items)
    console.log(data)
    const updatedData = items.map(eachResource => ({
      owner: eachResource.owner,
      name: eachResource.name,
      description: eachResource.description,
      stargazersCount: eachResource.stargazers_count,
      pushedAt: eachResource.pushed_at,
      issuesCount: eachResource.open_issues_count,
    }))
    console.log(updatedData)

    this.setState({isLoading: false, reposList: updatedData})
  }

  getLoadingText = () => (
    <div className="get-loading-text">
      <h1>Loading </h1>
    </div>
  )

  render() {
    const {isLoading, reposList} = this.state
    return (
      <div className="main-starred-container">
        <h1>Most Starred Repos</h1>
        {isLoading
          ? this.getLoadingText()
          : reposList.map(eachRepo => (
              <RepoComponentItem repoDetails={eachRepo} />
            ))}
      </div>
    )
  }
}

export default Folder
