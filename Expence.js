import React, { useState } from "react";

const Expense = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); 
    console.log("Title:", enterTitle);
    console.log("Amount:", enterAmount);
    console.log("Date:", enterDate);
    
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-control">
        <label>Title</label>
        <input type="text" 
        value={enterTitle} 
        onChange={titleChangeHandler} />
      </div>

      <div className="new-expense-control">
        <label>Amount</label>
        <input
          type="number"
          value={enterAmount}
          onChange={amountChangeHandler}/>
      </div>

      <div className="new-expense-control">
        <label>Date</label>
        <input type="date" 
        value={enterDate} 
        onChange={dateChangeHandler} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Expense;
