import {Link} from 'react-router-dom'

import './index.css'

const RepoComponentItem = props => {
  const {repoDetails} = props
  const {owner, name, description, stargazersCount, pushedAt, issuesCount} =
    repoDetails
  const {avatar_url, login} = owner
  const avatarUrl = avatar_url
  return (
    <Link to={`/${login}/${name}`} className="link-styles-types">
      <div className="repo-item-item">
        <img src={avatarUrl} alt={name} className="avatar-url" />
        <div className="repo-bg-container">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="container-of-two">
          <div className="count-stargazers">
            <p>{stargazersCount}</p>
          </div>
          <div className="count-stargazers">
            <p>{issuesCount}</p>
          </div>
          <p>Last Published at {pushedAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default RepoComponentItem
