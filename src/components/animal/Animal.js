export const Animal = ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">{animal.breed}</div>
    <address className="location__address">
      <strong>Location: </strong>
      {location.name}
    </address>
    <div>
      <strong>Customer: </strong>
      {customer.name}
    </div>
  </section>
);