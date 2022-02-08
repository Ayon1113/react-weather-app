let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function MonthsDropDown(){
        return(
            <section>
                <label>Please select month</label>
                <select>
                    {
                        months.map((month, index)=> {
                            return (
                                <option key={index}>  
                                    {month}
                                </option>
                            )
                        })
                    }
                </select>

            </section>
        )
        
    }
        
    export default MonthsDropDown;

