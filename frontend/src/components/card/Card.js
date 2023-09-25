// frontend/src/components/card/Card.js

// Card component to show user details
const Card = ({ user }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        width: '280px',
        boxShadow: '0 3px 10px 0 black',
        cursor: 'pointer',
        borderRadius: '4px',
        paddingBottom: '10px',
        margin: '10px',
      }}
    >
      <h3>Name: {user.name}</h3>
      <h3>Id: {user.id}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Children: {user.childrenCount}</h3>
    </div>
  );
};

export default Card;
