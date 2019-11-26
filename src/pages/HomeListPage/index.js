import { connect } from 'react-redux'
import HomeListPage from './page'

const mapStateToProps = (state) => {
  return state.home
}

const mapDisaptchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDisaptchToProps)(HomeListPage)