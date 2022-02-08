

function ListComponent(props){
    return(
        <section>
        {props.people.map((person) => {
          return (
            <div key={person.id}>
              <h2>{person.name}</h2>
              <h3>{person.age}</h3>
              <img src={person.image}/>
            
            </div>
            
          )
        })}
        </section>
    )
}
export default ListComponent;