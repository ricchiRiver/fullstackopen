const Notification = ({ message, color }) => {
    if (message === null) {
      return null
    }
    const notificationStyle = {
        color: color,
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        whiteSpace: "pre-wrap"
    }
  
    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }

export default Notification