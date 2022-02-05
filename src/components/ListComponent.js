import { render } from "@testing-library/react";

function ListComponent(props){
    return(
        <p>
        {props.people.map((person) => {
          return (
            <div>{person.name}</div>
          )
        })}
        </p>
    )
}
export default ListComponent;