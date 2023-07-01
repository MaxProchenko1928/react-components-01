import user from './user.json';
import Profile from './Profile.jsx';

const App=()=>{
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  )
}
export default App;