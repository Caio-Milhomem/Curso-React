import PropTypes from 'prop-types'

function UserGreeting(props) {

    if (props.isLoggedIn) {
        return <h2 className="welcome-msg">Chega mais {props.userName}</h2>
    }
    return <h2 className="login-msg">Você não está logado campeão</h2>
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "meu nobre",
}

export default UserGreeting