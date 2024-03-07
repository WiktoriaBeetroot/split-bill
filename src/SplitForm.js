import { useState } from "react";
import { Button } from "./Button";

export const SplitForm = ({selectedFriend, handleSplitBill}) => {
  const [bill, setBill] = useState('');
  const [expenseUser, setExpenseUser] = useState('');
  const [payer, setPayer] = useState('user');
  const expenseFriend = Number(bill) ? Number(bill) - Number(expenseUser) : '';

  function handleSubmit(e) {
    e.preventDefault();

    if(!bill || !expenseFriend) return;
    handleSplitBill( payer === 'user' ? expenseFriend : -expenseUser)
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value</label>
      <input type="number" value={bill} onChange={(e) =>  Number(e.target.value) >=0 && setBill(e.target.value)}></input>

      <label>💁‍♂️ Your expenses</label>
      <input type="number" value={expenseUser} onChange={(e) =>  Number(e.target.value) >=0 && setExpenseUser(
            Number(e.target.value) > bill ? expenseUser : e.target.value
          )}></input>

      <label>👫 {selectedFriend.name}'s expenses</label>
      <input type="text" value={expenseFriend} disabled></input>

      <label>🧾 Who is playing the bill</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};
