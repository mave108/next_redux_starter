import { connect } from 'react-redux'
import Clock from './clock'
import Counter from './counter'

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <h3>Kickstarter for Reactjs,Redux with server side rendering via Nextjs</h3>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

function mapStateToProps (state) {
  const { main:{ lastUpdate, light} } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
